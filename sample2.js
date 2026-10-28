const temperatureSlider = document.querySelector("#temperature");
const temperatureValue = document.querySelector("#temperature-value");
const sliderValue = document.querySelector("#slider-value");
const status = document.querySelector("#status");
const statusText = document.querySelector("#status-text");
const onButton = document.querySelector("#on-button");
const offButton = document.querySelector("#off-button");

function setHeating(isOn) {
  status.classList.toggle("is-on", isOn);
  statusText.textContent = isOn
    ? "Heizung1 ist eingeschaltet2"
    : "Heizung1 ist ausgeschaltet2";
  onButton.setAttribute("aria-pressed", String(isOn));
  offButton.setAttribute("aria-pressed", String(!isOn));
}

function updateTemperature() {
  const temperature = temperatureSlider.value;
  temperatureValue.value = temperature;
  sliderValue.value = temperature;
}

temperatureSlider.addEventListener("input", updateTemperature);
onButton.addEventListener("click", () => setHeating(true));
offButton.addEventListener("click", () => setHeating(false));

updateTemperature();