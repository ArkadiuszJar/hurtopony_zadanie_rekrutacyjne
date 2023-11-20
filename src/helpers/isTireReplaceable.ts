export const isTireReplaceable = (diameter: number, replacementDiameter: number) => {
    return replacementDiameter >= diameter * 0.98 && replacementDiameter <= diameter * 1.015;
}