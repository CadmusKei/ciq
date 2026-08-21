

export default function CodeCard({children, extras}) {
    return (
        <div className={` ${extras}
        w-[90%] min-h-[20rem] rounded-3xl border-2 border-neutral-600
        flex items-center shrink-0 flex-col overflow-hidden
        shadow-2xl`} >
            <div className="w-full flex-1 bg-neutral-600 
            flex" >   
                {children}
            </div>
            <div className="mt-auto h-[4rem] w-full">
            </div>
        </div>
    );
}
