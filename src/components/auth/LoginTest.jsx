import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginTest = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  // Test credentials
  const testCredentials = [
    {
      email: "admin@bignote.com",
      password: "admin123",
      role: "admin",
    },
    {
      email: "author@bignote.com",
      password: "author123",
      role: "author",
    },
    {
      email: "user@bignote.com",
      password: "user123",
      role: "user",
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const user = testCredentials.find(
      (cred) => 
        cred.email === formData.email && 
        cred.password === formData.password
    );

    if (user) {
      // In a real app, you would handle authentication properly here
      console.log("Logged in as:", user.role);
      navigate("/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-bold text-gray-900">
              Test Login
            </h2>
            <p className="text-gray-600 mt-2">Use test credentials to login</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}

            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-4 rounded-xl font-semibold hover:bg-orange-700 transition-colors"
            >
              Login
            </button>
          </form>

          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Test Credentials
            </h3>
            <div className="space-y-4">
              {testCredentials.map((cred, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg text-sm"
                >
                  <p className="font-medium text-gray-700">
                    Role: {cred.role}
                  </p>
                  <p className="text-gray-600">Email: {cred.email}</p>
                  <p className="text-gray-600">Password: {cred.password}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginTest;