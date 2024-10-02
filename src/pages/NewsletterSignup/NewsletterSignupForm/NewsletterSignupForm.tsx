import React from "react";
import Button from "../../../components/Button";
import Form from "../../../components/Form/Form";
import TextInput from "../../../components/Form/TextInput/TextInput";

import './NewsletterSignupForm.scss'

type newsletterSignupFormProps = {
    children?: React.ReactNode;
    email: string;
    handleEmailChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (event: React.FormEvent) => void;
}

export default function NewsletterSignupForm({children, email, handleEmailChange, onSubmit}: newsletterSignupFormProps) {
    return (
        <section className='newsletter-signup-form'>
            <div className='newsletter-signup-form__text'>
                {children}
            </div>

            <Form submitLabel="Subscribe to monthly newsletter"
                  onSubmit={onSubmit}>

                <TextInput 
                    id="email" 
                    type="text" 
                    placeholder='email@company.com'
                    label='Email address'
                    value={email}
                    isRequired={true} 
                    onChange={handleEmailChange}/>

            </Form>
        </section>
    );
}