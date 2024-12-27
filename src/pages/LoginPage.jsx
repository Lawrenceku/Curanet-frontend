import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

const LoginPage = () => {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [shake, setShake] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        if (!form.reportValidity()) {
            setShake(true);
            setTimeout(() => setShake(false), 300);
        } else {
            setIsLoading(true);
            setTimeout(() => {
                console.log("Logging in with", formData);
                setIsLoading(false);
            }, 2000);

        }
    };

    return (
        <div
            className="h-screen flex items-center justify-center bg-cover bg-center "
            style={{ backgroundImage: "url('/Background_Image.jpg') "}}
        >
            <div className="absolute inset-0 bg-black opacity-5"></div>

            <div className="relative bg-white p-8 rounded-lg shadow-lg w-full max-w-sm z-10">
                <h1 className="text-2xl font-bold text-center mb-4 ">Welcome to CuraNet</h1>
                <p className="text-center mb-4 text-lg text-gray-700">
                    <i>Your all-round health tech-solutions</i>
                </p>
                <form onSubmit={handleSubmit} className="space-y-1">
                    <Input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        placeholder="Enter your username"
                        className={`p-2 border rounded-md w-full ${shake ? "shake" : ""}`}
                        required
                    />
                    <Input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Enter your password"
                        className={`p-2 border rounded-md w-full ${shake ? "shake" : ""}`}
                        required
                    />
                    <Button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-800"
                        disabled={!formData.username || !formData.password}
                    >
                        {isLoading ? "Logging in..." : "Login"}

                    </Button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;