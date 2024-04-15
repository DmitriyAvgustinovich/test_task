import React from "react";
import { useGetMeQuery } from "../../store/api/authApi";
import { Page } from "../Page/Page";
import { Button, Form, Spin, Typography } from "antd";
import { AccountFields } from "./AccountFields";
import { useUpdateUserMutation } from "../../store/api/usersApi";
import { IUser } from "../../store/api/types";
import { ValidateErrorEntity } from "rc-field-form/lib/interface";

export const Account = () => {
  const [isEdit, setIsEdit] = React.useState(false);

  const { data: userData, isLoading } = useGetMeQuery(null);
  const [updateUser] = useUpdateUserMutation();

  const onFinishCreateQuestionnaire = (formValues: IUser) => {
    updateUser(formValues);
    setIsEdit(false);
  };
  const onFailedCreateQuestionnaire = (formValues: ValidateErrorEntity) => {
    console.log(formValues);
  };

  if (isLoading) return <Spin size="large" />;

  return (
    <Page>
      <Typography.Title>Профиль</Typography.Title>
      <Form
        layout="vertical"
        onFinish={onFinishCreateQuestionnaire}
        onFinishFailed={onFailedCreateQuestionnaire}
      >
        {!isLoading && AccountFields(userData, !isEdit)}
        {!isEdit ? (
          <Button onClick={() => setIsEdit(true)} type="primary">
            Редактировать профиль
          </Button>
        ) : (
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Сохранить изменения
          </Button>
        )}
      </Form>
    </Page>
  );
};
