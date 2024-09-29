var typed=new Typed(".multiple-text",{
    strings:["Frontend Developer", " Fronted Desginer"],
    typeSpeed: 100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})
document.addEventListener("DOMContentLoaded", () => {
    const radialBars = document.querySelectorAll('.radial-bar');

    radialBars.forEach(bar => {
        const percentage = parseInt(bar.querySelector('.percentage').textContent);
        const radius = 50; 
        const circumference = 2 * Math.PI * radius; 

        const path = bar.querySelector('.path');
        const percentageText = bar.querySelector('.percentage');
        const text = bar.querySelector('.text');

        path.style.strokeDasharray = circumference;
        path.style.strokeDashoffset = circumference; 
        
        const offset = circumference - (percentage / 100 * circumference);
        setTimeout(() => {
            path.style.transition = 'stroke-dashoffset 1s ease-in-out';
            path.style.strokeDashoffset = offset;

            percentageText.textContent = `${percentage}%`;
            percentageText.style.opacity = 1

            text.style.opacity = 1;
        }, 500); 
    });
});
document.addEventListener("DOMContentLoaded", function() {
        const form = document.querySelector("form");
        
        form.addEventListener("submit", function(event) {
            event.preventDefault(); 
            
            const emailInput = document.querySelector('input[type="email"]').value;
            const mobileInput = document.querySelector('input[type="number"]').value;
            const messageInput = document.querySelector('textarea').value;
            
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const mobilePattern = /^\d{10}$/;
            
            if (!emailPattern.test(emailInput)) {
                alert("Please enter a valid email address.");
                return;
            }
            
            if (!mobilePattern.test(mobileInput)) {
                alert("Please enter a valid mobile number.");
                return;
            }
            
            if (messageInput.trim() === "") {
                alert("Please enter a message.");
                return;
            }
            alert("Your message has been sent successfully!");
        });
    });

