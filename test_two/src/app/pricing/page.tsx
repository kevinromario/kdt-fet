export default function Pricing() {
  return (
    <div className="pricing">
      <h1>Pricing Plans</h1>
      <table className="pricing-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Basic</th>
            <th>Business</th>
            <th>Entrepreneur</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Price</td>
            <td>1.000.000</td>
            <td>1.000.000</td>
            <td>1.000.000</td>
          </tr>
          <tr>
            <td>Mencatat barang masuk</td>
            <td>✓</td>
            <td>✓</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>Mencatat barang keluar</td>
            <td>✓</td>
            <td>✓</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>Mencatat hasil keuntungan</td>
            <td>✓</td>
            <td>✓</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>Analisa penjualan dengan Chart</td>
            <td></td>
            <td>✓</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>Support 7x24 Jam</td>
            <td></td>
            <td>✓</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>Export ke Excel</td>
            <td></td>
            <td></td>
            <td>✓</td>
          </tr>
          <tr>
            <td>AI Prediksi penghasilan</td>
            <td></td>
            <td></td>
            <td>✓</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
