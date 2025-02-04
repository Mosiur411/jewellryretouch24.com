"use client"
import { useState } from 'react';
import Input from '../shared/formElement/input';
import Textarea from '../shared/formElement/textarea';
import servicesList from '/public/assect/json/servicesList.json';
import Select from '../shared/formElement/select';

export default function FreeTrialFrom() {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        fileLink: '',
        serviceType: '',
        instruction: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setLoading(true)
            const response = await fetch('/api/nodemailer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data: formData }),

            });
            if (response.ok) {
                setLoading(false)
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                    serviceType: '',
                    fileLink: '',
                    instruction: ''
                });
            } else {
                setLoading(false)

            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="xl:px-36 sm:mt-16 md:px-10 px-5 lg:w-10/12 mx-auto">
            <form onSubmit={handleSubmit}>
                <div className="sm:flex items-center xl:gap-14 gap-10 my-8">
                    <Input type='text' idFor='firstName' name='firstName' label='First name' placeholder='Enter your firstName' value={formData.firstName} onChange={handleChange} />
                    <Input type='text' idFor='lastName' name='lastName' label='Last name' placeholder='Enter your lastName' value={formData.lastName} onChange={handleChange} />
                </div>
                <div className="sm:flex items-center xl:gap-14 gap-10 my-8">
                    <Input type='email' idFor='email' name='email' label='Email' placeholder='Enter your email' value={formData.email} onChange={handleChange} />
                    <Input type='number' idFor='phoneNumber' name='phoneNumber' label='Phone number' placeholder='Enter your phone Number' value={formData.phoneNumber} onChange={handleChange} />
                </div>
                <h2 className='block text-sm font-medium text-gray-900 dark:text-gray-300 mb-3'>Service Type</h2>
                <div className='grid xl:grid-cols-3 sm:grid-cols-2 gap-x-5 pl-10 mb-5'>
                    {
                        servicesList?.map(service => <Select key={service?.id} service={service} onChange={handleChange} />)
                    }
                </div>
                <Input type='text' idFor='fileLink' name='fileLink' label='File Link' placeholder='Give me file link ' value={formData.fileLink} onChange={handleChange} />
                {/*  <Upload /> */}
                <Textarea idFor='Instruction' name='instruction' label='Instruction' placeholder='Your Instruction here . . .' value={formData.instruction} onChange={handleChange} />
                <button
                    className={`
               ${loading ? 'cursor-not-allowed' : ""}
               mt-10 text-[14px] font-medium text-white px-5 pb-0.5 h-8 flex items-center justify-center border border-[#748E63] dark:border-[#F9B572]  rounded-full hover:bg-[#748E63] dark:hover:bg-[#F9B572]  bg-[#748E63]   dark:bg-[#F9B572] dark:hover:bg-transparent dark:text-black  dark:hover:text-[#F9B572] hover:bg-transparent hover:text-[#789365]  `}
                    type="submit">{loading ? 'Loading..' : "Submit"}</button>
            </form>
        </div>
    )
}
