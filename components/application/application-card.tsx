import { BellIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

const notifications = [
  {
    title: "Registrado",
    description: "20-03-2024 09:00", 
    status: true,
  },
  // {
  //   title: "En tramitación.",
  //   description: "--",
  //   status: false
  // },
  // {
  //   title: "Pendiente de solicitud de los informes preceptivos.",
  //   description: "--",
  //   status: false
  // },
  // {
  //   title: "Pendiente respuesta informes preceptivos solicitados.",
  //   description: "--",
  //   status: false
  // },
  // {
  //   title: "En Estudio.",
  //   description: "--",
  //   status: false
  // },
//   {
//     title: "Your subscription is expiring soon!",
//     description: "2 hours ago",
//   },
]

type CardProps = React.ComponentProps<typeof Card>

export function ApplicationCard({ className, ...props }: CardProps) {
  return (
      <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>NIE: Y8872257K</CardTitle>
        {/* <CardDescription>You have 3 unread messages.</CardDescription> */}
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center space-x-4 rounded-md border p-4">
          <BellIcon />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Notifications
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to email.
            </p>
          </div>
          <Switch />
        </div>
        <div 
            className="flex flex-col rounded-md border p-4"
        >
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className={`flex size-2 translate-y-1 rounded-full  ${notification.status ? 'bg-green-500': 'bg-gray-500'}`} />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  Estado : {notification.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  Last check : {notification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <CheckIcon className="mr-2 size-4" /> Edit
        </Button>
      </CardFooter>
    </Card>
  )
}
