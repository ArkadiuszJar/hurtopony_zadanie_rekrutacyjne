import {FormEvent} from "react";

export type TTireInfoInput = {
    title: string;
    tireWidth: number;
    tireProfile: number;
    diameter: number;
    diameterInMillimeters: number;
    onSubmit?: (e: FormEvent<HTMLFormElement> ) => void;
}