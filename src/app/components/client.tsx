"use client"

import { useEffect, useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function HomeClient() {
	const { wallet } = useWallet();
	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		setIsClient(true)
	}, [])
	return (
		isClient && (
			<div>
					<WalletMultiButton />
			</div>
		)
	);
}