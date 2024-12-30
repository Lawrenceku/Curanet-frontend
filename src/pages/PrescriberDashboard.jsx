import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

const PrescriberDashboard = () => {
    const [patients, setPatients] = useState([
        { id: 1, name: "Raph Gray", age: 60, summary: ""},
        { id: 2, name: "Martha Gray", age: 50, summary: ""},
    ]);
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [patientSummary, setPatientSummary] = useState("");
    const [diagnosis, setDiagnosis] = useState("");
    const [prescription, setPrescription] = useState([]);
    const [medicationName, setMedicationName] = useState("");
    const [frequency, setFrequency] = useState("");
    const [duration, setDuration] = useState("")
    const [interactionWarnings, setInteractionWarnings] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState("");

    const handleSelectPatient = (patient) => {
        setSelectedPatient(patient);
        setPatientSummary("");
        setDiagnosis("");
        setPrescription([]);
        setInteractionWarnings([]);
    };

    const handleAddMedication = () => {
        if (medicationName && frequency && duration) {
            const medication = {
                name: medicationName,
                frequency: frequency,
                duration: duration,
            };

            console.log("Current medication:", medication);

            const updatedPrescription = [...prescription, medication];
            setPrescription(updatedPrescription);

            setMedicationName('');
            setFrequency('');
            setDuration('');

            checkDrugInteractions(updatedPrescription);
        } else {
            alert("Please enter a medication details!");
        }
    };

    const checkDrugInteractions = async (medications) => {
        setIsLoading(true);
        try {
            const warnings = medications.includes("Aspirin")
                ? ["Aspirin interacts with warfarin"]
                : [];
            setInteractionWarnings(warnings);
        } catch (error) {
            console.error("Error checking drug interactions:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = () => {
        if (!diagnosis || !patientSummary || prescription.length === 0) {
            alert("Please fill in all the required fields");
            return;
        }
        console.log("Submitted Data:", {
            patient: selectedPatient,
            diagnosis,
            summary: patientSummary,
            prescription,
        });
        alert("Prescription submitted successfully!");
        setDiagnosis("");
        setPatientSummary("");
        setPrescription([]);
        setInteractionWarnings([]);
    };
    return (
        <>
            <div className="h-screen p-8 bg-gray-200">
                <h1 className="text-3xl font-bold mb-6 text-center">Prescriber's Dashboard</h1>
                <div className="grid grid-cols-12 gap-6 h-full">
                    <div className="col-span-3 bg-white p-4 rounded-lg shadow-md overflow-y-auto">
                        <h2 className="text-2xl font-semibold mb-4">Queued Patients</h2>
                        <ul className="space-y-2">
                            {patients.map((patient) => (
                                <li
                                    key={patient.id}
                                    className={`p-3 border rounded-md cursor-pointer ${
                                        selectedPatient?.id === patient.id ? "bg-blue-100" : ""
                                    }`}
                                    onClick={() => handleSelectPatient(patient)}
                                >
                                    {patient.name} (Age: {patient.age})
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-span-6 bg-white p-6 rounded-lg shadow-md">
                        {selectedPatient ? (
                            <>
                                <h2 className="text-2xl font-semibold mb-4">Patient Details</h2>
                                <p className="mb-4">
                                    <strong>Patient's Biodata:</strong> {selectedPatient.name}
                                </p>
                                <div className="grid grid-cols-1 gap-4 mb-4">
                                    <Input
                                        type="text"
                                        placeholder="Patient Summary"
                                        value={patientSummary}
                                        onChange={(e) => setPatientSummary(e.target.value)}
                                        className="p-2 border rounded-md w-full h-40"
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Diagnosis"
                                        value={diagnosis}
                                        onChange={(e) => setDiagnosis(e.target.value)}
                                        className="p-2 border rounded-md w-full h-20"
                                    />
                                </div>
                                <div className="flex gap-4 mb-4">
                                    <Input
                                        type="text"
                                        placeholder="Medication Name"
                                        value={medicationName}
                                        onChange={(e) => setMedicationName(e.target.value)}
                                        className="p-2 border rounded-md flex-1"
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Frequency"
                                        value={frequency}
                                        onChange={(e) => setFrequency(e.target.value)}
                                        className="p-2 border rounded-md flex-1"
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Duration"
                                        value={duration}
                                        onChange={(e) => setDuration(e.target.value)}
                                        className="p-2 border rounded-md flex-1"
                                    />
                                    <Button
                                        onClick={handleAddMedication}
                                        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
                                    >
                                        Add
                                    </Button>
                                </div>
                                <ul className="mb-4">
                                    {prescription.map((med, index) => (
                                        <li key={index} className="p-2 border rounded-md flex items-center justify-between">
                                            {editIndex === index ? (
                                                <>
                                                    <input
                                                        type="text"
                                                        placeholder="Medication"
                                                        value={editValue.name}
                                                        onChange={(e) =>
                                                            setEditValue({ ...editValue, name: e.target.value })
                                                        }
                                                        className="p-2 border rounded-md w-full"
                                                    />
                                                    <input
                                                        type="text"
                                                        placeholder="Frequency"
                                                        value={editValue.frequency}
                                                        onChange={(e) =>
                                                            setEditValue({ ...editValue, frequency: e.target.value })
                                                        }
                                                        className="p-2 border rounded-md w-full"
                                                    />
                                                    <input
                                                        type="text"
                                                        placeholder="Duration"
                                                        value={editValue.duration}
                                                        onChange={(e) =>
                                                            setEditValue({ ...editValue, duration: e.target.value })
                                                        }
                                                        className="p-2 border rounded-md w-full"
                                                    />
                                                    <div className="ml-auto flex space-x-2">
                                                        <Button
                                                            onClick={() => {
                                                                const updatedPrescription = [...prescription];
                                                                updatedPrescription[index] = { ...editValue };
                                                                setPrescription(updatedPrescription);
                                                                setEditIndex(null);
                                                                setEditValue({ name: "", frequency: "", duration: ""});
                                                                checkDrugInteractions(updatedPrescription);
                                                            }}
                                                            className="bg-green-500 text-white p-2 rounded-md hover:bg-green-700"
                                                        >
                                                            Save
                                                        </Button>
                                                        <Button
                                                            onClick={() => {
                                                                setEditIndex(null);
                                                                setEditValue({ name: "", frequency: "", duration: "" });
                                                            }}
                                                            className="bg-green-500 text-white p-2 rounded-md hover:bg-gray-700"
                                                        >
                                                            Cancel
                                                        </Button>
                                                    </div>
                                                </>
                                            ) : (
                                                <div className="flex w-full items-center">
                                                    <div className="flex-1">
                                                        <span>
                                                            <strong>Name:</strong> {med.name} | <strong>Frequency:</strong> {med.frequency} | <strong>Duration:</strong> {med.duration}
                                                        </span>
                                                        <div className="ml-30 items-center space-x-2 flex">
                                                            <Button
                                                                onClick={() => {
                                                                    setEditIndex(index);
                                                                    setEditValue({ ...med});
                                                                }}
                                                                className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
                                                            >
                                                                Edit
                                                            </Button>
                                                            <Button
                                                                onClick={() => {
                                                                    const updatedPrescription = prescription.filter(
                                                                        (_, i) => i != index
                                                                    );
                                                                    setPrescription(updatedPrescription);
                                                                    checkDrugInteractions(updatedPrescription);
                                                                }}
                                                                className="bg-blue-500 text-white p-2 rounded-md hover:bg-red-700"
                                                            >
                                                                Delete
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    onClick={handleSubmit}
                                    className="bg-green-500 text-white p-2 rounded-md hover:bg-green-700 mt-4"
                                    disabled={isLoading}
                                >
                                    {isLoading ? "Processing..." : "Submit Prescription"}

                                </Button>
                            </>
                        ) : (
                            <p className="text-center">Select a patient to proceed.</p>
                        )}
                    </div>
                    <div className="col-span-3 bg-white p-4 rounded-lg shadow-md overflow-y-auto">
                        <h2 className="text-2xl font-semibold mb-4">Interaction checks</h2>
                        {interactionWarnings.length > 0 ? (
                            <ul className="list-disc list-inside">
                                {interactionWarnings.map((warning, index) => (
                                    <li key={index}>{warning}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No drug interactions found</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PrescriberDashboard;