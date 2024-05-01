import { getAuthorizationUrl, getUser } from '@/lib/auth/auth-kit';
import React from 'react';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export const LoginButton: React.FC = async () => {
    const { isAuthenticated } = await getUser();
    const authorizationUrl: string = await getAuthorizationUrl();
    if(isAuthenticated) return null
    return (
    <Link href={authorizationUrl} className={cn(buttonVariants({ size: "sm", }))}>
        Login
    </Link>
    );
}