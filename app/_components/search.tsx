"use client"
import { Button } from "./ui/button"
import { SearchIcon } from "lucide-react"
import { Input } from "./ui/input"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form"
import { useRouter } from "next/navigation" // Correção aqui

const formSchema = z.object({
  search: z.string().trim().min(1, "Digite algo para buscar!"),
})

const Search = () => {
  // Renomeado para começar com letra maiúscula
  const router = useRouter() // Correção aqui
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
    },
  })

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    router.push(`/babershops?search=${data.search}`)
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="flex gap-2">
          <FormField
            control={form.control}
            name="search"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Faça a sua busca!" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">
            <SearchIcon />
          </Button>
        </form>
      </Form>
    </>
  )
}

export default Search
