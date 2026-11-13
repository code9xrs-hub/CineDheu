const COUNTRY_TO_LANG = {
  BD: "bn",
  IN: "hi",
  SA: "ar", AE: "ar", EG: "ar", QA: "ar", KW: "ar", OM: "ar", BH: "ar",
  MA: "ar", DZ: "ar", TN: "ar", JO: "ar", IQ: "ar", LB: "ar",
  ES: "es", MX: "es", AR: "es", CO: "es", CL: "es", PE: "es", VE: "es",
  FR: "fr", BE: "fr",
  DE: "de", AT: "de", CH: "de",
  BR: "pt", PT: "pt",
  ID: "id",
  TR: "tr",
};

const TRANSLATIONS = {
  en: {
    nav_features: "Features",
    nav_release: "Release Info",
    nav_install: "Install Guide",
    nav_support: "Support",
    nav_download: "Download APK",
    hero_title_1: "Cinema in Your Pocket.",
    hero_title_2: "Zero Accounts.",
    hero_subtitle:
      "CineDheu is a fast, native Android streaming and offline media app powered by Media3 ExoPlayer. Watch movies, series, and anime in crisp quality with Picture-in-Picture, multi-audio subtitles, and verified in-app updates.",
    hero_download: "Download CineDheu APK",
    hero_star_repo: "Star on GitHub",
    meta_version_label: "Version",
    meta_size_label: "APK Size",
    meta_req_label: "Requirement",
    meta_integrity_label: "Integrity",
    meta_integrity_val: "SHA-256 Verified",
    feat_eyebrow: "Built for Speed & Comfort",
    feat_heading: "Everything You Need for Seamless Streaming",
    feat_sub:
      "Designed with a dark liquid-glass UI that stays responsive, light on battery, and effortless to navigate.",
    feat1_title: "Theatre-Grade ExoPlayer",
    feat1_desc:
      "Always-landscape playback with 480p to 1080p stream switching, auto-play next episode, and hardware-accelerated decoding.",
    feat2_title: "Picture-in-Picture & Gestures",
    feat2_desc:
      "Minimize into a floating PiP window while browsing other apps, or swipe to adjust brightness, volume, and seek position.",
    feat3_title: "Offline Download Manager",
    feat3_desc:
      "Save movies and episodes for offline playback with live Android notification progress plus Pause, Resume, and Cancel controls.",
    feat4_title: "Rich Discovery & Watchlist",
    feat4_desc:
      "Auto-sliding hero spotlight, fast search, TMDb-enriched cast & ratings, Watchlist bookmarks, and Continue Watching sync.",
    feat5_title: "Verified OTA Updates",
    feat5_desc:
      "Built-in GitHub Releases updater with Stable & Beta channels, SHA-256 digest checks, and signing certificate validation.",
    feat6_title: "Privacy First, Zero Accounts",
    feat6_desc:
      "No sign-up walls, no personal tracking, and automatic offline-mode fallback when your internet connection drops.",
    rel_eyebrow: "Official GitHub Release",
    rel_download_btn: "Download Verified APK",
    inst_eyebrow: "Quick Setup",
    inst_heading: "Install in 3 Simple Steps",
    inst1_title: "Download the APK",
    inst1_desc:
      "Tap any Download button on this page to get the signed CineDheu-release.apk directly from GitHub Releases.",
    inst2_title: "Allow App Install",
    inst2_desc:
      "Open the downloaded file and allow Install unknown apps for your browser or file manager when Android prompts.",
    inst3_title: "Launch & Stream",
    inst3_desc:
      "Open CineDheu, explore the catalogue, and stay updated automatically from Settings → App Updates.",
    donate_eyebrow: "Support CineDheu",
    donate_heading: "Keep the Waves Rolling",
    donate_lead:
      "CineDheu is 100% free, ad-free, and built with passion. If the app makes your movie nights better, buy us a coffee—every small contribution helps power faster updates and keep the experience smooth.",
    donate_bkash_caption: "bKash / Bangla QR — Scan to Send Money",
    donate_binance_caption: "Binance Pay — Scan with Binance App",
    footer_tag: "• Native Android OTT Client",
  },
  bn: {
    nav_features: "ফিচারসমূহ",
    nav_release: "রিলিজ তথ্য",
    nav_install: "ইনস্টল গাইড",
    nav_support: "সাপোর্ট",
    nav_download: "APK ডাউনলোড",
    hero_title_1: "পকেটেই সিনেমা হল।",
    hero_title_2: "কোনো অ্যাকাউন্ট ছাড়াই।",
    hero_subtitle:
      "CineDheu হলো Media3 ExoPlayer চালিত একটি দ্রুত ও আধুনিক অ্যান্ড্রয়েড স্ট্রিমিং ও অফলাইন মিডিয়া অ্যাপ। মুভি, সিরিজ এবং অ্যানিমে দেখুন দারুণ কোয়ালিটিতে—PiP মোড, মাল্টি-অডিও, সাবটাইটেল ও ভেরিফায়েড আপডেটসহ।",
    hero_download: "CineDheu APK ডাউনলোড করুন",
    hero_star_repo: "GitHub-এ স্টার দিন",
    meta_version_label: "ভার্সন",
    meta_size_label: "APK সাইজ",
    meta_req_label: "অ্যান্ড্রয়েড",
    meta_integrity_label: "নিরাপত্তা",
    meta_integrity_val: "SHA-256 ভেরিফায়েড",
    feat_eyebrow: "গতি ও স্বাচ্ছন্দ্যের জন্য তৈরি",
    feat_heading: "নিরবচ্ছিন্ন স্ট্রিমিংয়ের সবকিছু একসাথে",
    feat_sub:
      "ডার্ক লিকুইড-গ্লাস ডিজাইনে তৈরি যা ফাস্ট, ব্যাটারি সাশ্রয়ী এবং ব্যবহারে অত্যন্ত সহজ।",
    feat1_title: "থিয়েটার-গ্রেড ExoPlayer",
    feat1_desc:
      "৪৮০পি থেকে ১০৮০পি স্ট্রিম সুইচিং, অটো-নেক্সট এপিসোড এবং হার্ডওয়্যার-অ্যাক্সিলারেটেড প্লেব্যাক।",
    feat2_title: "পিকচার-ইন-পিকচার ও জেসচার",
    feat2_desc:
      "অন্য অ্যাপ ব্যবহারের সময়ও ফ্লোটিং উইন্ডোতে দেখুন, অথবা সোয়াইপ করে ব্রাইটনেস, ভলিউম ও সিক নিয়ন্ত্রণ করুন।",
    feat3_title: "অফলাইন ডাউনলোড ম্যানেজার",
    feat3_desc:
      "অফলাইনে দেখার জন্য মুভি ও এপিসোড ডাউনলোড করুন—নোটিফিকেশন থেকেই পজ, রিজিউম ও ক্যান্সেল সুবিধা।",
    feat4_title: "স্মার্ট ডিসকভারি ও ওয়াচলিস্ট",
    feat4_desc:
      "অটো-স্লাইডিং হিরো স্পটলাইট, দ্রুত সার্চ, TMDb কাস্ট ও রেটিং, ওয়াচলিস্ট এবং কন্টিনিউ ওয়াচিং সিঙ্ক।",
    feat5_title: "ভেরিফায়েড OTA আপডেট",
    feat5_desc:
      "গিটহাব রিলিজ থেকে সরাসরি অ্যাপ আপডেট—SHA-256 ও সাইনিং সার্টিফিকেট ভেরিফিকেশনসহ।",
    feat6_title: "প্রাইভেসি ফার্স্ট, কোনো অ্যাকাউন্ট নেই",
    feat6_desc:
      "লগইন বা সাইন-আপের ঝামেলা নেই, কোনো ট্র্যাকিং নেই এবং ইন্টারনেট না থাকলে অটো অফলাইন মোড।",
    rel_eyebrow: "অফিশিয়াল গিটহাব রিলিজ",
    rel_download_btn: "ভেরিফায়েড APK ডাউনলোড করুন",
    inst_eyebrow: "সহজ সেটআপ",
    inst_heading: "মাত্র ৩ ধাপে ইনস্টল করুন",
    inst1_title: "APK ডাউনলোড করুন",
    inst1_desc:
      "যেকোনো ডাউনলোড বাটনে ট্যাপ করে সরাসরি গিটহাব রিলিজ থেকে CineDheu-release.apk ডাউনলোড করুন।",
    inst2_title: "ইনস্টল অনুমতি দিন",
    inst2_desc:
      "ডাউনলোড করা ফাইলে ট্যাপ করুন এবং প্রয়োজনে ব্রাউজার বা ফাইল ম্যানেজারের জন্য Install unknown apps চালু করুন।",
    inst3_title: "ওপেন করে উপভোগ করুন",
    inst3_desc:
      "CineDheu চালু করুন, পছন্দের কনটেন্ট দেখুন এবং Settings → App Updates থেকে আপডেট থাকুন।",
    donate_eyebrow: "CineDheu-কে সাপোর্ট করুন",
    donate_heading: "আমাদের সাথেই থাকুন",
    donate_lead:
      "CineDheu সম্পূর্ণ ফ্রি এবং বিজ্ঞাপনমুক্ত। অ্যাপটি আপনার ভালো লাগলে ছোট একটি অনুদান দিয়ে ডেভেলপমেন্ট ও সার্ভার চালু রাখতে সাহায্য করতে পারেন।",
    donate_bkash_caption: "বিকাশ / বাংলা QR — সেন্ড মানি করতে স্ক্যান করুন",
    donate_binance_caption: "Binance Pay — Binance অ্যাপ দিয়ে স্ক্যান করুন",
    footer_tag: "• নেটিভ অ্যান্ড্রয়েড OTT ক্লায়েন্ট",
  },
  hi: {
    nav_features: "फ़ीचर्स",
    nav_release: "रिलीज़ जानकारी",
    nav_install: "इंस्टॉल गाइड",
    nav_support: "सपोर्ट",
    nav_download: "APK डाउनलोड",
    hero_title_1: "सिनेमा आपकी जेब में।",
    hero_title_2: "बिना किसी अकाउंट के।",
    hero_subtitle:
      "CineDheu, Media3 ExoPlayer पर आधारित एक तेज़ और आधुनिक Android स्ट्रीमिंग व ऑफ़लाइन मीडिया ऐप है। PiP, मल्टी-ऑडियो, सबटाइटल और वेरिफ़ाइड अपडेट्स के साथ मूवीज़, सीरीज़ और एनीमे देखें।",
    hero_download: "CineDheu APK डाउनलोड करें",
    hero_star_repo: "GitHub पर स्टार दें",
    meta_version_label: "वर्ज़न",
    meta_size_label: "APK साइज़",
    meta_req_label: "एंड्रॉइड",
    meta_integrity_label: "सुरक्षा",
    meta_integrity_val: "SHA-256 वेरिफ़ाइड",
    feat_eyebrow: "स्पीड और आराम के लिए",
    feat_heading: "बेहतरीन स्ट्रीमिंग के लिए सब कुछ",
    feat_sub: "डार्क लिक्विड-ग्लास UI जो तेज़, बैटरी-फ़्रेंडली और उपयोग में बेहद आसान है।",
    feat1_title: "थिएटर-ग्रेड ExoPlayer",
    feat1_desc: "480p से 1080p स्विचिंग, ऑटो-नेक्स्ट एपिसोड और हार्डवेयर-एक्सेलरेटेड प्लेबैक।",
    feat2_title: "Picture-in-Picture और जेस्चर",
    feat2_desc: "अन्य ऐप्स के साथ फ़्लोटिंग विंडो में देखें, या स्वाइप से वॉल्यूम व ब्राइटनेस कंट्रोल करें।",
    feat3_title: "ऑफ़लाइन डाउनलोड मैनेजर",
    feat3_desc: "ऑफ़लाइन देखने के लिए मूवी और एपिसोड सेव करें, नोटिफ़िकेशन से Pause/Resume कंट्रोल के साथ।",
    feat4_title: "रिच डिस्कवरी और वॉचलिस्ट",
    feat4_desc: "तेज़ सर्च, TMDb कास्ट व रेटिंग, वॉचलिस्ट और Continue Watching सिंक।",
    feat5_title: "वेरिफ़ाइड OTA अपडेट्स",
    feat5_desc: "GitHub Releases से सीधे इन-ऐप अपडेट, SHA-256 और सिग्नेचर वेरिफ़िकेशन के साथ।",
    feat6_title: "प्राइवेसी फर्स्ट, ज़ीरो अकाउंट",
    feat6_desc: "कोई साइन-अप नहीं, कोई ट्रैकिंग नहीं और इंटरनेट जाने पर ऑटो ऑफ़लाइन मोड।",
    rel_eyebrow: "आधिकारिक GitHub रिलीज़",
    rel_download_btn: "वेरिफ़ाइड APK डाउनलोड करें",
    inst_eyebrow: "आसान सेटअप",
    inst_heading: "3 आसान स्टेप्स में इंस्टॉल करें",
    inst1_title: "APK डाउनलोड करें",
    inst1_desc: "GitHub Releases से सीधे CineDheu-release.apk डाउनलोड करने के लिए किसी भी डाउनलोड बटन पर टैप करें।",
    inst2_title: "इंस्टॉल की अनुमति दें",
    inst2_desc: "डाउनलोड की गई फ़ाइल खोलें और Android के पूछने पर Install unknown apps की अनुमति दें।",
    inst3_title: "लॉन्च करें और देखें",
    inst3_desc: "CineDheu खोलें, अपना पसंदीदा कंटेंट देखें और Settings → App Updates से अपडेट रहें।",
    donate_eyebrow: "CineDheu को सपोर्ट करें",
    donate_heading: "सफ़र जारी रखने में मदद करें",
    donate_lead: "CineDheu 100% फ़्री और विज्ञापन-मुक्त है। अगर आपको ऐप पसंद है, तो एक छोटा योगदान तेज़ अपडेट्स और सर्वर चलाने में मदद करता है।",
    donate_bkash_caption: "bKash / Bangla QR — स्कैन करके भेजें",
    donate_binance_caption: "Binance Pay — Binance ऐप से स्कैन करें",
    footer_tag: "• नेटिव Android OTT क्लाइंट",
  },
  ar: {
    nav_features: "المميزات",
    nav_release: "معلومات الإصدار",
    nav_install: "دليل التثبيت",
    nav_support: "الدعم",
    nav_download: "تحميل APK",
    hero_title_1: "السينما في جيبك.",
    hero_title_2: "بدون حسابات.",
    hero_subtitle:
      "CineDheu هو تطبيق بث وميديا أوفلاين سريع لأجهزة Android يعمل بمحرك Media3 ExoPlayer. شاهد الأفلام والمسلسلات والأنمي بجودة عالية مع نافذة PiP وترجمات متعددة.",
    hero_download: "تحميل CineDheu APK",
    hero_star_repo: "نجمة على GitHub",
    meta_version_label: "الإصدار",
    meta_size_label: "حجم APK",
    meta_req_label: "المتطلب",
    meta_integrity_label: "الأمان",
    meta_integrity_val: "موثق SHA-256",
    feat_eyebrow: "مصمم للسرعة والراحة",
    feat_heading: "كل ما تحتاجه لبث سلس وممتع",
    feat_sub: "واجهة زجاجية داكنة سريعة الاستجابة وخفيفة على البطارية وسهلة التنقل.",
    feat1_title: "مشغل ExoPlayer سينمائي",
    feat1_desc: "تشغيل أفقي سلس مع التبديل بين 480p و1080p وتشغيل الحلقة التالية تلقائياً.",
    feat2_title: "صورة داخل صورة وإيماءات ذكية",
    feat2_desc: "شاهد في نافذة عائمة أثناء تصفح التطبيقات الأخرى، وتحكم بالسطوع والصوت باللمس.",
    feat3_title: "مدير التحميل للمشاهدة أوفلاين",
    feat3_desc: "احفظ الأفلام والحلقات للمشاهدة بدون إنترنت مع تحكم كامل من الإشعارات.",
    feat4_title: "اكتشاف غني وقائمة مشاهدة",
    feat4_desc: "بحث سريع وتفاصيل TMDb وقائمة مفضلة ومزامنة متابعة المشاهدة.",
    feat5_title: "تحديثات OTA موثوقة",
    feat5_desc: "تحديثات مباشرة عبر GitHub Releases مع التحقق من SHA-256 والتوقيع.",
    feat6_title: "الخصوصية أولاً، بدون تسجيل",
    feat6_desc: "لا تسجيل دخول ولا تتبع، مع وضع أوفلاين تلقائي عند انقطاع الإنترنت.",
    rel_eyebrow: "إصدار GitHub الرسمي",
    rel_download_btn: "تحميل APK الموثق",
    inst_eyebrow: "إعداد سريع",
    inst_heading: "ثبّت التطبيق في 3 خطوات",
    inst1_title: "حمّل ملف APK",
    inst1_desc: "اضغط على أي زر تحميل للحصول على ملف CineDheu-release.apk مباشرة من GitHub.",
    inst2_title: "اسمح بالتثبيت",
    inst2_desc: "افتح الملف واسمح بخيار Install unknown apps للمتصفح أو مدير الملفات.",
    inst3_title: "شغّل واستمتع",
    inst3_desc: "افتح CineDheu وتصفح المكتبة، وابقَ محدثاً من الإعدادات ← تحديثات التطبيق.",
    donate_eyebrow: "ادعم CineDheu",
    donate_heading: "ساهم في استمرار التطبيق",
    donate_lead: "تطبيق CineDheu مجاني 100% وخالٍ من الإعلانات. مساهمتك البسيطة تساعدنا على تطوير التطبيق واستمرار الخوادم.",
    donate_bkash_caption: "bKash / Bangla QR — امسح للإرسال",
    donate_binance_caption: "Binance Pay — امسح عبر تطبيق Binance",
    footer_tag: "• تطبيق OTT أصلي لأندرويد",
  },
  es: {
    nav_features: "Funciones",
    nav_release: "Versión",
    nav_install: "Instalación",
    nav_support: "Apoyar",
    nav_download: "Descargar APK",
    hero_title_1: "Cine en tu Bolsillo.",
    hero_title_2: "Sin Cuentas.",
    hero_subtitle:
      "CineDheu es una app nativa de streaming y descargas offline para Android impulsada por Media3 ExoPlayer. Disfruta películas, series y anime con PiP, subtítulos y actualizaciones verificadas.",
    hero_download: "Descargar CineDheu APK",
    hero_star_repo: "Dar Estrella en GitHub",
    meta_version_label: "Versión",
    meta_size_label: "Tamaño APK",
    meta_req_label: "Requisito",
    meta_integrity_label: "Integridad",
    meta_integrity_val: "Verificado SHA-256",
    feat_eyebrow: "Diseñado para Velocidad",
    feat_heading: "Todo lo que Necesitas para Ver Sin Límites",
    feat_sub: "Interfaz oscura estilo cristal líquido, fluida, ligera en batería y fácil de usar.",
    feat1_title: "ExoPlayer Nivel Cine",
    feat1_desc: "Reproducción en horizontal con cambio de 480p a 1080p y siguiente episodio automático.",
    feat2_title: "Picture-in-Picture y Gestos",
    feat2_desc: "Minimiza en ventana flotante o desliza para ajustar brillo, volumen y avance.",
    feat3_title: "Gestor de Descargas Offline",
    feat3_desc: "Guarda películas y episodios para ver sin conexión con controles en la notificación.",
    feat4_title: "Descubrimiento y Mi Lista",
    feat4_desc: "Búsqueda rápida, fichas de TMDb, lista de favoritos y Continuar viendo.",
    feat5_title: "Actualizaciones OTA Verificadas",
    feat5_desc: "Actualizador integrado desde GitHub Releases con verificación SHA-256.",
    feat6_title: "Privacidad Primero",
    feat6_desc: "Sin registros, sin rastreo y modo sin conexión automático.",
    rel_eyebrow: "Lanzamiento Oficial en GitHub",
    rel_download_btn: "Descargar APK Verificado",
    inst_eyebrow: "Configuración Rápida",
    inst_heading: "Instala en 3 Simples Pasos",
    inst1_title: "Descarga el APK",
    inst1_desc: "Toca cualquier botón de descarga para obtener CineDheu-release.apk desde GitHub Releases.",
    inst2_title: "Permite la Instalación",
    inst2_desc: "Abre el archivo y permite Instalar aplicaciones desconocidas cuando Android lo solicite.",
    inst3_title: "Abre y Disfruta",
    inst3_desc: "Inicia CineDheu, explora el catálogo y mantente al día desde Ajustes → Actualizaciones.",
    donate_eyebrow: "Apoya a CineDheu",
    donate_heading: "Ayuda a Mantener el Proyecto",
    donate_lead: "CineDheu es 100% gratis y sin anuncios. Si disfrutas la app, cualquier pequeño aporte ayuda a mantener actualizaciones rápidas.",
    donate_bkash_caption: "bKash / Bangla QR — Escanea para enviar",
    donate_binance_caption: "Binance Pay — Escanea con la app de Binance",
    footer_tag: "• Cliente OTT Nativo para Android",
  },
  fr: {
    nav_features: "Fonctionnalités",
    nav_release: "Version",
    nav_install: "Installation",
    nav_support: "Soutenir",
    nav_download: "Télécharger APK",
    hero_title_1: "Le Cinéma en Poche.",
    hero_title_2: "Zéro Compte.",
    hero_subtitle:
      "CineDheu est une application Android rapide de streaming et de lecture hors ligne propulsée par Media3 ExoPlayer. Regardez films, séries et animés en haute qualité avec PiP et sous-titres.",
    hero_download: "Télécharger CineDheu APK",
    hero_star_repo: "Mettre une Étoile",
    meta_version_label: "Version",
    meta_size_label: "Taille APK",
    meta_req_label: "Prérequis",
    meta_integrity_label: "Intégrité",
    meta_integrity_val: "Vérifié SHA-256",
    feat_eyebrow: "Conçu pour la Fluidité",
    feat_heading: "Tout pour un Streaming Sans Accroc",
    feat_sub: "Une interface sombre en verre liquide réactive, économe en batterie et intuitive.",
    feat1_title: "ExoPlayer Qualité Cinéma",
    feat1_desc: "Lecture paysage avec qualité 480p à 1080p et enchaînement automatique des épisodes.",
    feat2_title: "Picture-in-Picture & Gestes",
    feat2_desc: "Réduisez en fenêtre flottante ou glissez pour régler luminosité et volume.",
    feat3_title: "Gestionnaire Hors Ligne",
    feat3_desc: "Téléchargez films et épisodes avec contrôle Pause/Reprendre depuis les notifications.",
    feat4_title: "Découverte & Liste de Suivi",
    feat4_desc: "Recherche rapide, fiches TMDb, favoris et reprise de lecture.",
    feat5_title: "Mises à Jour OTA Vérifiées",
    feat5_desc: "Mises à jour intégrées via GitHub Releases avec vérification SHA-256.",
    feat6_title: "Confidentialité Totale",
    feat6_desc: "Sans inscription, sans suivi et bascule automatique hors ligne.",
    rel_eyebrow: "Publication Officielle GitHub",
    rel_download_btn: "Télécharger l'APK Vérifié",
    inst_eyebrow: "Installation Rapide",
    inst_heading: "Installez en 3 Étapes Simples",
    inst1_title: "Téléchargez l'APK",
    inst1_desc: "Appuyez sur un bouton de téléchargement pour obtenir CineDheu-release.apk.",
    inst2_title: "Autorisez l'Installation",
    inst2_desc: "Ouvrez le fichier et autorisez l'installation d'applications inconnues si demandé.",
    inst3_title: "Lancez et Regardez",
    inst3_desc: "Ouvrez CineDheu et gardez l'app à jour depuis Paramètres → Mises à jour.",
    donate_eyebrow: "Soutenir CineDheu",
    donate_heading: "Gardez les Vagues en Mouvement",
    donate_lead: "CineDheu est 100% gratuit et sans publicité. Un petit don aide à financer les serveurs et les mises à jour.",
    donate_bkash_caption: "bKash / Bangla QR — Scanner pour envoyer",
    donate_binance_caption: "Binance Pay — Scanner avec l'app Binance",
    footer_tag: "• Client OTT Android Natif",
  },
  de: {
    nav_features: "Funktionen",
    nav_release: "Release-Info",
    nav_install: "Installation",
    nav_support: "Unterstützen",
    nav_download: "APK Laden",
    hero_title_1: "Kino in Deiner Tasche.",
    hero_title_2: "Ohne Konto.",
    hero_subtitle:
      "CineDheu ist eine schnelle Android-Streaming- und Offline-App mit Media3 ExoPlayer. Filme, Serien und Anime in klarer Qualität mit PiP, Untertiteln und geprüften Updates.",
    hero_download: "CineDheu APK Herunterladen",
    hero_star_repo: "Auf GitHub Bewerten",
    meta_version_label: "Version",
    meta_size_label: "APK-Größe",
    meta_req_label: "System",
    meta_integrity_label: "Integrität",
    meta_integrity_val: "SHA-256 Geprüft",
    feat_eyebrow: "Für Tempo & Komfort",
    feat_heading: "Alles für Nahtloses Streaming",
    feat_sub: "Dunkles Liquid-Glass-Design, reaktionsschnell, akkuschonend und intuitiv.",
    feat1_title: "ExoPlayer in Kinoqualität",
    feat1_desc: "Querformat-Wiedergabe mit 480p–1080p-Wechsel und Auto-Next-Episode.",
    feat2_title: "Bild-in-Bild & Gesten",
    feat2_desc: "Im schwebenden PiP-Fenster weiterschauen oder per Wisch Helligkeit & Ton steuern.",
    feat3_title: "Offline-Download-Manager",
    feat3_desc: "Filme und Folgen offline speichern mit Pause/Fortsetzen direkt in der Benachrichtigung.",
    feat4_title: "Entdecken & Watchlist",
    feat4_desc: "Schnelle Suche, TMDb-Daten, Watchlist-Lesezeichen und Weiterschauen.",
    feat5_title: "Verifizierte OTA-Updates",
    feat5_desc: "Integrierter GitHub-Releases-Updater mit SHA-256-Prüfung.",
    feat6_title: "Datenschutz Zuerst",
    feat6_desc: "Kein Login, kein Tracking und automatischer Offline-Modus.",
    rel_eyebrow: "Offizielles GitHub-Release",
    rel_download_btn: "Verifizierte APK Laden",
    inst_eyebrow: "Schnelle Einrichtung",
    inst_heading: "In 3 Einfachen Schritten Installieren",
    inst1_title: "APK Herunterladen",
    inst1_desc: "Tippe auf einen Download-Button, um CineDheu-release.apk zu laden.",
    inst2_title: "Installation Erlauben",
    inst2_desc: "Öffne die Datei und erlaube bei Bedarf unbekannte Apps.",
    inst3_title: "Starten & Streamen",
    inst3_desc: "Öffne CineDheu und bleibe über Einstellungen → App-Updates aktuell.",
    donate_eyebrow: "CineDheu Unterstützen",
    donate_heading: "Hilf Uns Weiterzuwachsen",
    donate_lead: "CineDheu ist 100% kostenlos und werbefrei. Jeder kleine Beitrag hilft bei schnellen Updates.",
    donate_bkash_caption: "bKash / Bangla QR — Scannen zum Senden",
    donate_binance_caption: "Binance Pay — Mit Binance App scannen",
    footer_tag: "• Nativer Android OTT Client",
  },
  pt: {
    nav_features: "Recursos",
    nav_release: "Versão",
    nav_install: "Instalação",
    nav_support: "Apoiar",
    nav_download: "Baixar APK",
    hero_title_1: "Cinema no Seu Bolso.",
    hero_title_2: "Zero Contas.",
    hero_subtitle:
      "CineDheu é um app Android rápido de streaming e mídia offline com Media3 ExoPlayer. Assista filmes, séries e animes com PiP, legendas e atualizações verificadas.",
    hero_download: "Baixar CineDheu APK",
    hero_star_repo: "Dar Estrela no GitHub",
    meta_version_label: "Versão",
    meta_size_label: "Tamanho APK",
    meta_req_label: "Requisito",
    meta_integrity_label: "Integridade",
    meta_integrity_val: "SHA-256 Verificado",
    feat_eyebrow: "Feito para Velocidade",
    feat_heading: "Tudo para Streaming Sem Limites",
    feat_sub: "Interface escura em vidro líquido, leve na bateria e fácil de navegar.",
    feat1_title: "ExoPlayer Nível Cinema",
    feat1_desc: "Reprodução em paisagem com 480p a 1080p e próximo episódio automático.",
    feat2_title: "Picture-in-Picture e Gestos",
    feat2_desc: "Assista em janela flutuante ou deslize para brilho, volume e avanço.",
    feat3_title: "Gerenciador Offline",
    feat3_desc: "Baixe filmes e episódios com controles de Pausar e Retomar na notificação.",
    feat4_title: "Descoberta e Lista",
    feat4_desc: "Busca rápida, detalhes do TMDb, Watchlist e Continuar Assistindo.",
    feat5_title: "Atualizações OTA Verificadas",
    feat5_desc: "Atualizador integrado via GitHub Releases com checagem SHA-256.",
    feat6_title: "Privacidade em Primeiro Lugar",
    feat6_desc: "Sem login, sem rastreamento e modo offline automático.",
    rel_eyebrow: "Lançamento Oficial no GitHub",
    rel_download_btn: "Baixar APK Verificado",
    inst_eyebrow: "Configuração Rápida",
    inst_heading: "Instale em 3 Passos Simples",
    inst1_title: "Baixe o APK",
    inst1_desc: "Toque em qualquer botão de download para obter CineDheu-release.apk.",
    inst2_title: "Permita a Instalação",
    inst2_desc: "Abra o arquivo e permita Fontes desconhecidas quando o Android solicitar.",
    inst3_title: "Abra e Assista",
    inst3_desc: "Inicie o CineDheu e mantenha-o atualizado em Configurações → Atualizações.",
    donate_eyebrow: "Apoie o CineDheu",
    donate_heading: "Mantenha as Ondas Rolando",
    donate_lead: "CineDheu é 100% gratuito e sem anúncios. Qualquer pequena contribuição ajuda a manter atualizações rápidas.",
    donate_bkash_caption: "bKash / Bangla QR — Escaneie para enviar",
    donate_binance_caption: "Binance Pay — Escaneie com o app Binance",
    footer_tag: "• Cliente OTT Nativo Android",
  },
  id: {
    nav_features: "Fitur",
    nav_release: "Info Rilis",
    nav_install: "Cara Pasang",
    nav_support: "Dukungan",
    nav_download: "Unduh APK",
    hero_title_1: "Bioskop di Saku Anda.",
    hero_title_2: "Tanpa Akun.",
    hero_subtitle:
      "CineDheu adalah aplikasi streaming dan media offline Android yang cepat dengan Media3 ExoPlayer. Tonton film, serial, dan anime dengan PiP, subtitle multi-audio, dan update terverifikasi.",
    hero_download: "Unduh CineDheu APK",
    hero_star_repo: "Beri Bintang di GitHub",
    meta_version_label: "Versi",
    meta_size_label: "Ukuran APK",
    meta_req_label: "Minimal",
    meta_integrity_label: "Keamanan",
    meta_integrity_val: "Terverifikasi SHA-256",
    feat_eyebrow: "Cepat & Nyaman",
    feat_heading: "Semua yang Anda Butuhkan untuk Streaming Lancar",
    feat_sub: "Antarmuka liquid-glass gelap yang responsif, hemat baterai, dan mudah digunakan.",
    feat1_title: "ExoPlayer Kualitas Bioskop",
    feat1_desc: "Pemutaran lanskap dengan pilihan 480p hingga 1080p dan putar otomatis episode berikutnya.",
    feat2_title: "Picture-in-Picture & Gestur",
    feat2_desc: "Tonton dalam jendela mengambang atau geser untuk atur kecerahan dan volume.",
    feat3_title: "Manajer Unduhan Offline",
    feat3_desc: "Simpan film dan episode untuk ditonton offline dengan kontrol langsung dari notifikasi.",
    feat4_title: "Pencarian & Daftar Tontonan",
    feat4_desc: "Pencarian cepat, info TMDb, Watchlist, dan sinkronisasi Lanjutkan Menonton.",
    feat5_title: "Update OTA Terverifikasi",
    feat5_desc: "Pembaruan bawaan dari GitHub Releases dengan verifikasi SHA-256.",
    feat6_title: "Privasi Utama, Tanpa Akun",
    feat6_desc: "Tanpa login, tanpa pelacakan, dan mode offline otomatis saat koneksi terputus.",
    rel_eyebrow: "Rilis Resmi GitHub",
    rel_download_btn: "Unduh APK Terverifikasi",
    inst_eyebrow: "Pemasangan Cepat",
    inst_heading: "Pasang dalam 3 Langkah Mudah",
    inst1_title: "Unduh APK",
    inst1_desc: "Ketuk tombol Unduh mana saja untuk mendapatkan CineDheu-release.apk dari GitHub.",
    inst2_title: "Izinkan Pemasangan",
    inst2_desc: "Buka file dan izinkan Instal aplikasi tidak dikenal saat diminta Android.",
    inst3_title: "Buka & Streaming",
    inst3_desc: "Jalankan CineDheu dan perbarui otomatis melalui Pengaturan → Pembaruan Aplikasi.",
    donate_eyebrow: "Dukung CineDheu",
    donate_heading: "Bantu Kami Terus Berkembang",
    donate_lead: "CineDheu 100% gratis dan bebas iklan. Kontribusi kecil Anda membantu pembaruan lebih cepat dan menjaga server tetap lancar.",
    donate_bkash_caption: "bKash / Bangla QR — Pindai untuk kirim",
    donate_binance_caption: "Binance Pay — Pindai dengan aplikasi Binance",
    footer_tag: "• Klien OTT Android Asli",
  },
  tr: {
    nav_features: "Özellikler",
    nav_release: "Sürüm Bilgisi",
    nav_install: "Kurulum",
    nav_support: "Destek",
    nav_download: "APK İndir",
    hero_title_1: "Sinema Cebinizde.",
    hero_title_2: "Hesapsız.",
    hero_subtitle:
      "CineDheu, Media3 ExoPlayer destekli hızlı bir Android yayın ve çevrimdışı medya uygulamasıdır. PiP, çoklu ses, altyazı ve doğrulanmış güncellemelerle film, dizi ve anime izleyin.",
    hero_download: "CineDheu APK İndir",
    hero_star_repo: "GitHub'da Yıldızla",
    meta_version_label: "Sürüm",
    meta_size_label: "APK Boyutu",
    meta_req_label: "Gereksinim",
    meta_integrity_label: "Güvenlik",
    meta_integrity_val: "SHA-256 Doğrulandı",
    feat_eyebrow: "Hız ve Konfor İçin",
    feat_heading: "Kesintisiz İzleme İçin Her Şey",
    feat_sub: "Pil dostu, akıcı ve kolay kullanımlı koyu sıvı-cam arayüz.",
    feat1_title: "Sinema Kalitesinde ExoPlayer",
    feat1_desc: "480p–1080p kalite geçişi ve otomatik sonraki bölüm oynatma.",
    feat2_title: "Picture-in-Picture ve Hareketler",
    feat2_desc: "Diğer uygulamalarda gezinirken yüzen pencerede izleyin veya kaydırarak ses ve parlaklığı ayarlayın.",
    feat3_title: "Çevrimdışı İndirme Yöneticisi",
    feat3_desc: "Bildirim üzerinden Duraklat/Devam Et kontrolleriyle film ve bölümleri çevrimdışı kaydedin.",
    feat4_title: "Keşif ve İzleme Listesi",
    feat4_desc: "Hızlı arama, TMDb bilgileri, İzleme Listesi ve İzlemeye Devam Et.",
    feat5_title: "Doğrulanmış OTA Güncellemeleri",
    feat5_desc: "SHA-256 doğrulamalı dahili GitHub Releases güncelleyici.",
    feat6_title: "Önce Gizlilik, Hesap Yok",
    feat6_desc: "Kayıt yok, takip yok ve internet kesildiğinde otomatik çevrimdışı mod.",
    rel_eyebrow: "Resmi GitHub Sürümü",
    rel_download_btn: "Doğrulanmış APK İndir",
    inst_eyebrow: "Hızlı Kurulum",
    inst_heading: "3 Basit Adımda Kurun",
    inst1_title: "APK'yı İndirin",
    inst1_desc: "GitHub Releases üzerinden CineDheu-release.apk dosyasını indirmek için herhangi bir indirme düğmesine dokunun.",
    inst2_title: "Kuruluma İzin Verin",
    inst2_desc: "Dosyayı açın ve Android istediğinde Bilinmeyen uygulamalara izin verin.",
    inst3_title: "Başlatın ve İzleyin",
    inst3_desc: "CineDheu'yu açın ve Ayarlar → Uygulama Güncellemeleri ile güncel kalın.",
    donate_eyebrow: "CineDheu'yu Destekle",
    donate_heading: "Dalgaları Canlı Tutun",
    donate_lead: "CineDheu %100 ücretsiz ve reklamsızdır. Küçük bir destek daha hızlı güncellemelere ve sunucu giderlerine yardımcı olur.",
    donate_bkash_caption: "bKash / Bangla QR — Göndermek için tarayın",
    donate_binance_caption: "Binance Pay — Binance uygulamasıyla tarayın",
    footer_tag: "• Yerel Android OTT İstemcisi",
  },
};

