import Link from "next/link";
interface ButtonProps{
    href:string;
    children:React.ReactNode
}

export default function Button ({href,children} : ButtonProps){
    return(
        <Link href={href} className="inline-block px-2 py-1 border-2 border-black text-black font-bold tracking-wider hover:bg-black hover:text-white transition-all duration-200">{children}</Link>
    );
}