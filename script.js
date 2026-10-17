// नंदकुमार फेटेवाले - script.js
let currentLang = 'mr';
let currentCategory = 'all';

// मराठी, हिंदी, इंग्रजी आणि तेलुगू (Telugu) डिक्शनरी
const i18n = {
  mr: {
    shopTitle: "नंदकुमार फेटेवाले",
    tagline: "शाही व पारंपारिक फेटे आणि नवरदेव स्पेशल मेकअप",
    owner: "प्रो.प्रा. गायकवाड | 📍 घोडा, ता. कळमनुरी, जि. हिंगोली",
    heroTitle: "लग्नसराई, सण-उत्सव आणि शुभकार्यासाठी फेटे उपलब्ध!",
    heroSub: "नवरदेवाचा स्पेशल मेकअप व फेटा प्रत्यक्ष जागेवर येऊन बांधून मिळेल.",
    heroBtn: "आमची उत्पादने पहा",
    productsTitle: "आमचे खास फेटे",
    filterAll: "सर्व फेटे (All)",
    filterGroom: "नवरदेव फेटा",
    filterGuest: "पुढारी / वऱ्हाडी फेटा",
    pkgMainTitle: "स्पेशल लग्न पॅकेजेस (Wedding Packages)",
    pkg1Title: "नवरदेव रॉयल पॅकेज",
    pkg1Desc: "शाही डिझायनर फेटा + मॅचिंग उपरणे + कलगी व तुरा + नवरदेव स्पेशल प्रोफेशनल मेकअप.",
    pkg2Title: "वऱ्हाडी / पुढारी पॅकेज",
    pkg2Desc: "लग्न किंवा सत्कार समारंभासाठी ५० ते ५००+ व्हीआयपी पुढारी फेटे लग्नाच्या जागेवर येऊन बांधून मिळतील.",
    pkg3Title: "नवरदेव मेकअप सर्विस",
    pkg3Desc: "हळद, लग्न आणि रिसेप्शनसाठी नवरदेवाचा एचडी (HD) व नॅचरल मेकअप प्रत्यक्ष मंडपात येऊन केला जाईल.",
    whyMainTitle: "आमची वैशिष्ट्ये (Why Choose Us?)",
    why1Title: "थेट मंडपात सेवा",
    why1Desc: "हिंगोली, नांदेड, परभणी व आसपासच्या परिसरात लग्नाच्या ठिकाणी वेळेवर येऊन फेटे बांधून मिळतील.",
    why2Title: "प्रिमियम व स्वच्छ कापड",
    why2Desc: "उच्च दर्जाचे वेलव्हेट, पैठणी सिल्क, ब्रोकेड कापड आणि आकर्षक पारंपरिक ब्रोच व तुऱ्यांचा वापर.",
    why3Title: "योग्य आणि परवडणारे दर",
    why3Desc: "किरकोळ आणि घाऊक ऑर्डरसाठी अत्यंत माफक दर व अनुभवी कारागिरांकडून जलद सेवा.",
    bookMainTitle: "झटपट बुकिंग / चौकशी करा",
    lblName: "तुमचे नाव (Your Name):",
    lblVillage: "गाव / ठिकाण (Village / City):",
    lblDate: "कार्यक्रमाची तारीख (Event Date):",
    lblService: "कशासाठी ऑर्डर करायची आहे?",
    opt1: "नवरदेव फेटा व मेकअप",
    opt2: "फक्त नवरदेव फेटा",
    opt3: "वऱ्हाडी / पुढारी फेटे (एकत्रित ऑर्डर)",
    opt4: "नवरदेव + वऱ्हाडी फेटे पूर्ण पॅकेज",
    lblQty: "अंदाजे किती फेटे हवे आहेत?",
    bookSubmitBtn: "WhatsApp वर बुकिंग पाठवा",
    contactTitle: "संपर्क केंद्र",
    address: '<i class="fas fa-map-marker-alt"></i> पत्ता: घोडा, ता. कळमनुरी, जि. हिंगोली',
    phoneLabel: "संपर्क:",
    waBtn: "WhatsApp वर संपर्क करा",
    mapBtn: "Google Map वर पत्ता पहा",
    copy: "© २०२६ नंदकुमार फेटेवाले. सर्व हक्क राखीव."
  },
  hi: {
    shopTitle: "नंदकुमार फेंटेवाले",
    tagline: "शाही और पारंपरिक फेंटे तथा दूल्हा स्पेशल मेकअप",
    owner: "प्रो. गायकवाड़ | 📍 घोडा, ता. कळमनुरी, जि. हिंगोली",
    heroTitle: "शादी-ब्याह, त्योहारों और शुभ अवसरों के लिए फेंटे उपलब्ध!",
    heroSub: "दूल्हे का स्पेशल मेकअप और फेंटा मौके पर आकर बांधकर मिलेगा।",
    heroBtn: "हमारे उत्पाद देखें",
    productsTitle: "हमारे खास फेंटे",
    filterAll: "सभी फेंटे (All)",
    filterGroom: "दूल्हा स्पेशल फेंटा",
    filterGuest: "बाराती / मेहमान फेंटा",
    contactTitle: "संपर्क केंद्र",
    address: '<i class="fas fa-map-marker-alt"></i> पता: घोडा, ता. कळमनुरी, जि. हिंगोली',
    phoneLabel: "संपर्क:",
    waBtn: "WhatsApp पर संपर्क करें",
    copy: "© २०२६ नंदकुमार फेंटेवाले। सर्वाधिकार सुरक्षित।"
  },
  en: {
    shopTitle: "Nandkumar Fetewale",
    tagline: "Royal & Traditional Turbans | Groom Special Makeup",
    owner: "Prop. Gaikwad | 📍 Ghoda, Tal. Kalamnuri, Dist. Hingoli",
    heroTitle: "Turbans (Fetas) Available for Weddings & Special Occasions!",
    heroSub: "Special groom makeup and on-site turban tying service available.",
    heroBtn: "View Our Products",
    productsTitle: "Our Exclusive Fetas",
    filterAll: "All Turbans",
    filterGroom: "Groom Special Feta",
    filterGuest: "VIP / Guest Feta",
    contactTitle: "Contact Us",
    address: '<i class="fas fa-map-marker-alt"></i> Address: Ghoda, Tal. Kalamnuri, Dist. Hingoli',
    phoneLabel: "Contact:",
    waBtn: "Contact on WhatsApp",
    copy: "© 2026 Nandkumar Fetewale. All rights reserved."
  },
  te: {
    shopTitle: "నందకుమార్ ఫేటేవాలే",
    tagline: "రాచరిక & సంప్రదాయ ఫేటాలు మరియు పెళ్లికొడుకు స్పెషల్ మేకప్",
    owner: "ప్రొ. గాయక్వాడ్ | 📍 ఘోడా, తా. కలమ్నూరి, జి. హింగోలి",
    heroTitle: "వివాహాలు, పండుగలు మరియు శుభకార్యాల కోసం ఫేటాలు లభించును!",
    heroSub: "పెళ్లికొడుకు స్పెషల్ మేకప్ మరియు ఫేటా నేరుగా వేదిక వద్దకే వచ్చి కట్టబడును.",
    heroBtn: "మా ఉత్పత్తులను చూడండి",
    productsTitle: "మా ప్రత్యేక ఫేటాలు",
    filterAll: "అన్ని ఫేటాలు (All)",
    filterGroom: "పెళ్లికొడుకు ఫేటా",
    filterGuest: "అతిథుల / బంధువుల ఫేటా",
    contactTitle: "సంప్రదింపుల కేంద్రం",
    address: '<i class="fas fa-map-marker-alt"></i> చిరునామా: ఘోడా, తా. కలమ్నూరి, జి. హింగోలి',
    phoneLabel: "ఫోన్:",
    waBtn: "WhatsApp లో సంప్రదించండి",
    copy: "© 2026 నందకుమార్ ఫేటేవాలే. సర్వ హక్కులు ప్రత్యేకించబడ్డాయి."
  }
};

