"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";

const useSearchForm = (pagePath: string) => {
  const router = useRouter();
  const textInputRef = useRef<HTMLInputElement>(null);
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!textInputRef.current?.value) {
      textInputRef.current?.focus();
      return;
    }

    router.push(
      `${pagePath}?keywords=${textInputRef.current?.value.replace(" ", "+")}`
    );
  };

  return { handleFormSubmit, textInputRef };
};

export default useSearchForm;
