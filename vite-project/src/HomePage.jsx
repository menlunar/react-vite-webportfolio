import Navbar from './Navbar';
import Footer from './Footer';
import { useMemo } from 'react';

const HomePage = () => {

    const daysInIndustry = useMemo(() => {
        const startDate = new Date('2022-07-28');
        const today = new Date();

        // Calculate difference in milliseconds
        const diffMs = today - startDate;

        // Convert to full days
        return Math.floor(diffMs / (1000 * 60 * 60 * 24));
    }, []);

    return (
        <>
            <Navbar />
            <div className="content">
                <section id="home">
                    <h1>Ohayow go zai mas, Watashi wa Menric san! Oss!</h1>
                    <p>Welcome, friend. How are you today? Hope you've been having a nice day!
                        <br />... I see you've run into my website.
                        Since you're already here, just go ahead and check it out! <br />I built this page to introduce myself. So read below to get to know me. <br />
                        ... Or don't. Do whatever you want yoo. No worries. <br />Anyways, nice to meet you bruhh!</p>
                </section>

                <section id="about">
                    <h2>About Me</h2>
                    <p>This is the about section.</p>
                    <p>This section is about me.</p>
                    <p>So, you've probably got my name based on the title. So yeah, I'm a software engineer, mostly on .NET API connector development and Web App development using Razor and kendo UI. Did SQL development and optimization as well. Also, VBScripting legacy components. Company CI/CD involves bitbucket pipelines, jenkins, octopus and terraform to deploy to AWS, so I have some experience there. EC2, ECS, Redshift, and etc. Currently practicing React thru building this site.  Been in the industry
                        for <strong>{daysInIndustry}</strong> days now. Noice! what else? ...Sometimes my back hurts, and currently my knee hurts. </p>
                </section>

                <section id="projects">
                    <h2>Projects</h2>
                    <p>In my current company, I've been assigned to tasks/projects below.</p>
                    <div>
                        <li>SQL development and optimizations</li>
                        <li>Support/Maintenance tickets</li>
                        <li>VB Scripting</li>
                        <li>ERP API Connector development</li>
                        <li>Web App Development</li>
                    </div>
                </section>

                <section id="contact">
                    <h2>Contact</h2>
                    <a>https://www.linkedin.com/in/menric-lunar/</a>
                </section>

            </div>
            <Footer />
        </>
    );
}


export default HomePage;
