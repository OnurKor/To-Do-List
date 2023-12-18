import { useState } from "react";
import Todo from "./Todo";
// import Button from "./Button";


function App() {
  // const [count,setCount] = useState(0)
  // const artir = () => {
  // count<=4 && setCount(count+1)
  // }
  // const azalt = () => {
  // count>0 && setCount(count-1)
  // }
  return (
    <>
    {/* <Button content="azalt" color="red" size="md" textColor="yellow" func={azalt} disable={false}/>
    {count}
    <Button content="artır" color="blue" size="md" textColor="yellow" func={artir} disable={false}/> */}

    <Todo/>
    </>
  );
}

export default App;
