

import { HydrateClient } from "~/trpc/server";

import AnimatedBackground from "~/components/animacion";
import Sidebar from "./sidebar";

export default async function Home() {
  return (
    <HydrateClient>
      <>


        <AnimatedBackground />

      </>
    </HydrateClient>
  );
}