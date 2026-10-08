import Book from "./components/Book";
import Pen from "./components/Pen";
import { books } from "./data/books.js";
import { pens } from "./data/pens.js";
import Fruit from "./components/Fruit.jsx";
import Event from "./components/Event.jsx";

const MyButton =()=> {
  let count =1;
  const handleSubmit =()=> {
    alert("Button Clicked", count);
    count++;
  };
  return (
        <button className="bg-black text-white
         text-xl rounded-md
          m-4 px-4 py-2" 
          onClick={handleSubmit}
          >
            Clicked {count} times
            </button>
  );
}

export default function App() {
  return (
    <>
   <MyButton />
</>
  );
}
