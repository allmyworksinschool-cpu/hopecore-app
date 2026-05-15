// Splash Screen Animation
document.addEventListener('DOMContentLoaded', function() {
    const splash = document.getElementById('splashScreen');
    const mainApp = document.getElementById('mainApp');
    
    setTimeout(() => {
        splash.style.display = 'none';
        mainApp.classList.remove('hidden');
    }, 3500);
});

// Navigation between pages
const navBtns = document.querySelectorAll('.nav-btn');
const pages = {
    home: document.getElementById('homePage'),
    tasks: document.getElementById('tasksPage'),
    share: document.getElementById('sharePage'),
    profile: document.getElementById('profilePage')
};

navBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const pageName = this.getAttribute('data-page');
        
        // Update active button state
        navBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // Show selected page, hide others
        Object.keys(pages).forEach(page => {
            pages[page].classList.add('hidden');
        });
        pages[pageName].classList.remove('hidden');
        
        // Update greeting based on time of day
        if (pageName === 'home') {
            updateGreeting();
        }
    });
});

// Update greeting based on time of day
function updateGreeting() {
    const hour = new Date().getHours();
    const greetingElement = document.querySelector('.welcome-header h2');
    if (greetingElement) {
        if (hour < 12) {
            greetingElement.textContent = 'Good morning,';
        } else if (hour < 18) {
            greetingElement.textContent = 'Good afternoon,';
        } else {
            greetingElement.textContent = 'Good evening,';
        }
    }
}

// Task checkbox tracking
const checkboxes = document.querySelectorAll('.task-card input[type="checkbox"]');
let hopePoints = 285;

function updateHopePoints(pointsEarned) {
    hopePoints += pointsEarned;
    const scoreNumber = document.querySelector('.score-number');
    if (scoreNumber) {
        scoreNumber.textContent = hopePoints;
    }
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            const rewardText = this.closest('.task-card').querySelector('.task-reward');
            if (rewardText) {
                const points = parseInt(rewardText.textContent.match(/\d+/)[0]);
                updateHopePoints(points);
            }
        }
    });
});

// Story submission (simulated)
const submitBtn = document.getElementById('submitStory');
if (submitBtn) {
    submitBtn.addEventListener('click', function() {
        const category = document.getElementById('storyCategory').value;
        const title = document.getElementById('storyTitle').value;
        const content = document.getElementById('storyContent').value;
        
        if (!category || !title || !content) {
            alert('Please fill out all fields before submitting.');
            return;
        }
        
        alert('Thank you for sharing your story! Our team will review it and may feature it in an upcoming Daily Drop.');
        
        // Clear form
        document.getElementById('storyCategory').value = '';
        document.getElementById('storyTitle').value = '';
        document.getElementById('storyContent').value = '';
    });
}

// Read More button functionality
const readMoreBtn = document.querySelector('.read-more-btn');
if (readMoreBtn) {
    readMoreBtn.addEventListener('click', function() {
        alert('Full story would open here. This is a prototype!');
    });
}

// Update greeting on page load
updateGreeting();

// Daily story rotation (simulated - would come from database in real app)
const stories = [
    {
        title: "The Girl Who Taught a Village to Read",
        excerpt: "At just 14 years old, Malala Yousafzai stood up to the Taliban and demanded education for girls..."
    },
    {
        title: "Finding Hope in the Smallest Places",
        excerpt: "After losing everything in a fire, one family discovered that community was the only thing they needed..."
    }
];

// Random quote rotation
const quotes = [
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "Hope is the thing with feathers that perches in the soul.", author: "Emily Dickinson" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" }
];

function rotateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    const quoteText = document.querySelector('.quote-text');
    const quoteAuthor = document.querySelector('.quote-author');
    
    if (quoteText && quoteAuthor) {
        quoteText.textContent = `"${quote.text}"`;
        quoteAuthor.textContent = `— ${quote.author}`;
    }
}

// Rotate quote daily (in real app, would be server-side)
rotateQuote();