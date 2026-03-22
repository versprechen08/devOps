import "./Button.css";
const Button = ({ onClick, color, children, type = "button" }) => (
    <button type={type} onClick={onClick} className={`button ${color}`}>
        {children}
    </button>
);


// 可复用的按钮组件Button （组件名）函数组件
// 接收3个props
/*
onClick: 点击按钮时要执行的函数
color: 按钮样式类型
children: 按钮里面显示的内容
*/
export default Button;