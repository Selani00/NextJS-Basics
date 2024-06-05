"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import "./style.css"

const navLink = [
    { href: '/login', label: 'Login' },
    { href: '/register', label: 'Register' },
]
export default function AuthLayout({
    children,
}:{
    children: React.ReactNode
}){
    const pathname = usePathname();
    return(
        <div>
            {navLink.map((link)=> {
                const isActive = pathname.startsWith(link.href)
                    return(
                        <Link key={link.href} href={link.href}
                        className={isActive ? "font-bold mt-4" : "text-blue-400 mr-4" }>
                           
                                {link.label}
                            
                        </Link>
                    )
            })}
            {children}
            
          

        </div>
        
    )
}