import Search from "../components/Search/Search";
import List from "../components/List/List";
import Binder from "../components/Binder/Binder";
import "./BuildBinder.css";

const BuildBinder: React.FC = () => {
  return (
    <>
      <div className="build-binder">
        <div className="build-binder__left">
          <Search />
          <List />
        </div>
        <div className="build-binder__right">
          <Binder />
        </div>
      </div>
    </>
  );
};

export default BuildBinder;
