import { ApplicationCard } from '@/components/application/application-card';
import { Separator } from '@/components/ui/separator';
import React from 'react';

export const ListPage: React.FC = () => {
    return (
        <div>
            <h3>Application List</h3>
            <Separator className="my-4" />
            <div className='flex flex-row gap-4'>
                <ApplicationCard />
            </div>
        </div>
    );
}

export default ListPage;