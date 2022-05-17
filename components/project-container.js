import Project from "./project";

function ProjectContainer({projects}) {
    return (
        <>
        <h2 id="project-section" className="max-w-[900px] mt-[20px] text-2xl text-[#141e30] font-extrabold m-auto px-[10px] cursor-default">My Projects</h2>
        <div 
        className="grid grid-cols-[1fr] sm:grid-cols-2 gap-[30px] mt-[30px] max-w-[900px] m-auto overflow-auto px-[10px] pb-10"
        >
            {
                projects.map((project, index) => {
                    return <Project key={index} project={project} />
                })
            }
        </div>
        </>
    );
}

export default ProjectContainer;

// text-[#87848B]
//max-w-[768px]