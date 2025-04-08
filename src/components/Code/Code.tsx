import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import { HeadingAnchor } from "../HeadingAnchor/HeadingAnchor";

export function Code({ content }: { content: string }) {
  return (
    <div className="markdown">
      <ReactMarkdown
        rehypePlugins={[rehypeHighlight]}
        remarkPlugins={[remarkGfm]}
        components={{
          code({ children, ...props }) {
            return (
              <code className="bg-gray-800 rounded px-1" {...props}>
                {children}
              </code>
            );
          },

          h1: (props) => (
            // eslint-disable-next-line react/no-children-prop
            <HeadingAnchor children={props.children} HeadingTag="h1" />
          ),
          h2: (props) => (
            // eslint-disable-next-line react/no-children-prop
            <HeadingAnchor children={props.children} HeadingTag="h2" />
          ),
          h3: (props) => (
            // eslint-disable-next-line react/no-children-prop
            <HeadingAnchor children={props.children} HeadingTag="h3" />
          ),
          h4: (props) => (
            // eslint-disable-next-line react/no-children-prop
            <HeadingAnchor children={props.children} HeadingTag="h4" />
          ),
          h5: (props) => (
            // eslint-disable-next-line react/no-children-prop
            <HeadingAnchor children={props.children} HeadingTag="h5" />
          ),
          h6: (props) => (
            // eslint-disable-next-line react/no-children-prop
            <HeadingAnchor children={props.children} HeadingTag="h6" />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