function applyLanguage(lang) {
  const code = TRANSLATIONS[lang] ? lang : "en";
  const dict = TRANSLATIONS[code];

  document.documentElement.lang = code;
  document.documentElement.dir = code === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key && dict[key]) {
      el.textContent = dict[key];
    }
  });

  const selector = document.getElementById("lang-select");
  if (selector && selector.value !== code) {
    selector.value = code;
  }
}

function detectBrowserLanguage() {
  const langs = navigator.languages || [navigator.language || "en"];
  for (const item of langs) {
    const short = String(item).toLowerCase().split("-")[0];
    if (TRANSLATIONS[short]) return short;
  }
  return "en";
}

async function detectCountryLanguage() {
  const saved = localStorage.getItem("cinedheu_lang");
  if (saved && TRANSLATIONS[saved]) {
    applyLanguage(saved);
    return;
  }

  const cachedCountry = sessionStorage.getItem("cinedheu_country");
  if (cachedCountry && COUNTRY_TO_LANG[cachedCountry]) {
    applyLanguage(COUNTRY_TO_LANG[cachedCountry]);
    return;
  }

  // Apply browser locale immediately so there is zero flash of untranslated text
  applyLanguage(detectBrowserLanguage());

  // Refine using visitor country IP lookup with a short timeout
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 1800);
  try {
    const res = await fetch("https://api.country.is/", { signal: controller.signal });
    clearTimeout(timer);
    if (!res.ok) return;
    const data = await res.json();
    const country = String(data?.country || "").toUpperCase();
    if (country) {
      sessionStorage.setItem("cinedheu_country", country);
      const mapped = COUNTRY_TO_LANG[country] || "en";
      applyLanguage(mapped);
    }
  } catch (_) {
    clearTimeout(timer);
  }
}

document.getElementById("lang-select")?.addEventListener("change", (event) => {
  const chosen = event.target.value;
  localStorage.setItem("cinedheu_lang", chosen);
  applyLanguage(chosen);
});

detectCountryLanguage();

