export default function Input({ type, idFor, label, placeholder, ...res }) {
    return (
        <div className=" w-full mt-5 sm:mt-0">
            <label htmlFor={idFor} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                {label}
            </label>
            <input
                type={type}
                id={idFor}
                name={idFor}
                placeholder={placeholder}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-[#748E63] block w-full p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-[#F9B572]"
                required
                {...res}
            />
        </div>
    )
}
