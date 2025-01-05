import ShowProjects from './ShowProjects';

function PortFolio() {
  return (
    <section
      id="projects"
      className="container px-4 mx-auto my-4  md:my-16 md:px-[3rem] lg:px-[12rem]"
    >
      <h1 className="my-10 text-3xl text-center font-semibold md:my-20">
        Projects
      </h1>
      {/* Render the client-side project listing logic */}
      <ShowProjects />
    </section>
  );
}

export default PortFolio;
