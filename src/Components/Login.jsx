import { useState } from "react";
import { Mail, Lock } from "lucide-react";

export default function Login() {
  const [secret, setSecret] = useState("");
  const handleLogin = async () => {
    const response = await fetch(
      "https://crew-control-qgb84kx8j-soudip-panjas-projects.vercel.app/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ secret }),
      },
    );

    const data = await response.json();
    console.log(data);
    localStorage.setItem("adminToken", data.token)
  };
  return (
    <>
      <div
        className="card border-3 shadow-lg p-5"
        style={{
          width: "420px",
          borderColor: "#6f42c1",
          borderRadius: "12px",
        }}
      >
        {/* Header */}
        <h5 className="text-center fw-bold mb-2" style={{ color: "#6f42c1" }}>
          CREW CONTROL
        </h5>
        <h3 className="text-center mb-1">Login to your account</h3>
        <p className="text-center text-muted mb-4">
          Please enter your details.
        </p>

        {/* Form Part */}
        <form>
          <div className="mb-3">
            <label className="form-label" htmlFor="Email">
              Email
            </label>
            <div className="input-group">
              <span className="input-group-text bg-white">
                <Mail size={18} />
              </span>
              <input
                type="email"
                id="Email"
                className="form-control py-2"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <label className="form-label" htmlFor="Password">
              Password
            </label>
            <div className="input-group">
              <span className="input-group-text bg-white">
                <Lock size={18} />
              </span>
              <input
                type="text"
                id="Password"
                className="form-control py-2"
                placeholder="Password"
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
              />
            </div>
          </div>

          {/* Form Button Part */}
          <div className="text-end mb-3">
            <button
              type="button"
              className="btn btn-link p-0"
              style={{ color: "#6f42c1", textDecoration: "none" }}
            >
              Forgot Password?
            </button>
          </div>

          <div className="row">
            <div className="col-6">
              <div>
                <button
                  className="btn w-100 text-white fw-semibold"
                  style={{ backgroundColor: "#6f42c1" }}
                  onClick={handleLogin}
                  type="button"
                >
                  Login
                </button>
              </div>
            </div>
            <div className="col-6">
              <div>
                <button
                  className="btn w-100 text-white fw-semibold"
                  style={{ backgroundColor: "#6f42c1" }}
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
