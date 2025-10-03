import { TextHoverEffect } from "@/components/text-hover";
import { GridPattern } from "@/components/grid";
import { cn } from "@/lib/utils";
import Guests from "@/components/guests";

export default function Home() {
  return (
    <div className="relative flex h-screen w-full items-start justify-center bg-white dark:bg-black">
      <div className="flex flex-col w-[50%] h-[50%">
        <TextHoverEffect text="COLLABITY" />
        <div className="flex flex-col w-full justify-center items-center gap-8 text-center text-xl">
          <Guests />
        </div>
        <div></div>
      </div>
      <GridPattern width={35} height={35} x={-1} y={-1} className={cn("[mask-image:linear-gradient(to_top_left,grey,transparent,transparent)]")} />
    </div>
  );
}
