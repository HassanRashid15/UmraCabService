
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

document.addEventListener("DOMContentLoaded", function() {
  const tabs = document.querySelectorAll(".tab-link");
  const tabContents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", function() {
      const targetTab = this.getAttribute("data-tab");

      // Remove current class from all tabs and hide all content
      tabs.forEach(t => t.classList.remove("current"));
      tabContents.forEach(tc => {
        tc.classList.remove("current");
        tc.style.display = 'none'; // Hide content immediately
      });

      // Add current class to clicked tab and show corresponding content
      this.classList.add("current");
      const currentTabContent = document.getElementById(targetTab);
      currentTabContent.classList.add("current");
      currentTabContent.style.display = 'block'; // Show content with the animation

      // Trigger reflow to reset animation
      void currentTabContent.offsetWidth; // Ensures the animation plays
    });
  });
});

window.addEventListener("scroll", function() {
  const scrollPosition = window.scrollY; // Get the current scroll position
  const image = document.querySelector('.sliding-image'); // Select the image

  // Calculate a smaller translation value (move less)
  const translateValue = Math.min(scrollPosition * 0.04, 100); // Use a smaller multiplier (0.1)

  // Update the transform property to slide the image to the left
  image.style.transform = `translateX(-${translateValue}%)`; // Move left based on scroll
});
document.addEventListener("DOMContentLoaded", function() {
  const counters = document.querySelectorAll(".services-title");

  counters.forEach(counter => {
    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const current = +counter.innerText;
      const increment = target / 200; // Adjust for speed

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(updateCounter, 0); // Update every 20ms
      } else {
        counter.innerText = target.toLocaleString(); // Format with commas
      }
    };

    updateCounter();
  });
});
