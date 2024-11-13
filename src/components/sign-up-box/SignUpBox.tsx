import styles from "./SignUpBox.module.scss";
import IllustrationDesktop from "../../assets/images/illustration-sign-up-desktop.svg";
import IllustrationMobile from "../../assets/images/illustration-sign-up-mobile.svg";
import classNames from "classnames";
import Button from "../button/Button";
import { SignUpBoxProps } from "../../types";

const SignUpBox = ({
  email,
  handleSetEmail,
  handleSubmit,
  error,
}: SignUpBoxProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Stay updated!</h1>
        <p className={styles.desc}>
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <div className={styles.listContainer}>
          <span className={styles.item}>
            Product discovery and building what matters
          </span>
          <span className={styles.item}>
            Measuring to ensure updates are a success
          </span>
          <span className={styles.item}>And much more!</span>
        </div>
        <div
          className={classNames({
            [styles.input]: true,
            [styles.error]: error,
          })}
        >
          <div className={styles.labelContainer}>
            <label htmlFor="email">Email address</label>
            <span>Valid email required</span>
          </div>
          <input
            type="text"
            placeholder="email@company.com"
            value={email}
            onChange={(e) => handleSetEmail(e.target.value)}
          />
        </div>
        <Button
          title="Subscribe to monthly newsletter"
          onClick={handleSubmit}
        />
      </div>
      <div className={styles.imgContainer}>
        <img
          src={IllustrationDesktop}
          alt="illustration"
          className={styles.desktop}
        />
        <img
          src={IllustrationMobile}
          alt="illustration"
          className={styles.mobile}
        />
      </div>
    </div>
  );
};

export default SignUpBox;
