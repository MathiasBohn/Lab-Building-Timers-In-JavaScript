// countdownTimer function
function countdownTimer(startTime, interval) {
  let remainingTime = startTime;

  const timerId = setInterval(function () {
    if (remainingTime === 0) {
      clearInterval(timerId);
      return;
    }
    console.log(remainingTime);

    // Subtract number after logging
    remainingTime -= 1;
  }, interval);

  return timerId;
}

module.exports = { countdownTimer };
