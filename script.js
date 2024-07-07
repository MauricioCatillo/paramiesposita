document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.container');
    container.classList.add('fade-in');

    // Initialize Parallax
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);
});

function toggleText() {
    const lyrics = document.querySelector('.lyrics');
    const audio = document.getElementById('audio');

    if (lyrics.classList.contains('hidden')) {
        lyrics.classList.remove('hidden');
        audio.play();
    } else {
        lyrics.classList.add('hidden');
        audio.pause();
        audio.currentTime = 0;
    }
}
