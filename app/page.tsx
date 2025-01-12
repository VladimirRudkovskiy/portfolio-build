
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
				<title>Portfolio</title>
			</Head>

			{/* Header */}
			<Header />

			{/* Hero */}
			<section id="hero" className="snap-center">
				<Hero />
			</section>

			 {/* About  */}

			 {/* Experience */}

			{/* Skill */}

			{/* Projects */}

			{/* Contact Me */}
    </div>
  );
}
