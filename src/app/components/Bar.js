import HomeButton from "./HomeButton";

export default function Bar() {
    return (
        <div className="w-[90%] h-[7%] top-[3%] bg-neutral-100 rounded-full shadow-2xl
        absolute flex p-3 items-center justiy-start" >
            <HomeButton></HomeButton>
        </div>
    );
}
