import styles from "./Confirmation.module.css";

function Confirmation() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Form Submitted Successfully!</h1>
      <p className={styles.message}>
        Thank you for your submission. We will get back to you soon.
      </p>
    </div>
  );
}

export default Confirmation;
