import axios from "axios";
import React, { useState } from 'react'

export default function Contact() {
    const [FirstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [Phone, setPhone] = useState("")
    const [Email, setEmail] = useState("")
    const [EmailSttus, setEmailStatus] = useState(false)
    const [Message, setMessage] = useState("")

    const handleChangeName = (e) => {
        if(e.target.name === "last_name"){
            setLastName(e.target.value)
        }
        if(e.target.name === "first_name"){
            setFirstName(e.target.value)
        }
    }
    
    const validatePhone = (e) => {
        let Input = e.target.value
        if (!isNaN(Number.parseInt(Input.slice(-1))) || Input === "") {
            setPhone(e.target.value)
        }
    }

    const validateEmail = (e) => {
        let email = e.target.value
        let emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        setEmail(e.target.value)
        if(emailRegEx.test(String(email).toLowerCase())){
            setEmailStatus(true)
        }
    }

    const handleChangeMessage = (e) => {
        setMessage(e.target.value)
    }
    
    const handleSend = async (e) => {
        if(FirstName === "" || LastName === "" || Email === "" || Message === ""){
            alert("Please fill all requred fields")
        }
        else{
            let response = await axios.post("http://localhost:3000/",{
                Name : `${FirstName} ${LastName}`,
                Phone : Phone,
                Email : Email,
                Message : Message
            })
            alert(response.data)
        }
    }
    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-7 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Have some queries or feedback ? Feel free to express your thoughts.</p>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="first_name" className="leading-7 text-sm text-gray-600">First Name</label>
                                <input type="text" id="first_name" name="first_name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handleChangeName} value={FirstName}/>
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="last_name" className="leading-7 text-sm text-gray-600">Last Name</label>
                                <input type="text" id="last_name" name="last_name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handleChangeName} value={LastName}/>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
                                <input type="text" id="phone" name="phone" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={validatePhone} value={Phone}/>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={validateEmail} value={Email}/>
                                <small>{Email === "" ? "" : EmailSttus ? "Valid" : "Invalid"}</small>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                                <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" onChange={handleChangeMessage} value={Message}></textarea>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleSend}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
