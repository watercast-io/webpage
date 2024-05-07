import { env } from "@/env.mjs"
import { MainSection } from "@/components/application/MainSection"

export default function IndexPage({ }) {
  const contact_url = env.CALENDLY_URL || '';
  const link_url = env.LINK_URL || '';
  return (
    <div>
      <MainSection 
        contact_url={contact_url} 
        link_url={link_url} 
      />
    </div>
  )
}
