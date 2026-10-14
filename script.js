const products = [
  {
    name: "शाही पिवळा फेटा",
    price: "उत्कृष्ट दर",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "राजेशाही लाल-जरी फेटा",
    price: "उत्कृष्ट दर",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "नवरदेव स्पेशल पगडी",
    price: "उत्कृष्ट दर",
    image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "मल्टीकलर फेटा सेट",
    price: "घाऊक व किरकोळ",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=400&q=80"
  }
];

const container = document.getElementById("productGrid");

products.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";
  
  const waMessage = encodeURIComponent(`नमस्कार नंदकुमार फेटेवाले, मला "${item.name}" बद्दल माहिती हवी आहे.`);
  const waLink = `https://wa.me/919766114461?text=${waMessage}`;

  card.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
    <div class="card-info">
      <h4>${item.name}</h4>
      <p class="price">${item.price}</p>
      <a href="${waLink}" target="_blank" class="order-btn">
        <i class="fab fa-whatsapp"></i> WhatsApp वर मागवा
      </a>
    </div>
  `;
  container.appendChild(card);
});
