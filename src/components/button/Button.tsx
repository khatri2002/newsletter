import { ButtonProps } from "../../types";
import styles from "./Button.module.scss";

const Button = ({ title, onClick }: ButtonProps) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
