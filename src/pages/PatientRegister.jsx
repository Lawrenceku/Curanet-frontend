import { useState} from "react";
import Input from "../components/Input";
import Button from "../components/Button";

const PatientRegister = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        surname: "",
        age: "",
        gender: "male",
        contact: "",
        address: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        if (!form.reportValidity()) {
            alert("Please fill in all the required fields!");
        } else {
            setIsLoading(true);
            setTimeout(() => {
                console.log("Biodata submitted:", formData);
                setIsLoading(false);
            }, 1500);
        }
    };
    return (
        <section
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100"
        >
            <div className="absolute inset-0 bg-black opacity-50">
                <img src="Background_Image_1.jpg" alt="a nurse at triage" className="w-full h-full object-cover" />
            </div>
            <div className="relative bg-white p-8 rounded-lg shadow-lg w-full max-w-md z-10">
                <h1 className="text-2xl font-bold text-primary text-center mb-6">
                    Patient Biodata:
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        label="First Name"
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter First Name"
                        required
                    />
                    <input
                        label="Surname"
                        type="text"
                        name="surname"
                        value={formData.surname}
                        onChange={handleChange}
                        placeholder="Enter Surname"
                        required
                    />
                    <input
                    label="Age"
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="Enter age"
                        min="0"
                        required
                    />
                    <div>
                        <label className="block text-sm font-medium text-gray-7000 mb-1">
                            Gender
                        </label>
                        <select
                            name="gender"
                            value={FormData.gender}
                            onChange={handleChange}
                            className="block w-full border border-gray-300 rounded-md p-2 text-gray-700"
                            required
                        >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <input
                        label="Contact"
                        type="tel"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        placeholder="Enter contact number"
                        required
                    />
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter address"
                    />
                    <Button
                        type="submit"
                        variant="filled"
                        color="primary"
                        size="lg"
                        className="w-full mt-4"
                    >
                        Register Patient
                    </Button>
                </form>
            </div>
        </section>
    );
};

export default PatientRegister;