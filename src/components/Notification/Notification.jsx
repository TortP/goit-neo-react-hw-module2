import css from "./Notification.module.css";

const Notification = ({ children }) => {
  return <p className={css.notification}>{children}</p>;
};

export default Notification;
