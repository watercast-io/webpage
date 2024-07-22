import React from 'react';
import TeslaIcon from '../icons/tesla';
import AmazonIcon from '../icons/amazon';
import EventbriteIcon from '../icons/eventbrite';
import AbbIcon from '../icons/abb';
import ToucanIcon from '../icons/toucan';

export interface ProductSectionProps {
    children?: React.ReactNode
}


const ProductSection: React.FC<ProductSectionProps> = ({ children }) => {

    return(
        <React.Fragment>
            <section
                id="features"
                className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
            >
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 className="font-heading text-2xl leading-[1.1] sm:text-2xl md:text-5xl">
                        We have previously built products and infrastructures at
                    </h2>
                </div>
                <div className="pt-12 grid gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 ">
                    <div className="rounded-lg border p-2">
                        <div className="flex h-[180px] flex-col justify-between rounded-md items-center">
                            <TeslaIcon width={180} height={180} />
                        </div>
                    </div>
                    <div className="rounded-lg border p-2">
                        <div className="flex h-[180px] flex-col justify-between rounded-md items-center">
                            <AmazonIcon width={180} height={180} />
                        </div>
                    </div>
                    <div className="rounded-lg border p-2">
                        <div className="flex h-[180px] flex-col justify-between rounded-md items-center">
                            <EventbriteIcon width={180} height={180} />
                        </div>
                    </div>
                    <div className="rounded-lg border p-2">
                        <div className="flex h-[180px] flex-col justify-between rounded-md items-center">
                            <AbbIcon width={180} height={180} />
                        </div>
                    </div>
                    <div className="rounded-lg border p-2">
                        <div className="flex h-[180px] flex-col justify-between rounded-md items-center">
                            <ToucanIcon width={180} height={180} />
                        </div>
                    </div>
                </div>
                <div className="mx-auto text-center md:max-w-[58rem]">
                    {/* <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        Taxonomy also includes a blog and a full-featured documentation site
                        built using Contentlayer and MDX.
                    </p> */}
                </div>
            </section>
        </React.Fragment>
    );
}

export default ProductSection;