const Report = () => {
  return (
    <div className="flex flex-col justify-start">
      <h1>Daily Report</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Debit</th>
              <th>Credit</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>2023-05-20</td>
              <td>$100.00</td>
              <td>$50.00</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>2023-05-20</td>
              <td>$200.00</td>
              <td>$100.00</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>2023-05-20</td>
              <td>$150.00</td>
              <td>$75.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Report;
