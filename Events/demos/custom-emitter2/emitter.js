class Emitter {
  constructor() {
    this.listeners = {};
  }

  addListener(eventName, fn) {
    if (typeof eventName !== 'string') {
      throw new TypeError('eventName must be a string');
    }
    if (typeof fn !== 'function') {
      throw new TypeError('listener must be a function');
    }

    this.listeners[eventName] = this.listeners[eventName] || [];
    this.listeners[eventName].push(fn);

    return this;
  }

  on(eventName, fn) {
    return this.addListener(eventName, fn);
  }

  once(eventName, fn) {
    if (typeof eventName !== 'string') {
      throw new TypeError('eventName must be a string');
    }
    if (typeof fn !== 'function') {
      throw new TypeError('listener must be a function');
    }

    this.listeners[eventName] = this.listeners[eventName] || [];

    const onceWrapper = (...args) => {
      fn(...args);
      this.off(eventName, onceWrapper);
    };

    // Attach the original function to the wrapper for easy identification
    onceWrapper.listener = fn;

    this.listeners[eventName].push(onceWrapper);

    return this;
  }

  off(eventName, fn) {
    return this.removeListener(eventName, fn);
  }

  removeListener(eventName, fn) {
    if (typeof eventName !== 'string') {
      throw new TypeError('eventName must be a string');
    }
    if (typeof fn !== 'function') {
      throw new TypeError('listener must be a function');
    }

    let lis = this.listeners[eventName];
    if (!lis) {
      return this;
    }

    for (let i = lis.length - 1; i >= 0; i--) {
      if (lis[i] === fn || lis[i].listener === fn) {
        lis.splice(i, 1);
        break;
      }
    }

    return this;
  }

  emit(eventName, ...args) {
    if (typeof eventName !== 'string') {
      throw new TypeError('eventName must be a string');
    }

    let fns = this.listeners[eventName];
    if (!fns) {
      return false;
    }

    // Clone the listeners array to avoid modification issues
    fns = fns.slice();
    fns.forEach((fn) => fn(...args));

    return true;
  }

  listenerCount(eventName) {
    if (typeof eventName !== 'string') {
      throw new TypeError('eventName must be a string');
    }

    let fns = this.listeners[eventName] || [];

    return fns.length;
  }

  rawListeners(eventName) {
    if (typeof eventName !== 'string') {
      throw new TypeError('eventName must be a string');
    }

    return this.listeners[eventName] || [];
  }
}

module.exports = Emitter;
