import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import useInvoice from "@/hooks/use-invoice";

export default function ImportUserSheet({ children , title  } : {children: React.ReactNode , title : string}) {
    return (
        <>
            <Sheet>
                <SheetTrigger>
                    {children}
                </SheetTrigger>
                <SheetContent side={"right"}>
                    <SheetHeader>
                        <SheetTitle>
                            {title}
                        </SheetTitle>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </>
    )
}

