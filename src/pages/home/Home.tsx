import { useState } from "react";
import SignUpBox from "../../components/sign-up-box/SignUpBox";
import SuccessBox from "../../components/success-box/SuccessBox";
import styles from "./Home.module.css";
import * as EmailValidator from "email-validator";

const Home = () => {
  const [email, setEmail] = useState<string>("");
  const handleSetEmail = (email: string) => setEmail(email);

  const [error, setError] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const handleSubmit = () => {
    if (!EmailValidator.validate(email)) setError(true);
    else {
      setError(false);
      setShowSuccess(true);
    }
  };

  const handleDismiss = () => {
    setEmail("");
    setShowSuccess(false);
  };

  return (
    <main className={styles.main}>
      {showSuccess ? (
        <SuccessBox email={email} handleDismiss={handleDismiss} />
      ) : (
        <SignUpBox
          email={email}
          handleSetEmail={handleSetEmail}
          handleSubmit={handleSubmit}
          error={error}
        />
      )}
    </main>
  );
};

export default Home;
