import { Button, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

export const UploadButton = () => {
  const props = {
    name: "image",
    action: "http://localhost:4444/upload",
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }

      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const getUploadButton = () => (
    <Upload {...props}>
      <Button icon={<UploadOutlined />}>Click to Upload</Button>
    </Upload>
  );

  return getUploadButton;
};
