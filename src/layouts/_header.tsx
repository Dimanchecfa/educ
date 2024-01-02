import { Input } from "@/components/ui/input";
import { SunIcon } from "@radix-ui/react-icons";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";

const Header = () => {
  return (
    <div className="flex sticky top-0 items-center justify-between h-16 border-b-2 w-full p-5
    bg-white z-10 shadow-md">
      <div className="flex items-center">
        {/* <Input
          placeholder="Search"
          className="w-96"
        /> */}
      </div>
      <div className="flex items-center space-x-6">
          <SunIcon />
          <EnvelopeOpenIcon />
      </div>
    </div>
  );
};

export default Header;