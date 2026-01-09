// Simple pricing page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Plan card hover effects
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

    // Simple click tracking for plan buttons
    const planButtons = document.querySelectorAll('.plan-button');
    
    planButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const planCard = this.closest('.plan-card');
            const planName = planCard.querySelector('h3').textContent;
            
            // Simple animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // Simple alert for demo purposes
            if (this.textContent.includes('Contact Sales')) {
                alert('Contact Sales form would open here');
            } else {
                alert('Signup form would open here');
            }
        });
    });
});