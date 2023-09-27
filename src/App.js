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
import EditPinForm from "./pages/pins/EditPinForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import PageNotFound from "./components/PageNotFound";

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
          <Route exact path="/pins/:id/edit" render={() => <EditPinForm />} />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route
            exact
            path="/profiles/:id/edit/username"
            render={() => <UsernameForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit/password"
            render={() => <UserPasswordForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit"
            render={() => <ProfileEditForm />}
          />
          <Route render={() => <PageNotFound />} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
