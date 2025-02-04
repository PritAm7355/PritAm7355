import "./App.css";
import Title from "./Title";
import ProductTab from "./ProductTab";

function Description() {
  return <h3>i am the description</h3>;
}

function App() {
  return (  
  <>
     <ProductTab/>
    <Title/>
    <Description/>
    <Title/>
    <Description/>
    <button>hellow world!</button>
   </>
  );
}

export default App
