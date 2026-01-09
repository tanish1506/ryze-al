
document.addEventListener('DOMContentLoaded', function() {

    const planCards = document.querySelectorAll('.plan-card');
    
    planCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (!this.classList.contains('popular')) {
                this.style.transform = 'translateY(-10px)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('popular')) {
                this.style.transform = 'translateY(0)';
            }
        });
    });


    const planButtons = document.querySelectorAll('.plan-button');
    
    planButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const planCard = this.closest('.plan-card');
            const planName = planCard.querySelector('h3').textContent;
            

            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            

            if (this.textContent.includes('Contact Sales')) {
                alert('Contact Sales form would open here');
            } else {
                alert('Signup form would open here');
            }
        });
    });
});
