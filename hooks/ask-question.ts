import { useState, ChangeEvent, FormEvent } from 'react';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

export default function askQuestion() {

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const { name, email, message } = formData;

	const resetForm =() => {
		setFormData({
			name: '',
			email: '',
			message: '',
		});
	}

	const onChange = (event : ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
		const { name, value } = event.target;


		setFormData({ ...formData, [name]: value });
	};

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();


        emailjs.send('service_zisjfo2', 'template_5ew3p4d', formData, 'Ho2nB9qE3QwtWgs8l' )
            .then(() => {
				
				try {
					toast.success('Intrebarea ta a fost trimisa cu succes. O vom citi si vom reveni in cel mai scurt timp cu un email');
					resetForm();
				}
				catch (err) {
					toast.error('Mesajul nu a fost trimis, mai incearca o data!');
				}
                
            })

		
	};

	return {
		name,
		email,
		message,
		onChange,
		onSubmit,
	};
}