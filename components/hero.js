import Link from "next/link";

function Hero() {
    return (
        <div className="h-[100vh] bg-gradient-to-b from-[#141e30] to-[#243b55] text-white pt-[15vh] border-b-2 border-b-black">
            <h1 className="w-2/4 text-3xl font-extrabold m-auto mb-[5vh] flex justify-center">Welcome to my personal portfolio!</h1>
            <div className="h-auto w-2/4 m-auto flex justify-center">
                <p className="w-full sm:w-3/4 t ext-[18px]">
                    My name is Aine Doyle. Im a self taught web developer living in Ireland and currently building web applications using React and Next js. <br/>
                    I am disciplined, hard working and eager to work in an environment where I can learn from experienced developers.<br/> 
                    I enjoy studying new libraries and implementing them into my projects. For example, I built this website using Nextjs and Tailwind CSS. <br/>
                    Ive included four of my favourite projects along with my CV, Contact Information and links to my Github and LinkedIn accounts. <br /> <br/>
                    Have a look around and feel free to send me an email or contact me through LinkedIn if you want me on your team!
                </p>
            </div>

            <div className="absolute bottom-8 w-full flex flex-col items-center">
                <span className="p-2">View Projects</span>
                <Link href="#project-section">
                    <a className="border-[1px] border-white rounded-full px-2 py-[1px]">⬇</a>
                </Link>
            </div>
        </div>
    );
}

export default Hero;


// text-[#87848B] max-w-[900px]