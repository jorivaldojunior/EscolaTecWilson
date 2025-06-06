
        // Menu Mobile
        function toggleMenu() {
            const mobileMenu = document.getElementById('mobileMenu');
            mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
        }

        // Fechar menu ao clicar fora
        document.addEventListener('click', function(event) {
            const mobileMenu = document.getElementById('mobileMenu');
            const hamburger = document.querySelector('.hamburger');
            
            if (!mobileMenu.contains(event.target) && !hamburger.contains(event.target)) {
                mobileMenu.style.display = 'none';
            }
        });

        // Modal do Formulário
        function openModal(e) {
            e.preventDefault();
            document.getElementById('contactModal').style.display = 'flex';
            
            // Aqui você pode adicionar código para enviar o formulário
            // Exemplo com Fetch API ou XMLHttpRequest
            const formData = new FormData(document.getElementById('contactForm'));
            
            // Simulando envio (substitua por código real de envio)
            setTimeout(() => {
                // Limpar formulário após envio
                document.getElementById('contactForm').reset();
            }, 1000);
            
            return false;
        }

        function closeModal() {
            document.getElementById('contactModal').style.display = 'none';
        }

        // Mapa Leaflet
        document.addEventListener('DOMContentLoaded', function() {
            // Coordenadas da escola (exemplo: Olinda, PE)
            const map = L.map('map').setView([-8.0081, -34.8550], 15);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            // Marcador da localização
            L.marker([-8.0081, -34.8550]).addTo(map)
                .bindPopup('EscolaTecWilson<br>Rua Golfinho, Qd C 19, Nº 31')
                .openPopup();
        });

        // Suavizar rolagem para âncoras
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            });
        });
    