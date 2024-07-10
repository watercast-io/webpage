import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/util";
import Link from "next/link"


type IndexProps = {
    contact_url?: string
    link_url?: string
}
  
export const MainSection = ({ contact_url = '#', link_url = '#' }: IndexProps) => (
    <div className="flex md:flex-wrap flex-wrap-reverse">
      {/* Primera columna */}
      <div className="w-full md:w-3/5">
        <section className="space-y-6 pb-8 sm:pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-5xl flex-col items-center gap-4 text-center">
            <h1 className="font-heading text-3xl sm:text-5xl md:text-5xl lg:text-6xl ">
              Optimiza el uso de agua en tu cadena de suministro
            </h1>
            <p className="max-w-2xl leading-normal sm:text-xl sm:leading-8">
            Ayudamos a las empresas a calcular el uso de agua en toda la cadena de suministro, simplificando la recopilación de datos y aclarando los requerimientos para los proveedores.
            </p>
            <div className="space-x-4">
              <Link 
                href={'calculator'} className={cn(buttonVariants({ size: "lg" }))}>
                Calcula tu huella hídrica
              </Link>
              <Link 
                href={contact_url} className={cn(buttonVariants({ size: "lg", variant: "ghost" }))}>
                Contacta con nosotros
              </Link>
            </div>
          </div>
        </section>
      </div>
      
      {/* Segunda columna */}
      <div className="w-full md:w-2/5">
        <div className="flex justify-center items-center h-full py-5 md:py-30">
          <img src="images/background/water_cycle_colored_boxed.svg" alt="water cycle image" className="max-w-sm md:max-w-lg w-3/5 md:w-auto" />
        </div>
      </div>
    </div>
  )