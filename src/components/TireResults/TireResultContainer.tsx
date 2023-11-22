import TireResultsView from "./TireResultsView.tsx";
import {isTireReplaceable} from "../../helpers/isTireReplaceable.ts";
import {TDiameter} from "../../Types/Diameter.ts";
import {calculateInverseRatioPercentage} from "../../helpers/calculateInverseRatioPercentage.ts";

const TireResultContainer = ({diameter, replacementDiameter}: TDiameter) => {

    const replaceable = isTireReplaceable(diameter, replacementDiameter)
    const notNullValues = diameter !== 0 && replacementDiameter !== 0
    const diameterOffset = calculateInverseRatioPercentage(replacementDiameter, diameter)

    return (
        <>
            <TireResultsView replaceable={replaceable} sizeToReplacementSizeOffset={diameterOffset} notNullValues={notNullValues}/>
        </>
    )
}

export default TireResultContainer