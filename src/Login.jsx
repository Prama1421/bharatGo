// import React, { useRef, useState } from "react";
// import { login } from "./redux/cartSlice";
// import { useDispatch, useSelector } from "react-redux";

//  function Login() {
//   const email = useRef("");
//   const password1 = useRef("");
//   const password2 = useRef("");

//   const dispatch = useDispatch();

//   const [isLogIn, setIsLogIn] = useState(true);
//   const theme = true; 

//   const switchMood = () => {
//     setIsLogIn((prevState) => !prevState);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const pas1 = password1.current.value;
//     const pas2 = password2.current.value;
//     const enteredEmail = email.current.value;

//     if (pas1 === pas2) {
//       let url;
//       if (isLogIn) {
//         url =
//           "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCbx8gGCcTtQC8RdQyWedpjx__66rbOI7I";
//       } else {
//         url =
//           "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCbx8gGCcTtQC8RdQyWedpjx__66rbOI7I";
//       }

//       fetch(url, {
//         method: "POST",
//         body: JSON.stringify({
//           email: enteredEmail,
//           password: pas1,
//           returnSecureToken: true,
//         }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//         .then((res) => {
//           if (res.ok) {
//             return res.json();
//           } else {
//             return res.json().then((data) => {
//               let errorMessage = "Authentication failed!";
//               if (data && data.error && data.error.message) {
//                 errorMessage = data.error.message;
//               }
//               throw new Error(errorMessage);
//             });
//           }
//         })
//         .then((data) => {
//           const token = data.idToken;
//           dispatch(login({ token }));
//           console.log("token",token)
//         })
//         .catch((err) => {
//           alert(err.message);
//         });
//     } else {
//       alert("Password mismatch");
//       password1.current.value = "";
//       password2.current.value = "";
//     }
//   };

//   return (
//     <>
      
//         <div
//           className={`flex flex-col justify-center items-center min-h-screen ${
//             theme ? "bg-gray-900" : "bg-gray-100"
//           }`}
//         >
//           <div
//             className={`w-96 p-8 rounded-lg shadow-lg m-9 h-[28rem] ${
//               theme ? "bg-gray-800" : "bg-white"
//             }`}
//           >
//             {isLogIn ? (
//               <h1
//                 className={`text-2xl mb-8 font-bold text-center ${
//                   theme ? "text-white" : "text-gray-900"
//                 }`}
//               >
//                 Log in
//               </h1>
//             ) : (
//               <h1
//                 className={`text-2xl mb-8 font-bold text-center ${
//                   theme ? "text-white" : "text-gray-900"
//                 }`}
//               >
//                 Sign Up
//               </h1>
//             )}

//             <form onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <label
//                   htmlFor="email"
//                   className={`display-block text-sm font-medium mb-2 ${
//                     theme ? "text-white" : "text-gray-900"
//                   }`}
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
//                   ref={email}
//                 />
//               </div>

//               <div className="mb-4">
//                 <label
//                   htmlFor="password"
//                   className={`display-block text-sm font-medium mb-2 ${
//                     theme ? "text-white" : "text-gray-900"
//                   }`}
//                 >
//                   Enter Password
//                 </label>
//                 <input
//                   type="password"
//                   className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
//                   ref={password1}
//                 />
//               </div>

//               <div className="mb-4">
//                 <label
//                   htmlFor="password"
//                   className={`display-block text-sm font-medium mb-2 ${
//                     theme ? "text-white" : "text-gray-900"
//                   }`}
//                 >
//                   Confirm Password
//                 </label>
//                 <input
//                   type="password"
//                   className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
//                   ref={password2}
//                 />
//               </div>

//               <div className="mb-4">
//                 <button
//                   type="submit"
//                   className="w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
//                 >
//                   {isLogIn ? "Log In" : "Sign Up"}
//                 </button>
//               </div>
//             </form>
//           </div>

//           <button
//             className="w-80 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-green-800 dark:text-gray-600 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
//             onClick={switchMood}
//           >
//             <span className="w-80 relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-700 dark:bg-green-200 rounded-md group-hover:bg-opacity-0">
//               Have an account? Login
//             </span>
//           </button>
//         </div>
        
//     </>
//   );
// }


// export default Login


import React, { useRef, useState } from "react";
import { login } from "./redux/cartSlice";
import { useDispatch } from "react-redux";
import "./Login.css"; // Import CSS file

function Login() {
  const email = useRef("");
  const password1 = useRef("");
  const password2 = useRef("");

  const dispatch = useDispatch();
  const [isLogIn, setIsLogIn] = useState(true);

  const switchMode = () => {
    setIsLogIn((prevState) => !prevState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const pas1 = password1.current.value;
    const pas2 = password2.current.value;
    const enteredEmail = email.current.value;

    if (pas1 === pas2) {
      let url = isLogIn
        ? "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=YOUR_FIREBASE_API_KEY"
        : "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=YOUR_FIREBASE_API_KEY";

      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: pas1,
          returnSecureToken: true,
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          const token = data.idToken;
          dispatch(login({ token }));
          console.log("Token:", token);
        })
        .catch((err) => {
          alert("Authentication failed: " + err.message);
        });
    } else {
      alert("Passwords do not match!");
      password1.current.value = "";
      password2.current.value = "";
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">{isLogIn ? "Log In" : "Sign Up"}</h1>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="email" ref={email} className="input-field" required />

          <label>Enter Password</label>
          <input type="password" ref={password1} className="input-field" required />

          <label>Confirm Password</label>
          <input type="password" ref={password2} className="input-field" required />

          <button type="submit" className="submit-btn">
            {isLogIn ? "Log In" : "Sign Up"}
          </button>
        </form>

        <button className="switch-btn" onClick={switchMode}>
          {isLogIn ? "Create an account" : "Have an account? Log In"}
        </button>

        <button type="button" className="guest-btn" onClick={() => dispatch(login({ token: "guest" }))}>
  Login as Guest
</button>

      </div>
    </div>
  );
}

export default Login;
