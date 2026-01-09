import React, { useState } from "react";

const ContactModal = ({ isOpen, onClose }) => {
    const [status, setStatus] = useState(""); // "" | "success" | "error"
    const [loading, setLoading] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus("");

        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            service: e.target.service.value,
            message: e.target.message.value,
        };

        try {
            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbxCVSLJlcDzpuqr9OC6E5bKKD1TwJgivhoaeqJywGyEwMrz_aAXIC7d_HeDs_nncWgNdw/exec",
                {
                    method: "POST",
                    body: JSON.stringify(data), // send raw JSON
                }
            );


            const result = await response.json();
            if (result.success) {
                setStatus("success");
                e.target.reset();
            } else {
                setStatus("error");
            }
        } catch (err) {
            console.error("Submit error:", err);
            setStatus("error");
        }

        setLoading(false);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
            <div className="relative bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row w-full max-w-5xl h-[90vh]">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute lg:-top-5 lg:-right-9 right-2 top-2 text-black text-xl z-10 bg-white backdrop-blur-sm px-2.5 py-1 rounded-full"
                >
                    ✕
                </button>

                {/* Left image section */}
                <div className="md:w-[45%] w-full p-5 md:h-full h-[30vh]">
                    <img
                        src="https://img.freepik.com/premium-photo/side-view-silhouette-photographer-against-sky-sunset_1048944-28646237.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80"
                        alt="Project"
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>

                {/* Right form section */}
                <div className="md:w-1/2 w-full px-8 py-10 md:px-3 md:py-8 overflow-y-auto">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        {/* Name */}
                        <div>
                            <label className="block text-sm text-gray-500 mb-2">
                                Your name
                            </label>
                            <input
                                name="name"
                                type="text"
                                placeholder="Enter Your Name"
                                required
                                className="w-full border placeholder:text-sm border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm text-gray-500 mb-2">
                                Email address
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="Enter Your Email"
                                required
                                className="w-full border placeholder:text-sm border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>

                        {/* Service */}
                        <div>
                            <label className="block text-sm text-gray-500 mb-2">
                                Service
                            </label>
                            <select
                                name="service"
                                required
                                className="w-full border placeholder:text-sm border-gray-200 rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-black"
                            >
                                <option value="">Select service</option>
                                <option>Wedding Photography</option>
                                <option>Pre-Wedding Shoot</option>
                                <option>Engagement / Couple Shoot</option>
                                <option>Portrait Photography</option>
                                <option>Family Photography</option>
                            </select>
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm text-gray-500 mb-2">
                                About the project
                            </label>
                            <textarea
                                name="message"
                                rows="4"
                                placeholder="Write something..."
                                required
                                className="w-full border border-gray-200 placeholder:text-sm rounded-lg px-4 py-2 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-black text-white py-3 rounded-lg text-sm font-medium hover:bg-zinc-800 transition"
                        >
                            {loading ? "Sending..." : "Submit"}
                        </button>

                        {/* Success / Error messages */}
                        {status === "success" && (
                            <p className="text-green-600 font-medium mt-2">
                                Message sent successfully!
                            </p>
                        )}
                        {status === "error" && (
                            <p className="text-red-600 font-medium mt-2">
                                Failed to send message. Please try again.
                            </p>
                        )}
                    </form>
                    {/* OR Divider */}
                    <div className="flex items-center gap-3 my-4">
                        <div className="flex-1 h-px bg-gray-200"></div>
                        <span className="text-xs text-gray-400 font-medium">OR</span>
                        <div className="flex-1 h-px bg-gray-200"></div>
                    </div>

                    {/* WhatsApp Contact */}
                    <a
                        href="https://wa.me/918610878315"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 rounded-md py-3 bg-green-600 transition"
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                            alt="WhatsApp"
                            className="w-5 h-5"
                        />
                        <span className="text-sm font-medium text-white">
                            Reach us on WhatsApp
                        </span>
                        <span className="text-sm font-semibold text-white">
                            +91 86108 78315
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;
