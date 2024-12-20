"use client";
import { useState } from 'react';
import { Button } from './Button';

export default function CreateCompanyForm() {
	const [companyName, setCompanyName] = useState('');
	const [amount, setAmount] = useState(0);
	const [companySiren, setCompanySiren] = useState(0);
	const [companyAddress, setCompanyAddress] = useState('');

	return (
		<div>
			<div>
				<label className="block text-sm font-medium">Nom de l'entreprise</label>
				<input
					type="text"
					value={companyName}
					onChange={(e) => setCompanyName(e.target.value)}
					className="w-full p-2 border rounded"
					required
				/>
			</div>

			<div>
				<label className="block text-sm font-medium">SIREN de l'entreprise</label>
				<input
					type="number"
					value={companySiren}
					onChange={(e) => setCompanySiren(Number(e.target.value))}
					className="w-full p-2 border rounded"
					required
				/>
			</div>

			<div>
				<label className="block text-sm font-medium">Montant</label>
				<input
					type="number"
					value={amount}
					onChange={(e) => setAmount(Number(e.target.value))}
					className="w-full p-2 border rounded"
					required
				/>
			</div>

			<div>
				<label className="block text-sm font-medium">Adresse Solana</label>
				<input
					type="text"
					value={companyAddress}
					onChange={(e) => setCompanyAddress(e.target.value)}
					className="w-full p-2 border rounded"
					required
				/>
			</div>

			<Button /* onClick={putNumber}*/ className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors border-2 border-transparent hover:border-purple-500">
				      enregistrer l'entreprise
			</Button>
		</div>
	);
}
