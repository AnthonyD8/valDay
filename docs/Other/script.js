// This function changes the text of a paragraph when a button is clicked
function changeText() {
    const paragraph = document.getElementById("dynamic-text");
    paragraph.textContent = "You have clicked the button!";
}

// This function changes the background color of the page when called
function changeBackgroundColor() {
    document.body.style.backgroundColor = "#f0f8ff";
}


function updateDateTime() {
    const now = new Date();
    const datetimeElement = document.getElementById("datetime");

    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    };

    const formattedDateTime = now.toLocaleDateString("en-US", options);
    datetimeElement.textContent = formattedDateTime;
}

// Update the date and time once on page load
updateDateTime();

// Set an interval to update the date and time every second
setInterval(updateDateTime, 1000);

const button = document.getElementById("runaway-btn");

const animateMove = (element, prop, pixels) =>
  anime({
    targets: element,
    [prop]: `${pixels}px`,
    easing: "easeOutCirc"
  });

["mouseover", "click"].forEach(function (el) {
  button.addEventListener(el, function (event) {
    const top = getRandomNumber(window.innerHeight - this.offsetHeight);
    const left = getRandomNumber(window.innerWidth - this.offsetWidth);

    animateMove(this, "left", left).play();
    animateMove(this, "top", top).play();
  });
});

const getRandomNumber = (num) => {
  return Math.floor(Math.random() * (num + 1));
};