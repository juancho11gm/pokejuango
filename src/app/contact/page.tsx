import BalloonCard from "@/components/BalloonCard/BalloonCard";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <Link className="nes-btn mb-10!" href="/">
        Go Back
      </Link>

      <BalloonCard title="Contact" dialog="Let's connect!" />
    </main>
  );
}
