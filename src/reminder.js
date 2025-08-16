// delayedReminder function
function delayedReminder(message, delay) {
  return new Promise(function (resolve) {
    // Schedule reminder with setTimeout
    setTimeout(function () {
      console.log(message);
      resolve();
    }, delay);
  });
}

module.exports = { delayedReminder };