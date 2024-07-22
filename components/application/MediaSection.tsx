import { siteConfig } from '@/config/site'
import Link from 'next/link'
import React from 'react'
import Video from 'next-video';
import watercastVideo from '@/videos/watercastVideo.mp4';


export interface MediaSectionProps {
    children?: React.ReactNode
}


const MediaSection: React.FC<MediaSectionProps> = ({ children }) => {

    return(
        <React.Fragment>
            <section 
                id="open-source" 
                //className="container py-8 md:py-12 lg:py-24"
                className="container space-y-6 py-8 dark:bg-transparent md:py-12 lg:py-24"
            >
                <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                        {/* Book a demo */}
                    </h2>
                    <Video src={watercastVideo} />;
                </div>
                
            </section>
        </React.Fragment>
    );
}

export default MediaSection;