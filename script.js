let allProducts = [];
let currentLang = 'mr';

// मराठी, हिंदी आणि इंग्रजी शब्दांचा डिक्शनरी
const i18n = {
  mr: {
    shopTitle: "नंदकुमार फेटेवाले",
    tagline: "शाही व पारंपारिक फेटे आणि नवरदेव स्पेशल मेकअप",
    owner: "प्रो.प्रा. गायकवाड | 📍 घोडा, ता. कळमनुरी, जि. हिंगोली",
    heroTitle: "लग्नसराई, सण-उत्सव आणि शुभकार्यासाठी फेटे उपलब्ध!",
    heroSub: "नवरदेवाचा स्पेशल मेकअप व फेटा प्रत्यक्ष जागेवर येऊन बांधून मिळेल.",
    heroBtn: "आमची उत्पादने पहा",
    productsTitle: "आमचे खास फेटे",
    contactTitle: "संपर्क केंद्र",
    address: '<i class="fas fa-map-marker-alt"></i> पत्ता: घोडा, ता. कळमनुरी, जि. हिंगोली',
    phoneLabel: "संपर्क:",
    waBtn: "WhatsApp वर संपर्क करा",
    copy: "© २०२६ नंदकुमार फेटेवाले. सर्व हक्क राखीव.",
    orderBtn: "WhatsApp वर Order करा",
    waMsg: "नमस्कार नंदकुमार फेटेवाले,\nमला या फेट्याची ऑर्डर / चौकशी करायची आहे:\n\n",
    waFooter: "\nकृपया हा फेटा उपलब्ध आहे का ते सांगा."
  },
  hi: {
    shopTitle: "नंदकुमार फेंटेवाले",
    tagline: "शाही और पारंपरिक फेंटे तथा दूल्हा स्पेशल मेकअप",
    owner: "प्रो. गायकवाड़ | 📍 घोडा, ता. कळमनुरी, जि. हिंगोली",
    heroTitle: "शादी-ब्याह, त्योहारों और शुभ अवसरों के लिए फेंटे उपलब्ध!",
    heroSub: "दूल्हे का स्पेशल मेकअप और फेंटा मौके पर आकर बांधकर मिलेगा।",
    heroBtn: "हमारे उत्पाद देखें",
    productsTitle: "हमारे खास फेंटे",
    contactTitle: "संपर्क केंद्र",
    address: '<i class="fas fa-map-marker-alt"></i> पता: घोडा, ता. कळमनुरी, जि. हिंगोली',
    phoneLabel: "संपर्क:",
    waBtn: "WhatsApp पर संपर्क करें",
    copy: "© २०२६ नंदकुमार फेंटेवाले। सर्वाधिकार सुरक्षित।",
    orderBtn: "WhatsApp पर Order करें",
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
    contactTitle: "Contact Us",
    address: '<i class="fas fa-map-marker-alt"></i> Address: Ghoda, Tal. Kalamnuri, Dist. Hingoli',
    phoneLabel: "Contact:",
    waBtn: "Contact on WhatsApp",
    copy: "© 2026 Nandkumar Fetewale. All rights reserved.",
    orderBtn: "Order on WhatsApp",
    waMsg: "Hello Nandkumar Fetewale,\nI want to order / inquire about this turban:\n\n",
    waFooter: "\nPlease let me know if this is available."
  }
};

// १. भाषा बदलण्याचे फंक्शन (Language Switcher)
function setLanguage(lang) {
  currentLang = lang;
  
  // ॲक्टिव्ह बटण हायलाइट करणे
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(`btn-${lang}`);
  if (activeBtn) activeBtn.classList.add('active');

  // पानांवरील मजकूर बदलणे
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

  // फेट्यांचे कार्ड्स नवीन भाषेत पुन्हा दाखवणे
  renderProducts();
}

// २. फेट्यांचे कार्ड्स आणि व्हॉट्सॲप मेसेज तयार करणे
function renderProducts() {
  const container = document.getElementById("productGrid");
  if (!container) return;
  container.innerHTML = "";

  const t = i18n[currentLang];

  allProducts.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    
    // फोटोची संपूर्ण लिंक
    const fullImageUrl = new URL(item.image, window.location.href).href;

    // निवडलेल्या भाषेनुसार व्हॉट्सॲप मेसेज
    const messageText = 
`${t.waMsg}👑 *${item.name}*
💰 *दर (किंमत):* ₹${item.price}
📂 *प्रकार:* ${item.category || "फेटा"}
📝 *माहिती:* ${item.description || ""}

📸 *फोटो:*
${fullImageUrl}
${t.waFooter}`;

    const waLink = `https://wa.me/919766114461?text=${encodeURIComponent(messageText)}`;

    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/300x250?text=Feta+Photo'">
      <div class="card-info">
        <h4>${item.name}</h4>
        <p class="price">₹${item.price}</p>
        <a href="${waLink}" target="_blank" class="order-btn">
          <i class="fab fa-whatsapp"></i> ${t.orderBtn}
        </a>
      </div>
    `;
    container.appendChild(card);
  });
}

// ३. प्रॉडक्ट्स लोड करणे
fetch('products.json')
  .then(response => response.json())
  .then(products => {
    allProducts = products;
    renderProducts();
  })
  .catch(err => {
    console.error("Data load error:", err);
  });
