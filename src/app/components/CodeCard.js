import PlayButton from "./PlayButton";

export default function CodeCard({children, extras, colour, codeColour}) {
    return (
        <div className={` ${extras}
        w-[75%] min-h-[12rem] max-h-[40rem] space-y-5 p-10 
        flex items-center shrink-0 flex-col overflow-hidden
        `} >

            <div className={`w-full flex-1 min-h-0 ${codeColour} rounded-2xl
            flex p-12 overflow-scroll text-black text-xl font-mono
            inset-shadow-sm inset-shadow-neutral-500`} >   
                {children}
            </div>

            <div className={` ${colour} rounded-full h-[4rem] w-[50%] flex 
            justify-center items-center p-5
              shadow-xl`}>
                <PlayButton/>
            </div>

        </div>
    );
}
