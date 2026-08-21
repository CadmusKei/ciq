

export default function block({children, extras}) {
    return (
        <div className={` ${extras}
        w-[60%] h-fit bg-neutral-200 rounded-3xl drop-shadow-2xl
        flex justify-center items-center shrink-0 mt-20 flex flex-col
        p-10`} >
            {children}
        </div>
    );
}
