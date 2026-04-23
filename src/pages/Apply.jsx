import { useParams } from "react-router-dom";
import { useState, useRef } from "react";
import api from "../services/api";

export default function Apply() {
    const { jobTitle } = useParams();

    const fileRef = useRef(); // for resetting file input

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        resume: null
    });

    const [loading, setLoading] = useState(false);

    // ✅ Format slug to readable title
    const formatTitle = (slug) => {
        return slug
            .split("-")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === "resume") {
            setFormData({ ...formData, resume: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const data = new FormData();
            data.append("name", formData.name);
            data.append("email", formData.email);
            data.append("phone", formData.phone);
            data.append("message", formData.message);
            data.append("resume", formData.resume);
            data.append("jobTitle", jobTitle);

            const res = await api.post("/apply", data);

            const result = res.data; // ✅

            alert("Application submitted successfully ✅");

            setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
                resume: null
            });

            if (fileRef.current) {
                fileRef.current.value = "";
            }

        } catch (error) {
            console.error(error);
            alert(error?.response?.data?.error || "Server error"); // better error
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="max-w-xl mx-auto py-10">
            <h1 className="text-2xl font-bold mb-6">
                Apply for {formatTitle(jobTitle)}
            </h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                <input
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <input
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />

                <input
                    ref={fileRef}
                    name="resume"
                    type="file"
                    accept="application/pdf"
                    onChange={handleChange}
                    required
                />

                <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                />

                <button
                    disabled={loading}
                    className="bg-orange-500 text-white py-3 rounded"
                >
                    {loading ? "Submitting..." : "Submit Application"}
                </button>

            </form>
        </div>
    );
}