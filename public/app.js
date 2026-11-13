const GITHUB_OWNER = "code9xrs-hub";
const GITHUB_REPO = "CineDheu";
const LATEST_RELEASE_API = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/releases/latest`;
const FALLBACK_DOWNLOAD_URL = `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/releases/latest/download/app-release.apk`;

function formatBytes(bytes) {
  if (!bytes || bytes <= 0) return "~3.3 MB";
  const mb = bytes / (1024 * 1024);
  return mb >= 1024 ? `${(mb / 1024).toFixed(2)} GB` : `${mb.toFixed(2)} MB`;
}

function formatDate(isoString) {
  if (!isoString) return "Published on GitHub Releases";
  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) return "Published on GitHub Releases";
  return `Released ${date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  })}`;
}

function setDownloadHref(url) {
  const ids = ["nav-download-btn", "hero-download-btn", "panel-download-btn"];
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.setAttribute("href", url);
  });
}

async function loadLatestRelease() {
  const shaEl = document.getElementById("release-sha");
  try {
    const res = await fetch(LATEST_RELEASE_API, {
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const release = await res.json();

    const tag = release.tag_name || "v1.0.0";
    const assets = Array.isArray(release.assets) ? release.assets : [];
    const apkAsset =
      assets.find((a) => a.name === "app-release.apk") ||
      assets.find((a) => a.name && a.name.endsWith(".apk"));

    const downloadUrl = apkAsset?.browser_download_url || FALLBACK_DOWNLOAD_URL;
    setDownloadHref(downloadUrl);

    const versionPill = document.getElementById("hero-version-pill");
    if (versionPill) versionPill.textContent = `Latest ${tag} • Android 8.0+`;

    const metaVersion = document.getElementById("meta-version");
    if (metaVersion) metaVersion.textContent = tag;

    const metaSize = document.getElementById("meta-size");
    if (metaSize && apkAsset?.size) metaSize.textContent = formatBytes(apkAsset.size);

    const releaseTitle = document.getElementById("release-title");
    if (releaseTitle) releaseTitle.textContent = release.name || `CineDheu ${tag}`;

    const releaseDate = document.getElementById("release-date");
    if (releaseDate) releaseDate.textContent = formatDate(release.published_at);

    if (release.body) {
      const notesList = document.getElementById("release-notes");
      const lines = release.body
        .split(/\r?\n/)
        .map((line) => line.replace(/^[-*]\s*/, "").trim())
        .filter((line) => line.length > 0 && !line.startsWith("#"));
      if (notesList && lines.length > 0) {
        notesList.innerHTML = "";
        lines.slice(0, 6).forEach((line) => {
          const li = document.createElement("li");
          li.textContent = line;
          notesList.appendChild(li);
        });
      }
    }

    const digest = apkAsset?.digest?.replace(/^sha256:/i, "");
    if (shaEl) {
      shaEl.textContent = digest || "Available in app-release.apk.sha256 on GitHub Releases";
    }
  } catch (_) {
    setDownloadHref(FALLBACK_DOWNLOAD_URL);
    if (shaEl) {
      shaEl.textContent = "See app-release.apk.sha256 on GitHub Releases";
    }
  }
}

document.getElementById("copy-sha-btn")?.addEventListener("click", async (event) => {
  const shaText = document.getElementById("release-sha")?.textContent?.trim();
  if (!shaText) return;
  try {
    await navigator.clipboard.writeText(shaText);
    const btn = event.currentTarget;
    btn.textContent = "Copied";
    setTimeout(() => {
      btn.textContent = "Copy";
    }, 1800);
  } catch (_) {
    // Clipboard unavailable
  }
});

loadLatestRelease();

