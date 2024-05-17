const robot = require('robotjs');

// Function to simulate key press
function simulateKeyPress() {
  // Simulate pressing the 'Shift' key
  robot.keyToggle('shift', 'down');
  robot.keyToggle('shift', 'up');
  console.log('Pressed Shift key');
}

// Function to simulate mouse click
function simulateMouseClick() {
  // Simulate left mouse button click
  robot.mouseClick();
  console.log('Clicked mouse');
}

// Function to simulate mouse movement
function simulateMouseMovement() {
  // Move mouse cursor to a random position on the screen
  const screenSize = robot.getScreenSize();
  const randomX = Math.floor(Math.random() * screenSize.width);
  const randomY = Math.floor(Math.random() * screenSize.height);
  robot.moveMouse(randomX, randomY);
  console.log(`Moved mouse to (${randomX}, ${randomY})`);
}

// Main function to simulate actions every minute
function keepSystemActive() {
  console.log('Keeping the System active...');
  setInterval(() => {
    // Simulate key press, mouse click, or mouse movement (you can choose which action to use)
    simulateKeyPress();
    simulateMouseClick();
    simulateMouseMovement();
  }, 60 * 1000); // Every minute (60 seconds * 1000 milliseconds)
}

// Start the script
keepSystemActive();
