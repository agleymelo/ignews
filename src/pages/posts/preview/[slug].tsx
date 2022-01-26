import { useEffect } from "react";

import { GetStaticPaths, GetStaticProps } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

import { asHTML, asText } from "@prismicio/helpers";

import { getPrismicClient } from "../../../services/prismic";

import { Container, PostContent, ContinueReading } from "./styles";

type PostPreview = {
  post: {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  };
};

export default function PostPreview({ post }: PostPreview) {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.activeSubscription) {
      router.push(`/posts/${post.slug}`);
    }
  }, [post.slug, router, session]);

  return (
    <>
      <Head>
        <title>{post.title} | ig.news</title>
      </Head>

      <Container>
        <article>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>

          <PostContent
            previewContent={true}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <ContinueReading>
            Wanna continue reading?{" "}
            <Link href="/">
              <a>Subscribe now 🤗</a>
            </Link>
          </ContinueReading>
        </article>
      </Container>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          slug: "obtendo-o-status-de-progresso-do-envio-de-dados-com-axios",
        },
      },
    ],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const prismic = getPrismicClient();

  const response = await prismic.getByUID("publication", String(slug));

  const post = {
    slug,
    title: asText(response.data.title),
    content: asHTML(response.data.content.splice(0, 2)),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString(
      "pt-BR",
      {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }
    ),
  };

  return {
    props: {
      post,
    },
    revalidate: 60 * 30, // 30 minutes
  };
};
