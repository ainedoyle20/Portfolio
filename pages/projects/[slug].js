import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {marked} from 'marked';

import ProjectHeader from '../../components/project-header';

function ProjectPage({ frontmatter, content }) {;
    return (
        <>
        <ProjectHeader frontmatter={frontmatter} />
        <Link href="/#project-section">
            <a className="text-sm p-3 underline">Return to Projects</a>
        </Link>

        <div className="py-[15px] px-[30px] rounded-[10px] shadow-[0_4px_8px_0px_rgba(0,0,0,0.2)] w-[90vw] sm:w-[85vw] md:w-[75vw] lg:w-[70vw] 2xl:w-[60vw] m-auto mt-3 overflow-auto">
            <div className="prose pt-[10px] max-w-[85vw] sm:max-w-[70vw] lg:max-w-[60vw 2xl:max-w-[50vw]]">
                <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
            </div>
        </div>
        </>
    );
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('projects'));

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', ''),
        }
    }));

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params: { slug }}) {
    const markdownWithMeta = fs.readFileSync(path.join('projects', slug + '.md'), 'utf-8');

    const { data:frontmatter, content } = matter(markdownWithMeta);

    return {
        props: {
            frontmatter,
            content,
        }
    }
}

export default ProjectPage;
