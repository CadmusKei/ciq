
export default function Title({name, colour, titleColour}) {
    return (
        <h1 className={`text-2xl w-full font-bold 
            ${colour} p-3 pl-10 mt-auto min-h-20 
            flex items-center text-rose-100`}>
                {name}
        </h1>
    );
}