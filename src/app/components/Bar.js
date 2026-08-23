import HomeButton from "./HomeButton";
import TopicButton from "./TopicButton";

const topics = [
    {
        name: "Greedy",
        colour: "hover:border-purple-600",
        textColour: "hover:text-purple-600",
        shadow: "shadow-purple-600",
    },
    {
        name: "Sliding",
        colour: "hover:border-cyan-500",
        textColour: "hover:text-cyan-500",
        shadow: "shadow-cyan-600",
    },
    {
        name: "Grids",
        colour: "hover:border-pink-500",
        textColour: "hover:text-pink-500",
        shadow: "shadow-pink-500",
    },
    {
        name: "Dynamic",
        colour: "hover:border-amber-500",
        textColour: "hover:text-amber-500",
        shadow: "shadow-amber-600",
    },
    {
        name: "Frequency",
        colour: "hover:border-green-500",
        textColour: "hover:text-green-500",
        shadow: "shadow-green-500",
    },
    {
        name: "Graphs",
        colour: "hover:border-red-600",
        textColour: "hover:text-red-600",
        shadow: "shadow-red-600",
    },
];

export default function Bar({ colour }) {
    return (
        <div className={` h-[8%] top-[3%] ${colour} rounded-full shadow-xl
            absolute flex p-3 pl-5 pr-5 items-center justify-center gap-5`}
        >
            <HomeButton />

            <div className="flex items-center justify-center 
            pl-3 pr-3 p-1 rounded-full h-[95%]
            bg-neutral-300 gap-7 inset-shadow-sm inset-shadow-neutral-400">
            {topics.map((topic) => (
                <TopicButton
                key={topic.name}
                name={topic.name}
                colour={topic.colour}
                textColour={topic.textColour}
                shadow={topic.shadow}
                />
            ))}
            </div>
        </div>
    );
}