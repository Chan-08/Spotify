document.addEventListener('DOMContentLoaded', function () {
  const playButtons = document.querySelectorAll('.fa-play');
  const pauseButtons = document.querySelectorAll('.fa-pause');
  const audioElements = document.querySelectorAll('.audio-element');

  function pauseAll() {
    audioElements.forEach(audio => audio.pause());
    playButtons.forEach(button => button.style.display = 'inline-block');
    pauseButtons.forEach(button => button.style.display = 'none');
  }

  playButtons.forEach((button, index) => {
    button.addEventListener('click', function () {
      pauseAll();
      audioElements[index].play();
      button.style.display = 'none';
      pauseButtons[index].style.display = 'inline-block';
    });
  });

  pauseButtons.forEach((button, index) => {
    button.addEventListener('click', function () {
      audioElements[index].pause();
      button.style.display = 'none';
      playButtons[index].style.display = 'inline-block';
    });
  });
});



function toggleMode() {
  document.body.classList.toggle('day-mode');
}



