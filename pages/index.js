import dynamic from "next/dynamic";
const Container = dynamic(() => import("../components/container"), {});
function Index(props) {
  return (
    <Container>
      <h1>Blog</h1>
    </Container>
  );
}
export default Index;
