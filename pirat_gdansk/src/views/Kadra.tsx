const Kadra = () => {
  return (
    <div className='bg-black text-white text-xs pt-12'>
      <table>
            <thead>
                <tr>
                    <th>Imię i nazwisko</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Stat 1</td>
                    <td>Value 1</td>
                </tr>
                <tr>
                    <td>Stat 2</td>
                    <td>Value 2</td>
                </tr>
                {/* Add more rows for additional stats */}
            </tbody>
        </table>
    </div>
  );
}
export default Kadra;