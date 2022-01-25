import Image from "next/image";
import { SignInButton } from "../SignInButton";

import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <Image
          src="/images/logo.svg"
          alt="ig.news"
          width="100%"
          height="100%"
        />

        <nav>
          <a className="active">Home</a>
          <a>Post</a>
        </nav>

        <SignInButton />
      </Content>
    </Container>
  );
}
