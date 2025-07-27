import { sanityFetch } from "@/sanity/lib/fetch";
import { postsQuery } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";
import Posts from "@/components/Posts";
import ThemeToggler from "@/components/ThemeToggler";

export default async function Hosme() {
  const posts = await sanityFetch<SanityDocument[]>({ query: postsQuery });

  return (
    <main className="max-w-7xl mx-auto p-2 md:py-4">
      <div className="mb-10">
        <div className="flex items-center justify-between w-full mb-7">
          <h1 className="text-5xl font-bold">/nik.</h1>
          <div className="float-right">
            <ThemeToggler />
          </div>
        </div>
        <p className="text-lg max-w-2xl">
          a personal space for my thoughts, projects, and ideas. I write about
          the things I’m building, learning, and occasionally obsessing over. No
          fluff — just notes from the journey.
        </p>
      </div>
      <Posts posts={posts} />
    </main>
  );
}
