import React from 'react'
import './Skills.scss'

import {
  FaNodeJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaAngular
} from 'react-icons/fa'

import {
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiMysql
} from 'react-icons/si'

const Skills = () => {

  const skills = [
    {
      name: 'Node.js',
      icon: <FaNodeJs />,
      className: 'node'
    },
    {
      name: 'React',
      icon: <FaReact />,
      className: 'react'
    },
    {
      name: 'Express.js',
      icon: <SiExpress />,
      className: 'express'
    },
    {
      name: 'MongoDB',
      icon: <SiMongodb />,
      className: 'mongodb'
    },
    {
      name: 'JavaScript',
      icon: <SiJavascript />,
      className: 'javascript'
    },
    {
      name: 'HTML5',
      icon: <FaHtml5 />,
      className: 'html'
    },
    {
      name: 'CSS3',
      icon: <FaCss3Alt />,
      className: 'css'
    },
    {
      name: 'Git',
      icon: <FaGitAlt />,
      className: 'git'
    },
    {
      name: 'GitHub',
      icon: <FaGithub />,
      className: 'github'
    }
  ]

  return (
    <section id="skills" className="skills">

      <div className="skills-container">

        <div className="skills-heading">
          <span>&lt; / &gt;</span>
          <h1>Skills</h1>
        </div>

        <div className="skills-grid">

          {skills.map((skill, index) => (
            <div
              className={`skill-card ${skill.className}`}
              key={skill.name}
              style={{
                animationDelay: `${index * 0.25}s`
              }}
            >
              <div className="skill-icon">
                {skill.icon}
              </div>

              <h3>{skill.name}</h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Skills