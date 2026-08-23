import Title from "./Title";

export default function block({children, extras, name, colour, headingCol, headingTextColour, borderColour}) {
    return (

        <div className={` ${extras} w-[70%] h-fit ${colour} border-3 ${borderColour}  rounded-3xl drop-shadow-2xl
            flex justify-center items-center shrink-0 mt-20 flex-col
            space-y-1 text-black overflow-hidden`}>

            <Title name={name} colour={headingCol} titleColour={headingTextColour}/>

            <div className={` 
            w-full flex-1 
            flex justify-center items-center shrink-0 flex-col
            p-10 space-y-10 pb-20`} >
                {children}
            </div>
        </div>
    );
}
