import { useState } from "react";
import axios from "axios";
import { updateList, setLoading } from "../../redux/reducers/listSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";

interface ListItem {
  name: string;
}

const Search = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state: RootState) => state.list.list);

  const handleSearch = async () => {
    dispatch(setLoading(true));
    try {
      const response = await axios.get(
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${query}`
      );
      dispatch(updateList(response.data.data));
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Card name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {list.map((item: ListItem, index: number) => (
          <div key={index}>{item.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Search;
