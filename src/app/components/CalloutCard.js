

export default function CalloutCard({children, extras, colour}) {
    return (
        <div className={` ${extras} ${colour}
        w-[80%] h-fit bg-neutral-200 rounded-2xl border-2 border-neutral-300
        flex justify-center items-center shrink-0 flex-col
        p-5 shadow-lg`} >
            {children}
        </div>
    );
}
