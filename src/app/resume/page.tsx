import Image from "next/image"
import resume from 'public/resume.png';
import downloadImg from "public/download.svg"

export default function Resume() {
    return (
        <div>
            <div className="resume-container">
                <a className="download-button-container" href="https://drive.google.com/file/d/1oCiw0J_IdLpzFYVKbHoXbFHF3M06l-fd/view?usp=share_link" download="oxtoby-resume">
                    <Image src={downloadImg} alt="download button"></Image>
                </a>
                <Image src={resume} alt="png image of Will's resume" id="resume-img"></Image>
            </div>
            <div className="second-download-button-container">
                <a className="second-download-button" href="https://drive.google.com/file/d/1oCiw0J_IdLpzFYVKbHoXbFHF3M06l-fd/view?usp=share_link" download="oxtoby-resume">Download!</a>
            </div>
        </div>
    )
}