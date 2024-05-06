import React from 'react';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export const LoginButton: React.FC = async () => {
    return (
        <Link href={'#'} className={cn(buttonVariants({ size: "sm", }))}>
            Login
        </Link>
    );
}