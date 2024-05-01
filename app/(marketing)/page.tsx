import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/util";
import Link from "next/link"

export default async function IndexPage() {
  return (
    <div className="">
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-5xl flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl ">
          AI-driven water resilience solution for risk assessment
          </h1>
          <p className="max-w-2xl leading-normal sm:text-xl sm:leading-8">
          Collecting operational data and combining it with local water satellite imagery to provide real-time insights on water risk assessment.
          </p>
          <div className="space-x-4">
            {/* <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
              Get Started
            </Link> */}
          </div>
        </div>
      </section>
    </div>
  )
}
