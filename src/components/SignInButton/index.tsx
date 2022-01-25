import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import { Container } from "./styles";

export function SignInButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <Container type="button">
      <FaGithub color="#04D361" />
      Agleylson Melo
      <FiX color="#737380" className="closeIcon" />
    </Container>
  ) : (
    <Container type="button">
      <FaGithub color="#EBA417" />
      Sign in with Github
    </Container>
  );
}
