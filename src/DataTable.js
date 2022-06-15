import { useState } from "react";

export default function DataTable({ headings, values }) {
  const [columnToSort, setColumnToSort] = useState("");
  const [ascending, setAscending] = useState(true);

  function handleSort(e) {
    setColumnToSort(e.target.ariaLabel);
    setAscending(!ascending);
  }

  function order(a, b) {
    if (ascending) {
      return a[columnToSort] < b[columnToSort]
        ? -1
        : a[columnToSort] > b[columnToSort]
        ? 1
        : 0;
    }
    if (!ascending) {
      return a[columnToSort] > b[columnToSort]
        ? -1
        : a[columnToSort] < b[columnToSort]
        ? 1
        : 0;
    }
  }

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-indigo-400 border-b">
                <tr>
                  {headings &&
                    headings.map((heading, index) => (
                      <th
                        key={index}
                        onClick={handleSort}
                        scope="col"
                        aria-label={heading}
                        className="text-sm font-medium text-white uppercase px-6 py-4 text-left"
                      >
                        {heading}
                      </th>
                    ))}
                </tr>
              </thead>
              <tbody>
                {values &&
                  values.sort(order).map((value, index) => (
                    <tr
                      key={index}
                      className="even:bg-gray-50 odd:bg-white border-b"
                    >
                      {headings.map((heading, index) => (
                        <td
                          key={index}
                          className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                        >
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
