'use client';

import React from 'react';
import TeslaIcon from '../icons/tesla';
import AmazonIcon from '../icons/amazon';
import EventbriteIcon from '../icons/eventbrite';
import AbbIcon from '../icons/abb';
import ToucanIcon from '../icons/toucan';
import { useIntl } from 'react-intl';

export interface ProductSectionProps {
    children?: React.ReactNode
}


export const ProductSection: React.FC<ProductSectionProps> = ({ }) => {
    const t = useIntl();
    const title = t.formatMessage({ id: `productSection_title`, defaultMessage: "We have previously built products and infrastructures at" });
    

    return(
        <React.Fragment>
            <section
                id="features"
                className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
            >
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 className="font-heading text-2xl leading-[1.1] sm:text-2xl md:text-5xl">
                        {title}
                    </h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2 justify-center ">
                    <div className="rounded-lg p-2">
                        <div className="flex h-[100px] flex-col justify-between rounded-md items-center">
                            <TeslaIcon width={100} height={100} />
                        </div>
                    </div>
                    <div className="rounded-lg p-2">
                        <div className="flex h-[100px] flex-col justify-between rounded-md items-center">
                            <AmazonIcon width={100} height={100} />
                        </div>
                    </div>
                    <div className="rounded-lg p-2">
                        <div className="flex h-[100px] flex-col justify-between rounded-md items-center">
                            <EventbriteIcon width={100} height={100} />
                        </div>
                    </div>
                    <div className="rounded-lg p-2">
                        <div className="flex h-[100px] flex-col justify-between rounded-md items-center">
                            <AbbIcon width={100} height={100} />
                        </div>
                    </div>
                    <div className="rounded-lg p-2">
                        <div className="flex h-[100px] flex-col justify-between rounded-md items-center">
                            <ToucanIcon width={100} height={100} />
                        </div>
                    </div>
                </div>
            </section>
         </React.Fragment>
    );
}

export default ProductSection;