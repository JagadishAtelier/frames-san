import { useState } from "react";
import { Mail, Lock, User, Plane } from "lucide-react";
import { GoogleLogin } from "@react-oauth/google";

export default function AuthPage() {
  const [mode, setMode] = useState("login");
  const axios = [1, 2];

  return (
    <div className="bg-gray-50 p-0 md:p-2 min-h-screen">
      {/* Card */}
      <div className="w-full max-w-screen h-screen md:h-[97vh] md:rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* LEFT IMAGE */}
        <div className="relative hidden md:block">
          <img
            src="https://pix10.agoda.net/hotelImages/32213458/-1/c2d3121e2b831da904593823f4778548.jpg?ce=0&s=2000x2000"
            // src="/images/loginimg.jpg"
            alt="Travel"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-b from-black/50 to-black/10" />

          {/* Branding */}
          <div className="relative z-10 p-10 text-white text-center">
            <h1 className="text-8xl font-bold font-script">Sel Hospitality</h1>
            <div className="w-full flex justify-center mt-1">
              <p className="text-sm max-w-xs opacity-90">
                Experience luxury and comfort at our world class resort
                destination
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="flex relative overflow-hidden flex-col bg-white justify-center px-8 md:px-12 py-12">
          <img
            src="/plane-path1.svg"
            alt=""
            className="absolute md:top-4 top-10 right-0 w-24 md:w-70 opacity-90 pointer-events-none"
          />

          {/* 🏛 BOTTOM CITY SKYLINE */}
          <img
            src="/city-skyline1.svg"
            alt=""
            className="absolute -bottom-1.5 left-0 w-full scale-102 opacity-100 pointer-events-none"
          />
          <div className="max-w-sm mx-auto w-full">
            {/* Heading */}
            <div className="text-center mb-8">
              <h2 className="text-6xl lg:text-7xl font-bold text-sky-600">Welcome</h2>
              <div className="my-1 md:hidden flex items-center gap-3 text-xs text-gray-400">
              <div className="flex-1 h-px bg-gray-200" />
              To
              <div className="flex-1 h-px bg-gray-200" />
            </div>
              <h1 className="text-2xl md:hidden font-bold text-sky-600">Sel Hospitality</h1>
              <p className="text-sm text-gray-500 mt-1">
                {mode === "login" ? "Login with Email" : "Create your account"}
              </p>
            </div>

            {/* FORM */}
            <form className="space-y-4">
              {mode === "signup" && (
                <Input
                  icon={<User className="w-4 h-4" />}
                  placeholder="Full Name"
                />
              )}

              <Input
                icon={<Mail className="w-4 h-4" />}
                placeholder="Email Id"
                type="email"
              />

              <Input
                icon={<Lock className="w-4 h-4" />}
                btn="Get OTP"
                placeholder="OTP"
                type="password"
              />

              {mode === "login" && (
                <div className="text-right text-xs text-gray-400 hover:text-sky-500 cursor-pointer">
                  Forgot your password?
                </div>
              )}

              <button
                type="button"
                className="w-full bg-sky-500 hover:bg-sky-600 text-white py-2.5 rounded-md font-semibold transition"
              >
                {mode === "login" ? "LOGIN" : "SIGN UP"}
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center gap-3 text-xs text-gray-400">
              <div className="flex-1 h-px bg-gray-200" />
              OR
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Social Login */}
            <div className="w-full">
              <GoogleLogin
                onSuccess={async (credentialResponse) => {
                  try {
                    const res = await axios.post(
                      "http://localhost:5000/api/auth/google",
                      {
                        token: credentialResponse.credential,
                      }
                    );

                    localStorage.setItem("token", res.data.token);
                    window.location.href = "/";
                  } catch (err) {
                    console.error(err);
                  }
                }}
                onError={() => {
                  console.log("Google Login Failed");
                }}
              />
            </div>

            {/* Footer */}
            <p className="text-xs text-center text-gray-500 mt-6">
              {mode === "login" ? (
                <>
                  Don’t have an account?{" "}
                  <span
                    onClick={() => setMode("signup")}
                    className="text-sky-500 cursor-pointer font-medium"
                  >
                    Register Now
                  </span>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <span
                    onClick={() => setMode("login")}
                    className="text-sky-500 cursor-pointer font-medium"
                  >
                    Login
                  </span>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------ Components ------------------ */

function Input({ icon, btn, ...props }) {
  return (
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700">
        {icon}
      </span>
      <input
        {...props}
        className="w-full bg-white pl-10 pr-4 py-3 border border-sky-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400"
      />
      <button className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-sky-500">
        {btn}
      </button>
    </div>
  );
}
