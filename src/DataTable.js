export default function DataTable({ headings, values }) {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-white border-b">
                <tr>
                  {headings &&
                    headings.map((heading, index) => (
                      <th
                        key={index}
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        {heading}
                      </th>
                    ))}
                </tr>
              </thead>
              <tbody>
                {values &&
                  values.map((value, index) => (
                    <tr key={index} className="bg-gray-100 border-b">
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
