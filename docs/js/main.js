const button = document.getElementById("runaway-btn");
const footer = document.querySelector("footer");

const animateMove = (element, prop, pixels) =>
  anime({
    targets: element,
    [prop]: `${pixels}px`,
    easing: "easeOutCirc"
  });

["mouseover", "click"].forEach(function (el) {
  button.addEventListener(el, function () {
    const buttonRect = this.getBoundingClientRect();
    const footerHeight = footer.offsetHeight;

    // Clamp so bottom of button never goes below footer top
    const maxTop = window.innerHeight - buttonRect.height - footerHeight;
    const maxLeft = window.innerWidth - buttonRect.width;

    const top = Math.floor(Math.random() * maxTop);
    const left = Math.floor(Math.random() * maxLeft);

    animateMove(this, "left", left).play();
    animateMove(this, "top", top).play();
  });
});