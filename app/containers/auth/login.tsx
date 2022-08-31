import styles from "@/styles/auth/Login.module.css";
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Row,
  Space,
  Spin,
  Typography,
} from "antd";
import { useState } from "react";

type LoginContainerProps = {};

export const LoginContainer = (props: LoginContainerProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [form] = Form.useForm();

  const handlers = {
    login: (values: any) => {},
  };

  return (
    <Row
      className={styles.layout}
      align="middle"
      justify="center"
      style={{ height: "100vh" }}
    >
      <Col xs={21} sm={12} md={10} lg={8}>
        <Card>
          <Spin spinning={loading}>
            <Row gutter={[16, 16]} justify="center">
              <Col span={24} className={styles["text-center"]}>
                <Typography.Text strong={true} className={styles.title}>
                  CRM
                </Typography.Text>
                <br />
                <Typography.Text>Admin Portal</Typography.Text>
              </Col>
              <Col span={24}>
                <Form
                  layout="vertical"
                  form={form}
                  onFinish={handlers.login}
                  autoComplete="off"
                  validateMessages={{
                    required: "This field is required.",
                  }}
                >
                  <Form.Item name="username" rules={[{ required: true }]}>
                    <Input placeholder="Username" />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[{ required: true }]}
                    //   noStyle
                  >
                    <Input.Password
                      className={styles["full-width"]}
                      placeholder="Password"
                    />
                  </Form.Item>
                  <Form.Item className={styles["button-center"]}>
                    <Button type="primary" htmlType="submit">
                      Login
                    </Button>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </Spin>
        </Card>
      </Col>
    </Row>
  );
};
