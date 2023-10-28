export const clock = setInterval(() => {
  const now = new Date();
  const clock = document.querySelector(".iphone-status-bar__time");
  clock.innerHTML = now.toLocaleTimeString();
}, 1000);
