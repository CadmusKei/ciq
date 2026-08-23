import Bar from "./components/Bar";
import Block from "./components/Block";
import ProblemCard from "./components/ProblemCard";
import CodeCard from "./components/CodeCard";
import CalloutCard from "./components/CalloutCard";
import Divider from "./components/Divider";
import CodeOutput from "./components/CodeOutput";

// const topicColours = [
//   {
//     name:"Greedy",

//     darkColours: {
//       accentBorder: "border-purple-800",
//       accentText: "text-purple-100",
//       accent1: "bg-purple-800",
//       accent2: "bg-purple-800/70",
//       divColour: "bg-purple-300/90"
//     },

//     lightColours: {
//       accentBorder: "border-purple-800",
//       accentText: "text-purple-100",
//       accent1: "bg-purple-800",
//       accent2: "bg-purple-800/70",
//       divColour: "bg-purple-300/90"
//     }
//   },
//   {},
//   {},
//   {},
//   {}
// ];

let accent2 = "border-[#6B68BD]";
let accent1 = "bg-purple-800";
let accentBorder = "border-purple-800";
let accent1Text = "text-black";
let divColour = "bg-purple-300/90";

let calloutColour = "bg-neutral-300";
let codeColour2 = "bg-purple-800/70";
let codeColour = "bg-neutral-300";

let lightBlockColour = "bg-neutral-200";
let lightBackgroundColour = "bg-neutral-300";

export default function Home() {
  return (
    <div className={`flex w-full h-screen flex-col items-center relative 
     ${lightBackgroundColour}
     overflow-y-scroll`}>

      <Bar colour={lightBlockColour}/>

      <Block extras="mt-35" name="Greedy" colour={lightBlockColour} headingCol={accent1} borderColour={accentBorder} headingTextColour={accent1Text} >
        <ProblemCard> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum architecto mollitia itaque eaque asperiores ex reprehenderit iste veritatis totam, ipsam modi, odit vel? Accusamus consequatur facere ipsum vero cupiditate cum quo necessitatibus illo similique amet non fugiat suscipit pariatur enim natus sed nisi numquam, sapiente labore accusantium quae. Accusamus, placeat. </ProblemCard>
        <ProblemCard>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur cumque doloribus repudiandae facilis sint nisi quia in praesentium dolores perferendis. Nostrum est repellat vero voluptate nemo quam, impedit nihil deserunt.</ProblemCard>
        <Divider colour={divColour}/>
        <CodeCard codeColour={codeColour} colour={codeColour2}>Lo incidunt molestias provident alias modi consequatur mollitia doloremque quod labore ducimus blanditiis. Animi, debitis nostrum, mollitia at culpa adipisci pariatur omnis nulla nisi excepturi iste. Inventore illo animi id maxime, voluptates, maiores totam praesentium qui, fugit aspernatur tempora! Nam exercitationem quod similique molestias et unde asperiores corporis laboriosam suscipit, pariatur accusantium in repellendus aut. Quibusdam odio nostrum deleniti nesciunt aspernatur in sapiente unde maiores, magni praesentium dolores, similique eaque nisi non. Sequi ad tempora voluptates harum quo fugit eveniet in animi ipsum molestias dignissimos eius impedit maiores laudantium voluptatum, est aliquam adipisci quis obcaecati illo, corrupti delectus esse, blanditiis reiciendis! Nulla eius debitis culpa odit aperiam autem nam quaerat, incidunt totam nobis sint alias itaque assumenda similique deleniti pariatur? Optio necessitatibus odio libero cupiditate alias molestiae voluptates magni hic consectetur. Ex sit hic quisquam magni fugit earum saepe sint, quibusdam praesentium accusamus cupiditate? Asperiores similique natus animi, id repellat corrupti.</CodeCard>
        <CodeOutput codeColour={codeColour}>Final value of cats: 5.00</CodeOutput>
        <ProblemCard>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut praesentium deleniti atque iusto hic nisi illum sunt ea totam beatae!</ProblemCard>
        <Divider colour={divColour}/>
        <CalloutCard colour={calloutColour} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, explicabo!</CalloutCard>
      </Block>
    </div>
  );
}
