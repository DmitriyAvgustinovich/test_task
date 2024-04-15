import { Button, Form, Typography, message } from "antd";
import { ValidateErrorEntity } from "rc-field-form/lib/interface";
import styles from "./RegisterForm.module.scss";
import { AND_VALIDATE_MESSAGE, DEFAULT_VALIDATE_MESSAGE } from "./constants";
import { ProfileFields } from "./ProfileFields";
import { useRegisterMutation } from "../../store/api/authApi";

export const RegisterForm = () => {
  const [register] = useRegisterMutation();

  const onFinishCreateQuestionnaire = (formValues) => {
    console.log(formValues);
    register({
      ...formValues,
      avatarUrl: formValues.avatarUrl.fileList[0].response.url,
    });
    message.success("Профиль создан!");
  };

  const onFailedCreateQuestionnaire = (formValues: ValidateErrorEntity) => {
    const notFilledFields = formValues.errorFields
      .map((errorField) => errorField.errors)
      .join(", ")
      .replace(new RegExp(DEFAULT_VALIDATE_MESSAGE, "g"), "")
      .replace(/,([^,]*)$/, ` ${AND_VALIDATE_MESSAGE}$1`);

    message.error(
      <>
        Заполните обязательные поля!
        <p>
          Осталось заполнить - <b>{notFilledFields}</b>
        </p>
      </>
    );
  };

  return (
    <div className={styles.Form}>
      <Typography.Title>Создать профиль</Typography.Title>

      <Form
        layout="vertical"
        onFinish={onFinishCreateQuestionnaire}
        onFinishFailed={onFailedCreateQuestionnaire}
      >
        <ProfileFields />
        <Button type="primary" htmlType="submit">
          Зарегестрироваться
        </Button>
      </Form>
    </div>
  );
};
