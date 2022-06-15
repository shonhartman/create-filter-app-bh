import { useEffect, useState } from "react";
import DataTable from "./DataTable";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("https://api.sleeper.app/v1/players/nfl")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const values = data && Object.values(data).filter(Boolean);
  const headings =
    values[0] &&
    Object.keys(values[0]).filter(
      (value) =>
        value === "last_name" || value === "position" || value === "status"
    );

  function search() {
    if (!values) {
      return;
    }

    return values.filter((v) => {
      return (
        v?.last_name?.toString().toLowerCase().includes(query?.toString().toLowerCase()) ||
        v?.status?.toString().toLowerCase().includes(query?.toString().toLowerCase()) ||
        v?.position?.toString().toLowerCase().includes(query?.toString().toLowerCase())
      );
    });
  }

  return (
    <div className="w-full bg-indigo-100">
      <div className="flex justify-center">
        <div className="mb-3 xl:w-96">
          <label
            htmlFor="search"
            className="form-label inline-block mb-2 text-gray-700"
          >
            Search
          </label>
          <input
            type="text"
            className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none
            "
            id="search"
            placeholder="Search Here..."
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <DataTable headings={headings} values={search(values)} />
    </div>
  );
}

export default App;
