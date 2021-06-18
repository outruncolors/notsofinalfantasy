import { Alert, PageHeader } from "antd";

export function About() {
  return (
    <>
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
      <PageHeader title="A Turn-Based Adventure in Rec Room" />
    </>
  );
}
