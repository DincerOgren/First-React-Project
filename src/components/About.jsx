

import PropTypes from "prop-types"


function About({name,profession})
{

    return(
<>
        <section id='about' className='about-section' >
        <h2>About Me</h2>
        <p>Hello! I am {name}, a passionate {profession},love to learn about web development.</p>
      </section>
</>
    )
};

About.propTypes = {
    name: PropTypes.string,
    profession: PropTypes.string.isRequired,
};



// const props = { name: 32 }; // Incorrect type
// PropTypes.checkPropTypes(About.propTypes, props, "prop", "About");

export default About;