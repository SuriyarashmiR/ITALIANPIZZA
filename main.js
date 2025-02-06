// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Order button animation
const orderButton = document.getElementById('orderButton');
orderButton.addEventListener('click', () => {
  alert('Thank you for your interest! Our ordering system will be available soon.');
});

// Contact form handling
const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  if (!name || !email || !message) {
    alert('Please fill in all fields');
    return;
  }
  
  alert('Thank you for your message! We will get back to you soon.');
  
  // Clear form
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
});

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  const currentScroll = window.pageYOffset;
  
  if (currentScroll <= 0) {
    navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    return;
  }
  
  if (currentScroll > lastScroll) {
    navbar.style.transform = 'translateY(-100%)';
  } else {
    navbar.style.transform = 'translateY(0)';
    navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
  }
  
  lastScroll = currentScroll;
});