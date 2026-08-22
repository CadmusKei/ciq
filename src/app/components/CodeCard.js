import PlayButton from "./PlayButton";

export default function CodeCard({children, extras, colour, codeColour}) {
    return (
        <div className={` ${extras}
        w-[75%] min-h-[10rem] max-h-[30rem] rounded-3xl 
        flex items-center shrink-0 flex-col overflow-hidden
        shadow-2xl`} >

            <div className={`w-full flex-1 min-h-0 ${codeColour}
            flex p-12 overflow-scroll text-white text-xl font-mono`} >   
                {children}
            </div>

            <div className={`mt-auto ${colour} h-[4rem] w-full flex items-center p-5
             flex-row-reverse gap-3`}>
                <PlayButton/>
            </div>

        </div>
    );
}
