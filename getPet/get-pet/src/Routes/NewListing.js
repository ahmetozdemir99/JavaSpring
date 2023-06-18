import classes from "./NewListing.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const NewListing = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    console.log(enteredTitle);
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.taruget.value);
    console.log(enteredAmount);
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className={classes.mainContainer}>
      <h3 className={classes.mainHeader}>Add A Listing</h3>
      <form className={classes.listingContainer} onSubmit={submitHandler}>
        <div className={classes.sideContainer}>
          <div className={classes.divContainer}>
            <label className={classes.label}>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
              className={classes.input}
            />
          </div>
          <div className={classes.divContainer}>
            <label className={classes.label}>Location</label>
            <input type="text" className={classes.input} />
          </div>
          {/* <KindFilter /> */}

          <div className={classes.divContainer}>
            <label className={classes.label}>Kind</label>
            <select>
              <option>Cat</option>
              <option>Dog</option>
              <option>Other</option>
            </select>
          </div>
          <div className={classes.divContainer}>
            <label className={classes.label}>Age</label>
            {/* <input
              type="number"
              min="0.1"
              step="0.1"
              value={enteredAmount}
              onChange={amountChangeHandler}
              className={classes.input}
            /> */}
            <select>
              <option>Months</option>
              <option>Years</option>
            </select>
          </div>
        </div>
        <div className={classes.sideContainer}>
          <div className={classes.divContainer}>
            <label className={classes.label}>Special Needs</label>
            <select>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div className={classes.divContainer}>
            <label className={classes.label}>Details</label>
            <textarea className={classes.inputDetails} rows="14" cols="100" />
          </div>
          <div className={classes.divContainer}>
            <label className={classes.label}>Add Photos</label>
            <input
              type="file"
              accept="image/*;capture=camera"
              lang="en"
              onChange={titleChangeHandler}
              className={classes.inputFile}
            />
          </div>
          <div className={classes.buttonContainer}>
            <button className={classes.submitButton} type="submit">
              Save
            </button>
            <Link className={classes.cancelButton} to="/">
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
export default NewListing;
