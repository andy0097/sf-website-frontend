import { ChangeEvent } from 'react';
import Link from 'next/link';

interface Props {
	labelId: string;
	type: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	value: string;
	children: React.ReactNode;
	link?: {
		linkText: string;
		linkUrl: string;
	};
	required?: boolean;
	btnDark?: boolean;
	formSize?: string;
}

export default function Input({
	labelId,
	type,
	onChange,
	value,
	children,
	link,
	required = false,
	btnDark,
	formSize,
}: Props) {
	return (
		<div >
			<div className='flex justify-between align-center mb-5 mt-10'>
				<label
					htmlFor={labelId}
					className={`block ${btnDark ? 'text-sf_green' : 'text-sf_white'}`}
				>
					{children}
				</label>
				{link && (
					<div className='text-sm'>
						<Link
							className='font-semibold text-indigo-600 hover:text-indigo-500'
							href={link.linkUrl}
						>
							{link.linkText}
						</Link>
					</div>
				)}
			</div>
			<div >
				{type == 'textarea' ?
					<textarea
						id={labelId}
						className= {`${type == 'textarea' ? 'textareablock' : ''} block w-full rounded-md border-2 h-14 px-2 text-sf_darkgreen focus:ring-sf_green`}
						name={labelId}
						value={value}
						required={required}
						rows = {3}
						onChange={onChange}

					/>				

					:

					<input
						id={labelId}
						className= {`${type == 'textarea' ? 'textareablock' : ''} block w-full rounded-[12px] border-2 ${formSize == 's' ? 'h-10' : 'h-14'} px-2 text-sf_darkgreen focus:ring-sf_green`}
						name={labelId}
						type={type}
						onChange={onChange}
						value={value}
						required={required}
					/>
				}
				
			</div>
		</div>
	);
}