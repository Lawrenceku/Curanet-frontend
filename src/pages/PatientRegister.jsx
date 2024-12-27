import { useState} from "react";
import Input from "../components/Input";
import Button from "../components/Button";

const PatientRegister = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        surname: "",
        age: "",
        sex: "",
        address: "",
        contact: "",
        nextOfKin: "",
        kinContact: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const handleInputChange = (e) => {
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
                console.log("Patient biodata submitted:", formData);
                setIsLoading(false);
            }, 1500);
        }
    };
    return (
        <div
            className="h-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('/Background_Image_1.jpg')" }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative bg-white p-8 rounded-lg shadow-lg w-full max-w-lg z-10">
                <h1 className="text-2xl font-bold text-center mb-4">
                    Patient Biodata:
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Enter your First Name"
                        className="p-2 border rounded-md w-full"
                        required
                    />
                    <input
                        type="text"
                        name="surname"
                        value={formData.surname}
                        onChange={handleInputChange}
                        placeholder="Enter your Surname"
                        className="p-2 border rounded-md w-full"
                        required
                    />
                     <input
                        type="text"
                        name="sex"
                        value={formData.sex}
                        onChange={handleInputChange}
                        placeholder="Sex"
                        className="p-2 border rounded-md w-full"
                        required
                    />
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        placeholder="Enter your age (Years)"
                        className="p-2 border rounded-md w-full"
                        required
                    />
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Enter your Physical Address"
                        className="p-2 border rounded-md w-full"
                        required
                    />
                    <input
                        type="tel"
                        name="contact"
                        value={formData.contact}
                        onChange={handleInputChange}
                        placeholder="Contact Number"
                        className="p-2 border rounded-md w-full"
                        required
                    />
                    <input
                        type="text"
                        name="nextOfKin"
                        value={formData.nextOfKin}
                        onChange={handleInputChange}
                        placeholder="Next of Kin"
                        className="p-2 border rounded-md w-full"
                        required
                    />
                    <input
                        type="tel"
                        name="kinContact"
                        value={formData.kinContact}
                        onChange={handleInputChange}
                        placeholder="Kin's Contact Number"
                        className="p-2 border rounded-md w-full"
                        required
                    />
                    <Button
                        type="submit"
                        className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-700"
                        disabled={isLoading}
                    >
                        {isLoading ? "Submitting..." : "Register Patient"}
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default PatientRegister;