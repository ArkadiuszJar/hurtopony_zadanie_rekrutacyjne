import { TTireInfoInput } from "../../Types/Input.ts";
import FormInput from "../FormInput/FormInput.tsx";

const TireInfoInputView = ({ title, tireWidth, tireProfile, diameter, onSubmit, diameterInMillimeters }: Partial<TTireInfoInput>) => {
    return (
        <div className="flex justify-center items-center w-1/2 text-[#E2E6EE] my-2 rounded-2xl ">
            <div className="p-4">
                <p className='text-2xl my-2'>{title}</p>
                <form action={'submit'} onSubmit={onSubmit} className="flex gap-4 items-center">
                    <FormInput label='Width (mm)' name="tireWidth" value={tireWidth}/>
                    <FormInput label='Profile (%)' name="tireProfile" value={tireProfile}/>
                    <FormInput label='Diameter (inch)' name="diameter" value={diameter}/>
                    <button type={"submit"} className="bg-[#C696FC] h-1/2 w-32 text-white p-2 rounded mx-8 hover:bg-[#95AAFB] transition-colors">
                        Confirm
                    </button>
                </form>
            </div>
            <div className="flex flex-col h-full align-middle p-4 justify-end ml-4">
                <p className='text-center font-bold'>Diameter (mm)</p>
                <p className='border-b p-2 font-bold bg-transparent text-center border-[#ACB1C3] cursor-default'>{diameterInMillimeters?.toFixed(0)}</p>
            </div>
        </div>
    );
};

export default TireInfoInputView;
