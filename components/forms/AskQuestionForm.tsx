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
			labelText: 'Întrebare',
			labelId: 'question',
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