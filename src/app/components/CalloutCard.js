

export default function CalloutCard({children, extras, colour}) {
    return (
        <div className={` ${extras} ${colour}
        w-[80%] h-fit rounded-2xl border-3 border-neutral-600
        flex justify-center items-center shrink-0 flex-col
        p-5 shadow-lg text-black text-lg font-bold`} >
            {children}
        </div>
    );
}
