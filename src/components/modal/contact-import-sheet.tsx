import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import useInvoice from "@/hooks/use-invoice";
import { ImportCard } from "../users/import-card";
import FileUpload from "../ui/uploader";

export default function ImportContactSheet({ children , title  } : {children: React.ReactNode , title : string}) {
    return (
        <>
            <Sheet>
                <SheetTrigger>
                    {children}
                </SheetTrigger>
                <SheetContent side={"bottom"}>
                    <SheetHeader>
                        <SheetTitle>
                            {title}
                        </SheetTitle>
                    </SheetHeader>
                    <div className="flex flex-col space-y-4 p-4">
                        <FileUpload />
                    </div>
                </SheetContent>
            </Sheet>
        </>
    )
}

