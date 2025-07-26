import { client } from "@/sanity/lib/client";
import imgUrlBuilder from "@sanity/image-url";

const builder = imgUrlBuilder(client);

export default function imageBuilder(src: string) {
  return builder.image(src).width(600).height(1000).url();
}
