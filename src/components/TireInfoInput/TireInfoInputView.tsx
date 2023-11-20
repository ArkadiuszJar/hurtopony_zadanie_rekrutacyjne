import {TTireInfoInput} from "../../Types/Input.ts";

const TireInfoInputView = ({title, tireWidth ,tireProfile, diameter, onSubmit, diameterInMillimeters}: Partial<TTireInfoInput>) => {
    return (
        <>
        <div className='flex flex-col'>
            <p>{title}</p>
            <div>
                <form action="submit" onSubmit={onSubmit}>
                    <input type="number" name="tireWidth" defaultValue={tireWidth}></input>
                    <input type="number" name="tireProfile" defaultValue={tireProfile}></input>
                    <input type="number" name="diameter" defaultValue={diameter}></input>
                    <button type={"submit"}>Submit</button>
                </form>
            </div>
        </div>
            <div>
                <a></a>
                <p>{diameterInMillimeters}</p>
            </div>

        </>
    )
}

export default TireInfoInputView