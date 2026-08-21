import Button from "./Button";

export default function CodeCard({children, extras}) {
    return (
        <div className={` ${extras}
        w-[90%] min-h-[20rem] max-h-[30rem] rounded-3xl border-2 border-neutral-600
        flex items-center shrink-0 flex-col overflow-hidden
        shadow-2xl`} >

            <div className="w-full flex-1 min-h-0 bg-neutral-600 
            flex p-8 text-white overflow-scroll" >   
                {children}
            </div>

            <div className="mt-auto h-[4rem] w-full flex items-center p-5
             flex-row-reverse gap-3  ">
                <Button/>
                <Button/>
            </div>

        </div>
    );
}
