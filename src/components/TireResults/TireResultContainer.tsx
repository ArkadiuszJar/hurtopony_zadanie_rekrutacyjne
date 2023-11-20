import TireResultsView from "./TireResultsView.tsx";
import {isTireReplaceable} from "../../helpers/isTireReplaceable.ts";
import {TDiameter} from "../../Types/Diameter.ts";

const TireResultContainer = ({diameter, replacementDiameter}: TDiameter) => {

    const replaceable = isTireReplaceable(diameter, replacementDiameter)

    return (
        <>
            <TireResultsView replaceable={replaceable}/>
        </>
    )
}

export default TireResultContainer