import Feeds from "src/components/Feeds";
import RightPanel from "src/components/RightPanel";
import Sidebar from "src/components/SideBar";

const Home: React.FC = () => {
  return (
    <>
      <Sidebar />
      <main className="flex-1 p-6">
        <Feeds />
      </main>
      <RightPanel />
    </>
  );
};

export default Home;
