//import { Link } from "react-router-dom";

function Home() {
    return (
      <>
      <div className='container mt-3'>
        <h1 className="mt-5 my-5">
          Sign up | Login here:-
        </h1>
      <form>
    <div className="mb-3 my-4">
      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1"/>
    </div>
    <div className="mb-3 form-check">
      <input type="checkbox" className="f backend orm-check-input" id="exampleCheck1"/>
      <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  </div>
  <div className='container my-3'>
    <h2> Your Notes. </h2>
  </div>
  </>
    );
  }
  
  export default Home;