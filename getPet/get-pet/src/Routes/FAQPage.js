import classes from "./FAQPage.module.css";
const FAQPage = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>Frequently Asked Questions</h1>
      <div className={classes.pagesList}>
        <button className={classes.pageButton}>FAQ PAGE#1</button>
        <button className={classes.pageButton}>FAQ PAGE#2</button>
        <button className={classes.pageButton}>FAQ PAGE#3</button>
      </div>
      <div className={classes.innerContainer}>
        <div className={classes.currentPage}>
          <h1 className={classes.pageTitle}>Current Page Heading</h1>
          <p className={classes.pageText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit
            aliquam elit, in posuere neque tristique vel. Quisque eget quam nec
            orci vestibulum mattis. Ut scelerisque, lectus at ullamcorper
            finibus, elit enim sagittis risus, non tristique nisl massa at
            lorem. Nulla facilisi. Proin dictum est a metus suscipit, vel
            consectetur ipsum varius. Suspendisse potenti. Nullam non efficitur
            nunc. In dignissim mauris vel mi convallis, vel molestie velit
            laoreet. Morbi hendrerit quam sit amet massa feugiat, in ultrices
            urna tincidunt. Aenean egestas volutpat augue, vel semper ante
            consectetur sed. Duis vestibulum magna nec feugiat dignissim. Mauris
            a eros id nulla aliquet sodales. Fusce sit amet commodo nulla, non
            aliquam neque.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed blandit aliquam elit, in posuere neque tristique vel.
            Quisque eget quam nec orci vestibulum mattis. Ut scelerisque, lectus
            at ullamcorper finibus, elit enim sagittis risus, non tristique nisl
            massa at lorem. Nulla facilisi. Proin dictum est a metus suscipit,
            vel consectetur ipsum varius. Suspendisse potenti. Nullam non
            efficitur nunc. In dignissim mauris vel mi convallis, vel molestie
            velit laoreet. Morbi hendrerit quam sit amet massa feugiat, in
            ultrices urna tincidunt. Aenean egestas volutpat augue, vel semper
            ante consectetur sed. Duis vestibulum magna nec feugiat dignissim.
            Mauris a eros id nulla aliquet sodales. Fusce sit amet commodo
            nulla, non aliquam neque.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed blandit aliquam elit, in posuere neque
            tristique vel. Quisque eget quam nec orci vestibulum mattis. Ut
            scelerisque, lectus at ullamcorper finibus, elit enim sagittis
            risus, non tristique nisl massa at lorem. Nulla facilisi. Proin
            dictum est a metus suscipit, vel consectetur ipsum varius.
            Suspendisse potenti. Nullam non efficitur nunc. In dignissim mauris
            vel mi convallis, vel molestie velit laoreet. Morbi hendrerit quam
            sit amet massa feugiat, in ultrices urna tincidunt. Aenean egestas
            volutpat augue, vel semper ante consectetur sed. Duis vestibulum
            magna nec feugiat dignissim. Mauris a eros id nulla aliquet sodales.
            Fusce sit amet commodo nulla, non aliquam neque.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Sed blandit aliquam elit, in
            posuere neque tristique vel. Quisque eget quam nec orci vestibulum
            mattis. Ut scelerisque, lectus at ullamcorper finibus, elit enim
            sagittis risus, non tristique nisl massa at lorem. Nulla facilisi.
            Proin dictum est a metus suscipit, vel consectetur ipsum varius.
            Suspendisse potenti. Nullam non efficitur nunc. In dignissim mauris
            vel mi convallis, vel molestie velit laoreet. Morbi hendrerit quam
            sit amet massa feugiat, in ultrices urna tincidunt. Aenean egestas
            volutpat augue, vel semper ante consectetur sed. Duis vestibulum
            magna nec feugiat dignissim. Mauris a eros id nulla aliquet sodales.
            Fusce sit amet commodo nulla, non aliquam neque.
          </p>
        </div>
        <div className={classes.askBox}>
          <form className={classes.form}>
            <label className={classes.label}>Ask Us Anything!</label>
            <textarea
              rows="10"
              cols="50"
              className={classes.textArea}
            ></textarea>
          </form>
          <button className={classes.askButton}>Send</button>
        </div>
      </div>
    </div>
  );
};
export default FAQPage;
