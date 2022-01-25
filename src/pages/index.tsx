import { GetStaticProps } from "next";

import Head from "next/head";

import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../services/stripe";

import { Container, Hero } from "./home.styles";

type HomeProps = {
  product: {
    priceId: string;
    amount: number;
  };
};

export default function Home({ product }: HomeProps) {
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
            <span>for {product.amount} month</span>
          </p>

          <SubscribeButton priceId={product.priceId} />
        </Hero>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1Jtfn1BLqH32stV56Yz6FouH");

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
