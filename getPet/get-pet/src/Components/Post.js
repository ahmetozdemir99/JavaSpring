import { useState } from "react";
import classes from "./Post.module.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Post = (props) => {
  return (
    <Link to={`/listings/${props.id}`} className={classes.post}>
      <div className={classes.imgContainer}>
        <img
          className={classes.img}
          src={require("../images/imagePlaceholder.jpg")}
        />
        <div className={classes.fav}>
          {props.fav ? (
            <ion-icon className={classes.heartIcon} name="heart"></ion-icon>
          ) : (
            <ion-icon
              className={classes.heartIcon}
              name="heart-outline"
            ></ion-icon>
          )}
        </div>
      </div>

      <div className={classes.info}>
        <label className={classes.label}>NEW POST {`${props.id}`}</label>
        <label className={classes.details}>{`${props.details}`}</label>
      </div>
    </Link>
  );
};

export default Post;
