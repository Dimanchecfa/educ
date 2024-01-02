import useSidebar from "@/hooks/use-sidebar"
import { AvatarIcon, CardStackPlusIcon, DashboardIcon, FilePlusIcon, GearIcon, HomeIcon, PersonIcon, PieChartIcon, PinLeftIcon, PinRightIcon, StopwatchIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import cn from "classnames"
import routes from "@/config/routes"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"



//@ts-ignore
const menuItems = [
  {
    id: 1,
    name: "Tableau de bord",
    href: routes.dashboard,
    icon: <DashboardIcon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
  },
  {
    id: 2,
    name: "Facturation",
    href: routes.invoices,
    icon: <FilePlusIcon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
  },
  {
    id: 3,
    name: "Contacts",
    href: routes.contacts,
    icon: <PersonIcon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
  },
  {
    id: 4,
    name: "Campagnes",
    href: routes.campaign,
    icon: <CardStackPlusIcon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
  },
  {
    id: 5,
    name: "Rapports",
    href: routes.reports,
    icon: <PieChartIcon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
  },
  {
    id: 6,
    name: "Paramètres",
    href: routes.settings,
    icon: <GearIcon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
  },
  {
    id: 8,
    name: "Configuration",
    href: "/",
    icon: <StopwatchIcon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
  },

  {
    id: 9,
    name: "Compte",
    href: "/",
    icon: <AvatarIcon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
  }
]

function Sidebar() {
  const { isOpen, toggleSidebar } = useSidebar()
  return (
    <>

      <div className={cn("flex flex-col h-screen border-r-2 sticky top-0", {
        "w-16 transition-all duration-500": !isOpen,
        "w-[280px] transition-all duration-500": isOpen,
      })}>
        <div className="flex flex-col items-center justify-center h-16 border-b-2">
        </div>
        <div className="flex flex-col">
          {menuItems.map((item) => (
            <NavLink
              key={item.id}
              href={item.href}
              label={item.name}
              icon={item.icon}
              isOpen={isOpen}
            />
          ))}
        </div>
        <div className="xl:flex lg:flex flex-col flex-grow justify-end p-5 sm:hidden xs:hidden">
          <div className="flex flex-row justify-center items-center space-x-2 cursor-pointer" onClick={toggleSidebar}>
            <PinLeftIcon className="h-6 w-6" />
            <p>
              {isOpen ? "Fermer" : <PinRightIcon className="h-6 w-6" />}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

const NavLink = ({ href, label, isOpen, icon }: { href: string, label: string, isOpen?: boolean, icon?: React.ReactNode }) => {
  return (
    <>

      {
        isOpen ? (
          <Link href={href} className={cn('flex flex-row items-center p-2 space-x-2 w-full h-[55px] px-4 hover:bg-primary hover:text-white', {
            "justify-center": !isOpen,
          })}>
            {icon}

            {
              isOpen && (
                <p className={cn("text-sm font-semibold", {
                  "hidden transition-all duration-300": !isOpen,
                })}>
                  {label}
                </p>
              )
            }

          </Link>
        ) : (
          <TooltipProvider>
            <Tooltip delayDuration={0}>
              <TooltipTrigger>
                <Link href={href} className={cn('flex flex-row items-center p-2 space-x-2 w-full h-[55px] px-4 hover:bg-primary hover:text-white justify-center')}>
                  {icon}
                </Link>
              </TooltipTrigger>
              <TooltipContent sideOffset={5} align="center" side="right">
                {label}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )
      }


    </>
  )
}

export default Sidebar