"use client";

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from "react-icons/ci";

const links = [
    {
        name: 'home',
        path: '/'
    },
    {
        name: 'services',
        path: '/services'
    },
    {
        name: 'resume',
        path: '/resume'
    },
    {
        name: 'work',
        path: '/work'
    },
    {
        name: 'contact',
        path: '/contact'
    },
];


const MobileNav = () => {
    const pathname = usePathname();
    // To be continued from here 41:34
    return <Sheet>
        <SheetTrigger>
            <CiMenuFries className=''/>
        </SheetTrigger>
    </Sheet>
}

export default MobileNav