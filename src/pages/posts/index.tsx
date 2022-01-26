import { GetStaticProps } from "next";

import Head from "next/head";
import Link from "next/link";

import * as Prismic from "@prismicio/client";
import { asText } from "@prismicio/helpers";

import { getPrismicClient } from "../../services/prismic";

import { Container, Posts } from "./styles";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
};

type PostProps = {
  posts: Post[];
};

export default function Post({ posts }: PostProps) {
  return (
    <>
      <Head>
        <title>Posts | ig.news</title>
      </Head>

      <Container>
        <Posts>
          {posts.map((post) => (
            <Link href={`/posts/${post.slug}`} key={post.slug}>
              <a>
                <time>{post.updatedAt}</time>
                <strong>{post.title}</strong>
                <p>{post.excerpt}</p>
              </a>
            </Link>
          ))}
        </Posts>
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.get({
    predicates: Prismic.predicate.at("document.type", "publication"),
    fetch: ["publication.title", "publication.content"],
    pageSize: 10,
  });

  const posts = response.results.map((post) => {
    return {
      slug: post.uid,
      title: asText(post.data.title),
      excerpt:
        post.data.content.find((content) => content.type === "paragraph")
          ?.text ?? "",
      updatedAt: new Date(post.last_publication_date).toLocaleDateString(
        "pt-BR",
        {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }
      ),
    };
  });

  return {
    props: {
      posts,
    },
  };
};
