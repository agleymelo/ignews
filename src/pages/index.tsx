import Head from "next/head";
import Image from "next/image";

import { Container, Hero } from "./home.styles";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <Container>
        <Hero>
          <span>👏 Hey, welcome</span>
          <h1>
            New about the <span>React</span> world.
          </h1>

          <p>
            Get access to all the publications <br />
            <span>for $9.90 moth</span>
          </p>
        </Hero>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </Container>
    </>
  );
}
