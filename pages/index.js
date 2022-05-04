import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import Head from 'next/head';

import Hero from '../components/hero';
import ProjectContainer from '../components/project-container';

export default function Home({ projects }) {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

      <ProjectContainer projects={projects} />
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('projects'));

  // Get slug and frontmatter
  const projects = files.map(filename => {
    const slug = filename.replace('.md', '');

    const markdownWithMeta = fs.readFileSync(path.join('projects', filename), 'utf-8');

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    }
  });

  return {
    props: {
      projects,
    }
  }
}
