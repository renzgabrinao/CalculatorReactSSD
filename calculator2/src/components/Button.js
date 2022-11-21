import { calculatorButtons } from "./calculator-base-button-data";

const Button = () => {
    let classes = calculatorButtons.map((x) => `button ${x.className}`)
    return (
        <div className="buttons">
          {calculatorButtons.map((x, key) => (
            <div className={classes[key]}>{x.text}</div>
          ))}
        </div>
      );
}

export default Button