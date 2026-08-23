
export default function TopicButton({name, colour, textColour, shadow, onClick}) {

    return (
        <div className={` h-[90%] border-2 border-neutral-300 ${colour} ${textColour}
        rounded-4xl ${shadow}/40
        flex items-center justify-start p-3 gap-2 pl-3 pr-6
        group hover:shadow-xl hover:bg-neutral-200
        duration-900 hover:duration-200 text-black`}>

            <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
            <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
             clipRule="evenodd" />
            </svg>
            {name}
        </div>
    );

}