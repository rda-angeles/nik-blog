import { SanityDocument } from "next-sanity";
import { postQuery, postPathsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import imageBuilder from "../utils/imageBuilder";

export const revalidate = 86400;

export async function generateStaticParams() {
  const posts = await client.fetch(postPathsQuery);
  return posts;
}

export default async function Post({ params }: { params: { post: string } }) {
  const awaitedParams = await params;
  const post = await sanityFetch<SanityDocument>({
    query: postQuery,
    params: awaitedParams,
  });

  return (
    <article className="max-w-5xl mx-auto">
      {post.title}

      {post.mainImage ? (
        <Image
          src={imageBuilder(post.mainImage)}
          alt={post.mainImage.alt}
          width={600}
          height={600}
          className="w-full aspect-[4/3] object-cover"
        />
      ) : null}

      {post.body ? <PortableText value={post.body} /> : null}
    </article>
  );
}
