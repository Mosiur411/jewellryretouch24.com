export default function Textarea({ idFor, label, placeholder, ...res }) {
    return (
        <div>
            <label htmlFor={idFor} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                {label}
            </label>
            <textarea id={idFor} name={idFor} rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:border-[#748E63]   dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-[#F9B572]" placeholder={placeholder}  {...res} required></textarea>
        </div>
    )
}
