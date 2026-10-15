fetch('products.json')
  .then(response => response.json())
  .then(products => {
    const container = document.getElementById("productGrid");
    container.innerHTML = "";

    products.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";
      
      // १. फोटोची संपूर्ण ऑनलाईन लिंक तयार करणे (WhatsApp प्रिव्ह्यूसाठी)
      const fullImageUrl = new URL(item.image, window.location.href).href;

      // २. व्हॉट्सॲपवर जाणारा सविस्तर मेसेज
      const messageText = 
`नमस्कार नंदकुमार फेटेवाले,
मला या फेट्याची ऑर्डर / चौकशी करायची आहे:

👑 *फेट्याचे नाव:* ${item.name}
💰 *दर (किंमत):* ₹${item.price}
📂 *प्रकार:* ${item.category || "फेटा"}
📝 *माहिती:* ${item.description || ""}

📸 *फोटो:*
${fullImageUrl}

कृपया हा फेटा उपलब्ध आहे का ते सांगा.`;

      const waMessage = encodeURIComponent(messageText);
      const waLink = `https://wa.me/919766114461?text=${waMessage}`;

      // ३. वेबसाईटवरील कार्ड
      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/300x250?text=Feta+Photo'">
        <div class="card-info">
          <h4>${item.name}</h4>
          <p class="price">₹${item.price}</p>
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
