/**
 * The Cancellation class that manage a relationship of actions types and AbortController' instances.
 * Useful to cancel requests when dispatching same action type consecutively.
 */
class Cancellation {
  constructor() {
    this.callbacks = [];
    this.controllers = {};
  }

  emit(actionType) {
    this.callbacks.forEach(callback => callback(actionType));
  }

  getSignal(actionType) {
    if (actionType === null) {
      return Promise.resolve(null);
    }

    return Promise.resolve(this.controllers[actionType || '']?.signal);
  }

  off(callback) {
    this.callbacks = this.callbacks.filter(cb => cb !== callback);
  }

  on(callback) {
    this.callbacks.push(callback);
  }

  register(actionType) {
    if (this.controllers[actionType || ''] instanceof window.AbortController) {
      this.controllers[actionType].abort();
    }

    if (actionType !== null) {
      this.controllers = { ...this.controllers, [actionType]: new window.AbortController() };
    }

    this.emit(actionType);
  }

  unregister(actionType) {
    this.controllers = Object.entries(this.controllers)
      .reduce((controllers, [key, controller]) => {
        if (key === actionType) {
          return controllers;
        }

        return { ...controllers, [key]: controller };
      }, {});
  }
}

/**
 * Factory to create a Cancellation instance and expose it as a singleton.
 */
const factoryCancellationSingleton = () => {
  const cancellation = new Cancellation();

  return () => cancellation;
};

/**
 * To get the Cancellation singleton.
 */
const cancellationSingleton =  factoryCancellationSingleton();

export default cancellationSingleton;
