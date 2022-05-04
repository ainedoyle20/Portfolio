import Link from "next/link";

function Project({ project }) {
    return (
        <div className="p-[15px] rounded-[10px] shadow-[0_4px_8px_0px_rgba(0,0,0,0.2)] cursor-default">
            <img src={project.frontmatter.cover_image} alt="" />

            <h3 className="my-[10px] mx-0">{project.frontmatter.title}</h3>

            <p className="my-[15px] mx-0">{project.frontmatter.excerpt}</p>

            <Link href={`/projects/${project.slug}`}>
                <a className="inline-block bg-[#343036] text-white border-0 py-[8px] px-[16px] rounded-[5px] cursor-pointer decoration-none text-[15px] focus:outline-none hover:scale-95">Read More</a>
            </Link>
        </div>
    );
}

export default Project;
