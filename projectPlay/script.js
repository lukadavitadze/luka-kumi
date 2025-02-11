// Array of images and corresponding text descriptions
const images = [
    { src: 'images/pic14.jpg', text: 'Image 1 Description' },
    { src: 'images/pic02.jpg', text: 'Image 2 Description' },
    { src: 'images/pic03.jpg', text: 'Image 3 Description' },
    { src: 'images/pic04.jpg', text: 'Image 4 Description' },
    { src: 'images/pic05.jpg', text: 'Image 5 Description' },
    { src: 'images/pic06.jpg', text: 'Image 6 Description' }
];

// Current image index
let currentIndex = 0;

function changeImage() {
    // Increment the index
    currentIndex = (currentIndex + 1) % images.length;

    // Change the image source and text description
    document.getElementById('image').src = images[currentIndex].src;
    document.getElementById('text-overlay').innerText = images[currentIndex].text;
}
