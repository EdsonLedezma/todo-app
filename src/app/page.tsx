
import AnimatedBackground from "~/components/AnimatedBackground"
import Sidebar from "./sidebar"
import PrivacyNoticeWrapper from "~/components/privacy"


export default function Home() {
  return (
    <>
      <AnimatedBackground />

      <main className="flex-1 overflow-y-auto p-4">
        <PrivacyNoticeWrapper />
      </main>
    </>
  )
}

