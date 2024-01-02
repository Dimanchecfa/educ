import Header from "./_header";
import Sidebar from "./_sidebar";
import { motion , AnimatePresence } from "framer-motion";
import { fadeInBottom } from "@/lib/framer-motion/fade-in-bottom";

export default function GeneralLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-row">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Header />
          <motion.div
            variants={fadeInBottom()}
            className="flex flex-col w-full h-full bg-light-900 dark:bg-gray-900"
          >
            <AnimatePresence
              mode="wait"
              initial={false}
              onExitComplete={() => window.scrollTo(0, 0)}
            >
              {children}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </>
  )
}