import './App.css'
import { useState } from 'react'
import FinancialYearSelect from './app/FinancialYearSelect'
import TaxRateTableForFinancialYear from './app/TaxRateTableForFinancialYear'
import Calculator from './app/Calculator'
import Header from "./app/Header"
import Disclaimer from './app/Disclaimer'

function App() {
  const [financialYear, setFinancialYear] = useState("FY24-25")

  return (
      <div className="main">
        <Header />
        <FinancialYearSelect
          financialYear={financialYear}
          onFinancialYearClick={setFinancialYear}
        />

        <div className="content">
          <TaxRateTableForFinancialYear financialYear={financialYear} />
          <Calculator financialYear={financialYear} />
        </div>
        <Disclaimer />
      </div>
  );
}

export default App
