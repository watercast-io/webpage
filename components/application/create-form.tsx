"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { capitalize } from "lodash"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { ApplicationSchema } from "./schema"
import { z } from "zod"
import { Checkbox } from "@/components/ui/checkbox"


export function CreateApplicationForm() {
    const form = useForm<z.infer<typeof ApplicationSchema>>({
        resolver: zodResolver(ApplicationSchema),
    })

    const onSubmit = form.handleSubmit((data) => {
        console.log(data)
    })
    const keySchema = Object.keys(ApplicationSchema.keyof().Values);
  return (
    <Form {...form}>
        <form onSubmit={onSubmit} className="space-y-8">
            {keySchema.map((element) => {   
                return (
                    <FormField
                        key={element}
                        control={form.control}
                        name={String(element)}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{capitalize(element)}</FormLabel>
                                <FormControl>
                                    <Input placeholder={capitalize(element)} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                )
            })}
            <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Accept terms and conditions
                </label>
                </div>
            <Button type="submit">Submit</Button>
        </form>
    </Form>
  )
}
