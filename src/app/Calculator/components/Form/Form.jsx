import { useState } from "react";
import Button from "../../../../components/Button";
import "./Form.css";

const Form = ({ onSubmit }) => {
  const [value, setValue] = useState();
// value 存储用户当前输入的收入数字
// setValue 在用户每次输入时更新 value

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault(); // ← 阻止浏览器默认行为（刷新页面）
        onSubmit(Number(value)); // ← 把收入值传给 Calculator
      }}
      className="calculator-form"
    >
      <div className="calculator-field">
        <label className="calculator-label" htmlFor="income">
          Annual Taxable Income
        </label>

        <div className="calculator-input-wrap">
          <span className="calculator-currency">$</span>
          <input
            id="income"
            className="calculator-input"
            type="number"
            placeholder="Enter your income"
            min="0"
            step="0.01"
            onChange={(event) => setValue(event.target.value)}
          />
        </div>
      </div>

      <Button type="submit" color="success">Calculate Tax</Button>
    </form>
  );
};

export default Form;