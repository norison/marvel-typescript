import React from "react";
import error from "./error.gif";

const ErrorMessage: React.FC = () => {
  const styles = {
    display: "block",
    width: "250px",
    height: "250px",
    margin: "0 auto",
  };

  return <img style={styles} src={error} alt="error" />;
};

export default ErrorMessage;
