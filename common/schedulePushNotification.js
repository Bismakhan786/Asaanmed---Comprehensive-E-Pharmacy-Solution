import * as Notifications from 'expo-notifications';

export async function schedulePushNotification({title, body}) {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: title,
        body: body,
      },
      trigger: { seconds: 1 },
    });
  }