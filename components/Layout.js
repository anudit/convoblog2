import Header from "./Header";
import Meta from './Meta'

export default function Layout(props) {

  const defaultDescription = "CUPOC - Driven by Curiosity, POssibility and Creativity to re-invent the internet, one block at a time.";
  const defaultTitle = "Blog | CUPOC";
  const defaultImage = "poster.png";

  return (
    <section
    className={`layout ${
      props.pathname == "info" &&
      "info_page"}`
    }
    style={{
      backgroundColor: `${props.bgColor && props.bgColor}`,
      color: `${props.pathname == "info" && 'white'}`
    }}
  >
    <Meta
      siteTitle={props?.siteTitle || defaultTitle}
      siteDescription={props?.siteDescription || defaultDescription}
      siteImage={"https://blog.cupoc.space"+(props?.siteImage || defaultImage)}
    />
    <Header siteTitle={props?.siteTitle || defaultTitle} />
    <div className="content">{props.children}</div>
    <style jsx>
      {`
        .layout {
          overflow-x: hidden;
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        .layout .info_page {
          color: #ebebeb;
        }
        .content {
          flex-grow: 1;
        }
        @media (min-width: 768px) {
          .layout {
            display: block;
          }
          .content {
            flex-grow: none;
            width: 75vw;
            margin-left: 25vw;
          }
        }
      `}
    </style>
  </section>
  );
}
