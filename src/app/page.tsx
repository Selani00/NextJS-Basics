import Link from 'next/link';

export default function Page(){
    return (
    <div>
        <h1>Home Page</h1>
        <Link href='/about'>Blog</Link>

    </div>
    )
}