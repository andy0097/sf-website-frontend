import { useState, ChangeEvent, FormEvent } from 'react';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

export default function bookEvent() {

	const [formData, setFormData] = useState({
		email: '',
		eventDate: '',
		message: '',
	});

	const { email, eventDate, message } = formData;

	const resetForm =() => {
		setFormData({
			email: '',
			eventDate: '',
			message: '',
		});
	}

	const onChange = (event : ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
		const { name, value } = event.target;


		setFormData({ ...formData, [name]: value });
	};

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();


        emailjs.send('service_gcco4wq', 'template_xeaqpke', formData, 'OrccYEO_WVDTFrusX' )
            .then(() => {
				
				try {
					toast.success('Cererea ta a fost inregistrata, te vom contacta pe email in cel mai scurt timp');
					resetForm();
				}
				catch (err) {
					toast.error('Mesajul nu a fost trimis, incearca sa mai trimiti o data!');
				}
                
            })

		
	};

	return {
		email,
		eventDate,
		message,
		onChange,
		onSubmit,
	};
}