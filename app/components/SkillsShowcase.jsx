'use client';

import { useState, useEffect, useRef } from 'react';
import ProgressCircular from './ProgressCircular';

function SkillsShowcase() {
  const [showAll, setShowAll] = useState(false);
  const [animateSkills, setAnimateSkills] = useState(false);
  const skillsRef = useRef(null);

  const skills = [
    { name: 'HTML', value: 90 },
    { name: 'CSS', value: 85 },
    { name: 'JavaScript', value: 80 },
    { name: 'Tailwind CSS', value: 88 },
    { name: 'Figma', value: 70 },
    { name: 'React', value: 75 },
    { name: 'Next.js', value: 65 },
    { name: 'Angular', value: 50 },
  ];

  const toggleSkillsDisplay = () => {
    setShowAll(!showAll);
  };

  const displayedSkills = showAll ? skills : skills.slice(0, 4);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateSkills(true);
        }
      },
      { threshold: 0.5 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section
      id="skills"
      ref={skillsRef}
      className="container px-4 mx-auto my-4 md:my-16 md:px-[3rem] lg:px-[12rem]"
    >
      <h1 className="my-10 text-3xl text-center font-semibold md:my-20">
        My Skills
      </h1>

      <div className="grid grid-cols-2 gap-4 mb-6 justify-items-center lg:grid-cols-4 lg:gap-8">
        {displayedSkills.map((skill, index) => (
          <ProgressCircular
            key={index}
            name={skill.name}
            value={animateSkills ? skill.value : 0}
          />
        ))}
      </div>

      <div className="flex justify-center mt-4 lg:hidden">
        <button className="btn-grad" onClick={toggleSkillsDisplay}>
          {showAll ? 'Show Less' : 'Show All'}
        </button>
      </div>
    </section>
  );
}

export default SkillsShowcase;
