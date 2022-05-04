import { useState } from "react";

function ContactPage() {
    const [formInput, setFormInput] = useState({
        name: '',
        email: '',
        message: '',
    });

    function onChangeHandler(e) {
        const { value, id} = e.target;

        setFormInput({ ...formInput, [id]: value });
    }

    function onSubmitHandler(e) {
        e.preventDefault();

        setFormInput({ name: '', email: '', message: '' });
    }

    return (
        <>
        <h1 className="text-[40px] flex justify-center mt-[60px] text-[#87848B] font-extrabold mb-[30px]">GET IN TOUCH</h1>
        <div className="rounded-[10px] shadow-[0_4px_8px_0px_rgba(0,0,0,0.2)] flex justify-center items-center m-auto h-[60vh] w-[85vw] md:w-[75vw] xl:w-[60vw]">

            <div className="flex flex-col justify-center items-center h-[70%] border-r-2 border-r-[#87848B] w-[40%] cursor-default">
                <span className="w-3/4 p-2 m-2 border-2 border-[#87848B] text-[#87848B] cursor-pointer">LinkedIn</span>
                <span className="w-3/4 p-2 m-2 border-2 border-[#87848B] text-[#87848B]">Phone: 083 807 4866</span>
                <span className="w-3/4 p-2 m-2 border-2 border-[#87848B] text-[#87848B]">Email: ainedoyleAD@gmail.com</span>
                <span className="w-3/4 p-2 m-2 border-2 border-[#87848B] text-[#87848B]">Address: Kildare, Ireland</span>
            </div>

            <div className="flex justify-center h-[70%] w-[40%]">
                <form className="flex flex-col w-3/4 p-3 mt-[20px]" onSubmit={onSubmitHandler}>
                    <label className="mt-[15px] text-[#87848B]" htmlFor="name">Your Name</label>
                    <input
                        className="border-b-[1px] border-b-black focus:outline-none" 
                        id="name"
                        type="text"
                        value={formInput.name}
                        required
                        onChange={onChangeHandler}
                    />

                    <label className="mt-[15px] text-[#87848B]" htmlFor="email">Your Email</label>
                    <input
                        className="border-b-[1px] border-b-black focus:outline-none" 
                        id="email"
                        type="email"
                        value={formInput.email}
                        required
                        onChange={onChangeHandler}
                    />

                    <label className="mt-[15px] text-[#87848B]" htmlFor="message">Your Message</label>
                    <textarea 
                        className="border-[1px] border-[#87848B] min-h-[150px] max-h-[150px] focus:outline-none"
                        id="message"
                        type="text"
                        value={formInput.message}
                        onChange={onChangeHandler}
                        required
                    />
                    <button className="text-[#87848B] border-[1px] border-[#87848B] rounded-lg w-1/2 mt-3 hover:bg-[#87848B] hover:text-white">Submit</button>
                </form>
            </div>
        </div>
        </>
    );
}

export default ContactPage;
