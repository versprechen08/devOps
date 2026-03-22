import "./Result.css";
const TAX_TABLE_FY_2023_24 = [
  { min: 0, max: 18200, base: 0, rate: 0 },
  { min: 18201, max: 45000, base: 0, rate: 0.16 },
  { min: 45001, max: 120000, base: 5092, rate: 0.3 },
  { min: 120001, max: 180000, base: 29467, rate: 0.37 },
  { min: 180001, max: Infinity, base: 51667, rate: 0.45 },
];

const TAX_TABLE_FY_2024_25 = [
  { min: 0, max: 20000, base: 0, rate: 0 },
  { min: 20001, max: 50000, base: 0, rate: 0.15 },
  { min: 50001, max: 130000, base: 4500, rate: 0.28 },
  { min: 130001, max: 200000, base: 26100, rate: 0.35 },
  { min: 200001, max: Infinity, base: 56100, rate: 0.45 },
];

const TAX_TABLE = {
  "FY23-24": TAX_TABLE_FY_2023_24,
  "FY24-25": TAX_TABLE_FY_2024_25,
};

const calculateTax = (taxTable, income) => {
    const bracket = taxTable.find(
        ({ min, max }) => income >= min && income <= max
    );

    if (!bracket) {
        return undefined;
    }
    
    const tax = bracket.base + (income - bracket.min) * bracket.rate;
    return tax;
}

const Result = ({ financialYear, income }) => {
  const tax = calculateTax(TAX_TABLE[financialYear], income);

  if (tax === undefined) {
    return null;
  }

  const netIncome = income - tax;
  const effectiveTaxRate = (tax / income) * 100;

  return (
    <div className="calculator-results">
      <h3 className="calculator-results-title">Results</h3>
      <div className="calculator-row">
        <span>Taxable Income:</span>
        <span>
          {Intl.NumberFormat("en-AU", { // Intl.NumberFormat API 把数字格式化成澳元字符串
            style: "currency",
            currency: "AUD",
          }).format(income)}
        </span>
      </div>
      <div className="calculator-row">
        <span>Income Tax:</span>
        <span className="calculator-highlight">
          {Intl.NumberFormat("en-AU", {
            style: "currency",
            currency: "AUD",
          }).format(tax)}
        </span>
      </div>
      <div className="calculator-row calculator-row-total">
        <span>Net Income:</span>
        <span>
          {Intl.NumberFormat("en-AU", {
            style: "currency",
            currency: "AUD",
          }).format(netIncome)}
        </span>
      </div>
      <div className="calculator-row">
        <span>Effective Tax Rate:</span>
        <span>{effectiveTaxRate.toFixed(2)}%</span> 
      </div>
    </div>
  );
};

export default Result;