import { about } from '../data.js';

const About = () => {
    const { overview, firstName, lastName, location, preferredName, title, otherTitles } =
        about;
    return (
        <div>
            <h1>About</h1>
            <p>{overview}</p>
        </div>
    );
};

export default About;
