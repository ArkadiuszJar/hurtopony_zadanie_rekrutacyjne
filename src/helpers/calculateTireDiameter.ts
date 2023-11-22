import {TTireInfoInput} from "../Types/Input.ts";
import constants from "./constants.ts";

export const calculateTireDiameterInMillimeters = ({tireWidth, tireProfile, diameter}: Partial<TTireInfoInput>) => {
    return ((tireWidth ?? 0) * (tireProfile ?? 0) / 100 * 2) * 1.04 + constants.inchesToMillimeters * (diameter ?? 0);
}