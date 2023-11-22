import { motion } from "framer-motion";

const TireResultsView = ({ replaceable, sizeToReplacementSizeOffset, notNullValues }: { replaceable: boolean, sizeToReplacementSizeOffset: number, notNullValues: boolean }) => {
    return (
        <>
            <div>
                {notNullValues ?
                    replaceable ?
                        <motion.div key={'replaceable'} initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className='flex gap-6 mt-4 bg-green-300 bg-opacity-10 p-8 border-2 border-green-600 rounded-2xl'>
                            <img className='scale-[2]' src="../../../public/check.svg" alt="check icon" />
                            <p className='text-xl text-white'>Tire outer diameter difference ({sizeToReplacementSizeOffset}%) is within the range of +1.5% to -2%</p>
                        </motion.div>
                        :
                        <motion.div key={'notReplaceable'} initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className='flex gap-6 mt-4 bg-red-300 bg-opacity-10 p-8 border-2 border-red-600 rounded-2xl'>
                            <img className='scale-[2]' src="../../../public/circleX.svg" alt="check icon" />
                            <p className=' text-xl text-white'>The tire outer diameter difference ({sizeToReplacementSizeOffset}%) is not within the range of +1.5% to -2%.</p>
                        </motion.div>
                    :
                    <motion.div key={'noValues'} initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className='flex gap-6 mt-4 bg-yellow-300 bg-opacity-10 p-8 border-2 border-yellow-600 rounded-2xl'>
                        <img className='scale-[2]' src="../../../public/questionMark.svg" alt="check icon" />
                        <p className=' text-xl text-white'>Please enter data to calculate the tire outer diameter difference.</p>
                    </motion.div>
                }
            </div>
            <div>
            </div>
        </>
    )
}

export default TireResultsView