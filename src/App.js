import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import LogInForm from "./pages/auth/LogInForm";
import CreatePin from "./pages/pins/CreatePin";
import PinPage from "./pages/pins/PinPage";
import PinnedPage from "./pages/pins/PinnedPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <PinnedPage message="No results found. Adjust the search keyboard." />
            )}
          />
          <Route
            exact
            path="/feed"
            render={() => (
              <PinnedPage
                message="No results found. Adjust the search keyboard or follow a user."
                filter={`owner__followed__owner__profile=${profile_id}&`}
              />
            )}
          />
          <Route
            exact
            path="/loved"
            render={() => (
              <PinnedPage
                message="No results found. Adjust the search keyboard or love a post."
                filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
              />
            )}
          />
          <Route exact path="/login" render={() => <LogInForm />} />
          <Route exact path="/create-pin" render={() => <CreatePin />} />
          <Route exact path="/pins/:id" render={() => <PinPage />} />

          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
