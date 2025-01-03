'use client';
import Image from 'next/image';
import { Button } from "./components/Button";
import ProjectCard from './components/ProjectCard'; 

export default function SitePage() {
  const handleScroll = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <section className="relative h-screen">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="w-full md:w-1/2 space-y-6 z-10">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              La <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-orange-400">Transparence</span> 
              <br />dans chaque donation
            </h1>
            <p className="text-3xl md:text-5xl font-bold leading-tight">
              propulsée par la technologie blockchain
            </p>
            {/* Bouton avec onClick pour défiler jusqu'à la section "Ils ont besoin de vous" */}
            <Button
              onClick={handleScroll}
              className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors border-2 border-transparent hover:border-purple-500"
            >
              Faire un don
            </Button>
            <div className="flex flex-wrap gap-2 mt-4">
              {['Donations blockchain', 'Dons sécurisés', 'Impact social blockchain', 'Transparence des dons'].map((tag) => (
                <span key={tag} className="bg-white bg-opacity-50 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-[332px] w-[1425px] h-[546px] z-0">
          <Image
            src="/images/Frame31.png"
            alt="Background frame"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="absolute right-[10%] lg:right-[10%] top-[20%] w-[500px] h-[471px] z-20">
          <Image
            src="/images/Group1.png"
            alt="Smiling child"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </section>

      {/* Ajout de l'id "projects" pour cibler cette section pour le scroll */}
      <section id="projects" className="py-[1%] bg-white-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-[2%] text-center">Ils ont besoin de vous</h2>
          <h2 className="text-3xl font-bold mb-[5%] text-center">Projets en cours</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 my-30">

              <ProjectCard
                nom="Amnesty International"
                latitude="47.9975"
                longitude="0.1936"
                poolAddress="0x5353TEFHUO48653OHFHPOHDNL1HF1"
                goal={10}
                raised={5}
                recentDonors={['0x5353TEFHUO48653OHFHPOHDNL1HF1']}
                donationAmount={0.1}
                donationValue="$1 025,5"
                imageUrl="/images/guerre_palestine.webp"
                description="Dons pour civils palestiniens"
                tag="Dons pour les civils"
                status="En cours"
              />

              <ProjectCard
                nom="UNICEF"
                latitude="48.8566"
                longitude="2.3522"
                poolAddress="0x98ERD45678EFD341R9874TER2349RHJKL"
                goal={20}
                raised={12}
                recentDonors={['0x4564EFHUO4567EFDGFDRYDR7890LFJX']}
                donationAmount={0.15}
                donationValue="$2 461,2"
                imageUrl="/images/exemple.png"
                description="Construction d'une école pour des enfants défavorisés"
                tag="Construire une école"
                status="En cours"
              />

              <ProjectCard
                nom="Amnesty International"
                latitude="48.8704"
                longitude="2.3318"
                poolAddress="0x12FDERO8765EDDERF1234ERQWE456EFGH"
                goal={15}
                raised={7.5}
                recentDonors={['0x98765RTERF12345678901']}
                donationAmount={0.25}
                donationValue="$1 538,25"
                imageUrl="/images/guerre_ukraine.jpeg"
                description="Dons pour les civils ukrainiens"
                tag="Dons pour les civils"
                status="En cours"
              />

              <ProjectCard
                nom ="Les restraurants du coeur"
                latitude="48.8683"
                longitude="2.3050"
                poolAddress="0xA12FDERO45678EDDRRG456ETREWE234F"
                goal={30}
                raised={18}
                recentDonors={['0x45HYUO768REWQEFRTYGFD']}
                donationAmount={0.5}
                donationValue="$3 691,8"
                imageUrl="/images/restau_coeur.webp"
                description="Aide pour les repas pour les plus demunis"
                tag="Aide alimentaire"
                status="En cours"
              />

              {/* Ajout des deux images superposées, avec largeur de 70% */}
              <div className="relative w-[70%] h-[400px] mx-auto">
                <div className="absolute mt-11">
                  <Image
                    src="/images/Frame49.png" // Chemin vers ton image transparente
                    alt="Overlay image"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
