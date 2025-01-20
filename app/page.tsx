

import About from "@/components/About";
import BankingProject from "@/components/BankingProject";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import { Experience, PageInfo, Project, Skill, Social } from "@/typings";
import { fetchExperiences } from "@/utils/fetchExperiences";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchSocials } from "@/utils/fetchSocials";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";

type Props = {
	pageInfo: PageInfo;
	experiences: Experience[];
	skills: Skill[];
	projects: Project[];
	socials: Social[];
}

export default function Home({ pageInfo, experiences, projects, skills, socials }: Props) {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y  overflow-scroll overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 snap-mandatory"> {/* snap-mandatory */}
      <Head>
				<title>Portfolio</title>
			</Head>

			<Header socials={socials}/>

			<section id="hero" className="snap-start">
				<Hero />
			</section>


			<section id="about" className="snap-center">
				<About />
			</section>

			<section id="experience" className="snap-center">
				<WorkExperience />
			</section>

			<section id="skills" className="snap-start">
				<Skills />
			</section>

			<section id="projects" className="snap-start">
				<Projects />
			</section>


			<section id="contact" className="snap-start">
				<ContactMe />
			</section>

			<Link href='#hero'>
				<footer className="sticky bottom-4 w-full cursor-pointer">
					<div className="flex items-center justify-center">
						<img 
						className="w-8 h-8 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
						src="https://static-cdn.jtvnw.net/jtv_user_pictures/1ccd6108-4c1f-40af-89f6-60762f3c4567-profile_image-300x300.png" alt="" />
					</div>
				</footer>
			</Link>
    </div>
  );
}


Home.getInitialProps = async () => {
	const pageInfo: PageInfo = (await fetchPageInfo())[0];
	const experiences: Experience[] = await fetchExperiences();
	const skills: Skill[] = await fetchSkills();
	const projects: Project[] = await fetchProjects();
	const socials: Social[] = await fetchSocials();

	return {
		pageInfo,
		experiences,
		skills,
		projects,
		socials,
	};
};
