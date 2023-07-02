import { useState } from "react";
import React from "react";

interface LoginProps {
    isLoginOpen: boolean;
    setIsLoginOpen: (value: boolean) => void;
    logout: (setIsLoggedIn: (value: boolean) => void) => void;
    setIsLoggedIn: (value: boolean) => void;
  };

interface createAccount {
username: string;
password: string;
email: string;
};

export let User: string | undefined = "";

export const handleLogout = (setIsLoggedIn: (value: boolean) => void): React.MouseEventHandler<HTMLButtonElement> => (
    event
  ) => {
    event.preventDefault();
    User = undefined;
    setIsLoggedIn(false);
  };
  
  

  const Login: React.FC<LoginProps> = ({ isLoginOpen, setIsLoginOpen, logout, setIsLoggedIn }) => {
    const handleCloseLogin = () => {
      setIsLoginOpen(false);
    };
  
    const [isCreatingAccount, setIsCreatingAccount] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    
    const handleLogout = () => {
        User = undefined;
        setIsLoggedIn(false)
      };
  
    const handleCreateAccount = async (event: React.MouseEvent<HTMLButtonElement>) => {
        if (password === confirmPassword) {
                const data: createAccount = {
                    username: username,
                    password: password,
                    email: email,
                };
                    event.preventDefault();
                    try {
                        console.log("data being submitted to API:", data)
                        const response = await fetch('http://127.0.0.1:8000/create-account/', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(data),
                        });
            
                        // Handle the response as needed
                        console.log('Response:', response);
                    } catch (error) {
                        // Handle the error
                        console.error('Error submitting form:', error);
                    }
                    setMessage('')
                }
        else {setMessage("Please try again, passwords do not match")} 
};
    

const handleLogin: React.MouseEventHandler<HTMLButtonElement> = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/login/', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: username,
            password: password,
          }),
      });
      console.log("username:", username, "password", password)
      const data = await response.json();
      console.log("const data", data)
  
      if (response.ok) {
        // Login successful
        const user = data;
        User = user;
        console.log("data", data)
        setMessage("Successful login, welcome " + username)
        setIsLoggedIn(true)
      } else {
        // Login failed
        console.log("frontend dookie");
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
    }
  };

    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-gray-900 bg-opacity-50 w-full max-w-md p-8 rounded-lg relative">
          <button
            className=" rounded-lg absolute top-1 right-2 text-white text-2xl font-bold hover:text-red"
            onClick={handleCloseLogin}
          >
            X
          </button>
          <div className="bg-gray-300 rounded-lg p-4">
            {isCreatingAccount ? (
              <div>
                <h2 className="text-xl font-bold mb-4">Create an Account</h2>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mb-2 p-2 rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mb-2 p-2 rounded-lg"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mb-2 p-2 rounded-lg"
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="mb-2 p-2 rounded-lg"
                />
                <button
                  className="bg-gray-500 text-white font-bold px-4 py-2 rounded-lg mr-2"
                  onClick={handleCreateAccount}
                >
                  Create Account
                </button>
                <span
                  className="text-black px-4 py-2 rounded-lg mr-2 flex flex-row"
                >
                  {message}
                </span>
                <button
                    className="bg-gray-500 text-white font-bold px-4 py-2 rounded-lg absolute top-10 right-10"
                    onClick={() => setIsCreatingAccount(false)}
                >
                  Login Instead
                </button>
              </div>
            ) : (
              <div>
                <h2 className="text-xl font-bold mb-4">Login</h2>
                <button
                    className="bg-gray-500 text-white font-bold px-4 py-2 rounded-lg absolute top-10 right-10"
                    onClick={() => setIsCreatingAccount(true)}
                                >
                  Create Account Instead
                </button>
                <input
                  type="email"
                  placeholder="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mb-2 p-2 rounded-lg"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mb-2 p-2 rounded-lg"
                />
                <div className='pr-2'>
                <button
                  className="bg-gray-500 text-white font-bold px-4 py-2 rounded-lg mr-2"
                  onClick={handleLogin}
                >
                  Login
                </button>
                <span
                  className="text-black px-4 py-2 rounded-lg mr-2 flex flex-row"
                >
                  {message}
                </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default Login;
  

// const ParentComponent = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleOpenModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div>
//       <button
//         className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//         onClick={handleOpenModal}
//       >
//         Open Modal
//       </button>
//       {isModalOpen && (
//         <Login onClose={handleCloseModal}>
//           {/* Content for the modal */}
//           <h2 className="text-xl font-bold mb-2">Modal Content</h2>
//           <p>This is the modal content.</p>
//         </Login>
//       )}
//       {/* Rest of the component */}
//     </div>
//   );
// };

// export default ParentComponent;
