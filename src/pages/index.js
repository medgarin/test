import Head from "next/head";
import { Fragment, useEffect } from "react";
import {
  Contact,
  Landing,
  Navbar,
  Projects,
  Section,
  SkillsContainer,
} from "../components";
import { FooterComponent } from "../components/Footer";

export default function Home() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }, []);
  return (
    <Fragment>
      <Head>
        <meta name="description" content="Portafolio personal" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Für, diese, Keywords, möchte, ich, ranken"
        />
        <meta property="og:type" content="website" />
        <meta name="author" content="Jose Luis Herrera Gonzalez" />

        <meta name="copyright" content="Jose Luis Herrera Gonzalez" />
        <meta property="og:title" content="Jose Luis Dev" />

        <meta
          property="og:description"
          content="Comparte tus ideas a un desarrollador"
        />

        <meta property="og:image" content="enlace al archive de la imagen" />

        <meta property="og:url" content="permalink" />
      </Head>
      <Navbar />
      <Section id="Home" props={{ display: "flex" }} size="big">
        <Landing />
      </Section>
      <Section id="Proyects" primary={true}>
        <Projects />
      </Section>
      <Section id="Skills">
        <SkillsContainer />
      </Section>
      <Section id="Contact" primary={true} size="small">
        <Contact />
      </Section>
    </Fragment>
  );
}
export async function getStaticProps(context) {
  return {
    props: {},
  };
}
