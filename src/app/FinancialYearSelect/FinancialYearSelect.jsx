import "./FinancialYearSelect.css"
import Button from "../../components/Button/Button";
import Card from "../../components/Card";

// const FinancialYearSelect = () => <div>
//     <p className="label"> 
//         Financial Year Select 
//     </p>
//     <div className="financial-years">
//         <button>FY10-19</button>
//         <button>FY20-26</button>
//     </div>
    
// </div>
const FinancialYearSelect = ({ financialYear, onFinancialYearClick }) => {
    return (
        <div className="financial-year-container">
            <Card>
            <p className="financial-year-label">Select Financial Year</p>
            <div className="financial-year-buttons">
                <Button
                    onClick={() => {
                        onFinancialYearClick("FY23-24");
                    }}
                    color={financialYear === "FY23-24" ? "primary": "muted"}
                >
                    FY 2023-24
                </Button>
                <Button
                    onClick={() => {
                        onFinancialYearClick("FY24-25");
                    }}
                    color={financialYear === "FY24-25" ? "primary" : "muted"}
                >
                    FY 2024-25
                </Button>
                
            </div>
        </Card>
    </div>

    );
};

export default FinancialYearSelect; 