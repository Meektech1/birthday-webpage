const slides = document.querySelectorAll('.mySlides');
let slideIndex = 0;

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); // Change time interval for slide change
}
showSlides();
const messageElement = document.querySelector('.message');
const messageText = "Dear, Harmeedat Anuoluwapo O. I'm wishing you a life full of Allah's Blessings, Abundant Grace, Sound Health, unlimited wealth and great achievements as you attained another milestone in age today.Your constant encouragement and support have been a source of strength, and I appreciate the way you care for me and those around us. You have touched my heart in countless ways, and I am blessed to have you by my side. I cherish the moments we have together, and I'm grateful for the light and love you bring into my life. May our relationship continue to grow stronger through our understanding and compassion for each other. Have a prosperous year, Masoyina ❤️❤️❤️"; // Replace with your message

function typeWriter() {
  let i = 0;
  const typingInterval = 100; // Adjust the speed as desired (milliseconds)

  const typeLoop = setInterval(() => {
    if (i < messageText.length) {
      messageElement.textContent += messageText.charAt(i);
      i++;
    } else {
      clearInterval(typeLoop);
    }
  }, typingInterval);
}

typeWriter();
