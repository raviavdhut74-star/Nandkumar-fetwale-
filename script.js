fetch('products.json')
  .then(response => response.json())
  .then(products => {
    const container = document.getElementById("productGrid");
    container.innerHTML = "";

    products.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";
      
      const waMessage = encodeURIComponent(`Namaskar Nandkumar Fetewale, mala "${item.name}" (Kimmat: ${item.price}) chi order karaychi ahe.`);
      const waLink = `https://wa.me/919766114461?text=${waMessage}`;

      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/300x250?text=Feta+Photo'">
        <div class="card-info">
          <h4>${item.name}</h4>
          <p class="price">${item.price}</p>
          <a href="${waLink}" target="_blank" class="order-btn">
            <i class="fab fa-whatsapp"></i> WhatsApp var Order kara
          </a>
        </div>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => {
    console.error("Data load error:", err);
  });
