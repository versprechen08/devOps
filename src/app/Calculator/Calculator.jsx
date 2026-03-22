import Card from "../../components/Card";
import Form from "./components/Form";
import Result from "./components/Result";
import { useState } from "react";

const Calculator = ({ financialYear }) => {
    const [income, setIncome] = useState();
    return (
        <Card>
            <h2 className="calculator-title">Calculate Tax</h2>
            <Form onSubmit={(value) => setIncome(value)} />
            <Result financialYear={financialYear} income={income} />
        </Card>
    );
};

export default Calculator;