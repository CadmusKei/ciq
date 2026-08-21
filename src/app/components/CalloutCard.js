

export default function CalloutCard({children, extras}) {
    return (
        <div className={` ${extras}
        w-[80%] h-fit bg-neutral-100 rounded-3xl border-4 border-neutral-300
        flex justify-center items-center shrink-0 flex-col
        p-10`} >
            {children}
        </div>
    );
}
