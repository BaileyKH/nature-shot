import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Contact = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        about: ""
    });

    const [errors, setErrors] = useState({});

    const [newCountry, setNewCountry] = useState(false);
    const [submit, setSubmit] = useState(false);

    const navigate = useNavigate();
    const to = location.state?.to || "/";

    const isValidEmail = (email) => {
        const validEmail = /^\S+@\S+\.\S+$/;
        return validEmail.test(email);
    }

    const validateForm = () => {

        let newErrors = {};

        if (!formData.firstName) {
            newErrors.firstName = "Please enter your first name."
        }
        if (!formData.lastName) {
            newErrors.lastName = "Please enter your last name."
        }
        if (!formData.email) {
            newErrors.email = "Please enter an email address"
        } else if (!isValidEmail(formData.email)) {
            newErrors.email = "Invalid email format"
        }
        if (!formData.country) {
            newErrors.country = "Please choose a country. If you do not see your country, please select N/A"
        }
        if (!formData.about) {
            newErrors.about = "Please enter a short description about the location"
        }

        setErrors(newErrors)

        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const isValid = validateForm();
        if (isValid) {
            console.log("Form Submitted", formData)
            setSubmit(true);
        } else {
            console.log("Form Validation Failed")           
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target

        setFormData({
            ...formData,
            [name]: value,
        })
    }

    function handleCancel() {
        document.getElementById("contact-form").reset();
        navigate(to, { replace: true });
    }

    function handleClose() {
        setSubmit(false);
        document.getElementById("contact-form").reset();
        navigate(to, { replace: true });
    }

    return (
        <div className="bg-[url('/src/assets/images/contact.webp')] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center">
            <div className="relative my-16 md:my-14 lg:my-20 mx-4 backdrop-blur-lg w-[800px] h-max rounded-lg border border-white/60">
                <form
                    id="contact-form"
                    onSubmit={handleSubmit}
                    className="py-2 px-6 md:px-16 md:py-4"
                >
                    <div className="space-y-6 md:space-y-12">
                        <div>
                            <h2 className="text-base font-semibold leading-7 tracking-wider text-white/90">
                                Personal Information
                            </h2>
                            <p className="mt-1 text-sm leading-6 text-white/60">
                                Please fill out the following form.
                            </p>

                            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 md:gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="first-name"
                                        className="block text-sm font-medium leading-6 text-white/90"
                                    >
                                        First name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="firstName"
                                            id="first-name"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            autoComplete="given-name"
                                            className={`block w-full rounded-md border-0 py-1.5 text-white/90 shadow-sm ring-1 ring-inset ${errors.firstName ? `ring-red-400` : `ring-white/60`} bg-white/10 focus:ring-2 focus:ring-inset ${errors.firstName ? 'focus:ring-red-400' : 'focus:ring-sky-600'} sm:text-sm sm:leading-6`}
                                        />
                                        {errors.firstName && <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>}
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="last-name"
                                        className="block text-sm font-medium leading-6 text-white/90"
                                    >
                                        Last name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="lastName"
                                            id="last-name"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            autoComplete="family-name"
                                            className={`block w-full rounded-md border-0 py-1.5 text-white/90 shadow-sm ring-1 ring-inset ${errors.lastName ? `ring-red-400` : `ring-white/60`} bg-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${errors.lastName ? 'focus:ring-red-400' : 'focus:ring-sky-600'} sm:text-sm sm:leading-6`}
                                        />
                                        {errors.lastName && <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>}
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium leading-6 text-white/90"
                                    >
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            autoComplete="email"
                                            placeholder="your@email"
                                            className={`block w-full rounded-md border-0 py-1.5 text-white/90 shadow-sm ring-1 ring-inset ${errors.email ? `ring-red-400` : `ring-white/60`} bg-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${errors.email ? 'focus:ring-red-400' : 'focus:ring-sky-600'} sm:text-sm sm:leading-6`}
                                        />
                                        {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                                    </div>
                                </div>
                            </div>
                            <div className="cols-span-3 mt-10 mb-4">
                                    <h2 className="text-base font-semibold leading-7 tracking-wider text-white/90">
                                        Location
                                    </h2>
                                    <p className="mt-1 text-sm leading-6 text-white/60">
                                        Tell us about your location.
                                    </p>
                                </div>
                            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="country"
                                        className="block text-sm font-medium leading-6 text-white/90"
                                    >
                                        Country
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="country"
                                            name="country"
                                            value={formData.country}
                                            onChange={handleChange}
                                            autoComplete="country-name"
                                            className={`block w-full rounded-md border-0 py-1.5 text-white/90 shadow-sm ring-1 ring-inset ${errors.country ? `ring-red-400` : `ring-white/60`} bg-white/10 focus:ring-2 focus:ring-inset ${errors.country ? 'focus:ring-red-400' : 'focus:ring-sky-600'} sm:max-w-xs sm:text-sm sm:leading-6`}
                                        >
                                            <option>-select country-</option>
                                            <option>United States</option>
                                            <option>Finland</option>
                                            <option>New Zealand</option>
                                            <option>Japan</option>
                                        </select>
                                        {errors.country && <p className="text-red-400 text-sm mt-1">{errors.country}</p>}
                                        <p className="text-white/60 text-sm mt-3">
                                            Don't see your{" "}
                                            <span
                                                onClick={() =>
                                                    setNewCountry(true)
                                                }
                                                className="text-sky-600 cursor-pointer underline underline-offset-2"
                                            >
                                                country
                                            </span>
                                            ?
                                        </p>
                                    </div>
                                </div>
                                <div className="col-span-full">
                                    <label
                                        htmlFor="about"
                                        className="block text-sm font-medium leading-6 text-white/90"
                                    >
                                        About
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            id="about"
                                            name="about"
                                            value={formData.about}
                                            onChange={handleChange}
                                            rows={3}
                                            className={`block w-full rounded-md border-0 py-1.5 text-white/90 shadow-sm ring-1 ring-inset ${errors.country ? `ring-red-400` : `ring-white/60`} bg-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${errors.country ? 'focus:ring-red-400' : 'focus:ring-sky-600'} sm:text-sm sm:leading-6`}
                                        />
                                        {errors.country && <p className="text-red-400 text-sm mt-1">{errors.country}</p>}
                                    </div>
                                    <p className="mt-3 text-sm leading-6 text-white/60">
                                        Write a few sentences about the desired
                                        location.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 flex items-center justify-end gap-x-6">
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="text-sm font-semibold leading-6 text-white/90"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-sky-600 px-4 py-2 text-sm font-semibold tracking-wider text-white shadow-sm transition-colors duration-200 ease-in-out hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            {submit ? (
                <div className="absolute flex flex-col justify-center items-center w-full h-screen bg-black/60">
                    <div className="flex flex-col items-center bg-black/60 backdrop-blur-lg w-[300px] px-2 py-4 h-max rounded-lg border border-white/60">
                        <p className="text-sky-600 text-lg">
                            Thank You {formData.firstName}
                        </p>
                        <p className="text-white/90 text-sm text-center mt-2">
                            We appreciate you considering our team for your next
                            project.
                        </p>
                        <button
                            onClick={handleClose}
                            className="text-white/90 px-2 py-1 bg-sky-600 rounded-md mt-4"
                        >
                            Close
                        </button>
                    </div>
                </div>
            ) : null}
            {newCountry ? (
                <div className="absolute flex flex-col justify-center items-center w-full min-h-screen bg-black/60">
                    <div className="flex flex-col items-center bg-black/25 backdrop-blur-lg w-[300px] px-3 py-4 h-max rounded-lg border border-white/60">
                        <p className="text-sky-600 text-lg">We'll Get There!</p>
                        <p className="text-white/90 text-sm text-center mt-2 leading-6">
                            Don't see your country? We just haven't made it
                            there yet! Please leave as much information about the desired shooting location in the "about" section.
                        </p>
                        <button
                            onClick={() => setNewCountry(false)}
                            className="text-white/90 px-2 py-1 bg-sky-600 rounded-md mt-4"
                        >
                            Close
                        </button>
                    </div>
                </div>
            ) : null}
        </div>
    );
};
