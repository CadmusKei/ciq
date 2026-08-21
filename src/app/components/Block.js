

export default function block({children, extras}) {
    return (
        <div className={` ${extras}
        w-[70%] h-fit bg-neutral-100 rounded-3xl drop-shadow-2xl
        flex justify-center items-center shrink-0 mt-20 flex-col
        p-10 space-y-10`} >
            {children}
        </div>
    );
}
