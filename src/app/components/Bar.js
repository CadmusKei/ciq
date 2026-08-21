import HomeButton from "./HomeButton";
import TopicButton from "./TopicButton"

export default function Bar({colour}) {
    return (
        <div className={`w-[90%] top-[3%] ${colour} rounded-full shadow-xl
        absolute flex p-3 items-center justiy-start gap-8`} >
            <HomeButton/>
            <TopicButton name="Greedy"/>
            <TopicButton name="Sliding"/>
            <TopicButton name="Dynamic"/>
            <TopicButton name="Grids"/>
            <TopicButton name="Grids"/>
            <TopicButton name="Graphs"/>



        </div>
    );
}
