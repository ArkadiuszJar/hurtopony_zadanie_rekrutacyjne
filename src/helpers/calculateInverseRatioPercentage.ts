import Decimal from "decimal.js";

export const calculateInverseRatioPercentage = (replacementDiameter: number, diameter: number) => {
    if (diameter !== 0 && replacementDiameter !== 0) {
        const result = new Decimal(1).minus(new Decimal(replacementDiameter).dividedBy(diameter)).times(-100);
        return result.toDecimalPlaces(2).toNumber();
    } else {
        return 0;
    }

}