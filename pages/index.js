import matter from 'gray-matter'

import Layout from "../components/Layout";
import BlogList from "../components/BlogList";

import { promises as fs } from 'fs'
import path from 'path'

const Index = (props) => {
  return (
    <Layout pathname="/" siteTitle={props.title} siteDescription={props.description}>
      <section>
        <BlogList allBlogs={props.allBlogs}/>
      </section>
    </Layout>
  );
};

export default Index;

export async function getStaticProps() {

  const postsDirectory = path.join(process.cwd(), 'posts')
  const filenames = await fs.readdir(postsDirectory);

  let posts = [];

  for (let index = 0; index < filenames.length; index++) {
    const filename = filenames[index];
    const filePath = path.join(postsDirectory, filename)
    const fileContents = await fs.readFile(filePath, 'utf8')

    let document = matter(fileContents);
    if(document?.data?.date) {
      document.data.date = document.data.date.toString()
    };
    delete document.orig;

    const fn = filename.replace('.md', '');

    posts.push({
      document,
      slug: fn,
    });

  }

  let siteConfig = await fs.readFile(`${process.cwd()}/data/config.json`);
  siteConfig = JSON.parse(siteConfig);

  return {
    props: {
      allBlogs: posts,
      ...siteConfig,
    }
  }
}
