import GeneralLayout from "@/layouts/_general-layout";
import Header from "@/layouts/_header";
import Sidebar from "@/layouts/_sidebar";


export const Home = () => {
  return (
    <GeneralLayout>
      <div className="flex flex-col w-full h-full p-2">
         <p>
          Hello world
         </p>
      </div>
    </GeneralLayout>
  );
}


export default Home;