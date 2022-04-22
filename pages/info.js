import Layout from "../components/Layout";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { promises as fs } from 'fs'

export default function Info(props) {
  const frontmatter = props.data
  const markdownBody = props.content
  return (
    <Layout pathname='info' bgColor={frontmatter.background_color} siteTitle={props.title}>
    <section className="info_blurb">
      <ReactMarkdown children={markdownBody} />
    </section>
    <style jsx>{`
      .info_blurb {
        max-width: 800px;
        padding: 1.5rem 1.25rem;
      }

      @media (min-width: 768px) {
        .info_blurb {
          padding: 2rem;
        }
      }

      @media (min-width: 1440px) {
        .info_blurb {
          padding: 3rem;
        }
      }
    `}</style>
  </Layout>
  );
}

export async function getStaticProps(context) {

  let config = await fs.readFile(`${process.cwd()}/data/config.json`);
  config = JSON.parse(config);

  let content = await fs.readFile(`${process.cwd()}/data/info.md`);
  const data = matter(content)

  return {
    props: {
      title: config.title,
      ...data
    }
  }
}
