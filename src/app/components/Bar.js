import HomeButton from "./HomeButton";
import TopicButton from "./TopicButton";

const topics = [
    {
        name: "Greedy",
        colour: "hover:border-purple-400",
        textColour: "hover:text-purple-400",
        shadow: "shadow-purple-400",
    },
    {
        name: "Sliding",
        colour: "hover:border-cyan-300",
        textColour: "hover:text-cyan-300",
        shadow: "shadow-cyan-300",
    },
    {
        name: "Grids",
        colour: "hover:border-pink-300",
        textColour: "hover:text-pink-300",
        shadow: "shadow-pink-300",
    },
    {
        name: "Dynamic",
        colour: "hover:border-amber-300",
        textColour: "hover:text-amber-300",
        shadow: "shadow-amber-300",
    },
    {
        name: "Frequency",
        colour: "hover:border-green-300",
        textColour: "hover:text-green-300",
        shadow: "shadow-green-300",
    },
    {
        name: "Graphs",
        colour: "hover:border-red-400",
        textColour: "hover:text-red-400",
        shadow: "shadow-red-400",
    },
];

export default function Bar({ colour }) {
    return (
        <div className={`w-[95%] top-[3%] ${colour} rounded-full shadow-xl
            absolute flex p-3 pl-5 items-center justify-start gap-8`}
        >
            <HomeButton />

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
    );
}