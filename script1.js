// script.js
const container = document.querySelector('.fireworks');

function createFirework() {
  const firework = document.createElement('div');
  firework.className = 'firework';
  firework.style.left = `${Math.random() * 100}vw`;
  firework.style.top = `${Math.random() * 100}vh`;
  firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  container.appendChild(firework);

  setTimeout(() => {
    firework.remove();
  }, 1000);
}

setInterval(createFirework, 300);