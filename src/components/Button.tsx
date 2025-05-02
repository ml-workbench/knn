import Link from "next/link";
interface ButtonProps{
    href:string;
    bgcolor?:string;
    textcolor?:string;
    children?:React.ReactNode
}

export default function Button ({href,bgcolor,textcolor,children} : ButtonProps){
    const classMap = {
        "black:white": "bg-black text-white hover:bg-white hover:text-black",
        "white:black": "bg-white text-black hover:bg-black hover:text-white",
      };

      
    const key = `${bgcolor}:${textcolor}`;
    const safeClass = classMap[key] || "bg-black text-white";

    return(
        <Link href={href} className={`inline-block px-2 py-1 border-2 border-black font-bold tracking-wider transition-all duration-200 ${safeClass}`}>{children}</Link>
    );
}