import ProjectCard from "./project-card";

import placeholder from "/public/projects/placeholder.jpg";
import unscrambler from "public/projects/unscrambler-sc.png";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
// TODO: write unscrambler description

export default function Projects() {
    return (
        <div className="projects-page-container">
            <h1 className="proj-title">Completed Projects</h1>
            <div className="project-card-section">
                <div className="p-c-row">
                    <ProjectCard src={unscrambler} alt="screenshot of word unscrambler app" title="Unscrambler" desc={lorem} link="https://will4422.github.io/word_unscrambler/"/>
                    <ProjectCard src={placeholder} alt="placeholder" title="Coming Soon!" desc={lorem} link="#"/>
                </div>
                <div className="p-c-row">
                    <ProjectCard src={placeholder} alt="placeholder" title="Coming Soon!" desc={lorem} link="#"/>
                    <ProjectCard src={placeholder} alt="placeholder" title="Coming Soon!" desc={lorem} link="#"/>
                </div>
            </div>
        </div>
    )
}