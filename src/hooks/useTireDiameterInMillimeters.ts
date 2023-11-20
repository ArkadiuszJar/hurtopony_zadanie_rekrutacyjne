import {TTireInfoInput} from "../Types/Input.ts";
import {useMemo} from "react";
import {calculateTireDiameterInMillimeters} from "../helpers/calculateTireDiameter.ts";

export const useTireDiameterInMillimeters = (tireInfo: Partial<TTireInfoInput>) => {
    return useMemo(() => {
        return calculateTireDiameterInMillimeters(tireInfo);
    }, [tireInfo]);
}