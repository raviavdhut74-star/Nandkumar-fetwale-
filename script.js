const defaultProducts = [
  {
    name: "शाही मखमली पगडी (ब्रोच व कलगी)",
    price: "उत्कृष्ट दर / ऑर्डरनुसार",
    image: "shahi-maroon.jpg"
  },
  {
    name: "राजेशाही लाल जरी फेटा",
    price: "उत्कृष्ट दर / ऑर्डरनुसार",
    image: "shahi-red.jpg"
  },
  {
    name: "नवरदेव स्पेशल पांढरा फेटा (मोती वर्क)",
    price: "मेकअप व फेटा बांधणीसह",
    image: "shahi-white.jpg"
  },
  {
    name: "पारंपारिक मावळा पगडी (भगवा)",
    price: "उत्कृष्ट दर / सणांसाठी",
    image: "mavala-bhagwa.jpg"
  },
  {
    name: "शाही पिवळा जरी फेटा",
    price: "उत्कृष्ट दर / शुभकार्यासाठी",
    image: "shahi-yellow.jpg"
  },
  {
    name: "नवरदेव शाही फेटा कलेक्शन",
    price: "विविध रंग व डिझाइनमध्ये उपलब्ध",
    image: "feta-combo.jpg"
  }
];

// LocalStorage मधून डेटा लोड करणे, नसल्यास default वापरणे
const savedData = localStorage.getItem("nk_products");
const products = savedData ? JSON.parse(savedData) : defaultProducts;

const container = document.getElementById("productGrid");

products.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";
  
  const waMessage = encodeURIComponent(`नमस्कार नंदकुमार फेटेवाले, मला "${item.name}" (किंमत: ${item.price}) बद्दल चौकशी करायची आहे.`);
  const waLink = `https://wa.me/919766114461?text=${waMessage}`;

  card.innerHTML = `
    <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/300x250?text=Feta+Photo'">
    <div class="card-info">
      <h4>${item.name}</h4>
      <p class="price">${item.price}</p>
      <a href="${waLink}" target="_blank" class="order-btn">
        <i class="fab fa-whatsapp"></i> WhatsApp वर ऑर्डर करा
      </a>
    </div>
  `;
  container.appendChild(card);
});
