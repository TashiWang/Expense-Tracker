import Signup from "./auth/Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard";
import Login from "./auth/Login"
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./auth/ForgotPassword";
import UpdateProfile from "./auth/UpdateProfile";
import NavigationBar from "./partials/NavigationBar";



function App() {
  return (

      <div style = {{ minHeight: "100vh",
            backgroundImage: "url(" + "http://tds-expense-tracker.herokuapp.com/images/bg.png" + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'  
      }}>
        <NavigationBar></NavigationBar>
                  
       <Container className="d-flex align-items-center justify-content-center"
          style = {{ minHeight: "100vh",
        }}
        >
          
          <div className = "w-100" style = {{ maxWidth: "400px" }}>
            <Router>
              <AuthProvider>
                <Switch>
                  <PrivateRoute exact path="/" component={Dashboard} />
                  <PrivateRoute path="/update-profile" component={UpdateProfile} />
                  <Route path="/signup" component={Signup} />
                  <Route path="/login" component={Login} />
                  <Route path="/forgot-password" component={ForgotPassword} />

                </Switch>
              </AuthProvider>
            </Router>
          </div>

        </Container>
        </div>
    
 
  
  )
}

export default App;
