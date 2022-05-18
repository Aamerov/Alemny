import google from "./../assets/imgs/google.svg";
import facebook from "./../assets/imgs/facebook.svg";
import poster from "./../assets/imgs/auth.svg";

const Login = () => {
  return (
    <div className="login">
      <header className="d-flex align-items-center justify-content-center text-white">
        <p className="text-center mb-0">
          Join now and enjoy your first free course
        </p>
      </header>

      <section id="login">
        <div className="container">
          <div className="row mx-0 w-100">
            <div className="col-md-6 text-center order-1 order-md-0">
              <h1>Lets Sign you in</h1>
              <a href="" className="register">
                don”t have an account? create one here
              </a>
              <form action="" className="">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email,phone or username"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <a href="" className="forget-password">
                  {" "}
                  Forgot Password ?{" "}
                </a>
                <div className="mt-3">
                  <button className="btn btn-primary w-100">Sign in</button>
                </div>
                <span className="or fw-bolder">or</span>
                <div className="mt-3">
                  <button className="btn btn-primary google w-100 d-flex align-items-center justify-content-center">
                    <img src={google} className="" alt="" />
                    <span>Sign-in with google</span>
                  </button>
                  <button className="btn btn-primary facebook w-100 d-flex align-items-center justify-content-center mt-3">
                    <img src={facebook} className="" alt="" />
                    <span>Sign-in with facebook</span>
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-6 order-0 order-md-1 d-flex justify-content-end">
              <img src={poster} alt="" className="w-100" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
