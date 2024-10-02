// Import the notifications.json data
import * as notifications from '../notifications.json';

// Function to get all notifications by user ID
export function getAllNotificationsByUser(userId) {
  return notifications.default.filter(notification => notification.id === userId);
}

