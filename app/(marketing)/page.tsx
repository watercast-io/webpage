import { env } from "@/env.mjs"
import { MainSection } from "@/components/application/MainSection"

export default function IndexPage({ }) {
  const contact_url = env.CALENDLY_URL || ''
  return (
    <div>
      <MainSection contact_url={contact_url} />
    </div>
  )
}
