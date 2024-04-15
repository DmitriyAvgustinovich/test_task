import { Button, Form, Typography, message } from "antd";
import { ValidateErrorEntity } from "rc-field-form/lib/interface";
import { profileFields } from "./profileFields";
import styles from "./RegisterForm.module.scss";

export const RegisterForm = () => {
  const profileValues = {};

  const onFinishCreateQuestionnaire = () => {
    console.log("Fields submitted successfully", profileValues);
    message.success("Профиль создана!");
  };

  const onFailedCreateQuestionnaire = (formValues: ValidateErrorEntity) => {
    const notFilledFields = formValues.errorFields
      .map((errorField) => errorField.errors)
      .join(", ")
      .replace(new RegExp("Пожалуйста, введите", "g"), "")
      .replace(/,([^,]*)$/, " и$1");

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
        {profileFields.map((field) => (
          <Form.Item {...field} key={field.name}>
            {field.node}
          </Form.Item>
        ))}

        <Button type="primary" htmlType="submit">
          Зарегестрироваться
        </Button>
      </Form>
    </div>
  );
};
