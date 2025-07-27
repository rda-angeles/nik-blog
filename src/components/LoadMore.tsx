"use client";

import { useState } from "react";
import { Button } from "./ui/button";

const LoadMore = ({ postsLength }: { postsLength: number }) => {
  const [visibleShoes, setVisibleShoes] = useState<number>(6);

  const handleLoadMore = () => {
    setVisibleShoes((prev) => prev + 6);
  };

  return <Button>LoadMore</Button>;
};

export default LoadMore;
