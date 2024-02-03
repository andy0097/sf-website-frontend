import { useState, ChangeEvent, FormEvent } from 'react';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

export default function joinNewsletter() {

	const [formData, setFormData] = useState({
		name: '',
		email: '',
	});

	const { name, email } = formData;

	const resetForm =() => {
		setFormData({
			name: '',
			email: '',
		});
	}

	const onChange = (event : ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
		const { name, value } = event.target;


		setFormData({ ...formData, [name]: value });
	};

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();


        emailjs.send('service_zisjfo2', 'template_2efgrv9', formData, 'Ho2nB9qE3QwtWgs8l' )
            .then(() => {
				
				try {
					toast.success('Felicitări, ai fost abonat la newsletter-ul Sufletul Familiei, în curând vei fi anunțat pe email');
					resetForm();
				}
				catch (err) {
					toast.error('Abonarea ta nu a reușit, mai incearca o data!');
				}
                
            })
	};

	return {
		name,
		email,
		onChange,
		onSubmit,
	};
}