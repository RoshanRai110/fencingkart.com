const container = document.getElementById('imageContainer');

setInterval(() => {
    container.appendChild(container.firstElementChild); // 
}, 2000); // 


// ======================================Product.html=================================================================================
let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});


// =================================================================Blog page cards Rotate=================================================================
function rotateCards() {
  const container = document.getElementById("cardsContainer");
  const cards = container.children;
  const firstCard = cards[0];
  container.appendChild(firstCard.cloneNode(true));
  container.removeChild(firstCard);
}

setInterval(rotateCards, 3000);

// =============================================





// contact backand
document.addEventListener("DOMContentLoaded", function () {
  console.log("✅ DOM Loaded Successfully!");

  // Example: Check if the form exists before using it
  const form = document.getElementById("contactForm");

  if (!form) {
      console.error("❌ Error: Form element not found!");
      return;
  }

  form.addEventListener("submit", async function (event) {
      event.preventDefault();

      const formData = {
          name: document.getElementById("name").value,
          email: document.getElementById("email").value,
          mobile: document.getElementById("mobile").value,
          address: document.getElementById("address").value,
          message: document.getElementById("message").value
      };

      console.log("📤 Sending Data to Server:", formData);

      try {
          const response = await fetch("http://localhost:5000/send-email", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(formData)
          });

          const result = await response.json();
          console.log("✅ Server Response:", result);
          alert(result.message);
      } catch (error) {
          console.error("❌ Error Sending Data:", error);
          alert("Failed to send message!");
      }
  });
});


