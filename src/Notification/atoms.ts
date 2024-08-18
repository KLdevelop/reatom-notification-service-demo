import { action, reatomArray, withAssign } from "@reatom/framework";
import { NotificationModel } from "./models";

export const notificationsAtom = reatomArray<NotificationModel>([], "notificationAtom").pipe(
  withAssign((notifAtom) => ({
    notify: action((ctx, notification: NotificationModel) =>
      notifAtom(ctx, (state) => [...state, notification])
    ),
    removeNotification: action((ctx, time: Date) =>
      notifAtom(ctx, (state) => {
        const newState = [...state];
        const notificationIndex = newState.findIndex(
          ({ date }) => date.getTime() === time.getTime()
        );
        newState.splice(notificationIndex, 1);

        return newState;
      })
    ),
  }))
);
