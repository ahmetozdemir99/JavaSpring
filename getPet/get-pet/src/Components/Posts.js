import Post from "./Post";
import classes from "./Posts.module.css";
const Posts = () => {
  return (
    <div>
      <div className={classes.postContainer}>
        {/* <div className={classes.post}>
          <label>post1</label>
          <p>Extra info is written here</p>
        </div>
        <div className={classes.post}>
          <label>post1</label>
          <p>Extra info is written here</p>
        </div>
        <div className={classes.post}>
          <label>post1</label>
          <p>Extra info is written here</p>
        </div>
        <div className={classes.post}>
          <label>post1</label>
          <p>Extra info is written here</p>
        </div> */}
        <Post
          id={Math.random()}
          details="Izmir, cat, 3mos, Special Needs"
          fav={true}
        />
        <Post
          id={Math.random()}
          details="Ankara, cat, 3mos, Special Needs"
          fav={false}
        />
        <Post
          id={Math.random()}
          details="İstanbul, cat, 3mos, Special Needs"
          fav={false}
        />
        <Post
          id={Math.random()}
          details="Izmir, cat, 3mos, Special Needs"
          fav={true}
        />
      </div>
      <div className={classes.postContainer}>
        {/* <div className={classes.post}>
          <label>post1</label>
          <p>Extra info is written here</p>
        </div> */}
        <Post
          id={Math.random()}
          details="Izmir, cat, 3mos, Special Needs"
          fav={false}
        />
        <Post
          id={Math.random()}
          details="Ankara, cat, 3mos, Special Needs"
          fav={true}
        />
        <Post
          id={Math.random()}
          details="İstanbul, cat, 3mos, Special Needs"
          fav={false}
        />
        <Post
          id={Math.random()}
          details="Izmir, cat, 3mos, Special Needs"
          fav={false}
        />
        {/* <div className={classes.post}>
          <label>post1</label>
          <p>Extra info is written here</p>
        </div>
        <div className={classes.post}>
          <label>post1</label>
          <p>Extra info is written here</p>
        </div>
        <div className={classes.post}>
          <label>post1</label>
          <p>Extra info is written here</p>
        </div> */}
      </div>
    </div>
  );
};
export default Posts;
