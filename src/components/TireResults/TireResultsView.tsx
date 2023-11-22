import {ResultBannerInfo} from "./ResultBannerInfo.tsx";

const TireResultsView = ({ replaceable, sizeToReplacementSizeOffset, notNullValues }: { replaceable: boolean, sizeToReplacementSizeOffset: number, notNullValues: boolean }) => {
    return (
        <>
            <div className='lg:w-1/2 p-4'>
                {notNullValues ?
                    replaceable ?
                        <ResultBannerInfo style="bg-green-300  border-green-600" key={'replaceable'} src="../../../public/check.svg" alt="check icon" text={`Tire outer diameter difference (${sizeToReplacementSizeOffset}%) is within the range of +1.5% to -2%.`} />

                    :
                        <ResultBannerInfo style="bg-red-300  border-red-600" key={'notReplaceable'} src="../../../public/circleX.svg" alt="check icon" text={`The tire outer diameter difference (${sizeToReplacementSizeOffset}%) is not within the range of +1.5% to -2%.`} />
                    :
                    <ResultBannerInfo style="bg-yellow-300  border-yellow-600" key={'noValues'} src="../../../public/questionMark.svg" alt="question mark" text='Please enter data to calculate the tire outer diameter difference.'/>
                }
            </div>
            <div>
            </div>
        </>
    )
}

export default TireResultsView