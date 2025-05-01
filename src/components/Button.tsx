import Link from "next/link";
interface ButtonProps{
    href:string;
    bgcolor:string;
    textcolor:string;
    children:React.ReactNode
}

export default function Button ({href,bgcolor,textcolor,children} : ButtonProps){
    return(
        <Link href={href} className={`inline-block px-2 py-1 border-2 bg-${bgcolor} border-black text-${textcolor} font-bold tracking-wider hover:bg-${textcolor} hover:text-${bgcolor} transition-all duration-200`}>{children}</Link>
    );
}