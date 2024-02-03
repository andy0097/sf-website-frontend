'use client';

import { joinNewsletter } from '@/hooks';
import { Form } from '@/components/forms';

interface Props {
	mobile?: boolean;
}

export default function NewsletterForm({mobile}: Props) {
	const {
		name,
		email,
		onChange,
		onSubmit,
	} = joinNewsletter();

	const config = [
		{
			labelText: 'Nume',
			labelId: 'name',
			type: 'text',
			value: name,
			required: true,
		},
		{
			labelText: 'Email',
			labelId: 'email',
			type: 'email',
			value: email,
			required: true,
		},
	];

	return (
		<Form
			config={config}
			btnText='Abonează-te'
			onChange={onChange}
			onSubmit={onSubmit}
            btnDark = {false}
			customClass = {mobile ? 'w-fit flex flex-col items-center' : `grid grid-cols-2 gap-x-4`}
			formSize = 's'
		/>
	);
}