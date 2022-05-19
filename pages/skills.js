import Link from "next/link";

function SkillsPage() {
    return (
        <>
            <div className="h-[100vh] flex flex-col justify-center items-center">

                <div className="rounded-[10px] shadow-[0_4px_8px_0px_rgba(0,0,0,0.2)] flex flex-col justify-center text-[#243b55] cursor-default mt-[15vh]
                    m-auto h-auto sm:h-[65vh] w-[95vw] md:w-[90vw] xl:w-[80vw] 2xl:w-[60vw]"
                >

                    <h2 className="text-4xl text-[#141e30] flex justify-center mb-16">Most Experience With</h2>

                    <div className="grid grid-cols-2 gap-2 mb-16">
                        <div className="flex flex-col items-center justify-center">
                            <span className="p-2 text-lg">&#8226; HTML5 &#8226;</span>
                            <span className="p-2 text-lg">&#8226; CSS3 &#8226;</span>
                        </div>

                        <div className="flex flex-col items-center justify-center">
                            <span className="p-2 text-lg">&#8226; SASS &#8226;</span>
                            <span className="p-2 text-lg">&#8226; Styled-Components &#8226;</span>
                            <span className="p-2 text-lg">&#8226; Tailwind CSS &#8226;</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                        <div className="flex flex-col items-center justify-center">
                            <span className="p-2 text-lg">&#8226; JavaScript &#8226;</span>
                            <span className="p-2 text-lg">&#8226; TypeScript &#8226;</span>
                        </div>

                        <div className="flex flex-col items-center justify-center">
                            <span className="p-2 text-lg">&#8226; React JS &#8226;</span>
                            <span className="p-2 text-lg">&#8226; Next JS &#8226;</span>
                        </div>

                        <div className="flex flex-col items-center justify-center">
                            <span className="p-2 text-lg">&#8226; Firebase &#8226;</span>
                            <span className="p-2 text-lg">&#8226; Github &#8226;</span>
                        </div>
                    </div>

                </div>

                <div className="pb-5">
                    <div className="group flex flex-col items-center">
                        <span className="p-2 flex cursor-default">More</span>
                        <Link href="#some-experience">
                            <a className="group-hover:animate-bounce shadow-inner shadow-black rounded-full px-2 py-[1px]">⬇</a>
                        </Link>
                    </div>
                </div>

            </div>

            <div id="some-experience" className="h-[100vh] flex flex-col justify-center items-center">

                <div className="rounded-[10px] shadow-[0_4px_8px_0px_rgba(0,0,0,0.2)] flex flex-col justify-center text-[#243b55] cursor-default mt-[15vh]
                    m-auto h-auto sm:h-[65vh] w-[95vw] md:w-[90vw] xl:w-[80vw] 2xl:w-[60vw]"
                >

                    <h2 className="text-4xl text-[#141e30] flex justify-center mb-32">Some Experience With</h2>

                    <div className="grid grid-cols-2 gap-2 mb-16">
                        <div className="flex justify-center">
                            <span className="p-2 text-2xl">&#8226; MongoDB &#8226;</span>
                        </div>

                        <div className="flex justify-center">
                            <span className="p-2 text-2xl">&#8226; Node JS &#8226;</span>
                        </div>
                    </div>

                </div>

                <div className="pb-5">
                    <div className="group flex flex-col items-center">
                        <span className="p-2 flex cursor-default">More</span>
                        <Link href="#working-on">
                            <a className="group-hover:animate-bounce shadow-inner shadow-black rounded-full px-2 py-[1px]">⬇</a>
                        </Link>
                    </div>
                </div>
            </div>

            <div id="working-on" className="h-[100vh] flex flex-col justify-center items-center">

                <div className="rounded-[10px] shadow-[0_4px_8px_0px_rgba(0,0,0,0.2)] flex flex-col justify-center text-[#243b55] cursor-default mt-[15vh]
                    m-auto h-auto sm:h-[65vh] w-[95vw] md:w-[90vw] xl:w-[80vw] 2xl:w-[60vw]"
                >

                    <h2 className="text-4xl text-[#141e30] flex justify-center mb-32">Currently learning</h2>

                    <div className="grid grid-cols-1 gap-2 mb-16">
                        <div className="flex justify-center">
                            <span className="p-2 text-2xl">&#8226; Testing &#8226;</span>
                        </div>
                    </div>

                </div>

                <div className="pb-2">
                    <Link href="/skills">
                        <a className="p-5 underline">Back to Top</a>
                    </Link>
                </div>

            </div>
        </>
    );
}

export default SkillsPage;
