import {create} from "zustand";

type InvoiceProps = {
    isOpen: boolean
    toggleInvoice: () => void
    openInvoice: () => void,
    closeInvoice: () => void
}
const useInvoice = create<InvoiceProps>((set) => ({
    isOpen: true,
    toggleInvoice: () => set((state) => ({ isOpen: true })),
    openInvoice: () => set((state) => ({ isOpen: true })),
    closeInvoice: () => set((state) => ({ isOpen: false })),
}))

export default useInvoice
