import { CreateApplicationForm } from '@/components/application/create-form';
import React from 'react';

export const CreatePage: React.FC = () => {
    return (
        <div>
            <h1>Create Application</h1>
            <div className='m-2'>
                <CreateApplicationForm />
            </div>
        </div>
    );
}

export default CreatePage;


