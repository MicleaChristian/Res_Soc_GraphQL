import Feeds from "@components/Feeds";
import RightPanel from "@components/RightPanel";
import Sidebar from "@components/SideBar";

const HomePage: React.FC = () => {
  return (
    <div>
      <Sidebar />
      <main className="flex-1 p-6">
        <Feeds />
      </main>
      <RightPanel />
    </div>
  );
};

export default HomePage;
