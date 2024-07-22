import { env } from "@/env.mjs"
import { MainSection } from "@/components/application/MainSection"
import ProductSection from "@/components/application/ProductSection";
import MediaSection from "@/components/application/MediaSection";

export default function IndexPage({ }) {
  const contact_url = env.CALENDLY_URL || '';
  const link_url = env.LINK_URL || '';
  return (
    <div className="container max-w-8xl py-6 lg:py-10">
       <div className="flex flex-col gap-4 flex-1">
        <div className="flex-grow-[8]">
          <MainSection 
            contact_url={contact_url} 
            link_url={link_url} 
          />
        </div>
        <div className="flex-grow-[2]">
          <MediaSection /> 
        </div>

        <hr className="my-8" />
        
        <div className="flex-grow-[2]">
        
          <ProductSection /> 
        </div>
      </div>
</div>
  )
}
