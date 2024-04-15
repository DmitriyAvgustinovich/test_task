import { Form, Image, Input } from "antd";
import {
  profileFieldsDataIndexes,
  profileFieldsTitles,
} from "../../constants/constants";
import { IUser } from "../../store/api/types";

export const AccountFields = (userData: IUser, isEdit: boolean) => {
  const accountFields = [
    {
      name: profileFieldsDataIndexes.avatarUrl,
      node: <Image preview={false} width={400} src={userData?.avatarUrl} />,
    },
    {
      label: profileFieldsTitles.name,
      name: profileFieldsDataIndexes.name,
      node: <Input defaultValue={userData?.name} disabled={isEdit} />,
    },
    {
      label: profileFieldsTitles.password,
      name: profileFieldsDataIndexes.password,
      node: <Input disabled={isEdit} />,
    },
  ];

  return accountFields.map((field) => (
    <Form.Item {...field} key={field?.name}>
      {field.node}
    </Form.Item>
  ));
};
