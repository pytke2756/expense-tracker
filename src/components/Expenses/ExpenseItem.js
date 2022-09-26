import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
function ExpenseItem(props) {
  /* function clickHandler() {
    console.log("Clicked!!!");
  } */
  const clickHandler = () => {
    console.log("Clicked!!!!!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      {/* <button onClick={() => {console.log("clicked");}}>Change Title</button> */}
    </Card>
  );
}

export default ExpenseItem;
