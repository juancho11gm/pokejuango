import { JSX, ReactNode } from "react";
import slug from "slug";

type HeadingAnchorProps = {
  children: ReactNode;
  HeadingTag: keyof JSX.IntrinsicElements;
};

export function HeadingAnchor({ children, HeadingTag }: HeadingAnchorProps) {
  const heading = children;
  const headingSlug = slug(heading as string);
  return (
    <HeadingTag id={headingSlug}>
      <a href={`#${headingSlug}`}>{heading}</a>
    </HeadingTag>
  );
}
