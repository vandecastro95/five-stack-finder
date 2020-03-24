export const CREATE_FIVESTACKLIST = 'fivestack/create';
export const NOTIFICATIONS_GLOBAL_CLEAR = 'notifications/local/cleared';
export const READ_NOTIFICATION = 'notification/read';

export const createFiveStack = payload => ({
  type: CREATE_FIVESTACKLIST,
  payload,
});