import classes from "./Filters.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Filters = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    console.log(enteredTitle);
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    console.log(enteredAmount);
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className={classes.mainContainer}>
      <form className={classes.filterContainer} onSubmit={submitHandler}>
        <div className={classes.filter}>
          {/* <label>Location</label> */}
          <input
            placeholder=" Location"
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        {/* <KindFilter /> */}

        <div className={classes.filter}>
          {/* <label>Kind</label> */}
          <select>
            <option value="" disabled selected hidden>
              Kind
            </option>
            <option>Cat</option>
            <option>Dog</option>
            <option>Other</option>
          </select>
        </div>
        <div className={classes.filter}>
          {/* <label>Age</label> */}
          <input
            placeholder=" Age (Months)"
            type="number"
            min="0.1"
            step="0.1"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
          {/* <select>
            <option value="" disabled selected hidden>
              Months/Years
            </option>
            <option>Months</option>
            <option>Years</option>
          </select> */}
        </div>
        <div className={classes.filter}>
          {/* <label>Special Needs</label> */}
          <select>
            <option value="" disabled selected hidden>
              Special Needs
            </option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <button className={classes.filterButton} type="submit">
          <ion-icon
            className={classes.filterIcon}
            name="checkmark-circle"
          ></ion-icon>
        </button>
      </form>
      <Link className={classes.newPostButton} to="/new-listing">
        <ion-icon name="add-outline"></ion-icon>
      </Link>
    </div>
  );
};

export default Filters;
