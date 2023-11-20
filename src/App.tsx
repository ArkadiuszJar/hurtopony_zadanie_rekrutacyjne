import TireInfoInput from "./components/TireInfoInput";
import {useState} from "react";
import TireResults from "./components/TireResults";

function App() {

    const [diameter, setDiameter] = useState<number>(0);
    const [replacementDiameter, setReplacementDiameter] = useState<number>(0);

    const handleDiameterChanged = (diameter: number | undefined) => {
        setDiameter(diameter || 0);
    }

    const handleReplacementDiameterChanged = (diameter: number | undefined) => {
        setReplacementDiameter(diameter || 0);
    }

  return (
    <>
     <main>
         <div>
             <TireInfoInput title={"Size"} onDiameterChanged={handleDiameterChanged}/>
             <TireInfoInput title={"Replacement size"} onDiameterChanged={handleReplacementDiameterChanged}/>
         </div>

         <div>
             <TireResults diameter={diameter} replacementDiameter={replacementDiameter}/>
         </div>
     </main>
    </>
  )
}

export default App
