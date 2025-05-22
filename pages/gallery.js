const images = [
            "../images/oasis.jpg",
            "../images/volcano.jpeg",
            "../images/licensed-image1.jpeg"
        ];

        let currentImageIndex = 0;
        const galleryImage = document.getElementById("gallery-image");

        function updateImage() {
            galleryImage.src = images[currentImageIndex];
        }

        function nextImage() {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            updateImage();
        }

        function prevImage() {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            updateImage();
        }
