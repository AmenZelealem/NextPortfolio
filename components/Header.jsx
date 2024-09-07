
import Link from "next/link"
import { Button } from "./ui/button"

// Componenets
import Nav from "./Nav";
import MobileNav from "./MobileNav";


const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white bg-pink-50/20">
            <div className="container mx-auto flex justify-between center">
                {/* {Logo} */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        AmeNEL<span className="text-accent">.</span>

                    </h1>
                </Link>
                {/* {Desktop Nav and Hire Me Button} */}

                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button>Hire Me</Button>
                    </Link>
                </div>

                {/* {Mobile Nav} */}
            <div className="xl:hidden">
                <MobileNav/>
            </div>

            </div>

        </header>
    );
};

export default Header