// १. भाषा बदलण्याचे फंक्शन (Language Switcher)
function setLanguage(lang) {
  currentLang = lang;
  
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById('btn-' + lang);
  if (activeBtn) activeBtn.classList.add('active');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang] && i18n[lang][key]) {
      el.textContent = i18n[lang][key];
    }
  });

  const addrEl = document.getElementById('addressText');
  if (addrEl && i18n[lang]) {
    addrEl.innerHTML = i18n[lang].address;
  }
}

// २. कॅटेगरीनुसार फेटे फिल्टर करण्याचे फंक्शन
function filterFetas(category, btnElement) {
  currentCategory = category;
  
  if (btnElement) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
  }

  const cards = document.querySelectorAll('#productGrid .card, .product-grid .card');
  cards.forEach(card => {
    const cardCat = card.getAttribute('data-category');
    if (category === 'all' || cardCat === category) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

// ३. WhatsApp वर बुकिंग पाठवण्याचे फंक्शन
function sendBookingToWhatsApp(event) {
  if (event) event.preventDefault();
  const name = document.getElementById('custName')?.value || '';
  const village = document.getElementById('custVillage')?.value || '';
  const date = document.getElementById('eventDate')?.value || '';
  const serviceSelect = document.getElementById('serviceType');
  const service = serviceSelect ? serviceSelect.options[serviceSelect.selectedIndex].text : '';
  const qty = document.getElementById('fetaQty')?.value || '';

  const msg = 'नमस्कार नंदकुमार फेटेवाले,%0Aमला फेट्याची ऑर्डर/चौकशी करायची आहे:%0A%0A*नाव:* ' + encodeURIComponent(name) + '%0A*गाव:* ' + encodeURIComponent(village) + '%0A*तारीख:* ' + encodeURIComponent(date) + '%0A*सेवा:* ' + encodeURIComponent(service) + '%0A*एकूण फेटे:* ' + encodeURIComponent(qty);
  window.open('https://wa.me/919766114461?text=' + msg, '_blank');
}
