import { useRef, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Routes } from "./src/routes";
import "./src/provider/notificationConfig";

import { Subscription } from "expo-modules-core";
import * as Notifications from "expo-notifications";

import { getPushNotificationToken } from "./src/provider/getPushNotificationToken";

export default function App() {
  const getNotificationListening = useRef<Subscription>();
  const responseNotificationListening = useRef<Subscription>();

  useEffect(() => {
    getPushNotificationToken();
  }, []);

  useEffect(() => {
    getNotificationListening.current =
      Notifications.addNotificationReceivedListener((response) => {
        console.log(response);
      });

    responseNotificationListening.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });
  }, []);

  return <Routes />;
}
