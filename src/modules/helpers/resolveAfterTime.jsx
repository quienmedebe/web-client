/***
 * Source: https://stackoverflow.com/a/22707551
 */

function resolveAfterTime(delay, value) {
  let timerId = null;
  let reject = null;
  const promise = new Promise((resolve, _reject) => {
    reject = _reject;
    timerId = setTimeout(resolve, delay, value);
  });

  return {
    get promise() {
      return promise;
    },
    cancel() {
      if (timerId) {
        clearTimeout(timerId);
        timerId = null;
        reject();
        reject = null;
      }
    },
  };
}

export default resolveAfterTime;
