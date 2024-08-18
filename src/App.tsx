import { NotificationContainer } from "./Notification/NotificationContainer";
import { notificationService } from "./Notification/NotificationService";
import { useState } from "react";
import "./App.css";
import { NotificationStatus, NotificationStatusModel } from "./Notification/models";

function App() {
  const [counter, setCounter] = useState<number>(1);
  const notificate = (status: NotificationStatusModel) => {
    notificationService.notify({
      date: new Date(),
      delay: 5000,
      title: "Notificated counter " + counter,
      message: "Counter is " + counter,
      status,
    });
    setCounter(counter + 1);
  };

  return (
    <>
      <button type="button" onClick={() => notificate(NotificationStatus.ok)}>
        Notificate with ok
      </button>
      <button type="button" onClick={() => notificate(NotificationStatus.warning)}>
        Notificate with warning
      </button>
      <button type="button" onClick={() => notificate(NotificationStatus.error)}>
        Notificate with error
      </button>
      <NotificationContainer />
    </>
  );
}

export default App;
