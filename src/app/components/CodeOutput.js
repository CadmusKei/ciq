

export default function CodeOutput({children, extras, colour, codeColour}) {
    return (
        <div className={` ${extras}
        w-[75%] min-h-[5rem] max-h-[30rem] rounded-3xl 
        flex items-center shrink-0 flex-col overflow-hidden
        shadow-2xl border-4 border-neutral-600`} >
            <div className={`w-full flex-1 min-h-0 ${codeColour}
            flex p-12 overflow-scroll text-white text-xl font-mono`} >   
                {children}
            </div>

        </div>
    );
}
