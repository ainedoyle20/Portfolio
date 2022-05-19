import { useRouter } from "next/router";

export default function ThankYou() {
    const router = useRouter();
    setTimeout(() => {
        router.replace('/');
    }, 5000);

    return (
        <>
            <h1 className="flex justify-center text-[40px] text-[#243b55] font-extrabold mt-[80px] mb-[30px]">Thank You</h1>

            <div className="rounded-[10px] shadow-[0_4px_8px_0px_rgba(0,0,0,0.2)] flex flex-col justify-center items-center text-[#243b55] text-2xl font-bold
                    m-auto h-auto sm:h-[65vh] w-[95vw] md:w-[85vw] xl:w-[75vw] 2xl:w-[60vw]"
            >
                <span className="p-10">
                    Your message has been sent successfully!
                </span>

                <span className="p-10">
                    I will get back to you as soon as I can.
                </span>

                <div className="text-base flex space-x-2">
                    <span>Redirecting you to home page...</span>
                    <div className="h-5 w-5 flex justify-center items-center" >
                        <div className="block w-5 h-5 border-[3px] border-gray-300 border-t-[#243b55] rounded-full animate-spin" />
                    </div>
                </div>

            </div>
        
        </>
    );
}