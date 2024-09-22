// import React, { useState } from "react";
// import { auth, db } from "../db/firebase"; // To'g'ri yo'lni tekshiring
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { ref, set } from "firebase/database"; // Realtime Database uchun import
// import { useNavigate } from "react-router-dom"; // Navigatsiya uchun import

// const Register = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [userType, setUserType] = useState("ijaragaBeruvchi"); // Ijara beruvchi yoki oluvchi
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       const user = userCredential.user;

//       // Foydalanuvchi turini Realtime Database ga saqlash
//       const userRef = ref(db, `users/${user.uid}`);
//       await set(userRef, {
//         email,
//         userType,
//       });

//       console.log("Ro'yxatdan o'tish muvaffaqiyatli:", user);

//       // Foydalanuvchi turiga qarab sahifaga yo'naltirish
//       if (userType === "ijaragaBeruvchi") {
//         navigate("/rent-brin"); // Ijaraga beruvchi uchun yo'naltirish
//       } else {
//         navigate("/rent-give"); // Ijaraga oluvchi uchun yo'naltirish
//       }
//     } catch (err) {
//       setError(err.message);
//       console.error("Ro'yxatdan o'tish xatosi:", err);
//     }
//   };

//   return (
//     <div>
//       <h2>Ro'yxatdan O'tish</h2>
//       <div>
//         <label>
//           <input
//             type="radio"
//             value="ijaragaBeruvchi"
//             checked={userType === "ijaragaBeruvchi"}
//             onChange={() => setUserType("ijaragaBeruvchi")}
//           />
//           Ijaraga beruvchi
//         </label>
//         <label>
//           <input
//             type="radio"
//             value="ijaragaOluvchi"
//             checked={userType === "ijaragaOluvchi"}
//             onChange={() => setUserType("ijaragaOluvchi")}
//           />
//           Ijaraga oluvchi
//         </label>
//       </div>
//       <form onSubmit={handleRegister}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Parol"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Ro'yxatdan O'tish</button>
//       </form>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// };

// export default Register;

import React, { useState } from "react";
import { auth, db } from "../db/firebase"; // Correct the import path
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database"; // Import for Realtime Database
import { useNavigate } from "react-router-dom"; // For navigation

const Register = () => {
  const [name, setName] = useState(""); // New state for name
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // New state for confirming password
  const [userType, setUserType] = useState("renter"); // Renter or tenant
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Save user details in Realtime Database
      const userRef = ref(db, `users/${user.uid}`);
      await set(userRef, {
        name, // Save name in the database
        email,
        userType,
      });

      console.log("Registration successful:", user);

      // Redirect based on user type
      if (userType === "renter") {
        navigate("/rent-bring"); // Redirect for renters
      } else {
        navigate("/rent-give"); // Redirect for tenants
      }
    } catch (err) {
      setError(err.message);
      console.error("Registration error:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Register
        </h2>
        <div className="flex justify-center space-x-4 mb-4">
          <label className="flex items-center">
            <input
              type="radio"
              value="renter"
              checked={userType === "renter"}
              onChange={() => setUserType("renter")}
              className="form-radio text-blue-600"
            />
            <span className="ml-2 text-gray-700">Renter</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="tenant"
              checked={userType === "tenant"}
              onChange={() => setUserType("tenant")}
              className="form-radio text-blue-600"
            />
            <span className="ml-2 text-gray-700">Tenant</span>
          </label>
        </div>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
