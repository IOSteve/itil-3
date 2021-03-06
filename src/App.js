import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>

            <Route path="/blogs/:id"></Route>
            <Route path="*"></Route>
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
