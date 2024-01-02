import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import useInvoice from "@/hooks/use-invoice";
import { ImportCard } from "../users/import-card";
import FileUpload from "../ui/uploader";
import { Button } from "../ui/button";
import { Edit, Home, Mail, Phone } from "lucide-react";
import { Separator } from "../ui/separator";
import InvoiceCard from "../invoices/invoice-card";
import ContactForm from "../contact/form/contact-form";
import React from "react";

type State = {
    type: "form" | "detail"
}

export default function ContactSheet({ children, title, data, type = "detail" }: { children: React.ReactNode, title?: string, data: any, type: State["type"] }) {
    const name = "Dimanche Namountougou"
    const [view , setView] = React.useState<State["type"]>(type)
    const handleEdit = () => {
        setView("form")
        title = "Editer un contact"
    }
    return (
        <>
            <Sheet>
                <SheetTrigger className="w-full">
                    {children}
                </SheetTrigger>
                <SheetContent side={"right"}>
                    {view === "detail" && (
                        <>
                            <SheetHeader className="border-b-4 pb-3">
                                <SheetTitle>
                                    Détail du contact
                                </SheetTitle>
                                <SheetDescription>
                                    Derniere activité : 12/12/2021
                                </SheetDescription>
                            </SheetHeader>
                            <div className="flex flex-col space-y-4 py-6">
                                <div className="flex flex-row h-32 justify-between">
                                    <div className="flex flex-row gap-2 items-start">
                                        <img
                                            className="h-24 w-24 rounded-full"
                                            src="https://picsum.photos/200/300"
                                            alt="avatar"
                                        />
                                        <div className="flex flex-col gap-3">
                                            <h2 className="text-xl tex-bold">
                                                {name}
                                            </h2>
                                            <p className="text-lg text-primary flex text-center items-center">
                                                <Mail className="h-5 w-5 mr-2" />
                                                {data?.email}
                                            </p>
                                            <div className="flex flex-row gap-3 w-full items-center">
                                                <p className="text-lg flex text-center items-center">
                                                    <Phone className="h-5 w-5 mr-2" />
                                                    226 70 00 00 00
                                                </p>
                                                <Separator
                                                    className="h-5 w-1"
                                                />
                                                <p className="text-lg flex text-center items-center">
                                                    <Home className="h-5 w-5 mr-2" />
                                                    Ouagadougou
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-start justify-center gap-2">
                                        <Button
                                            variant={"outline"}
                                            className="w-auto whitespace-nowrap text-primary border-primary"
                                        >
                                            <Mail className="h-5 w-5 mr-2" />
                                            Envoyer un mail
                                        </Button>
                                        <Button
                                            onClick={() => handleEdit()}
                                            variant={"outline"}
                                            className="w-auto whitespace-nowrap text-primary border-primary"
                                        >
                                            <Edit className="h-5 w-5 mr-2" />
                                            modifier
                                        </Button>

                                    </div>
                                </div>
                                <div className="flex flex-row gap-6 w-full">
                                    <CardInfo
                                        title="Total des factures"
                                        value="0 F CFA"
                                    />
                                    <CardInfo
                                        title="Total des factures"
                                        value="0 F CFA"
                                    />
                                    <CardInfo
                                        title="Total des factures"
                                        value="0 F CFA"
                                    />
                                </div>
                                <div className="flex flex-col w-full h-auto border rounded-md">
                                    <div className="flex flex-row justify-between items-center p-4 border-b">
                                        <h2 className="text-xl text-bold">
                                            Factures
                                        </h2>
                                    </div>
                                    <div className="flex items-start flex-wrap p-4 gap-3">
                                        <InvoiceCard title="Facture 1" />
                                        <InvoiceCard title="Facture 2" />
                                        <InvoiceCard title="Facture 3" />
                                        <InvoiceCard title="Facture 4" />
                                        <InvoiceCard title="Facture 5" />
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                    {view === "form" && (
                        <>
                         <SheetHeader className="border-b-4 pb-3">
                                <SheetTitle>
                                    {data ? "Editer un contact" : "Ajouter un contact"}
                                </SheetTitle>
                            </SheetHeader>
                            <ContactForm 
                                title="Editer un contact"
                                data={data}
                                setView={setView}
                            />
                        </>
                    )}
                </SheetContent>
            </Sheet>
        </>
    )
}


const CardInfo = ({ title, value }: { title: string, value: string }) => (
    <div className="flex flex-col p-4 gap-3 h-24 w-48 border rounded-md bg-slate-50 text-center">
        <p className="text-lg text-bold">
            {title}
        </p>
        <p className="text-lg">
            {value}
        </p>
    </div>
)

