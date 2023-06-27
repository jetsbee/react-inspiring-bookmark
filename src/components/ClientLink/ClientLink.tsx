"use client";

import Link, { LinkProps } from "next/link";

const ClientLink = ({
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps) => {
  return <Link {...props}>{children}</Link>;
};

export default ClientLink;
