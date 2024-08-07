import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Process from "@/components/Process";
import Produits from "@/components/Produits";
import TestimonialCard from "@/components/TestimonialCard";
import { ThreeDCardDemo } from "@/components/ThreeDCardDemo";
import { clients } from "@/constants/clients";
import { testimonials } from "@/constants/testimonials";
import { ArrowRightCircle, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const images = ["/alum2.png", "/bg2.png", "/alum3.png"];
  return (
    <div className="overflow-x-hidden pt-24 lg:pt-28 antialiased">
      <div className="relative container">
        <Image
          src="/bg.png"
          width={1900}
          height={1080}
          alt="test"
          className="absolute -z-50 w-full min-h-screen md:max-h-[670px] md:h-full lg:min-h-screen -top-20 left-0 opacity-20"
        />
        {/* Home section */}
        <section id="home" className="relative">
          <figure className="bubble w-96 lg:w-[520px] h-96 bg-indigo-600 top-16 -left-40" />
          <figure className="bubble w-96 lg:w-[430px] h-96 bg-sky-600 bottom-16 md:bottom-44  -right-20 md:right-20" />
          <div className="flex flex-col text-center space-y-12">
            <div className="flex flex-col items-center space-y-6">
              <p className="capitalize border border-slate-700 py-1 px-3 text-xs rounded-3xl cursor-pointer hover:border-sky-500 hover:bg-slate-800 shadow-md transition-all">
                Aluminium Professionnel
                <ArrowRightCircle className="inline ml-1 w-4 h-4" />
              </p>
              <Heading title="Élevez Vos Projets avec Nos Solutions en Aluminium" />
              <p className="max-w-[46rem] leading-normal sm:text-lg sm:leading-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                illo error ratione sequi doloremque hic ad rerum recusandae
                numquam illum saepe natus amet, placeat veritatis pariatur
                voluptatibus suscipit velit expedita.
              </p>
              <div className="flex items-center gap-4">
                <Link href="/devis" passHref>
                  <Button>
                    Demande de devis
                    <MoveRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="#pricing">
                  <Button variant="outline">view pricing</Button>
                </Link>
              </div>
            </div>
            {/* <Image
              src="/Hero-image.svg"
              width={670}
              height={370}
              alt="banner"
              className="mx-auto shadow-xl"
            /> */}
          </div>
        </section>
        {/* Home section */}

        {/* Clients section */}
        <section
          id="clients"
          className="max-w-[62rem] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-12 gap-y-4"
        >
          {clients.map((client, index) => (
            <Image
              key={index}
              src={client.imageUrl}
              width={120}
              height={80}
              alt={client.alt}
              className="w-40 md:w-full mx-auto"
            />
          ))}
        </section>
        {/* slide image section */}
        <section className="flex flex-col items-center gap-y-12 md:gap-y-20 lg:gap-y-28">
          <Heading title="Nos Produits" isCentered />
          <div className="w-full">
            <Produits images={images} />
          </div>
        </section>
        {/* Clients section */}
        <section className="gap-y-12 md:gap-y-20 lg:gap-y-28">
          <Heading title="Vos Services" isCentered />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <ThreeDCardDemo />
            <ThreeDCardDemo />
            <ThreeDCardDemo />
            {/* Vous pouvez ajouter plus d'instances de ThreeDCardDemo si nécessaire */}
          </div>
        </section>

        {/* Features section */}
        <section
          id="features"
          className="flex flex-col gap-y-12 md:gap-y-20 lg:gap-y-28"
        >
          {/* Part 1 */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <Image
              src="/bg2.png"
              width={1920}
              height={1080}
              alt="second banner"
              className="absolute -z-50 w-[1400px] h-[670px] top-0 left-0 opacity-5"
            />
            <div className="flex flex-col gap-4 items-center text-center lg:items-start lg:text-start">
              <Heading title="Apsum dolor sit amet consectetur." />
              <p className="lg:max-w-[34rem] leading-normal sm:text-lg sm:leading-8">
                Apsum dolor sit amet consectetur. Aliquam elementum elementum in
                ultrices. Dui maecenas ut eros turpis ultrices metus morbi
                aliquet vel.
              </p>
              <Button>Contactez-nous</Button>
            </div>
            <div>
              <video
                controls
                width="800"
                autoPlay
                loop
                muted
                poster="/path/to/poster.jpg"
              >
                <source src="/védio/Editor.mp4" type="video/mp4" />
                <source src="/path/to/video.webm" type="video/webm" />
                <source src="/path/to/video.ogv" type="video/ogg" />
                Votre navigateur ne supporte pas la balise vidéo.
              </video>
            </div>
          </div>
          {/* Part 1 */}
        </section>
        {/* Features section */}

        {/* Testimonials section */}
        <section id="testimonials" className="flex flex-col gap-8">
          <Heading title="Témoignages" isCentered />
          <h4 className="text-center">
            « Nous considérons nos clients comme des invités, à une fête où nous
            sommes les hôtes »
          </h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </section>
        {/* Testimonials section */}
        {/* Process section */}
        <section id="process" className="flex flex-col gap-8">
          <Heading title="COMMENT ÇA MARCHE" isCentered />
          <h4 className="text-center">
            « Ensemble pour trouver la meilleur solution avec le meilleur prix »
          </h4>
          <Process />
        </section>
        {/** End Process section */}

        {/* Contact section */}
        <section id="contact">
          <div className="bg-slate-800 rounded-lg px-8 lg:px-24 py-8 lg:py-12 flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col gap-4 text-center lg:text-start">
              <Heading title="Essayons notre service maintenant!" />
              <p className="max-w-[35rem] leading-normal text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae possimus dicta dolor recusandae. Eaque vel labore
                iusto asperiores. Qui soluta dolore sint accusamus pariatur
                incidunt, illum officia ab voluptatem cum?
              </p>
            </div>
            <Button>
              Commencer
              <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </section>
        <section id="Map">
          <div></div>
        </section>

        {/* Contact section */}
      </div>
    </div>
  );
}
