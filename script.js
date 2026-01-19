const navbar = document.querySelector('.header .navbar');
const menuButton = document.querySelector('.header .menu');

menuButton.addEventListener('click', () => {
  navbar.classList.toggle('show');
});

document.onscroll = () => {
  navbar.classList.remove('show');

  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

document.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};
function submitForm(event) {
  event.preventDefault();
  
  // Get form values
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var phoneInput = document.getElementById("phone");
  var messageInput = document.getElementById("message");
  
  var name = nameInput.value.trim();
  var email = emailInput.value.trim();
  var phone = phoneInput.value.trim();
  var message = messageInput.value.trim();
  
  // Validate form fields
  if (name === "") {
      showError(nameInput, "Please enter your name.");
      return;
  }
  
  if (email === "") {
      showError(emailInput, "Please enter your email.");
      return;
  }
  
  if (!isValidEmail(email)) {
      showError(emailInput, "Please enter a valid email address.");
      return;
  }
  
  if (message === "") {
      showError(messageInput, "Please enter your message.");
      return;
  }
  
  // Submit the form
  document.getElementById("contact-form").submit();
}

function showError(element, message) {
  var errorElement = document.createElement("div");
  errorElement.className = "error-message";
  errorElement.innerText = message;
  
  // Remove existing error message (if any)
  var existingError = element.parentNode.querySelector(".error-message");
  if (existingError) {
      existingError.remove();
  }
  
  element.classList.add("error");
  element.parentNode.appendChild(errorElement);
}

function isValidEmail(email) {
  // Simple email validation regex pattern
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
function downloadCV() {
  window.location.href = "Max Kantor Resume.pdf";
}