

export default function Projects(){
    const projects=[
        {
          title: "Project One",
          description: "Web app build using react and node.js",
          link: "#"
        },
        {
          title: "Project Two",
          description: "Web app build using react and node.js",
          link: "#"
        },
        {
          title: "Project Three",
          description: "Web app build using react and node.js",
          link: "#"
        },
      ]
    return(
    <div>
        <section id='projects' className='projects-section'>
        <h2>Projects</h2>
        <div className='projects-list'>
          {projects.map((project,index) => (
            <div key={index} className='project-item'>
              <h3>{project.title}</h3>
              <h3>{project.description}</h3>
              <a href={project.link} target='_blank' rel="noopener noreferrer">View Project</a>
            </div>
          ))}
        </div>
      </section>

      </div>
    )
}