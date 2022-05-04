import Link from "next/link";

function ProjectHeader({ frontmatter }) {
    const { github_link, viewLive_link } = frontmatter;

    return (
        <header className="bg-[#87848B] w-full flex justify-between p-3 mb-[50px]">
            <div className="text-md text-white">
                <Link href="/">
                    Home
                </Link>
            </div>

            <div className="text-md text-white">
                <Link href={github_link}>
                    <a className="mr-3" target="_blank">
                        Github
                    </a>
                </Link>

                <Link href={viewLive_link}>
                    <a target="_blank">
                        View Live!
                    </a>
                </Link>
            </div>
        </header>
    );
}

export default ProjectHeader;
