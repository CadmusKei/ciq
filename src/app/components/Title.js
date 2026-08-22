
export default function Title({name, colour}) {
    return (
        <h1 className={`text-2xl w-full font-bold 
            ${colour} p-3 pl-10 mt-auto min-h-20 
            flex items-center text-purple-200`}>
                {name}
        </h1>
    );
}