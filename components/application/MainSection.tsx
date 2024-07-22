import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/util";
import Link from "next/link"


type IndexProps = {
    contact_url?: string
    link_url?: string
}


const MainSectionTitles = {
  book_demo: "Book a demo"
}
  
export const MainSection = ({ contact_url = '#', link_url = '#' }: IndexProps) => (
    // <div className="flex md:flex-wrap flex-wrap-reverse">
    <div className="flex flex-col items-center justify-center">
      {/* Columna Central */}
      <div className="w-full">
        <section className="space-y-6 pb-8 sm:pt-6 md:pb-12 md:pt-10 lg:py-20">
          <div className="container flex max-w-5xl flex-col items-center gap-4 text-center">
            <h1 className="font-heading text-3xl sm:text-5xl md:text-5xl lg:text-6xl ">
              Mitigate water risks across your facilities and watersheds.
            </h1>
            <p className="max-w-2xl leading-normal sm:text-xl sm:leading-8">
            Get access to ready-to-work information to develop your business cases for proactive water management.
            </p>
            <div className="space-x-4">
              {/* <Link 
                href={'calculator'} className={cn(buttonVariants({ size: "lg" }))}>
                Calcula tu huella hídrica
              </Link> */}
              <Link 
                href={contact_url} className={cn(buttonVariants({ size: "lg",}))}>
                {MainSectionTitles.book_demo}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )