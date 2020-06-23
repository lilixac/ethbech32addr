import React from "react";
import styles from "./App.module.css";
import { Route, Switch, Link } from "react-router-dom";
import Main from "./container/main/main";
import Bech32 from "./container/bech32/index";

function App() {
  return (
    <div>
      <header className={styles.AppHeader}>
        <p>
          {" "}
          <Link className={styles.whiteText} to="/">
            Harmony Contract Interaction Tool
          </Link>{" "}
          <Link
            className={styles.whiteText}
            style={{ position: "absolute", right: "20px",marginTop:'10px', fontSize: "16px" }}
            to="/address"
          >
            {" "}
            Change Address{" "}
          </Link>
        </p>
      </header>
      <br />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/address" component={Bech32} />
      </Switch>
    </div>
  );
}

export default App;
