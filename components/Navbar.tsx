import Image from 'next/image';
import Link from 'next/link';
import { HeaderUser } from '.';

async function getuser() {
    const res = await fetch('https://reqres.in/api/users/2');
    const data = await res.json();
    return data;
}

const Navbar = async () => {
    const { data: user } = await getuser();
    return (
        <header className="w-full absolute z-10">
            <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
                <Link href="/" className="flex justify-center items-center">
                    <Image
                        src="/logo.svg"
                        alt="Car Hub Logo"
                        width={118}
                        height={18}
                        className="object-contain"
                    />
                </Link>

                <HeaderUser user={user} />
            </nav>
        </header>
    );
};

export default Navbar;
