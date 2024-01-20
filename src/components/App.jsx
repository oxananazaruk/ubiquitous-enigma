import pilots from "../pilots.json"
import { PilotsList } from "./PilotsList";
import { FaPlane } from "react-icons/fa6";
// const pilots = [{
//   id: "2233",
//   name: "Jacob",
//   email: "vasa@gar.com",
//   age: 39,
//   avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXCSDHwbsJksZlqccC_Hdmaf75zl3VG0aTDnUQxS0uBbL9EjMOjejBe2fPQb9Gyh2rZ8w&usqp=CAU"

// },
// {
//   id: "2234",
//   name: "Olendau",
//   email: "vatra@gar.com",
//   age: 34,
//   avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXCSDHwbsJksZlqccC_Hdmaf75zl3VG0aTDnUQxS0uBbL9EjMOjejBe2fPQb9Gyh2rZ8w&usqp=CAU"

// }
// ];
export const App = () => {
  return (
    <div>
      {/* <Profile username={jacob.name} image={jacob.avatar} email={jacob.email} age={jacob.age} />

      <Profile username={olendau.name } image={olendau.avatar} email={olendau.email} age={olendau.age} /> */}
      <h1>Top rated pilots <FaPlane size="40"/></h1>
      <PilotsList pilots={pilots } />
    </div>
  );
};
