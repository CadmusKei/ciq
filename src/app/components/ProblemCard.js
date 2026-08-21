

export default function Problemcard({children, extras}) {
    return (
        <div className={` ${extras}
        w-[90%] h-fit bg-neutral-100
        flex justify-center items-center shrink-0 flex-col
        `} >
            {children}
        </div>
    );
}
