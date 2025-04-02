import Image from "next/image";

export default function BalloonCard({
  dialog,
  children,
  title,
}: {
  dialog: string;
  children?: React.ReactNode;
  title?: string;
}) {
  return (
    <section className="nes-container is-rounded is-dark with-title">
      <h1 className="title">{title}</h1>
      <section className="flex! flex-col gap-4 my-6! items-center! sm:flex-row">
        <div
          className="nes-balloon from-left is-dark sm:order-1"
          dangerouslySetInnerHTML={{
            __html: dialog,
          }}
        />
        <span className="flex! flex-col! items-center!">
          <Image
            src="/pixel_profile.png"
            alt="Juan González"
            width={150}
            height={160}
            className="flex-shrink-0"
          />
          <a className="text-white!" href="https://www.github.com/juancho11gm">
            @juancho11gm
          </a>
        </span>
      </section>

      <section className="my-4">{children}</section>
    </section>
  );
}
