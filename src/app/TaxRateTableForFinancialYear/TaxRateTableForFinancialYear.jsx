import "./TaxRateTableForFinancialYear.css";
import Card from "../../components/Card";

const TAX_TABLE_FY_2023_24 = [
    { range: "$0 - $18,200", rate: "Nil" },
    { range: "$18,201 - $45,000", rate: "16%" },
    { range: "$45,001 - $120,000", rate: "30%" },
    { range: "$120,001 - $180,000", rate: "37%" },
    { range: "$180,001 and above", rate: "45%" },
]

const TAX_TABLE_FY_2024_25 = [
  { range: "$0 - $20,000", rate: "Nil" },
  { range: "$20,001 - $50,000", rate: "15%" },
  { range: "$50,001 - $130,000", rate: "28%" },
  { range: "$130,001 - $200,000", rate: "35%" },
  { range: "$200,001 and above", rate: "45%" },
];

const TAX_TABLE = {
    "FY23-24": TAX_TABLE_FY_2023_24,
    "FY24-25": TAX_TABLE_FY_2024_25,
};

const TaxRateTableForFinancialYear = ({ financialYear }) => {
    return (
        <Card>
            <h2 className="tax-title">Tax Rates - {financialYear}</h2>
            <div className="tax-table-wrapper">
                <table className="tax-table">
                    <thead>
                        <tr>
                            <th>Taxable Income</th>
                            <th>Tax Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {TAX_TABLE[financialYear].map(({ range, rate}) => (
                            <tr key={range}>
                                <td>{range}</td>
                                <td>{rate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    )
}

export default TaxRateTableForFinancialYear;