import Tabside from "@/components/tabside";
import Topbar from "@/components/topbar";

function Homepage() {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center bg-blue-200">
      <div className="max-w-[85rem] w-[90%] h-[50rem] bg-white rounded-2xl">
        <Topbar />
        <Tabside />
      </div>
    </div>
  );
}

export default Homepage;
