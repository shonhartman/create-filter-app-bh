import { useEffect, useState } from "react";

function App() {
  // https://api.sleeper.app/v1/players/nfl

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.sleeper.app/v1/players/nfl")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const values = data && Object.values(data).filter(Boolean);
  const headings = values[0] && Object.keys(values[0]).filter(
    (value) =>
      value === "last_name" || value === "position" || value === "status"
  );
  
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-white border-b">
                <tr>
                  {headings && headings.map((heading) => (
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {values && values.map((value) => (
                  <tr className="bg-gray-100 border-b">
                      {headings.map(heading => (
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {value[heading]}
                        </td>
                      ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
