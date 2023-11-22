import {BannerImage} from "./BannerImage.tsx";

const BrandsBanner = () => {
    return (
        <div className='flex gap-6 items-center mb-12 p-8'>
            <BannerImage src="../../../goodyear-logo.png" alt="Good Year Logo" href='https://www.hurtopony.pl/opony-goodyear.html'/>
            <BannerImage src="../../../Dunlop_logo.png" alt="Dunlop logo" href='https://www.hurtopony.pl/opony-dunlop.html'/>
            <BannerImage src="../../../Fulda_logo.png" alt="Fulda logo" href='https://www.hurtopony.pl/opony-fulda.html'/>
            <BannerImage src="../../../debica-logo.png" alt="Debica logo" href={'https://www.hurtopony.pl/opony-osobowe-debica.html'}/>
            <BannerImage src="../../../sava-logo.jpeg" alt="Sava logo" href={'https://www.hurtopony.pl/opony-osobowe-sava.html'}/>
        </div>
    )
}

export default BrandsBanner