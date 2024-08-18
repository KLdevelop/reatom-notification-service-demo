export const NotificationStatus = {
  ok: "ok",
  error: "error",
  warning: "warning",
  none: "none",
} as const;

export type NotificationStatusModel = (typeof NotificationStatus)[keyof typeof NotificationStatus];

export type NotificationModel = {
  date: Date;
  title?: string;
  message: string;
  status: NotificationStatusModel;
  delay?: number;
};
