import { useForm } from "react-hook-form";
import styles from "./style.module.scss";
import Button from "../../ui/Button";
import { useTranslation } from "react-i18next";
import InputForm from "../../Form/InputForm";
import Input from "../../ui/Input";
import Checkbox from "../../ui/Checkbox";
import MyLink from "../../ui/MyLink";
import { ROUTE_NAMES } from "../../app/router";

export default function RegisterForm() {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <form
      className={styles.register_form + " style-block"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <div className={styles.register_form__inputs}>
          <div className={styles.register_form__inputs_flex}>
            <InputForm
              className={styles.register_form__input}
              // register={register}
              // name="name"
              // rules={{ required: "true", minLength: 10 }}
              error={errors.firstName?.message}
              rules={{ required: true, minLength: 10 }}
              register={register}
              name="firstName"
              placeholder={t("formFirstName")}
              // register={register("name", { required: "true", minLength: 10 })}
            />
            <InputForm
              className={styles.register_form__input}
              error={errors.lastName?.message}
              rules={{ required: true, minLength: 10 }}
              register={register}
              name="lastName"
              placeholder={t("formLastName")}
            />
          </div>
          <InputForm
            className={styles.register_form__input}
            error={errors.email?.message}
            rules={{ required: true, minLength: 10 }}
            register={register}
            name="email"
            type="email"
            placeholder={t("formEmail")}
          />
          <InputForm
            className={styles.register_form__input}
            error={errors.password?.message}
            rules={{ required: true, minLength: 10 }}
            register={register}
            name="password"
            type="password"
            placeholder={t("formPassword")}
          />
          <InputForm
            className={styles.register_form__input}
            error={errors.passwordConfirm?.message}
            rules={{ required: true, minLength: 10 }}
            register={register}
            name="passwordConfirm"
            type="password"
            placeholder={t("formPasswordConfirm")}
          />
        </div>
        <div className={styles.register_form__checkboxs}>
          <Checkbox>
            I understand that if I lose my password, I may lose my data. Read
            more about MegaMailer.io end-to-end encryption.
          </Checkbox>
          <Checkbox>
            I have read and understand MegaMailer.io Terms of Service
          </Checkbox>
        </div>
      </div>
      <Button
        className={styles.register_form__button}
        onClick={() => console.log(errors.name)}
      >
        {t("registerFormSubmit")}
      </Button>
      <div>
        Already have an account? <MyLink to={ROUTE_NAMES.login}>Log in</MyLink>
      </div>
    </form>
  );
}
