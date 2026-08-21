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
        <CodeCard>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt ea officia reprehenderit iusto veniam mollitia doloribus ex voluptates necessitatibus accusantium velit similique dolore repellat asperiores, expedita aut ut harum libero ipsa, odio sequi aliquam sapiente! Error harum quia hic assumenda saepe placeat, laudantium, odio libero tempore rerum facere a, nisi incidunt molestias provident alias modi consequatur mollitia doloremque quod labore ducimus blanditiis. Animi, debitis nostrum, mollitia at culpa adipisci pariatur omnis nulla nisi excepturi iste. Inventore illo animi id maxime, voluptates, maiores totam praesentium qui, fugit aspernatur tempora! Nam exercitationem quod similique molestias et unde asperiores corporis laboriosam suscipit, pariatur accusantium in repellendus aut. Quibusdam odio nostrum deleniti nesciunt aspernatur in sapiente unde maiores, magni praesentium dolores, similique eaque nisi non. Sequi ad tempora voluptates harum quo fugit eveniet in animi ipsum molestias dignissimos eius impedit maiores laudantium voluptatum, est aliquam adipisci quis obcaecati illo, corrupti delectus esse, blanditiis reiciendis! Nulla eius debitis culpa odit aperiam autem nam quaerat, incidunt totam nobis sint alias itaque assumenda similique deleniti pariatur? Optio necessitatibus odio libero cupiditate alias molestiae voluptates magni hic consectetur. Ex sit hic quisquam magni fugit earum saepe sint, quibusdam praesentium accusamus cupiditate? Asperiores similique natus animi, id repellat corrupti.</CodeCard>
        <CodeCard></CodeCard>
        <CodeCard></CodeCard>
      </Block>

      <Block>This is a simple test</Block>

    </div>
  );
}
