"use client";
import { Suspense } from 'react';
import './wallet.css';
import dynamic from 'next/dynamic';

import '@solana/wallet-adapter-react-ui/styles.css';

const WalletMultiButtonDynamic = dynamic(
    async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
    { ssr: false }
);

export default function WalletButton() {
    return (
        <div className="flex items-center justify-center mr-10 lg:mr-20">
            <Suspense fallback={<div></div>}>
                <WalletMultiButtonDynamic />
            </Suspense>
        </div>
    );
}