import { SanityDocument } from "next-sanity";
import Link from "next/link";
import Image from "next/image";
import imageBuilder from "../utils/imageBuilder";
import { Button } from "@/components/ui/button";
import { IoIosArrowRoundForward } from "react-icons/io";
const Posts = ({ posts = [] }: { posts: SanityDocument[] }) => {
  console.log("posts", posts);
  return (
    <div className="grid gap-x-20 gap-y-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <div key={index} className="text-center">
          <Link href={post.slug.current}>
            <Image
              src={imageBuilder(post.mainImage)}
              alt={post.mainImage.alt || post.title}
              width={600}
              height={1000}
              className="w-full object-cover aspect-[600/800] mb-4"
            />
            <h2 className="text-lg font-bold mb-2">{post.title}</h2>
            <p className="text-sm mb-2">{post.shortDescription}</p>
            <Button
              variant="ghost"
              className="cursor-pointer font-bold mx-auto flex items-center justify-center gap-x-2"
            >
              Read More
              <IoIosArrowRoundForward />
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Posts;
