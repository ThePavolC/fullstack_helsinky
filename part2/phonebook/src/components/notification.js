import React from "react";

const SUCCESS = "success";
const FAILURE = "failure";

export const NOTIFICATION_STATUS = { SUCCESS, FAILURE };

const Notification = ({ notification }) => {
  const { message, status } = notification;
  if (message === null) {
    return null;
  }

  const classes = ["notification"];

  switch (status) {
    case SUCCESS:
      classes.push(NOTIFICATION_STATUS.SUCCESS);
      break;
    case FAILURE:
      classes.push(NOTIFICATION_STATUS.FAILURE);
      break;
    // no default
  }

  return <div className={classes.join(" ")}>{message}</div>;
};

export default Notification;
