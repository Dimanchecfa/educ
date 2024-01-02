"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "../ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { AvatarIcon, DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Button } from "../ui/button"
import ContactSheet from "../modal/contact-detail-sheet"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}


export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "Avatar",
    header: "Avatar",
    cell: ({ row }) => (
      <div className="flex items-center">
        <AvatarIcon className="h-8 w-8 rounded-lg" />
      </div>
    ),
  },
  {
    accessorKey: "name",
    header: "Nom Complet",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Téléphone",
  },
  {
    accessorKey: "adresse",
    header: "Adresse",
  },
  {
        // id: "actions",
        enableHiding: false,
        header: "Actions",
        cell: ({ row }) => {
          const payment = row.original
    
          return (
            <div  className="flex items-center">
              <ContactSheet data={row?.original}>
               <Button 
                onClick={() => console.log(row)}
               >
              Voir plus
            </Button>
            </ContactSheet>
            </div>
          )
        },
      },
]
