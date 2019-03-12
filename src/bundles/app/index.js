/* global window */
import NotificationDispatcher from "../../js/helpers/NotificationDispatcher";
import CookiePolicy from "../../js/CookiePolicy";
import App from "../../js/App";

window.Skeleton = window.Skeleton || {};
window.Skeleton.notificationDispatcher = new NotificationDispatcher();
window.Skeleton.CookiePolicy = new CookiePolicy("#cookie-acceptance");
window.Skeleton.App = new App();
