import HomeButton from "./HomeButton";
import TopicButton from "./TopicButton"

export default function Bar({colour, topicColour}) {
    return (
        <div className={`w-[90%] top-[3%] ${colour} rounded-full shadow-xl
        absolute flex p-3 items-center justiy-start gap-8`} >
            <HomeButton/>
            <TopicButton colour={topicColour} name="Greedy"/>
            <TopicButton colour={topicColour} name="Sliding"/>
            <TopicButton colour={topicColour} name="Dynamic"/>
            <TopicButton colour={topicColour} name="Grids"/>
            <TopicButton colour={topicColour} name="Grids"/>
            <TopicButton colour={topicColour} name="Graphs"/>



        </div>
    );
}
