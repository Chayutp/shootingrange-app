import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <Link to="/Login">Login</Link>
      <Link to="/Register">Register</Link>
    </div>
  );
}

export default Home;
