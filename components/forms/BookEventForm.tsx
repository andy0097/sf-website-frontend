'use client';

import { bookEvent } from '@/hooks';
import { Form } from '@/components/forms';

export default function BookEventForm() {
	const {
		email,
		eventDate,
		message,
		onChange,
		onSubmit,
	} = bookEvent();

	const config = [
		{
			labelText: 'Email',
			labelId: 'email',
			type: 'email',
			value: email,
			required: true,
		},
		{
			labelText: 'Data aproximativă a eveniment',
			labelId: 'eventDate',
			type: 'date',
			value: eventDate,
			required: true,
		},
        {
			labelText: 'Detalii',
			labelId: 'details',
			type: 'textarea',
			value: message,
			required: true,
		},
	];

	return (
		<Form
			config={config}
			btnText='Trimite'
			onChange={onChange}
			onSubmit={onSubmit}
            btnDark = {true}
		/>
	);
}