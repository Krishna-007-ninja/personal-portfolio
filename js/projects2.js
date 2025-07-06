// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.className = savedTheme;
} else {
    // Default to light theme
    body.className = 'light-theme';
}

// Theme toggle handler
themeToggle.addEventListener('click', () => {
    if (body.className === 'light-theme') {
        body.className = 'dark-theme';
        localStorage.setItem('theme', 'dark-theme');
    } else {
        body.className = 'light-theme';
        localStorage.setItem('theme', 'light-theme');
    }
});

// Dynamic project title update
class ProjectDemo {
    constructor() {
        this.projectTitle = document.getElementById('projectTitle');
        this.projectImage = document.getElementById('projectImage');
        this.projectDescription = document.getElementById('projectDescription');
        
        // Sample project data - in real application, this would come from a backend
        this.projectData = {
            title: 'Spotify UI Clone (Frontend Only)',
            image: '../assets/spotifyClone.jpg',
            description: 'A responsive music streaming interface cloned from Spotify, built using only HTML and CSS. It replicates the layout and design without any backend functionality.'
        };
        
        this.init();
    }
    
    init() {
        this.updateProjectInfo();
        this.addAnimations();
    }
    
    updateProjectInfo() {
        // Update project title with typing effect
        this.typeWriter(this.projectData.title, this.projectTitle);
        
        // Update project image with fade-in effect
        this.projectImage.style.opacity = '0';
        this.projectImage.src = this.projectData.image;
        setTimeout(() => {
            this.projectImage.style.opacity = '1';
        }, 300);

        if (this.projectDescription && this.projectData.description) {
            this.projectDescription.textContent = this.projectData.description;
        }
    }
    
    typeWriter(text, element, speed = 100) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    addAnimations() {
        // Add smooth scroll behavior to all anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Add hover effect to workflow steps
        const steps = document.querySelectorAll('.workflow-steps li');
        steps.forEach(step => {
            step.addEventListener('mouseenter', () => {
                step.style.transform = 'translateX(10px)';
                step.style.color = getComputedStyle(document.documentElement)
                    .getPropertyValue('--primary-color');
            });
            
            step.addEventListener('mouseleave', () => {
                step.style.transform = 'translateX(0)';
                step.style.color = getComputedStyle(document.documentElement)
                    .getPropertyValue('--text-primary');
            });
        });
    }
}

// Initialize project demo when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ProjectDemo();
});