// Three.js Background Animation
const initThreeBackground = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('hero-canvas'), alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 5;

    // Create abstract geometry
    const geometry = new THREE.IcosahedronGeometry(2, 1);
    const material = new THREE.MeshPhongMaterial({
        color: 0x00ff88,
        wireframe: true,
        wireframeLinewidth: 2
    });
    const shape = new THREE.Mesh(geometry, material);
    scene.add(shape);

    // Add lights
    const light1 = new THREE.DirectionalLight(0x00ccff, 1);
    light1.position.set(2, 2, 2);
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0x00ff88, 1);
    light2.position.set(-2, -2, -2);
    scene.add(light2);

    // Animation loop
    const animate = () => {
        requestAnimationFrame(animate);
        shape.rotation.x += 0.005;
        shape.rotation.y += 0.005;
        renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
};

// Scroll Animations
const initScrollAnimations = () => {
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.skill-card, .project-card, .testimonial-card').forEach(el => {
        observer.observe(el);
    });
};

// Counter Animation
const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
        current += step;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };

    updateCounter();
};

// Skills Data
const skills = [
    { name: 'JavaScript', icon: '<i class="fa-brands fa-js"></i>' },
    { name: 'React', icon: '<i class="fa-brands fa-react"></i>' },
    { name: 'Node.js', icon: '<i class="fa-brands fa-node"></i>' },
    { name: 'Python', icon: '<i class="fa-brands fa-python"></i>' },
    { name: 'SQL', icon: '<i class="fa-solid fa-database"></i>' },
    { name: 'MongoDB', icon: '<i class="fa-solid fa-database"></i>' },
    { name: 'HTML', icon: '<i class="fa-brands fa-html5"></i>' },
    { name: 'CSS', icon: '<i class="fa-brands fa-css3-alt"></i>' },
    { name: 'Java', icon: '<i class="fa-brands fa-java"></i>' },
    { name: 'Git', icon: '<i class="fa-brands fa-git-alt"></i>' },
    { name: 'Express.js', icon: '<i class="fa-brands fa-node"></i>' },
    { name: 'Bootstrap', icon: '<i class="fa-brands fa-bootstrap"></i>' },
    { name: 'Tailwind CSS', icon: '<i class="fa-brands fa-tailwindcss"></i>' },
    { name: 'PHP', icon: '<i class="fa-brands fa-php"></i>' },
    { name: 'C++', icon: '<i class="fa-brands fa-cuttlefish"></i>' },
    { name: 'C' , icon: '<i class="fa-brands fa-c"></i>' },
    { name: 'Postman', icon: '<i class="fa-brands fa-postman"></i>' },
    { name: 'PostgreSQL', icon: '<i class="fa-brands fa-postgresql"></i>' },
];

// Projects Data
const projects = [
    {
        title: 'Wanderstay',
        description: 'Full Stack airbnb stay vacation rental app built with  Node.js, Express.js and MongoDB',
        image: '/assets/airbnb.png',
        link: 'https://wanderstay-oakz.onrender.com',
        demoLink: 'https://wanderstay-oakz.onrender.com',
        codeLink: 'https://github.com/Krishna-007-ninja/wanderstay'
    },
    {
        title: 'College Event Management System',
        description: 'Web app for managing college events using PHP and MySQL',
        image: '../assets/eventManagement.png',
        link: 'https://github.com/Krishna-007-ninja/event-management-system',
        demoLink: '../html/projects1.html', // optional demo if available
        codeLink: 'https://github.com/Krishna-007-ninja/event-management-system'
    },
    {
        title: 'Spotify Clone',
        description: 'A music streaming app clone built with only HTML and CSS.',
        image: '../assets/spotifyClone.jpg',
        link: 'https://github.com/Krishna-007-ninja/spotify-clone',
        demoLink: '../html/projects2.html',
        codeLink: 'https://github.com/Krishna-007-ninja/spotify-clone'
    },
    {
        title: 'Leaf Disease Detection',
        description: 'Machine learning model to detect plant diseases using Python and TensorFlow.',
        image: '../assets/leafDiseaseDetection.png',
        link: 'https://leaf-disease-detection.com',
        demoLink: '../html/projects3.html',
        codeLink: 'https://github.com/Krishna-007-ninja/leaf-disease-detection'
    }
];

// Testimonials Data
// const testimonials = [
//     {
//         name: 'John Doe',
//         role: 'CEO, Tech Corp',
//         text: 'Exceptional developer with great attention to detail.'
//     },
//     {
//         name: 'Jane Smith',
//         role: 'Product Manager',
//         text: 'Delivered our project on time with outstanding quality.'
//     },
//     {
//         name: 'Mike Johnson',
//         role: 'Startup Founder',
//         text: 'Transformed our idea into a beautiful, functional product.'
//     }
// ];

// Populate Dynamic Content
const populateContent = () => {
    // Skills
    const skillsGrid = document.querySelector('.skills-grid');
    skills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        skillCard.innerHTML = `
            <div class="skill-icon">${skill.icon}</div>
            <h3>${skill.name}</h3>
        `;
        skillsGrid.appendChild(skillCard);
    });

    // Projects
    const projectCarousel = document.querySelector('.project-carousel');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <a href="${project.link}" target="_blank" class="project-link">
            <img src="${project.image}" alt="${project.title}">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-buttons">
                    <a href="${project.demoLink}" target="_blank" class="btn demo-btn">Demo</a>
                    <a href="${project.codeLink}" target="_blank" class="btn code-btn">Code</a>
                </div>
            </div>
            </a>
        `;
        projectCarousel.appendChild(projectCard);
    });

    // Testimonials
    // const testimonialsContainer = document.querySelector('.testimonials-container');
    // testimonials.forEach(testimonial => {
    //     const testimonialCard = document.createElement('div');
    //     testimonialCard.className = 'testimonial-card';
    //     testimonialCard.innerHTML = `
    //         <p>${testimonial.text}</p>
    //         <div class="testimonial-author">
    //             <h4>${testimonial.name}</h4>
    //             <span>${testimonial.role}</span>
    //         </div>
    //     `;
    //     testimonialsContainer.appendChild(testimonialCard);
    // });
};

// Form Handling
const initFormHandling = () => {
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        // Simulate form submission
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.textContent = 'Message Sent!';
            form.reset();
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        }, 1500);
    });
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Typing animation for developer text
    // const typingText = document.querySelector('.typing-text');
    // const text = typingText.textContent;
    // typingText.textContent = '';
    // let charIndex = 0;

    // function typeText() {
    //     if (charIndex < text.length) {
    //         typingText.textContent += text.charAt(charIndex);
    //         charIndex++;
    //         setTimeout(typeText, 150);
    //     }
    // }

    // setTimeout(typeText, 1000);

    initThreeBackground();
    initScrollAnimations();
    populateContent();
    initFormHandling();

    // Initialize counters when they come into view
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    });

    document.querySelectorAll('.counter-number').forEach(counter => {
        counterObserver.observe(counter);
    });
});