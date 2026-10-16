let allProducts = [];
let currentLang = 'mr';
let currentCategory = 'all';

// मराठी, हिंदी, इंग्रजी आणि तेलुगू (Telugu) संपूर्ण डिक्शनरी
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
    copy: "© २०२६ नंदकुमार फेटेवाले. सर्व हक्क राखीव.",
    orderBtn: "WhatsApp वर Order करा",
    contactPrice: "किंमतीसाठी संपर्क करा",
    waPriceLabel: "दर",
    waCatLabel: "प्रकार",
    waDescLabel: "माहिती",
    waPhotoLabel: "फोटो",
    waMsg: "नमस्कार नंदकुमार फेटेवाले,\nमला या फेट्याची ऑर्डर / चौकशी करायची आहे:\n\n",
    waFooter: "\nकृपया हा फेटा उपलब्ध आहे का आणि याची किंमत काय आहे ते सांगा."
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
    pkgMainTitle: "स्पेशल शादी पैकेज (Wedding Packages)",
    pkg1Title: "दूल्हा रॉयल पैकेज",
    pkg1Desc: "शाही डिजाइनर फेंटा + मैचिंग दुपट्टा + कलगी और तुरा + दूल्हा स्पेशल प्रोफेशनल मेकअप।",
    pkg2Title: "बाराती / मेहमान पैकेज",
    pkg2Desc: "शादी या स्वागत समारोह के लिए ५० से ५००+ वीआईपी फेंटे शादी के मंडप पर आकर बांधे जाएंगे।",
    pkg3Title: "दूल्हा मेकअप सर्विस",
    pkg3Desc: "हल्दी, शादी और रिसेप्शन के लिए दूल्हे का एचडी (HD) और नेचुरल मेकअप मंडप पर आकर किया जाएगा।",
    whyMainTitle: "हमारी विशेषताएं (Why Choose Us?)",
    why1Title: "सीधे मंडप पर सेवा",
    why1Desc: "हिंगोली, नांदेड, परभणी और आसपास के इलाकों में शादी के स्थान पर समय पर आकर फेंटे बांधे जाते हैं।",
    why2Title: "प्रीमियम और स्वच्छ कपड़ा",
    why2Desc: "उच्च गुणवत्ता वाले वेलवेट, पैठणी सिल्क, ब्रोकेड कपड़े और आकर्षक पारंपरिक ब्रोच का उपयोग।",
    why3Title: "उचित और किफायती दाम",
    why3Desc: "रिटेल और थोक ऑर्डर के लिए बेहद किफायती दरें और अनुभवी कारीगरों द्वारा तेज़ सेवा।",
    bookMainTitle: "तुरंत बुकिंग / पूछताछ करें",
    lblName: "आपका नाम (Your Name):",
    lblVillage: "गांव / शहर (Village / City):",
    lblDate: "कार्यक्रम की तारीख (Event Date):",
    lblService: "किस सेवा के लिए ऑर्डर करना है?",
    opt1: "दूल्हा फेंटा और मेकअप",
    opt2: "केवल दूल्हा फेंटा",
    opt3: "बाराती / मेहमान फेंटे (Bulk Order)",
    opt4: "दूल्हा + बाराती फेंटे पूर्ण पैकेज",
    lblQty: "लगभग कितने फेंटे चाहिए?",
    bookSubmitBtn: "WhatsApp पर बुकिंग भेजें",
    contactTitle: "संपर्क केंद्र",
    address: '<i class="fas fa-map-marker-alt"></i> पता: घोडा, ता. कळमनुरी, जि. हिंगोली',
    phoneLabel: "संपर्क:",
    waBtn: "WhatsApp पर संपर्क करें",
    mapBtn: "Google Map पर पता देखें",
    copy: "© २०२६ नंदकुमार फेंटेवाले। सर्वाधिकार सुरक्षित।",
    orderBtn: "WhatsApp पर Order करें",
    contactPrice: "कीमत के लिए संपर्क करें",
    waPriceLabel: "कीमत",
    waCatLabel: "प्रकार",
    waDescLabel: "विवरण",
    waPhotoLabel: "फोटो",
    waMsg: "नमस्ते नंदकुमार फेंटेवाले,\nमुझे इस फेंटे का ऑर्डर / पूछताछ करनी है:\n\n",
    waFooter: "\nकृपया बताएं क्या यह उपलब्ध है।"
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
    pkgMainTitle: "Special Wedding Packages",
    pkg1Title: "Groom Royal Package",
    pkg1Desc: "Royal Designer Feta + Matching Dupatta + Kalgi & Plume + Professional Groom Makeup.",
    pkg2Title: "Guest / Barati Package",
    pkg2Desc: "On-site turban tying service for 50 to 500+ VIP guests at weddings and felicitations.",
    pkg3Title: "Groom Makeup Service",
    pkg3Desc: "HD & Natural Groom Makeup service directly at the wedding venue for Haldi, Wedding & Reception.",
    whyMainTitle: "Why Choose Us?",
    why1Title: "On-Venue Service",
    why1Desc: "Prompt on-site turban tying service across Hingoli, Nanded, Parbhani, and nearby areas.",
    why2Title: "Premium & Hygienic Fabric",
    why2Desc: "High-quality Velvet, Paithani Silk, Brocade fabrics with royal traditional brooches and plumes.",
    why3Title: "Affordable Pricing",
    why3Desc: "Reasonable rates for individual and bulk wedding orders with fast service by expert artists.",
    bookMainTitle: "Quick Booking / Inquiry",
    lblName: "Your Name:",
    lblVillage: "Village / City:",
    lblDate: "Event Date:",
    lblService: "Select Service Type:",
    opt1: "Groom Feta & Makeup",
    opt2: "Only Groom Feta",
    opt3: "VIP / Guest Fetas (Bulk Order)",
    opt4: "Full Wedding Package (Groom + Guests)",
    lblQty: "Approximate Number of Fetas:",
    bookSubmitBtn: "Send Booking on WhatsApp",
    contactTitle: "Contact Us",
    address: '<i class="fas fa-map-marker-alt"></i> Address: Ghoda, Tal. Kalamnuri, Dist. Hingoli',
    phoneLabel: "Contact:",
    waBtn: "Contact on WhatsApp",
    mapBtn: "View on Google Maps",
    copy: "© 2026 Nandkumar Fetewale. All rights reserved.",
    orderBtn: "Order on WhatsApp",
    contactPrice: "Contact for Price",
    waPriceLabel: "Price",
    waCatLabel: "Category",
    waDescLabel: "Details",
    waPhotoLabel: "Photo",
    waMsg: "Hello Nandkumar Fetewale,\nI want to order / inquire about this turban:\n\n",
    waFooter: "\nPlease let me know if this is available."
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
    pkgMainTitle: "స్పెషల్ వెడ్డింగ్ ప్యాకేజీలు",
    pkg1Title: "పెళ్లికొడుకు రాయల్ ప్యాకేజీ",
    pkg1Desc: "రాయల్ డిజైనర్ ఫేటా + మ్యాచింగ్ దుపట్టా + కల్గి & తురా + పెళ్లికొడుకు ప్రొఫెషనల్ మేకప్.",
    pkg2Title: "అతిథుల / బంధువుల ప్యాకేజీ",
    pkg2Desc: "వివాహాలు మరియు సన్మాన కార్యక్రమాల కోసం 50 నుండి 500+ VIP ఫేటాలు మండపం వద్దకు వచ్చి కట్టబడును.",
    pkg3Title: "పెళ్లికొడుకు మేకప్ సర్వీస్",
    pkg3Desc: "హల్దీ, పెళ్లి మరియు రిసెప్షన్ కోసం నేరుగా మండపం వద్దే HD & నేచురల్ మేకప్ చేయబడును.",
    whyMainTitle: "మా ప్రత్యేకతలు (Why Choose Us?)",
    why1Title: "నేరుగా వేదిక వద్దకే సేవ",
    why1Desc: "హింగోలి, నాందేడ్, పర్భని మరియు పరిసర ప్రాంతాలలో పెళ్లి మండపం వద్ద సమయానికి సేవ.",
    why2Title: "ప్రీమియం & శుభ్రమైన వస్త్రం",
    why2Desc: "అత్యుత్తమ వెల్వెట్, పైఠాణీ సిల్క్, బ్రోకేడ్ వస్త్రాలు మరియు ఆకర్షణీయమైన బ్రోచెస్.",
    why3Title: "సరసమైన ధరలు",
    why3Desc: "రిటైల్ మరియు బల్క్ ఆర్డర్ల కోసం తక్కువ ధరలు మరియు నిపుణులచే వేగవంతమైన సేవ.",
    bookMainTitle: "త్వరిత బుకింగ్ / విచారణ",
    lblName: "మీ పేరు (Your Name):",
    lblVillage: "గ్రామం / నగరం (Village / City):",
    lblDate: "కార్యక్రమం తేదీ (Event Date):",
    lblService: "దేనికోసం ఆర్డర్ చేయాలి?",
    opt1: "పెళ్లికొడుకు ఫేటా & మేకప్",
    opt2: "పెళ్లికొడుకు ఫేటా మాత్రమే",
    opt3: "అతిథుల ఫేటాలు (బల్క్ ఆర్డర్)",
    opt4: "పూర్తి వెడ్డింగ్ ప్యాకేజీ",
    lblQty: "సుమారుగా ఎన్ని ఫేటాలు కావాలి?",
    bookSubmitBtn: "WhatsApp లో బుకింగ్ పంపండి",
    contactTitle: "సంప్రదింపుల కేంద్రం",
    address: '<i class="fas fa-map-marker-alt"></i> చిరునామా: ఘోడా, తా. కలమ్నూరి, జి. హింగోలి',
    phoneLabel: "ఫోన్:",
    waBtn: "WhatsApp లో సంప్రదించండి",
    mapBtn: "Google Map లో చిరునామా చూడండి",
    copy: "© 2026 నందకుమార్ ఫేటేవాలే. సర్వ హక్కులు ప్రత్యేకించబడ్డాయి.",
    orderBtn: "WhatsApp లో ఆర్డర్ చేయండి",
    contactPrice: "ధర కోసం సంప్రదించండి",
    waPriceLabel: "ధర",
    waCatLabel: "రకం",
    waDescLabel: "వివరాలు",
    waPhotoLabel: "ఫోటో",
    waMsg: "నమస్కారం నందకుమార్ ఫేటేవాలే,\nనేను ఈ ఫేటాను ఆర్డర్ / విచారణ చేయాలనుకుంటున్నాను:\n\n",
    waFooter: "\nదయచేసి ఇది అందుబాటులో ఉందో లేదో తెలియజేయండి."
  }
};

