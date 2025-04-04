/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client"
import React, { FC, useCallback, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { Adapter, WalletAdapterNetwork, WalletError } from '@solana/wallet-adapter-base';
import {
    WalletModalProvider,
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import { toast } from 'sonner';
import {
    PhantomWalletAdapter,
    SolflareWalletAdapter,

} from '@solana/wallet-adapter-wallets';

// Default styles that can be overridden by your app
require('@solana/wallet-adapter-react-ui/styles.css');

type Props = {
    children?: React.ReactNode;
};

export const Wallet: FC<Props> = ({ children }) => {
    // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const network = WalletAdapterNetwork.Devnet;

    // You can also provide a custom RPC endpoint.
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    const wallets = useMemo(
        () => [
            new PhantomWalletAdapter(),
            new SolflareWalletAdapter(),

        ],
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [network]
    );

    const onError = useCallback(
        (error: WalletError, adapter?: Adapter) => {
            toast.error(error.message);
            console.error(error, adapter);
        },
        [toast]
    );

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect onError={onError}>
                <WalletModalProvider>
                    {children}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};