import { sanityFetch } from "@/sanity/lib/fetch";
import { postsQuery } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";
import Posts from "./components/Posts";

export default async function Home() {
  const posts = await sanityFetch<SanityDocument[]>({ query: postsQuery });

  return (
    <main className="p-2 px-12 md:py-4">
      <div className="mb-10 max-w-2xl">
        <h1 className="text-5xl font-bold mb-7">/nik.</h1>
        <p className="text-lg">
          a personal space for my thoughts, projects, and ideas. I write about
          the things I’m building, learning, and occasionally obsessing over. No
          fluff — just notes from the journey.
        </p>
      </div>
      <Posts posts={posts} />
    </main>
  );
}
