import Image from "next/image";

import { ActiveLink } from "../ActiveLink";
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
          <ActiveLink activeClassName="active" href="/">
            <a>Home</a>
          </ActiveLink>

          <ActiveLink activeClassName="active" href="/posts">
            <a>Post</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </Content>
    </Container>
  );
}
