export default function Select({ service }) {
    const connection = service?.service.replace(/\s/g, '');
    return (
        <div className="flex items-center mb-4 text-sm ">
            <input id={connection} type="checkbox" value={service?.service} className="w-4 h-4  cursor-pointer" />
            <label htmlFor={connection} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">{service?.service}</label>
        </div>
    )
}
