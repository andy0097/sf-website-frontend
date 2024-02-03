'use client';

import { askQuestion } from '@/hooks';
import { Form } from '@/components/forms';

export default function AskQuestionForm() {
	const {
		name,
		email,
		message,
		onChange,
		onSubmit,
	} = askQuestion();

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
        {
			labelText: 'Message',
			labelId: 'message',
			type: 'textarea',
			value: message,
			required: true,
		},
	];

	return (
		<Form
			config={config}
			btnText='Submit'
			onChange={onChange}
			onSubmit={onSubmit}
            btnDark = {true}
		/>
	);
}