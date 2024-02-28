import styles from "./style.module.scss";
import stylesCheckbox from "../../ui/Checkbox/style.module.scss";
import Control from "../../ui/Control";

export default function CheckboxForm({
  className,
  label,
  error,
  register,
  type = null,
  name = "",
  rules = {},
  children,
  ...other
}) {
  return (
    <Control className={className} label={label} error={error}>
      <label className={stylesCheckbox.checkbox}>
        <input
          className={stylesCheckbox.checkbox__input}
          type="checkbox"
          {...register(name, rules)}
          {...other}
        />
        <span className={stylesCheckbox.checkbox__icon}></span>
        <span className={stylesCheckbox.checkbox__name}>{children}</span>
      </label>
    </Control>
  );
}