function getLocalizedProductName(name, lang) {
  if (!name) return "";
  if (lang === 'en') {
    const match = name.match(/\(([^)]+)\)/);
    if (match) return match[1];
  }
  return name;
}

function setLanguage(lang) {
  currentLang = lang;
  
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(`btn-${lang}`);
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

  renderProducts();
}

function filterFetas(category, btnElement) {
  currentCategory = category;
  if (btnElement) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
  }
  renderProducts();
}

function renderProducts() {
  const container = document.getElementById("productGrid");
  if (!container) return;
  container.innerHTML = "";

  const t = i18n[currentLang];

  const filteredProducts = allProducts.filter(item => {
    if (currentCategory === 'all') return true;
    return item.category === currentCategory;
  });

  filteredProducts.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.setAttribute("data-category", item.category || "");
    
    const fullImageUrl = new URL(item.image, window.location.href).href;
    const priceDisplay = item.price > 0 ? `₹${item.price}` : t.contactPrice;
    const displayName = getLocalizedProductName(item.name, currentLang);

    const messageText = 
`${t.waMsg}👑 *${displayName}*
💰 *${t.waPriceLabel}:* ${priceDisplay}
📂 *${t.waCatLabel}:* ${item.category || "Feta"}
📝 *${t.waDescLabel}:* ${item.description || ""}

📸 *${t.waPhotoLabel}:*
${fullImageUrl}
${t.waFooter}`;

    const waLink = `https://wa.me/919766114461?text=${encodeURIComponent(messageText)}`;

    card.innerHTML = `
      <img src="${item.image}" alt="${displayName}" style="cursor: zoom-in;" onerror="this.src='https://via.placeholder.com/300x250?text=Feta+Photo'">
      <div class="card-info">
        <h4>${displayName}</h4>
        <p class="price" style="font-size: 14px;">${priceDisplay}</p>
        <a href="${waLink}" target="_blank" class="order-btn">
          <i class="fab fa-whatsapp"></i> ${t.orderBtn}
        </a>
      </div>
    `;
    container.appendChild(card);
  });
}

