import PlayButton from "./PlayButton";

export default function CodeCard({children, extras}) {
    return (
        <div className={` ${extras}
        w-[75%] min-h-[10rem] max-h-[30rem] rounded-3xl border-2 border-neutral-600
        flex items-center shrink-0 flex-col overflow-hidden
        shadow-2xl`} >

            <div className="w-full flex-1 min-h-0 bg-neutral-200 
            flex p-8 text-neutral-700 overflow-scroll" >   
                {children}
            </div>

            <div className="mt-auto bg-neutral-700 h-[3.5rem] w-full flex items-center p-5
             flex-row-reverse gap-3  ">
                <PlayButton/>
            </div>

        </div>
    );
}
