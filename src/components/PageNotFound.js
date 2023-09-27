import React from "react";
import styles from "../styles/";

function PageNotFound() {
  return (
    <div className={`${styles.pageNotFound}`}>
      <h1 className={`${styles.title}`}>404 - Page Not Found</h1>
      <p className={`${styles.message}`}>
        The page you are looking for might have been removed or doesn't exist.
      </p>
      {/* You can add a button or a link to redirect to the home page or another relevant page */}
    </div>
  );
}

export default PageNotFound;
