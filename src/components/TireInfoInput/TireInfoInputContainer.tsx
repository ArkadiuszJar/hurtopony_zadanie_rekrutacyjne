import {TTireInfoInput} from "../../Types/Input.ts";
import TireInfoInputView from "./TireInfoInputView.tsx";
import {FormEvent, useCallback, useEffect, useState} from "react";
import constants from "../../helpers/constants.ts";
import {useTireDiameterInMillimeters} from "../../hooks/useTireDiameterInMillimeters.ts";
type TireInfoInputContainerProps = {
    onDiameterChanged?: (diameter: number | undefined) => void;
}
const TireInfoInputContainer = ({title, onDiameterChanged}: Partial<TTireInfoInput> & TireInfoInputContainerProps) => {

    const [tireInfo, setTireInfo] = useState<Partial<TTireInfoInput>>({
        tireWidth: constants.defaultTireWidth,
        tireProfile: constants.defaultTireProfile,
        diameter: constants.defaultTireDiameter,
    });

    const diameterInMillimeters = useTireDiameterInMillimeters(tireInfo)

    useEffect(() => {
        onDiameterChanged?.(diameterInMillimeters)

    }, [diameterInMillimeters, onDiameterChanged]);


    const handleSubmit = useCallback( (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Map all values from the form to the tireInfo object
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        // Convert string values to numbers if they represent numbers
        const data: { [key: string]: FormDataEntryValue | number } = {};
        formData.forEach((value, key) => {
            // Check if the value is a string that represents a number
            const numericValue = parseFloat(value as string);
            // If it's a valid number, use the numeric value; otherwise, use the original string value
            data[key] = isNaN(numericValue) ? value : numericValue;
        });
        setTireInfo(data);
    }, [setTireInfo]);


    return (
        <TireInfoInputView
            title={title}
            {...tireInfo}
            diameterInMillimeters={diameterInMillimeters}
            onSubmit={handleSubmit}
        />
    )
}

export default TireInfoInputContainer