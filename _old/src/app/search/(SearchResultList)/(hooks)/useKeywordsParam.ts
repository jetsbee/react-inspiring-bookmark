"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const useKeywordsParam = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const keywords = searchParams.get("keywords");

  useEffect(() => {
    if (!keywords) router.replace("/");
  }, [keywords, router]);

  return keywords;
};

export default useKeywordsParam;
