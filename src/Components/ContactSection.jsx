import React, { useState } from "react";
import {FaGithub} from "react-icons/fa6";
import SocialIcons from "../Utils/SocialIcons.jsx";

const ContactSection = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle form submission logic here
        console.log(form);
    };

    return (
        <section id="contact" className="py-20 px-4 bg-slate-800/50">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold game-title mb-4">
                        Get In <span className="text-purple-500">Touch</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Have a project in mind or want to collaborate? I'd love to hear from you!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-slate-900 rounded-xl p-8 border border-slate-700">
                        <h3 className="text-xl font-bold text-white mb-6 game-title">Send Me a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
                            {["name", "email", "subject", "message"].map((field) => (
                                <div key={field}>
                                    <label
                                        htmlFor={field}
                                        className="block text-sm font-medium text-slate-400 mb-2 capitalize"
                                    >
                                        {field === "message" ? "Message" : `Your ${field}`}
                                    </label>
                                    {field === "message" ? (
                                        <textarea
                                            id={field}
                                            rows="5"
                                            className="contact-input w-full px-4 py-3 rounded-lg text-white bg-slate-800 border border-slate-700"
                                            placeholder="Tell me about your project..."
                                            value={form[field]}
                                            onChange={handleChange}
                                        />
                                    ) : (
                                        <input
                                            type={field === "email" ? "email" : "text"}
                                            id={field}
                                            className="contact-input w-full px-4 py-3 rounded-lg text-white bg-slate-800 border border-slate-700"
                                            placeholder={
                                                field === "name"
                                                    ? "John Doe"
                                                    : field === "email"
                                                        ? "john@example.com"
                                                        : "Project Inquiry"
                                            }
                                            value={form[field]}
                                            onChange={handleChange}
                                        />
                                    )}
                                </div>
                            ))}
                            <button type="submit" className="btn-primary w-full px-8 py-3 rounded-lg font-medium text-white bg-purple-600 hover:bg-purple-700">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6 game-title">Contact Information</h3>
                        <div className="space-y-6">
                            {[
                                {
                                    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                                    title: "Email",
                                    value: "stharanzn1705@gmail.com",
                                },
                                {
                                    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                                    title: "Phone",
                                    value: "+91 7397963988",
                                },
                                {
                                    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                                    title: "Location",
                                    value: "Delhi, India",
                                },
                            ].map((item, idx) => (
                                <div className="flex items-start" key={idx}>
                                    <div className="w-12 h-12 rounded-lg bg-purple-900/50 flex items-center justify-center mr-4 flex-shrink-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-purple-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium mb-1">{item.title}</h4>
                                        <p className="text-slate-400">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social Media */}
                        <div className="mt-12">
                            <h3 className="text-xl font-bold text-white mb-6 game-title">Follow Me</h3>
                            <div className="flex space-x-4">
                                <SocialIcons/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
