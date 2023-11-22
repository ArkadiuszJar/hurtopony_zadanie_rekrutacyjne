export function BannerImage({src, alt, href}: Readonly<{ src: string, alt: string, href: string }>) {
    return <div className="bg-white h-12 flex items-center p-4 rounded-lg hover:scale-110 transition-all duration-200">
        <a href={href} target='_blank'>
        <img className="w-[150px]" src={src} alt={alt}/>
        </a>
    </div>;
}