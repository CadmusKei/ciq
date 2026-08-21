import Bar from "./components/Bar"
import Block from "./components/Block"
import ProblemCard from "./components/ProblemCard"
import CodeCard from "./components/CodeCard"
import CalloutCard from "./components/CalloutCard"




export default function Home() {
  return (
    <div className="flex w-full h-screen flex-col items-center relative 
     bg-neutral-200
     overflow-y-scroll">

      <Bar/>
      <Block extras="mt-40">

        <ProblemCard> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum architecto mollitia itaque eaque asperiores ex reprehenderit iste veritatis totam, ipsam modi, odit vel? Accusamus consequatur facere ipsum vero cupiditate cum quo necessitatibus illo similique amet non fugiat suscipit pariatur enim natus sed nisi numquam, sapiente labore accusantium quae. Accusamus, placeat. </ProblemCard>
        <CodeCard></CodeCard>
        <CodeCard></CodeCard>
        <CodeCard></CodeCard>
      </Block>

      <Block>This is a simple test</Block>

    </div>
  );
}
