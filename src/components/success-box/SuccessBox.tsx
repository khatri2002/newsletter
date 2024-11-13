import styles from "./SuccessBox.module.css";
import IconSuccess from "../../assets/images/icon-success.svg";
import Button from "../button/Button";
import { SuccessBoxProps } from "../../types";

const SuccessBox = ({ email, handleDismiss }: SuccessBoxProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.upperSection}>
        <img src={IconSuccess} alt="success-icon" />
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to
          <span className={styles.bold}> {email}</span>. Please open it and
          click the button inside to confirm your subscription.
        </p>
      </div>
      <Button title="Dismiss message" onClick={handleDismiss} />
    </div>
  );
};

export default SuccessBox;
