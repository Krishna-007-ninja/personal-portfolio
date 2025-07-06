// Initialize AOS
        AOS.init({
            duration: 1000,
            once: true
        });

        // Dark mode toggle
        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;

        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark');
            if (body.classList.contains('dark')) {
                body.style.backgroundColor = '#1a1a1a';
            } else {
                body.style.backgroundColor = '#f9fafb';
            }
        });

        // Skill filtering
        const filterButtons = document.querySelectorAll('.filter-btn');
        const skillCards = document.querySelectorAll('.skill-card');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.dataset.filter;
                
                // Update active button
                filterButtons.forEach(btn => {
                    btn.classList.remove('bg-blue-500', 'text-white');
                    btn.classList.add('bg-gray-200', 'dark:bg-gray-700');
                });
                button.classList.remove('bg-gray-200', 'dark:bg-gray-700');
                button.classList.add('bg-blue-500', 'text-white');

                // Filter cards
                skillCards.forEach(card => {
                    if (filter === 'all' || card.classList.contains(filter)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

        // Animate progress bars
        function animateProgressBars() {
            const progressBars = document.querySelectorAll('.progress-bar');
            progressBars.forEach(bar => {
                const width = bar.dataset.width;
                setTimeout(() => {
                    bar.style.width = width + '%';
                }, 200);
            });
        }

        // Run animations when page loads
        window.addEventListener('load', animateProgressBars);