import './App.css'
import FinancialYearSelect from './app/FinancialYearSelect'
import TaxRateTableForFinancialYear from './app/TaxRateTableForFinancialYear'
import Calculator from './app/Calculator'
import Header from "./app/Header"
import Disclaimer from './app/Disclaimer'

function App() {
  return (
      <div className="main">
        <Header />
        <FinancialYearSelect />

        <div className="content">
        
          <TaxRateTableForFinancialYear />
          <Calculator />
        </div>
          <Disclaimer />
        </div>
  );
}

export default App
