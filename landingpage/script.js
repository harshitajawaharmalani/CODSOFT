
window.addEventListener('load', function() {
    const loading = document.getElementById('loading');
    
    setTimeout(() => {
        loading.style.opacity = '0';
        setTimeout(() => {
            loading.style.display = 'none';
        }, 500); 
    }, 1500); 
});


const textElement = document.getElementById('typed-text');
const textToType = "Simplicity is the ultimate sophistication.";
let index = 0;

function typeEffect() {
    if (index < textToType.length) {
        textElement.textContent += textToType.charAt(index);
        index++;
        setTimeout(typeEffect, 50); // Speed of typing
    }
}


setTimeout(typeEffect, 2000);


document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70, // Adjust for fixed header height
            behavior: 'smooth'
        });
    });
});


document.getElementById('year').textContent = new Date().getFullYear();


const contactForm = document.getElementById('contactForm');
if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const btn = this.querySelector('.btn');
        btn.textContent = "Inquiry Sent...";
        btn.style.backgroundColor = "#d4d4d4"; // Muted grey for minimalist feel
        this.reset();
        alert("Thank you for reaching out to Lumina. Our concierge will contact you shortly.");
    });
}