import { SanityDocument } from "next-sanity";
import Link from "next/link";
import Image from "next/image";
import imageBuilder from "../app/utils/imageBuilder";
const Posts = ({ posts = [] }: { posts: SanityDocument[] }) => {
  return (
    <>
      <div className="text-white grid gap-x-5 gap-y-7 grid-cols-1 md:grid-cols-2">
        {posts.map((post, index) => (
          <Link href={post.slug.current} key={index}>
            <div className="h-full text-center flex items-center justify-evenly py-5 px-2 transition-all duration-300 ease-in-out rounded-md hover:-translate-y-3 bg-zinc-800">
              <div className="basis-2/3">
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="text-sm mb-2 opacity-70">
                  {post.shortDescription}
                </p>
              </div>

              <Image
                src={imageBuilder(post.mainImage)}
                alt={post.mainImage?.alt ? post.mainImage.alt : post.title}
                width={600}
                height={1000}
                className="w-full max-w-40 object-cover aspect-square rounded-lg mb-4"
              />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Posts;
