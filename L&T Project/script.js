document.addEventListener('DOMContentLoaded', function () {
    var items = document.querySelectorAll('.banner-list');
    var currentImageIndex = 0;

    function showImage(index) {
        items.forEach(function (item) {
            item.classList.remove('active');
        });
        items[index].classList.add('active');
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % items.length;
        showImage(currentImageIndex);
    }

    // Automatically switch images every 3 seconds
    setInterval(nextImage, 2000);
});

