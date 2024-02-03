import { ChangeEvent, FormEvent } from 'react';
import { Input } from '@/components/forms';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

interface Config {
	labelText: string;
	labelId: string;
	type: string;
	value: string;
	link?: {
		linkText: string;
		linkUrl: string;
	};
	required?: boolean;
}

interface Props {
	config: Config[];
	btnText: string;
    btnDark: boolean;
	// enter any tailwind class specific for this form
	customClass?: string;
	formSize?: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export default function Form({
	config,
	btnText,
    btnDark,
	customClass,
	formSize,
	onChange,
	onSubmit,
}: Props) {

	return (
		<form className={`${customClass}`} onSubmit={onSubmit}>
			{config.map(input => (
				<Input
					key={input.labelId}
					labelId={input.labelId}
					type={input.type}
					onChange={onChange}
					value={input.value}
					link={input.link}
					required={input.required}
					btnDark = {btnDark}
					formSize = {formSize}
				>
					{input.labelText}
				</Input>
			))}

			<div>
				<button
					type='submit'
					className= {`${inter.className} rounded-full ${btnDark ? 'bg-sf_green text-sf_white' : 'bg-sf_white text-sf_green'}  text-base w-40 h-14 sf_buttonHover mt-10`}
				>
					{btnText}
				</button>
			</div>
		</form>
	);
}