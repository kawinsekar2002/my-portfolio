
import React from 'react';
import './Experience.scss';

import {
  FaBriefcase,
  FaCode,
  FaCheckCircle,
  FaNodeJs,
  FaReact
} from 'react-icons/fa';

import {
  SiExpress,
  SiMongodb
} from 'react-icons/si';

const Experience = () => {

  const experiences = [
    {
      id: 1,
      role: 'Backend Developer',
      company: 'Zen Infotech',
      period: 'April 2024 – November 2024',
      duration: '7 Months',
      type: 'Professional Experience',
      icon: <FaNodeJs />,
      accent: 'cyan',

      description:
        'Worked on backend application development, building RESTful APIs, implementing business logic, and managing database operations for real-world applications.',

      responsibilities: [
        'Developed and maintained RESTful APIs using Node.js and Express.js.',
        'Implemented backend business logic and database operations.',
        'Worked with MongoDB for data storage and management.',
        'Integrated frontend applications with backend services.',
        'Worked on manufacturing and campaign management application workflows.'
      ],

      technologies: [
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Express.js', icon: <SiExpress /> },
        { name: 'MongoDB', icon: <SiMongodb /> }
      ]
    },

    {
      id: 2,
      role: 'Full Stack Developer',
      company: 'Aapgs Private limited',
      period: 'January 2025 – Present',
      duration: '1 year 10 months',
      type: 'Professional Experience',
      icon: <FaReact />,
      accent: 'purple',

   description:
  'Working as a Full Stack Developer, developing and maintaining end-to-end web applications using React, Angular, Node.js, Express.js, and MongoDB. Contributing to business applications involving campaign management, clothing production workflows, and e-commerce operations, with a focus on building scalable APIs, interactive user interfaces, and efficient database solutions.',

      responsibilities: [
  'Developed responsive frontend modules using React, Angular, JavaScript, and TypeScript for business applications.',
  'Designed and implemented RESTful APIs using Node.js and Express.js to support application workflows and business operations.',
  'Designed MongoDB schemas and implemented aggregation pipelines for data processing, filtering, analytics, and reporting.',
  'Developed campaign management features, Excel/CSV data processing, and zone-wise campaign analytics for the TVS platform.',
  'Built production workflow modules for managing orders, inventory stages, and manufacturing milestones in the S&J application.',
  'Implemented e-commerce features including Google OAuth authentication, product management, shopping cart, wishlist, and order management.',
  'Integrated JWT authentication and role-based access control to secure application endpoints and admin functionalities.',
  'Used Cursor IDE and Claude for AI-assisted development, debugging, code generation, and code reviews.'
],

      technologies: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Express.js', icon: <SiExpress /> },
        { name: 'MongoDB', icon: <SiMongodb /> }
      ]
    }
  ];

  return (
    <section className="experience" id="experience">

      <div className="experience-container">

        {/* Section Heading */}
        <div className="experience-header">

          <span className="experience-label">
            <FaCode /> CAREER JOURNEY
          </span>

          <h1>
            My <span>Experience</span>
          </h1>

          <p>
            My professional journey, technical contributions,
            and experience in building scalable applications.
          </p>

        </div>

        {/* Experience Summary */}
        <div className="experience-summary">

          <div className="summary-item">
            <FaBriefcase />
            <div>
              <h3>Professional</h3>
              <p>Work Experience</p>
            </div>
          </div>

          <div className="summary-divider"></div>

          <div className="summary-item">
            <FaCode />
            <div>
              <h3>Backend</h3>
              <p>Development Focus</p>
            </div>
          </div>

          <div className="summary-divider"></div>

          <div className="summary-item">
            <FaCheckCircle />
            <div>
              <h3>Real-World</h3>
              <p>Project Experience</p>
            </div>
          </div>

        </div>

        {/* Vertical Timeline */}
        <div className="timeline">

          {experiences.map((experience, index) => (

            <div
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} ${experience.accent}`}
              key={experience.id}
            >

              {/* Timeline Node */}
              <div className="timeline-node">
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>

              {/* Experience Card */}
              <div className="experience-card">

                <div className="card-top">

                  <div className="company-icon">
                    {experience.icon}
                  </div>

                  <div className="card-period">
                    {experience.period}
                  </div>

                </div>

                <div className="card-heading">

                  <span className="experience-type">
                    {experience.type}
                  </span>

                  <h2>{experience.role}</h2>

                  <h3>{experience.company}</h3>

                  <span className="experience-duration">
                    {experience.duration}
                  </span>

                </div>

                <p className="experience-description">
                  {experience.description}
                </p>

                <div className="responsibilities">

                  <h4>
                    <FaCheckCircle />
                    Key Responsibilities
                  </h4>

                  <ul>
                    {experience.responsibilities.map(
                      (responsibility, i) => (
                        <li key={i}>
                          <span className="list-icon">▹</span>
                          {responsibility}
                        </li>
                      )
                    )}
                  </ul>

                </div>

                <div className="card-divider"></div>

                <div className="experience-technologies">

                  <h4>Technologies Used</h4>

                  <div className="technology-list">

                    {experience.technologies.map((technology) => (

                      <div
                        className="experience-tech"
                        key={technology.name}
                      >
                        <span>{technology.icon}</span>
                        {technology.name}
                      </div>

                    ))}

                  </div>

                </div>

                <div className="card-decoration"></div>

              </div>

            </div>

          ))}

        </div>

        {/* Timeline Ending */}
        <div className="timeline-ending">
          <span></span>
          <p>Continuously Learning & Building</p>
          <FaCode />
        </div>

      </div>

    </section>
  );
};

export default Experience;
