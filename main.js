// Counting animation function
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200; // The lower the faster
    const statsSection = document.querySelector('.stats');
    
    // Only animate when section is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate stat cards
                document.querySelectorAll('.stat-card').forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('animate');
                    }, index * 150);
                });
                
                // Animate numbers
                counters.forEach(counter => {
                    const target = +counter.getAttribute('data-count');
                    const count = +counter.innerText;
                    const increment = target / speed;
                    
                    if (count < target) {
                        counter.innerText = Math.ceil(count + increment);
                        setTimeout(animateCounters, 1);
                    } else {
                        counter.innerText = target + (counter.getAttribute('data-count') === '70' ? '%' : '+');
                    }
                });
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(statsSection);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', animateCounters);

// Animation trigger
document.addEventListener('DOMContentLoaded', function() {
    const visionSection = document.querySelector('.vision-section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
  
    observer.observe(visionSection);
  });

// Update your existing animation trigger
document.addEventListener('DOMContentLoaded', function() {
    // For Vision Section
    const visionSection = document.querySelector('.vision-section');
    // For Mission Section
    const missionSection = document.querySelector('.mission-section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
  
    if (visionSection) observer.observe(visionSection);
    if (missionSection) observer.observe(missionSection);
  });