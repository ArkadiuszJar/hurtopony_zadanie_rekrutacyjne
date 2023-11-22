import {TFormInput} from "../../Types/Input.ts";

const FormInput = ({label, name, value}: TFormInput) => {
    return (
    <div className="flex flex-col w-32">
        <label htmlFor="tireProfile" className="mb-2">
            {label}
        </label>
        <input
            min={0}
            type="number"
            name={name}
            defaultValue={value}
            className="border-b p-2 bg-transparent border-[#ACB1C3] remove-arrow :active-border-transparent focus:outline-none"
        ></input>
    </div>
    );
}

export default FormInput;