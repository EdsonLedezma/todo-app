
import AnimatedBackground from "~/components/AnimatedBackground"
import Sidebar from "./sidebar"
import PrivacyNoticeWrapper from "~/components/privacy"
import { Button } from "react-day-picker"
import { Wallet } from "lucide-react"
import WalletButton from "~/components/buttonWallet"


export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <WalletButton />
      <main className="flex-1 overflow-y-auto p-4">
        <PrivacyNoticeWrapper />
      </main>
    </>
  )
}

