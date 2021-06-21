import { Alert, Divider, PageHeader, Space, Typography } from "antd";

export function About() {
  return (
    <Space direction="vertical">
      <Alert
        type="info"
        message="Paying Tokens to Contributors"
        description={
          <>
            I am currently looking for talented Rec Room artists to make
            everything prettier! I'm offering to provide tokens (and credit, of
            course!) based on the work done. Visit the Contribute page for more
            info!
          </>
        }
        style={{ margin: "2rem" }}
        showIcon={true}
        closable={true}
      />
      <Divider orientation="left">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography.Title level={1} style={{ margin: 0 }}>
            Not So Final Fantasy
          </Typography.Title>

          <PageHeader title="A Turn-Based Adventure in Rec Room" />
        </div>
      </Divider>
    </Space>
  );
}
