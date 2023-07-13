import { Link } from "react-router-dom";
import { useData } from "../context/dataContext";

export default function Nav() {
  const { setFilterValue, filterValue } = useData();

  const handleChangeSearch = (e) => {
    setFilterValue((prev) => ({ ...prev, search: e.target.value }));
  };

  return (
    <nav className="flex justify-between p-4 shadow-md border-b border-b-gray-400">
      <Link to={"/"}>
        <h2 className="text-3xl font-Merriweather font-bold">Meetup</h2>
      </Link>

      <input
        type="search"
        name=""
        id=""
        className="border border-gray-500 p-[5px] outline-none"
        placeholder="Search by title and tags"
        value={filterValue.search}
        onChange={handleChangeSearch}
      />
    </nav>
  );
}
