import { NotificationModel } from "./models";
import "./NotificationToast.css";

type NotificationToastProps = Omit<NotificationModel, "delay">;

export const NotificationToast = ({ date, title, message, status }: NotificationToastProps) => {
  return (
    <div className={`notificationToast ${status}`}>
      {title && <h3 className="notificationToast__title">{title}</h3>}
      <p className="notificationToast__message">{message}</p>
      <time
        className="notificationToast__time"
        dateTime={date.toISOString()}
      >{`${date.getHours()}:${date.getMinutes()}`}</time>
    </div>
  );
};
