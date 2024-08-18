import { reatomComponent } from "@reatom/npm-react";
import { notificationsAtom } from "./atoms";
import { NotificationToast } from "./NotificationToast";
import "./NotificationContainer.css";

export const NotificationContainer = reatomComponent(({ ctx }) => {
  const notifications = ctx.spy(notificationsAtom);

  return (
    <div className="notificationContainer">
      {notifications.map((notification) => (
        <NotificationToast key={notification.date.getTime()} {...notification} />
      ))}
    </div>
  );
});
