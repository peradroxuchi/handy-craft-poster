const title = document.querySelector('.title');
if (title) {
  let pos = 0;
  setInterval(() => {
    pos = (pos + 1) % 360;
    title.style.background = `linear-gradient(${pos}deg)`;
  }, 2200);
}
