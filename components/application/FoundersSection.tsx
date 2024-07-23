'use client';

import React from 'react';
import { useIntl } from 'react-intl';
import AgranimoIcon from '../icons/agranimo';
import EventiozIcon from '../icons/eventioz';
import Vetli from '../icons/vetli';

export interface FoundersSectionProps {
    children?: React.ReactNode
}


export const FoundersSection: React.FC<FoundersSectionProps> = ({ }) => {
    const t = useIntl();
    const title = t.formatMessage({ id: `foundersSection_title`, defaultMessage: "We have previously founded (exited) startups." });
    

    return(
        <React.Fragment>
            <section
                id="features"
                className="container space-y-6 bg-slate-50 dark:bg-transparent"
            >
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 className="font-heading text-2xl leading-[1.1] sm:text-2xl md:text-5xl">
                        {title}
                    </h2>
                </div>
                <div className="flex gap-4 justify-center ">
                    <div className="rounded-lg  p-2">
                        <div className="flex h-[100px] flex-col justify-between rounded-md items-center">
                            <AgranimoIcon  width={200} height={100} />
                        </div>
                    </div>
                    <div className="rounded-lg  p-2">
                        <div className="flex h-[100px] flex-col justify-between rounded-md items-center">
                            <EventiozIcon  width={200} height={200} />
                        </div>
                    </div>
                </div>
            </section>
         </React.Fragment>
    );
}

export default FoundersSection;