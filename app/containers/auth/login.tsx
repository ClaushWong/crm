import styles from "@/styles/auth/Login.module.css";
import { Button, Card, Col, Form, Input, Row, Spin, Typography } from "antd";
import { useState } from "react";
import { useRouter } from "next/router";

type LoginContainerProps = {};

export const LoginContainer = (props: LoginContainerProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [form] = Form.useForm();
  const router = useRouter();

  const IS_REQUIRED = false;

  const handlers = {
    login: (values: any) => {
      router.push("/app/dashboard");
    },
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
                  <Form.Item
                    name="username"
                    rules={[{ required: IS_REQUIRED }]}
                  >
                    <Input placeholder="Username" />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[{ required: IS_REQUIRED }]}
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
