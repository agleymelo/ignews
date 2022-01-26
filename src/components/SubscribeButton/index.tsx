import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

import { api } from "../../services/api";
import { getStripeJs } from "../../services/stripe-js";

import { Container } from "./styles";

type SubscribeButtonProps = {
  priceId: string;
};

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const { data: session } = useSession();
  const router = useRouter();

  async function handleSubscribe() {
    if (!session) {
      signIn("github");
      return;
    }

    if (session.activeSubscription) {
      router.push("/posts");

      return;
    }

    // create checkout seassion
    try {
      const response = await api.post("subscribe");

      const { sessionId } = response.data;

      const stripe = await getStripeJs();

      await stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      alert(err.message);
    }
  }

  return <Container onClick={handleSubscribe}>Subscribe now!</Container>;
}
