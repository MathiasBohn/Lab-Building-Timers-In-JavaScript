// recurringTimer function
function recurringTimer(message, interval) {
  const timerId = setInterval(function () {
    console.log(message);
  }, interval);
  return timerId;
}

// stopRecurringTimer function
function stopRecurringTimer(timerId) {
  clearInterval(timerId);
}

module.exports = { recurringTimer, stopRecurringTimer };