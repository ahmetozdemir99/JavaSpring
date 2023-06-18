import classes from "./NotificationsBar.module.css";

const NotificationsBar = (props) => {
  return (
    props.show && (
      <div className={classes.container}>
        <div className={classes.notificationList}>
          <div className={classes.notification}>Notification 1</div>
          <div className={classes.notification}>Notification 2</div>
          <div className={classes.notification}>Notification 3</div>
        </div>
      </div>
    )
  );
};
export default NotificationsBar;
