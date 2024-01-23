import { useState } from 'react'
import { Form  } from 'react-bootstrap'

export default function ContactForm() {
    const [formFields, setFormFields] = useState({
        name: '',
        email: '',
        message: '',
    })

    const [result, setResult] = useState('')

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormFields({
            ...formFields,
            [name]: value,
        });
    };

    async function handleSubmit(evt) {
        evt.preventDefault();
        console.log('Form Submitted: ', formFields)
        setResult('Sending...');
        const formData = new FormData(evt.target);
        formData.append('access_key', process.env.REACT_APP_WEB3FORMS_ACCESS_KEY)

        const res = await fetch("https://api.web3forms.com/submit", {
            method: 'POST',
            body: formData
        }).then(res => res.json());

        if (res.success) {
            setResult(res.message);
            setFormFields({
                name: '',
                email: '',
                message: ''
            })
        } else {
            setResult(res.message); 
        }
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        value={formFields.name}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={formFields.email}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Type your message here"
                        name="message"
                        value={formFields.message}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <button className="button-blue" type="submit">Submit</button>
            </Form>
            <br />
            <span>{result}</span>
        </>
    )
}