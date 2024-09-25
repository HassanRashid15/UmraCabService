const currentPage = window.location.pathname;

// Get all nav links
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

navLinks.forEach(link => {
    // Check if the link's data-href matches the current page
    if (link.getAttribute('data-href') === currentPage) {
        link.classList.add('active'); // Add active class if it matches
    } else {
        link.classList.remove('active'); // Remove active class if it doesn't match
    }
});
function openStoreSidebar() {
    const sidebar = document.getElementById("storeSidebar");
    const storeBtn = document.getElementById("storeBtn");

    // Toggle sidebar open/close
    if (sidebar.classList.contains("open")) {
        sidebar.classList.remove("open"); // Close the sidebar
        storeBtn.classList.remove("move"); // Move the store button back
    } else {
        sidebar.classList.add("open"); // Open the sidebar
        storeBtn.classList.add("move"); // Move the store button
    }
}

// togglePassword.js
// togglePassword.js
function togglePassword(inputId, toggleIconId) {
    const passwordField = document.getElementById(inputId);
    const toggleIcon = document.getElementById(toggleIconId);
    
    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleIcon.innerHTML = '<i class="fas fa-eye-slash"></i>';
    } else {
        passwordField.type = "password";
        toggleIcon.innerHTML = '<i class="fas fa-eye"></i>';
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const toggleElements = document.querySelectorAll("[data-toggle-password]");
    
    toggleElements.forEach(el => {
        el.addEventListener("click", function() {
            const inputId = el.getAttribute("data-input-id");
            togglePassword(inputId, el.id);
        });
    });
});


let cart = [];

function openStoreSidebar() {
  const sidebar = document.getElementById("storeSidebar");
  const storeBtn = document.getElementById("storeBtn");

  // Toggle sidebar open/close
  if (sidebar.classList.contains("open")) {
    sidebar.classList.remove("open"); // Close the sidebar
    storeBtn.classList.remove("move"); // Move the store button back
  } else {
    sidebar.classList.add("open"); // Open the sidebar
    storeBtn.classList.add("move"); // Move the store button
  }
}

// Function to add item to the cart
function addToCart(itemName, itemPrice) {
  const cartBadge = document.getElementById("cartBadge");
  const cartItems = document.getElementById("cartItems");

  // Add item to cart array
  cart.push({ name: itemName, price: itemPrice });

  // Update cart badge count
  cartBadge.innerText = cart.length;

  // Update cart items in the sidebar
  const newItem = document.createElement('div');
  newItem.innerHTML = `
    <div class="cart-item">
      <h4>${itemName}</h4>
      <p>${itemPrice}</p>
    </div>
  `;
  cartItems.appendChild(newItem);
}

document.addEventListener('DOMContentLoaded', function() {
  const tabLinks = document.querySelectorAll('.tab-link');
  const tabContents = document.querySelectorAll('.tab-content');

  tabLinks.forEach(link => {
      link.addEventListener('click', function() {
          // Remove 'current' class from all links and contents
          tabLinks.forEach(item => item.classList.remove('current'));
          tabContents.forEach(content => content.classList.remove('current'));

          // Add 'current' class to the clicked link
          link.classList.add('current');
          
          // Show the corresponding tab content
          const targetId = link.getAttribute('data-tab'); // Using data-tab
          document.getElementById(targetId).classList.add('current');
      });
  });
});
