import Project from "./project";

function ProjectContainer({projects}) {
    return (
        <>
        <h2 className="max-w-[900px] mt-[20px] text-2xl text-[#87848B] font-extrabold m-auto px-[10px]">My Projects</h2>
        <div 
        className="grid grid-cols-[1fr] sm:grid-cols-2 gap-[30px] mt-[30px] max-w-[900px] m-auto overflow-auto py-0 px-[10px]"
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


//max-w-[768px]