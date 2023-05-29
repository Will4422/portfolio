import ProjectCard from "./project-card";

export default function Projects() {
    return (
        <div>
            <h1>Completed Projects</h1>
            <div className="project-card-section">
                <div className="p-c-row">
                    <ProjectCard />
                    <ProjectCard />
                </div>
                <div className="p-c-row">
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
        </div>
    )
}