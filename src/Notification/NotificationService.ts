import { ctx } from "../reatom/context";
import { notificationsAtom } from "./atoms";
import { NotificationModel } from "./models";

class NotificationService {
  notify(notfication: NotificationModel) {
    const { delay, date } = notfication;

    notificationsAtom.notify(ctx, notfication);

    if (delay) {
      setTimeout(() => notificationsAtom.removeNotification(ctx, date), delay);
    }
  }

  closeNotification(time: Date) {
    notificationsAtom.removeNotification(ctx, time);
  }
}

export const notificationService = new NotificationService();
