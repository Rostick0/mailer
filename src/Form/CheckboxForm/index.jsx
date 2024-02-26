import Control from "../../components/Control";

export default function CheckboxForm({ label, error, type, ...other }) {
  return (
    <Control label={label} error={error}>
      <label className={styles.checkbox}>
        <input className={styles.checkbox__input} type="checkbox" {...other} />
        <span className={styles.checkbox__icon}></span>
        <span className={styles.checkbox__name}>{children}</span>
      </label>
    </Control>
  );
}
