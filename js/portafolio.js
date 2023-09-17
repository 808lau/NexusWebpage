            // Function to open the lightbox with a specific image URL
            function openLightbox(imageUrl) {
                const lightbox = document.getElementById('lightbox');
                const lightboxImage = document.getElementById('lightbox-image');
    
                lightboxImage.src = imageUrl;
                lightbox.style.display = 'block';
            }
    
            // Function to close the lightbox
            function closeLightbox() {
                const lightbox = document.getElementById('lightbox');
                lightbox.style.display = 'none';
            }
            document.addEventListener('keydown', function(event) {
                if (event.key === 'Escape') {
                    closeLightbox();
                }
            });