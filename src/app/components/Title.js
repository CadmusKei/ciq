
export default function Title({name}) {
    return (
        <h1 className="text-2xl w-full font-bold 
            bg-neutral-600 p-3 pl-10 mt-auto min-h-20 
            flex items-center text-white">
                {name}
        </h1>
    );
}