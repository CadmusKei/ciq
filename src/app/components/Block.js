import Title from "./Title";

export default function block({children, extras, name, colour, headingCol}) {
    return (

        <div className={` ${extras} w-[70%] h-fit ${colour} rounded-3xl drop-shadow-2xl
            flex justify-center items-center shrink-0 mt-20 flex-col
            space-y-1 overflow-hidden `}>

            <Title name={name} colour={headingCol}/>

            <div className={`
            w-full flex-1 
            flex justify-center items-center shrink-0 flex-col
            p-10 space-y-10 pb-20`} >
                
                {children}
            </div>
        </div>
    );
}
