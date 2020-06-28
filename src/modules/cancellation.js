/**
 * The Cancellation class that manage a relationship of actions types and AbortController' instances
 * to cancel requests when repeating same action types.
 */
class Cancellation {
  constructor() {
    this.latestActionType = null;
    this.controllers = {};
  }

  getSignal() {
    const actionType = this.latestActionType;
    this.latestActionType = null;

    return Promise.resolve(this.controllers[actionType || '']?.signal);
  }

  register(actionType) {
    if (this.controllers[actionType] && this.controllers[actionType] instanceof window.AbortController) {
      this.controllers[actionType].abort();
    }

    this.controllers = { ...this.controllers, [actionType]: new window.AbortController() };
    this.latestActionType = actionType;
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
export const cancellationSingleton =  factoryCancellationSingleton();

/**
 * Factory to create a wrapper to call services.
 */
const factoryCancellableService = () => {
  const cancellation = cancellationSingleton();

  return (actionType, callback) => {
    cancellation.register(actionType);

    return callback()
      .then(response => {
        cancellation.unregister(actionType);

        return response;
      });
  };
};

/**
 * To call a service using the cancellable wrapper.
 */
export const cancellableService = factoryCancellableService();
