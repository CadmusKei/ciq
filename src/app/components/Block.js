import Title from "./Title";

export default function block({children, extras, name}) {
    return (

        <div className={` ${extras} w-[70%] h-fit bg-neutral-100 rounded-3xl drop-shadow-2xl
            flex justify-center items-center shrink-0 mt-20 flex-col
            space-y-1 overflow-hidden `}>

            <Title name={name}/>

            <div className={`
            w-full flex-1 bg-neutral-100 rounded-3xl
            flex justify-center items-center shrink-0 flex-col
            p-10 space-y-10 pb-20`} >
                
                {children}
            </div>
        </div>
    );
}
