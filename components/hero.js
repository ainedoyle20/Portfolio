import Link from "next/link";

function Hero() {
    return (
        <div className="h-[100vh] bg-gradient-to-b from-[#141e30] to-[#243b55] text-white pt-[15vh] border-b-2 border-b-black">
            <h2 className="text-2xl font-bold mb-[5vh] flex justify-center">Hi, I&#39;m Aine Doyle and I am a </h2>

            <h1 className="text-[80px] md2:text-[100px] flex justify-center">Web Developer</h1>

            <div className="h-auto h-[20vh] w-2/4 m-auto mt-20 p-2 flex flex-col items-center shadow-inner shadow-white rounded-lg opacity-70">
                <span className="w-full p-2">
                    &#10095;_ &#160; Some writing 
                </span>
                <span className=""></span>
            </div>

            <div className="absolute bottom-8 w-full flex flex-col items-center">
                <span className="p-2">View Projects</span>
                <Link href="#project-section">
                    <a className="shadow-inner shadow-white rounded-full px-2 py-[1px]">⬇</a>
                </Link>
            </div>
        </div>
    );
}

export default Hero;
