import { useState } from 'react'
import { Form  } from 'react-bootstrap'
import axios from 'axios'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [errorMsg, setErrorMsg] = useState("")
    const [successMsg, setSuccessMsg] = useState("")

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    async function handleSubmit(evt) {
        evt.preventDefault();
        console.log('Form Submitted: ', formData)
        try{
        
            await axios.post('/send-email', formData);
            setSuccessMsg("Email sent successfully.")
            setFormData({
                name: '',
                email: '',
                message: '',
            })
        } catch (err) {
            setErrorMsg(err.message)
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
                        value={formData.name}
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
                        value={formData.email}
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
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <button className="button-blue" type="submit">Submit</button>
                {/* <Button variant="primary" className="button-blue" type="submit">
                    Submit
                </Button> */}
            </Form>
            <p>{successMsg}</p>
            <p>{errorMsg}</p>
        </>
    )
}