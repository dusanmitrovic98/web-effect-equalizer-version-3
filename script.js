const equalizerBars = document.querySelectorAll(".bar");

// Function to update the equalizer bars based on audio input
function updateEqualizer(amplitude) {
  const scaledAmplitude = amplitude * 100 + 100; // Scale amplitude to control bar height
  equalizerBars.forEach((bar, index) => {
