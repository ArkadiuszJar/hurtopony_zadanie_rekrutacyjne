import {motion} from "framer-motion";

export function ResultBannerInfo({key, alt, src, text, style} : {key: string, alt:string, src: string, text: string, style: string}) {
    return <motion.div key={key} initial={{y: 100, opacity: 0}} animate={{y: 0, opacity: 1}}
                       transition={{duration: 0.5, delay: 0.2}}
                       className={`flex gap-6 mt-4 bg-opacity-10 p-8 border-2 ${style} rounded-2xl`}>
        <img className="scale-[2]" src={src} alt={alt}/>
        <p className=" text-xl text-white">{text}</p>
    </motion.div>;
}