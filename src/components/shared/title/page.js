export default function Title({ text }) {
    const words = text?.split(' ');

    return (
        <div className="flex 2xl:gap-4 sm:gap-3 gap-2 flex-wrap">
            {words?.map((word, index) => (
                <h1 key={index} className={`${index === 1 || index === 4 ? "text-[#748E63] dark:text-[#F9B572]" : "text-black dark:text-white"} 2xl:text-5xl sm:text-4xl text-3xl  `}>
                    {word}
                </h1>
            ))}
        </div>
    );
}
