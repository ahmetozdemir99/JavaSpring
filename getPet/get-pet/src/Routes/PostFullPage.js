import { useParams } from "react-router-dom";
import classes from "./PostFullPage.module.css";
import { Link } from "react-router-dom";
const PostFullPage = () => {
  const params = useParams();
  return (
    <div className={classes.pageContainer}>
      <header>
        <h3 className={classes.mainHeader}>
          POST TITLE - {`${params.listingId}`}
        </h3>
      </header>

      <div className={classes.innerContainer}>
        <div className={classes.imgContainer}>
          <img src={require("../images/imagePlaceholder.jpg")} />
          <div className={classes.details}>
            <label>Details</label>
            <p>Further information is provided here.</p>
          </div>
        </div>
        <div className={classes.filterContainer}>
          <div className={classes.filter}>
            <label>Location</label>
            <p>Izmir, Turkey</p>
          </div>
          <div className={classes.filter}>
            <label>Kind</label>
            <p>Cat</p>
          </div>
          <div className={classes.filter}>
            <label>Age</label>
            <p>3 Months</p>
          </div>
          <div className={classes.filter}>
            <label>Special Needs</label>
            <p>Yes</p>
          </div>
        </div>
        <div className={classes.profileContainer}>
          <img
            className={classes.profileImg}
            src={require("../images/profilePost.png")}
          />
          <Link className={classes.chatButton}>Chat</Link>
        </div>
      </div>
    </div>
  );
};
export default PostFullPage;
