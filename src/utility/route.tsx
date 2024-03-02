import * as React from "react";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
  NavLink,
} from "react-router-dom";
import { fakeAuthProvider } from "./auth";
import { isAuthenticated, setAuthUser, getAuthUser } from ".";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AppRoute() {
  return (
    <AuthProvider>

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<PublicPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

function Layout() {
  return (
    <div>


      <header className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow" >
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white" href="#">Company name</a>

        <ul className="navbar-nav flex-row d-md-none">
          <li className="nav-item text-nowrap">
            <button className="nav-link px-3 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSearch" aria-controls="navbarSearch" aria-expanded="false" aria-label="Toggle search">
              <svg className="bi"><use xlinkHref="#search"></use></svg>
            </button>
          </li>
          <li className="nav-item text-nowrap">
            <button className="nav-link px-3 text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
              <svg className="bi"><use xlinkHref="#list"></use></svg>
            </button>
          </li>
        </ul>

        <div id="navbarSearch" className="navbar-search w-100 collapse">
          <input className="form-control w-100 rounded-0 border-0" type="text" placeholder="Search" aria-label="Search" />
        </div>
      </header>


      <Container fluid>
        <Row>
          {/* <Col><Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar></Col> */}

          <Col className="col-md-3 col-lg-3">
            <div className="offcanvas-md offcanvas-end bg-body-tertiary"  id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="sidebarMenuLabel">Company name</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2 active" aria-current="page" href="#">
                      <svg className="bi"><use xlinkHref="#house-fill"></use></svg>
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      <svg className="bi"><use xlinkHref="#file-earmark"></use></svg>
                      Orders
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      <svg className="bi"><use xlinkHref="#cart"></use></svg>
                      Products
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      <svg className="bi"><use xlinkHref="#people"></use></svg>
                      Customers
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      <svg className="bi"><use xlinkHref="#graph-up"></use></svg>
                      Reports
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      <svg className="bi"><use xlinkHref="#puzzle"></use></svg>
                      Integrations
                    </a>
                  </li>
                </ul>

                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
                  <span>Saved reports</span>
                  <a className="link-secondary" href="#" aria-label="Add a new report">
                    <svg className="bi"><use xlinkHref="#plus-circle"></use></svg>
                  </a>
                </h6>
                <ul className="nav flex-column mb-auto">
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      <svg className="bi"><use xlinkHref="#file-earmark-text"></use></svg>
                      Current month
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      <svg className="bi"><use xlinkHref="#file-earmark-text"></use></svg>
                      Last quarter
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      <svg className="bi"><use xlinkHref="#file-earmark-text"></use></svg>
                      Social engagement
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      <svg className="bi"><use xlinkHref="#file-earmark-text"></use></svg>
                      Year-end sale
                    </a>
                  </li>
                </ul>

                <hr className="my-3" />

                <ul className="nav flex-column mb-auto">
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      <svg className="bi"><use xlinkHref="#gear-wide-connected"></use></svg>
                      Settings
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link d-flex align-items-center gap-2" href="#">
                      <svg className="bi"><use xlinkHref="#door-closed"></use></svg>
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>1 of 1</Col>
        </Row>
      </Container>





      <AuthStatus />

      <ul>
        <li>
          <Link to="/">Public Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: any;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

let AuthContext = React.createContext<AuthContextType>(null!);

function AuthProvider({ children }: { children: React.ReactNode }) {
  let [user, setUser] = React.useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = React.useState<any>(false);
  let signin = (newUser: string, callback: VoidFunction) => {
    return fakeAuthProvider.signin(() => {
      setIsAuthenticated(true)
      setUser(newUser);
      setAuthUser(newUser);
      callback();
    });
  };

  let signout = (callback: VoidFunction) => {
    return fakeAuthProvider.signout(() => {
      setIsAuthenticated(false)
      setUser(null);
      setAuthUser(null);
      callback();
    });
  };

  let value = { isAuthenticated, user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  return React.useContext(AuthContext);
}

function AuthStatus() {
  let auth = useAuth();
  let navigate = useNavigate();

  // if (!auth.user || isAuthenticated()) {
  if (!auth.isAuthenticated) {
    return <p>You are not logged in.</p>;
  }
  const user = getAuthUser();
  return (
    <p>
      Welcome {user}!{" "}
      <button
        onClick={() => {
          auth.signout(() => navigate("/"));
        }}
      >
        Sign out
      </button>
    </p>
  );
}

function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = useAuth();
  let location = useLocation();
  // if (!auth.user || isAuthenticated()) {
  if (!auth.isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

function LoginPage() {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  let from = location.state?.from?.pathname || "/";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let username = formData.get("username") as string;

    auth.signin(username, () => {
      navigate(from, { replace: true });
    });
  }

  return (
    <div>
      <p>You must log in to view the page at {from}</p>

      <form onSubmit={handleSubmit}>
        <label>
          Username: <input name="username" type="text" />
        </label>{" "}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

function PublicPage() {
  return <h3>Public</h3>;
}

function ProtectedPage() {
  return <h3>Protected</h3>;
}