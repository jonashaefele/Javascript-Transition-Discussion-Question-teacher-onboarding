// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))
//
// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }

// Get all the elements needed to initiate the fade as DOM Node references
const btnEl = document.querySelector('#save_lincoln')
const inputEl = document.querySelector('#interval')
const foregroundEl = document.querySelector('#foreground')

// Add an event listener, so once we click the button, we initiate the fade
btnEl.addEventListener('click', () => {
  // check if we have a number entered in the input, otherwise default to 10s fade
  const fadeOutTime = isNaN(inputEl.value) ? 10000 : inputEl.value
  // set individual CSS properties to start the fade.
  foregroundEl.style.transition = `opacity ${fadeOutTime}ms`;
  foregroundEl.style.opacity = 0;
})
