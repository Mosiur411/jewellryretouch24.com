import Input from '../shared/formElement/input'
import Textarea from '../shared/formElement/textarea'
import servicesList from '/public/assect/json/servicesList.json'
import Select from '../shared/formElement/select'
import Upload from '../shared/formElement/upload'

export default function FreeTrialFrom() {
    return (
        <div className=" xl:px-36 sm:mt-16 md:px-10 px-5 lg:w-10/12 mx-auto">
            <div className=" sm:flex items-center xl:gap-14 gap-10 my-8 ">
                <Input type='text' idFor='firstName' label='First name' placeholder='Enter your firstName' />
                <Input type='text' idFor='lastName' label='Last name' placeholder='Enter your lastName' />
            </div>
            <div className=" sm:flex items-center xl:gap-14 gap-10 my-8 ">
                <Input type='email' idFor='email' label='Email' placeholder='Enter your email' />
                <Input type='number' idFor='number' label='Phone number' placeholder='Enter your phone Number' />
            </div>
            <h2 className='block text-sm font-medium text-gray-900 dark:text-gray-300 mb-3' >Service Type</h2>
            <div className='grid xl:grid-cols-3 sm:grid-cols-2 gap-x-5 pl-10 mb-5'>
                {
                    servicesList?.map(service => <Select key={service?.id} service={service} />)
                }
            </div>
            <Upload />
            <Textarea idFor='Instruction' label='Instruction' placeholder='Your Instruction here . . .' />
        </div >
    )
}
