import { setClassName } from "../../app/utils/class";
import stylesInput from "../../ui/Input/style.module.scss";
import Control from "../../ui/Control";

export default function InputForm({
  className,
  label,
  error,
  register,
  name = "",
  rules = {},
  ...other
}) {

  return (
    <Control className={className} label={label} error={error}>
      <input
        className={stylesInput.input}
        {...register(name, rules)}
        {...other}
      />
    </Control>
  );
}
