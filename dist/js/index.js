const counters = document.querySelectorAll(".counter");
const speed = 200;
counters.forEach((counter) => {
  const updateCount = () => {
    const target = counter.getAttribute("data-target");
    const inc = target / speed;
    currentCount = +counter.textContent;

    if (currentCount < target) {
      if (counter.classList.contains("percentage")) {
        counter.textContent = Math.ceil(currentCount + inc) + "%";
      } else {
        counter.textContent = Math.ceil(currentCount + inc);
      }
      setTimeout(updateCount, 1);
    } else {
      if (counter.classList.contains("percentage")) {
        counter.textContent = target + "%";
      } else {
        counter.textContent = target;
      }
    }
  };

  updateCount();
});
