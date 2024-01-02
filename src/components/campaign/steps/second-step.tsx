import ContactsList from "@/components/contact/contacts-list";
import { DataTable } from "@/components/datatable/data-table";
import Breadcumb from "@/components/ui/breadcumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Import } from "lucide-react";

export default function SecondTableStep() {
  return (
    <>
      <div className="flex flex-col space-y-2">
        <div className="w-full flex items-center justify-between h-16 border rounded-md p-4">
          <div className="flex flex-1 items-center space-x-2">
            <Input
              placeholder="Filter tasks..."
              value={""}
              onChange={(event) => { }}
              className="h-8 w-[150px] lg:w-[250px]"
            />
          </div>
          <Button
            className="w-32"
          >
            <Import className="w-6 h-6 mr-2" />
            Importer
          </Button>
        </div>
        <ContactsList data={[]} toolbar={false} />
      </div>
    </>
  )
}