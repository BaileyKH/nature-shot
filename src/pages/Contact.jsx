import React from "react"
import { useNavigate } from "react-router-dom"


import contact from '/src/assets/images/contact.jpg'

export const Contact = () => {

    const navigate = useNavigate();
    const to = location.state?.to || "/"

    function handleSubmit(e) {
        e.preventDefault()
    }

    function handleCancel() {
        document.getElementById("contact-form").reset()
        navigate(to, { replace: true })
    }

    return(
        <div className="bg-[url('/src/assets/images/contact.jpg')] bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center">
            <div className="mt-12 mx-4 backdrop-blur-lg w-[800px] h-max rounded-lg border border-white/60">
                <form id="contact-form" className="py-6 px-6 md:px-24">
                    <div className="space-y-12">
                        <div>
                        <h2 className="text-base font-semibold leading-7 tracking-wider text-white/90">Personal Information</h2>
                        <p className="mt-1 text-sm leading-6 text-white/60">Please fill out the following information.</p>
                
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-white/90">
                                First name
                            </label>
                            <div className="mt-2">
                                <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 py-1.5 text-white/90 shadow-sm ring-1 ring-inset ring-white/60 bg-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            </div>
                
                            <div className="sm:col-span-3">
                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-white/90">
                                Last name
                            </label>
                            <div className="mt-2">
                                <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                className="block w-full rounded-md border-0 py-1.5 text-white/90 shadow-sm ring-1 ring-inset ring-white/60 bg-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            </div>
                
                            <div className="sm:col-span-4">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white/90">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md border-0 py-1.5 text-white/90 shadow-sm ring-1 ring-inset ring-white/60 bg-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            </div>
                
                            <div className="sm:col-span-3">
                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-white/90">
                                Country
                            </label>
                            <div className="mt-2">
                                <select
                                id="country"
                                name="country"
                                autoComplete="country-name"
                                className="block w-full rounded-md border-0 py-1.5 text-white/90 shadow-sm ring-1 ring-inset ring-white/60 bg-white/10 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                <option>United States</option>
                                <option>Canada</option>
                                <option>Mexico</option>
                                </select>
                            </div>
                            </div>
                            <div className="col-span-full">
                            <label htmlFor="about" className="block text-sm font-medium leading-6 text-white/90">
                                About
                            </label>
                            <div className="mt-2">
                                <textarea
                                id="about"
                                name="about"
                                rows={3}
                                className="block w-full rounded-md border-0 py-1.5 text-white/90 shadow-sm ring-1 ring-inset ring-white/60 bg-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                                defaultValue={''}
                                />
                            </div>
                            <p className="mt-3 text-sm leading-6 text-white/60">Write a few sentences about the desired location.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                
                    <div className="mt-4 flex items-center justify-end gap-x-6">
                        <button type="button" onClick={handleCancel} className="text-sm font-semibold leading-6 text-white/90">
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
        </div>
    );
}