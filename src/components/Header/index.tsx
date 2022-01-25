import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <img src="/images/logo.svg" alt="ig.news" />

        <nav>
          <a className="active">Home</a>
          <a>Post</a>
        </nav>
      </Content>
    </Container>
  );
}
