const equalizerBars = document.querySelectorAll(".bar");

// Function to update the equalizer bars based on audio input
function updateEqualizer(amplitude) {
  const scaledAmplitude = amplitude * 100 + 100; // Scale amplitude to control bar height
  equalizerBars.forEach((bar, index) => {
    bar.style.height = `${scaledAmplitude - index * 20}px`; // Decrease bar height for a cascading effect
  });
}

// Simulate voice input and update the equalizer
function simulateVoiceInput() {
  const maxAmplitude = 0.5; // Adjust this value based on the input sensitivity
  const randomAmplitude = Math.random() * maxAmplitude;
  updateEqualizer(randomAmplitude);
}

// Simulate voice input every 2 seconds
setInterval(simulateVoiceInput, 2000);
