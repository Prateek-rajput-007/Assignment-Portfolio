import Image from 'next/image';
import Link from 'next/link';

/* eslint-disable @next/next/no-img-element */
function PortfolioCard({ project }) {
  return (
    <div className="p-4 border border-gray-600 bg-custom-gradient transition-all duration-300 hover:border-[#7C58B9] hover:cursor-pointer rounded-2xl">
      {/* Project Image */}
      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
        <Image
          src={project.image}
          alt={project.title}
          fill={true}
          className="object-cover object-center"
        />
      </div>

      {/* Project Title */}
      <h2 className="mt-4 text-[#c7d1ea] text-xl font-bold text-center">
        {project.title}
      </h2>

      {/* Project Description */}
      <p className="mt-2 text-sm text-center text-gray-400">
        {project.description}
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-4">
        <Link href={project.livePreview} className="btn-grad">
          live Preview
        </Link>
        <Link href={project.githubLink} className="btn-grad">
          Check on GitHub
        </Link>
      </div>
    </div>
  );
}
export default PortfolioCard;
