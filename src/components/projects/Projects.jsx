import React, { useEffect, useState } from 'react'
import './Projects.scss'

import {
  FaNodeJs,
  FaAngular,
  FaReact,
  FaCheckCircle,
  FaCog
} from 'react-icons/fa'

import {
  SiExpress,
  SiMongodb,
  SiMysql
} from 'react-icons/si'

import { FiArrowLeft, FiArrowRight, FiFolder } from 'react-icons/fi'


const Projects = () => {

  const projects = [
    {
      title: 'TVS Campaign Management System',

      type: 'Work Project',

      description:
        'A full-stack campaign management platform for TVS enabling zone/area-based targeting of mechanics and competitive brand analysis. The system helps the marketing team manage campaigns, analyze brand performance across regions, and make data-driven decisions.',

      technologies: [
        {
          name: 'Node.js',
          icon: <FaNodeJs />
        },
        {
          name: 'Express.js',
          icon: <SiExpress />
        },
        {
          name: 'MongoDB',
          icon: <SiMongodb />
        },
        {
          name: 'Angular',
          icon: <FaAngular />
        }
      ],

      features: [
        'Zone/area-based targeting of mechanics',
        'Excel/CSV data upload and processing',
        'Campaign creation, scheduling and tracking',
        'Comparative brand-analysis dashboards',
        'Analytics summaries using MongoDB aggregation pipelines'
      ]
    },

    
{
  title: 'Tannery Manufacturing Process Management System',

  type: 'Work Project',

  description:
    'Developed a full-stack leather manufacturing process management system to monitor and manage the complete production lifecycle, from raw goat and cow skin (GRN entry) to processed leather shipment. The system tracks material movement across multiple MTS processes, monitors chemical (BOM) consumption, process costs, and production quantities, providing detailed reports for inventory tracking, work-in-progress monitoring, and production cost analysis.',

  technologies: [
    {
      name: 'React',
      icon: <FaReact />
    },
    {
      name: 'Node.js',
      icon: <FaNodeJs />
    },
    {
      name: 'Express.js',
      icon: <SiExpress />
    },
    {
      name: 'MongoDB',
      icon: <SiMongodb />
    }
  ],

  features: [
    'GRN-based raw skin entry and inventory management',
    'MTS process tracking with quantity movement between production stages',
    'BOM (chemical) consumption and process cost monitoring',
    'Work-in-Progress (WIP) stock reports with MTS history tracking',
    'Stock reports and MTS export functionality',
    'Production cost calculation based on material, BOM, and process costs',
    'Grade-based leather valuation and shipment cost tracking',
    'End-to-end production monitoring and reporting'
  ]
},
  ]


  const [currentProject, setCurrentProject] = useState(0)


  /*
    Automatically move to the next project
    every 5 seconds
  */

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentProject((prev) =>
        (prev + 1) % projects.length
      )

    }, 5000)


    return () => clearInterval(interval)

  }, [projects.length])


  const nextProject = () => {

    setCurrentProject((prev) =>
      (prev + 1) % projects.length
    )

  }


  const previousProject = () => {

    setCurrentProject((prev) =>
      (prev - 1 + projects.length) % projects.length
    )

  }


  const project = projects[currentProject]


  return (

    <section id="projects" className="projects">

      <div className="projects-container">


        {/* Heading */}

        <div className="projects-header">

          <div className="projects-small-title">
            MY WORK
          </div>

          <h1>
            Featured <span>Projects</span>
          </h1>

          <p>
            Here are some of the key projects I have worked on.
            Each project represents real-world problem solving
            and hands-on experience.
          </p>

        </div>



        {/* Project counter */}

        <div className="project-info-bar">

        

          <div className="project-type">

            <FiFolder />

            <span>
              {project.type}
            </span>

          </div>

        </div>



        {/* Project content */}

        <div className="project-content">


          {/* Previous */}

          <button
            className="project-arrow project-arrow-left"
            onClick={previousProject}
          >
            <FiArrowLeft />
          </button>



          <div className="project-main">


            <h2>
              {project.title}
            </h2>


            <p className="project-description">
              {project.description}
            </p>



            {/* Technologies */}

            <div className="project-technologies">

              {project.technologies.map((technology) => (

                <div
                  className="technology"
                  key={technology.name}
                >

                  <span className="technology-icon">
                    {technology.icon}
                  </span>

                  <span>
                    {technology.name}
                  </span>

                </div>

              ))}

            </div>



            {/* Divider */}

            <div className="project-divider"></div>



            {/* Features */}

            <div className="features">

              <h3>

                <FaCog />

                Key Features

              </h3>


              <ul>

                {project.features.map((feature, index) => (

                  <li key={index}>

                    <FaCheckCircle />

                    <span>
                      {feature}
                    </span>

                  </li>

                ))}

              </ul>

            </div>


          </div>



          {/* Next */}

          <button
            className="project-arrow project-arrow-right"
            onClick={nextProject}
          >
            <FiArrowRight />
          </button>


        </div>



        {/* Dots */}

        <div className="project-dots">

          {projects.map((_, index) => (

            <button
              key={index}
              className={
                index === currentProject
                  ? 'active'
                  : ''
              }
              onClick={() => setCurrentProject(index)}
            />

          ))}

        </div>


      </div>

    </section>

  )
}

export default Projects