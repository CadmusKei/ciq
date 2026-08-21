import Bar from "./components/Bar"
import Block from "./components/Block"

export default function Home() {
  return (
    <div className="flex w-full h-screen flex-col items-center relative 
     bg-neutral-600
     overflow-y-scroll">

      <Bar/>
      <Block extras="mt-40"></Block>
      <Block>This is a simple test</Block>

    </div>
  );
}