function sendBookingToWhatsApp(event) {
  event.preventDefault();
  const name = document.getElementById('custName').value;
  const village = document.getElementById('custVillage').value;
  const date = document.getElementById('eventDate').value;
  const serviceSelect = document.getElementById('serviceType');
  const service = serviceSelect.options[serviceSelect.selectedIndex].text;
  const qty = document.getElementById('fetaQty').value;

  const msg = `नमस्कार नंदकुमार फेटेवाले,%0Aमला फेट्याची ऑर्डर/चौकशी करायची आहे:%0A%0A*नाव:* ${name}%0A*गाव:* ${village}%0A*तारीख:* ${date}%0A*सेवा:* ${service}%0A*एकूण फेटे:* ${qty}`;
  window.open(`https://wa.me/919766114461?text=${msg}`, '_blank');
}

document.addEventListener('click', function(e) {
  if (e.target && e.target.tagName === 'IMG' && e.target.closest('#productGrid')) {
    const modal = document.getElementById('imageLightbox');
    const modalImg = document.getElementById('lightboxImg');
    const caption = document.getElementById('lightboxCaption');
    if (modal && modalImg) {
      modal.style.display = 'flex';
      modalImg.src = e.target.src;
      caption.innerText = e.target.alt || '';
    }
  }
});

function closeLightbox() {
  const modal = document.getElementById('imageLightbox');
  if (modal) modal.style.display = 'none';
}

// ५. डेटा लोड करणे आणि भाषा सुरू करणे
fetch('products.json')
  .then(response => response.json())
  .then(products => {
    allProducts = products;
    setLanguage(currentLang); // इथे सगळ्यात आधी भाषा आणि प्रॉडक्ट्स लोड होतील
  })
  .catch(err => {
    console.error("Data load error:", err);
  });
