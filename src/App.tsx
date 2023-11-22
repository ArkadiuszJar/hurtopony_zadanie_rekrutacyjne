import TireInfoInput from "./components/TireInfoInput";
import {useState} from "react";
import TireResults from "./components/TireResults";
import BrandsBanner from "./components/BrandsBanner/BrandsBanner.tsx";

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
     <main>
         <div className='w-screen min-h-screen bg-[#232339] flex flex-col items-center justify-center'>
             <BrandsBanner/>
             <TireInfoInput title={"Tire size"} onDiameterChanged={handleDiameterChanged}/>
             <TireInfoInput title={"Replacement tire size"} onDiameterChanged={handleReplacementDiameterChanged}/>
             <TireResults diameter={diameter} replacementDiameter={replacementDiameter}/>
         </div>
     </main>
  )
}

export default App
