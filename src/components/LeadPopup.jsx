import { useEffect, useState } from "react";
import api from "../services/api";

export default function LeadPopup() {

    const [showPopup, setShowPopup] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const timer = setTimeout(() => {

            const popupShown = sessionStorage.getItem("leadPopupShown");

            // if (!popupShown) {
                setShowPopup(true);
                // sessionStorage.setItem("leadPopupShown", "true");
            // }

        }, 4000);

        return () => clearTimeout(timer);

    }, []);

    if (!showPopup) return null;

    const validateForm = () => {

        if (!name.trim()) {
            alert("Name is required");
            return false;
        }

        if (!email.trim()) {
            alert("Email is required");
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            alert("Invalid email");
            return false;
        }

        if (!phone.trim()) {
            alert("Phone number required");
            return false;
        }

        if (phone.length < 6) {
            alert("Invalid phone number");
            return false;
        }

        if (message.trim().length < 5) {
            alert("Message must be at least 5 characters");
            return false;
        }

        return true;

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (loading) return;

        if (!validateForm()) return;

        setLoading(true);

        try {

            await api.post("/contact", {
                name: name.trim(),
                email: email.trim(),
                phone: phone.trim(),
                message: message.trim(),
                source: "popup"
            });

            alert("Request submitted successfully");

            setName("");
            setEmail("");
            setPhone("");
            setMessage("");

            setShowPopup(false);

        } catch (error) {

            alert("Failed to submit request");

        }

        setLoading(false);

    };

    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">

            <div className="bg-white rounded-2xl shadow-2xl p-8 w-[90%] max-w-md relative">

                {/* CLOSE BUTTON */}
                <button
                    onClick={() => setShowPopup(false)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-black"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                <h2 className="text-2xl font-bold mb-2">
                    Get Free Consultation
                </h2>

                <p className="text-gray-600 mb-6">
                    Tell us about your project and our experts will contact you.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border p-3 rounded-lg"
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border p-3 rounded-lg"
                    />

                    <input
                        type="text"
                        placeholder="Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full border p-3 rounded-lg"
                    />

                    <textarea
                        placeholder="Share Your Project Idea"
                        rows="3"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full border p-3 rounded-lg resize-none"
                    />

                    <button
                        disabled={loading}
                        className="w-full bg-[#F27115] text-white py-3 rounded-lg font-semibold hover:bg-black transition disabled:opacity-60"
                    >
                        {loading ? "Submitting..." : "Submit Request"}
                    </button>

                </form>

            </div>

        </div>
    );
}