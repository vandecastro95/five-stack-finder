/**
 * Print every Redux action to log.
 * 
 * @param {object} store 
 * @param {func} next
 * @param {object}
 */
export const logger = store => next => action => {

    const { type = false, payload = false, error = false } = action;
  
    if (!type) {
      console.warn('Redux action detected, but is missing type or payload property. This action is consider malformed');
      return next(action);
    }
  
    const func = error ? 'warn' : 'log';
  
    if (action.type.indexOf('@@redux/') === 0 && false) {
      console.groupCollapsed(type);
      console[func]('Action', action);
      console[func]('State', payload);
      console[func]('Next State', store.getState());
      console.groupEnd();
    }
  
    return next(action);
  }