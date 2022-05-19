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

    // async function onSubmitHandler(e) {
    //     e.preventDefault();

    //     const data = formInput;

    //     const response = await fetch('/api/contact', {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json, text/plain, */*',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(data),
    //     });

    //     if (response.status === 200) {
    //         setFormInput({ name: '', email: '', message: '' });

    //         setTimeout(() => {
    //             alert('Your message has been sent successfully! Thank you for contacting me and I will be in touch shortly!');
    //         }, 1000);
            
    //     } else {
    //         alert('Sorry, your message failed to send. Please try again later.');
    //     }
    // }

    return (
        <>
            <h1 className="text-[40px] flex justify-center mt-[80px] text-[#243b55] font-extrabold mb-[30px]">GET IN TOUCH</h1>
            <div className="rounded-[10px] shadow-[0_4px_8px_0px_rgba(0,0,0,0.2)] flex flex-col justify-center items-center 
                sm:flex-row m-auto h-auto sm:h-[65vh] w-[95vw] md:w-[85vw] xl:w-[75vw] 2xl:w-[60vw]"
            >

                <div className="flex flex-col justify-center items-center h-[70%] sm:border-r-[1px] border-r-[#243b55] w-full sm:w-[50%] cursor-default">
                    <span className="w-3/4 p-2 m-2 border-2 border-[#243b55] text-[#243b55] cursor-pointer">LinkedIn</span>
                    <span className="w-3/4 p-2 m-2 border-2 border-[#243b55] text-[#243b55]">Phone: 083 807 4866</span>
                    <span className="w-3/4 p-2 m-2 border-2 border-[#243b55] text-[#243b55]">Email: ainedoyleAD@gmail.com</span>
                    <span className="w-3/4 p-2 m-2 border-2 border-[#243b55] text-[#243b55]">Address: Kildare, Ireland</span>
                </div>

                <div className="flex justify-center h-[70%] w-full sm:w-[50%] border-t-[1px] border-t-[#243b55] mt-10 sm:mt-0 sm:border-t-0 sm:border-l-[1px] border-l-[#243b55]">
                    <form className="flex flex-col w-3/4 p-3 mt-[20px]" action="https://formsubmit.co/057f378cb12e3c82ab33ce3492bbb5a5" method="POST">
                        <label className="mt-[15px] text-[#243b55]" htmlFor="name">Your Name</label>
                        <input
                            className="border-b-[1px] border-b-black focus:outline-none" 
                            id="name"
                            name="name"
                            type="text"
                            value={formInput.name}
                            required
                            onChange={onChangeHandler}
                        />

                        <label className="mt-[15px] text-[#243b55]" htmlFor="email">Your Email</label>
                        <input
                            className="border-b-[1px] border-b-black focus:outline-none" 
                            id="email"
                            type="email"
                            name="email"
                            value={formInput.email}
                            required
                            onChange={onChangeHandler}
                        />

                        <label className="mt-[15px] text-[#243b55]" htmlFor="message">Your Message</label>
                        <textarea 
                            className="border-[1px] border-[#243b55] min-h-[100px] max-h-[100px] focus:outline-none"
                            id="message"
                            name="massage"
                            type="text"
                            value={formInput.message}
                            onChange={onChangeHandler}
                            required
                        />

                        <input type="hidden" name="_next" value="https://portfolio-beryl-phi-82.vercel.app/contact"/>
                        <input type="hidden" name="_captcha" value="false"/>

                        <button type="submit" className="text-[#243b55] border-[1px] border-[#243b55] rounded-lg w-1/2 mt-3 hover:bg-[#243b55] hover:text-white">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ContactPage;
