"use client";

import React,{useState} from 'react'
import { FaJs,FaCss3,FaReact,FaFigma,FaNodeJs,FaHtml5 } from 'react-icons/fa'
import { SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si'
import { motion, AnimatePresence } from 'framer-motion'

// content
const aboutMe = 
    {
    title: "About Me",
    description: "I am a passionate web developer with a focus on creating dynamic and responsive web applications. My expertise lies in both front-end and back-end development, allowing me to build complete solutions that deliver exceptional user experiences.",
    info: [
        { fieldName: "Name", fieldValue: "Tanaton Phukanngam" },
        { fieldName: "Email", fieldValue: "tanaton.phukanngam@gmail.com" },
        { fieldName: "Phone", fieldValue: "+66 1234 5678" },
        { fieldName: "Location", fieldValue: "Bangkok, Thailand" },
        { fieldName: "Experience", fieldValue: "2+ years in web development" },
        { fieldName: "Education", fieldValue: "Bachelor's in Computer Engineering" },
    ],
    skills: [   
        {
            id: 1,
            icon: <FaJs className='w-8 h-8 text-yellow-500' />,
            name: "JavaScript"
        },
        {
            id: 2,
            icon: <FaCss3 className='w-8 h-8 text-blue-500' />,
            name: "CSS"
        },
        {
            id: 3,
            icon: <FaReact className='w-8 h-8 text-blue-400' />,
            name: "React"
        },
        {
            id: 4,
            icon: <SiTailwindcss className='w-8 h-8 text-cyan-400' />,
            name: "Tailwind CSS"
        },
        {
            id: 5,
            icon: <FaFigma className='w-8 h-8 text-pink-500' />,
            name: "Figma"
        },
        {
            id: 6,
            icon: <FaNodeJs className='w-8 h-8 text-green-600' />,
            name: "Node.js"
        },
        {
            id: 7,
            icon: <SiExpress className='w-8 h-8 text-gray-700' />,
            name: "Express.js"
        },
        {
            id: 8,
            icon: <SiMongodb className='w-8 h-8 text-green-700' />,
            name: "MongoDB"
        },
        {
            id: 9,
            icon: <FaHtml5 className='w-8 h-8 text-orange-500' />,
            name: "HTML5"
        }
    ]
}

const experience = [
    {
        icon:"<FaReact className='w-6 h-6 text-yellow-500' />",
        title: "My Experience",  
        description: "Developed responsive web applications using React and Tailwind CSS, ensuring optimal performance and user experience.",
exp: [
      {
        id: 1,
        year: "Feb 2025 - May 2025",
        position: "InternShipHub-University, Senior Project",
        company: "",
        details: `Led frontend development using Next.js, integrating KNN-based job prediction. Built core features (blog search, dashboard) and improved UI/UX through user testing for successful deployment.`
      },
      {
        id: 2,
        year: "Feb 2025 - Apr 2025",
        position: "ServiceNow Associate Consultant",
        company: "Fujitsu (Thailand) Co., Ltd.",
        details: `Designed and implemented ServiceNow solutions tailored to customer requirements as part of mock-up projects. Provided day-to-day support by handling tasks assigned by the team.`
      },
      {
        id: 3,
        year: "Sep 2024 - Nov 2024",
        position: "Full stack Dev, Web app record for rent item, Part-Time",
        company: "",
        details: `Designed and developed a web application based on customer requirements. Collaborated with the team to implement and deploy the project successfully within defined timelines.`
      },
      {
        id: 4,
        year: "June 2024 - Aug 2024",
        position: "ServiceNow Trainee",
        company: "Fujitsu (Thailand) Co., Ltd.",
        details: `Collaborated with a team to design and implement ServiceNow solutions tailored to customer requirements, ensuring alignment with business objectives (mock-up projects). Contributed to mock-up projects to demonstrate and refine solutions.`
      },
      {
        id: 5,
        year: "Sep 2023 - Dec 2023",
        position: "Front-end Developer",
        company: "Reservation Room Mobile Application",
        details: `Implemented application interfaces based on detailed UI designs, ensuring consistency with the design specifications. Developed application interfaces aligned with the project concept, enhancing user experience and functionality.`
      }
    ]
    }
]
const education = [
    {
        icon:"<FaGraduationCap className='w-6 h-6 text-yellow-500' />",
        title: "My Education",  
        description: "I graduated with a Bachelor's degree in Computer Engineering from King Mongkut's University of Technology Thonburi (KMUTT), where I developed a strong foundation in software development and engineering principles.",
        gpax: "3.21",
        univercity: "King Mongkut's University of Technology Thonburi (KMUTT)",
        degree: "Bachelor's in Computer Engineering",
        activity: [
                    {
                        id: 1,
                        year: "2024",
                        title: "Thailand Cyber Top Talent 2024",
                        role: "Participant",
                        details: "Thailand Cyber Top Talent 2024, hosted by NCSA, promotes cybersecurity skills through CTF challenges, expert-led seminars, and demonstrations, uniting students and professionals to enhance cybersecurity awareness and expertise."
                    },
                    {
                        id: 2,
                        year: "2024",
                        title: "NCSA CTF Boot Camp 2024",
                        role: "Participant",
                        details: "The NCSA CTF Boot Camp 2024 promotes cybersecurity awareness and career guidance through interactive Capture The Flag activities for secondary to tertiary students in Nakhon Ratchasima."
                    },
                    {
                        id: 3,
                        year: "2024",
                        title: "Road to Cybersecurity Generation #5",
                        role: "Participant",
                        details: "SOSECURE have a study project designed for 3-4th-year IT students interested in cybersecurity. This camp focuses on laying the foundational knowledge necessary for careers in cybersecurity."
                    },
                    {
                        id: 4,
                        year: "2022 - 2025",
                        title: "INENG Lab Staff at KMUTT",
                        role: "Team Member",
                        details: "Staff of the Robotics Lab of the Computer Engineering. Has experience in teaching and holding camps about robots many times. Have an understanding of the basics of robots and basic sensors."
                    },
                    {
                        id: 5,
                        year: "2023",
                        title: "Microsoft AI for Accessibility Hackathon 2023",
                        role: "Team Member",
                        details: "Microsoft AI for Accessibility Hackathon 2023 promotes tech innovation to aid disabilities, fostering inclusive solutions through community collaboration and competition."
                    },
                    {
                        id: 6,
                        year: "2023",
                        title: "CHOICEISYOURS 2023",
                        role: "Team Leader",
                        details: "In 2023, the CHOICEISYOURS project promotes sustainability by encouraging students to propose Circular Economy projects benefiting society long-term."
                    },
                    {
                        id: 7,
                        year: "2023 - 2024",
                        title: "Computer Programming Teaching Assistant at KMUTT",
                        role: "Part Time",
                        details: "The Teaching Assistant (C language) will collaborate with faculty to support computer programming courses and offer guidance to students."
                    },
                    {
                        id: 8,
                        year: "2023",
                        title: "Hardware House Admin Support at KMUTT",
                        role: "Part Time",
                        details: "The Hardware Admin Support organizes and assists with the deployment of hardware equipment while providing essential administrative support to the class."
                    }
        ]
    }
]

const skills = 
[
    {
    title: "My Skills",
    description: "I possess a diverse skill set in web development, including front-end and back-end technologies. My expertise includes HTML, CSS, JavaScript, React, Node.js, and MongoDB. I am also proficient in UI/UX design principles and have experience with tools like Figma for creating intuitive user interfaces.",
    skillSet: [
        {
            id: 1,
            name: "HTML",
            icon: <FaHtml5 className='w-6 h-6 text-orange-500' />
        },
        {
            id: 2,
            name: "CSS",
            icon: <FaCss3 className='w-6 h-6 text-blue-500' />
        },
        {
            id: 3,
            name: "JavaScript",
            icon: <FaJs className='w-6 h-6 text-yellow-500' />
        },
        {
            id: 4,
            name: "React",
            icon: <FaReact className='w-6 h-6 text-blue-400' />
        },
        {
            id: 5,
            name: "Node.js",
            icon: <FaNodeJs className='w-6 h-6 text-green-600' />
        },
        {
            id: 6,
            name: "MongoDB",
            icon: <SiMongodb className='w-6 h-6 text-green-700' />
        },
        {
            id: 7,
            name: "Tailwind CSS",
            icon: <SiTailwindcss className='w-6 h-6 text-cyan-400' />
        },
        {
            id: 8,
            name: "Figma",
            icon: <FaFigma className='w-6 h-6 text-pink-500' />
        }
    ]
    }
]

const TABS = [
  { key: "exp", label: "Experience" },
  { key: "edu", label: "Education" },
  { key: "skill", label: "Skills" },
  { key: "about", label: "About Me" }
];
const Resume = () => {
  const [activeTab, setActiveTab] = useState("exp");

  return (
    <section className="relative min-h-screen ">
      {/* Sticky Background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-[url('/images/bg3.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>
            {/* Foreground Content */}
      <div className=" relative z-10 flex flex-col md:flex-row justify-center p-4 md:p-8 space-y-2 md:space-y-0 md:space-x-6">
        {/* Left Side: Why hire me? + Vertical Tabs */}
        <div className="md:w-1/3 mt-[10vh] w-full flex flex-col items-start p-8  rounded-t-lg md:rounded-l-lg md:rounded-tr-none mb-4 md:mb-0 max-h-[80vh] overflow-y-auto">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">Why Hire Me?</h2>
          <p className="text-gray-200 mb-4">
            I am a passionate and versatile web developer with a strong foundation in both front-end and back-end technologies. My experience in real-world projects, teamwork, and problem-solving makes me a valuable asset for any organization looking to build impactful digital solutions. I am committed to continuous learning and delivering high-quality, scalable code.
          </p>
          <ul className="list-disc pl-5 text-gray-300 space-y-1 mb-6">
            <li>Full-stack experience: React, Node.js, Express, MongoDB</li>
            <li>Strong UI/UX sense with Figma & Tailwind CSS</li>
            <li>Quick learner, adaptable, and detail-oriented</li>
          </ul>
          {/* Tabs */}
          <div className="flex  md:flex-col flex-row  gap-2 w-full justify-center items-center  mb-4">
            {TABS.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 rounded-lg font-semibold cursor-pointer transition-colors duration-200 text-left w-[30vw] justify-center flex items-center
                  ${activeTab === tab.key ? "bg-yellow-400 text-black" : "bg-gray-800 text-gray-200 hover:bg-yellow-600 hover:text-white"}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        {/* Right Side: Tab Content */}
        <div className="md:w-2/3 mt-[10vh] w-full bg-black/70 rounded-lg md:rounded-r-lg p-10 flex flex-col max-h-[80vh] overflow-y-auto">
        <div className="flex-1 min-h-[60vh]">
            <AnimatePresence mode="wait">
            <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.25 }}
                className="h-full overflow-y-auto"
            >
                {activeTab === "exp" && (
                <>
                    <h3 className="text-xl font-bold text-yellow-300 mb-4">{experience[0].title}</h3>
                    <p className="text-gray-200 mb-4">{skills[0].description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {experience[0].exp.map(exp => (
                        <div key={exp.id} className="border border-2 border-purple-500 rounded-lg p-4 flex flex-col h-full">
                        <div className="font-semibold text-white mb-1">{exp.position}{exp.company && <> @ {exp.company}</>}</div>
                        <div className="text-yellow-300 text-sm mb-2">{exp.year}</div>
                        <div className="text-gray-200 text-sm whitespace-pre-line">{exp.details}</div>
                        </div>
                    ))}
                    </div>
                </>
                )}
                    {activeTab === "edu" && (
                    <>
                        <h3 className="text-xl font-bold text-yellow-300 mb-2">{education[0].title}</h3>
                        <p className="text-gray-200 mb-2">{education[0].description}</p>
                        <div className="font-semibold text-yellow-300">{education[0].degree}</div>
                        <div className="text-gray-400 text-sm">{education[0].univercity}</div>
                        <div className="text-gray-200">GPAX: {education[0].gpax}</div>
                        <h4 className="text-lg font-bold text-yellow-200 mt-4 mb-2">Extra-Curricular Activities</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {education[0].activity.map(act => (
                            <div key={act.id} className="hover:border-black hover:bg-white/10 rounded-lg p-4 flex flex-col h-full border border-purple-500">
                            <div className="flex flex-col md:flex-row md:justify-between mb-1">
                                <span className="font-semibold text-white">{act.title}</span>
                                <span className="text-sm text-yellow-400">{act.year} &middot; {act.role}</span>
                            </div>
                            <div className="text-gray-300 text-sm mt-1">{act.details}</div>
                            </div>
                        ))}
                        </div>
                    </>
                    )}
                    {activeTab === "skill" && (
                    <>
                        <h3 className="text-xl font-bold text-yellow-300 mb-2 w-full">{skills[0].title}</h3>
                        <p className="text-gray-200 mb-4 w-full">{skills[0].description}</p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full">
                        {skills[0].skillSet.map(skill => (
                            <div
                            key={skill.id}
                            className="flex flex-col items-center justify-center bg-gray-800 px-3 py-6 rounded-lg w-full min-h-[110px] transition-all duration-200 hover:bg-yellow-400 hover:text-black"
                            >
                            <div className="mb-2">{React.cloneElement(skill.icon, { className: 'w-12 h-12 ' + (skill.icon.props.className || '') })}</div>
                            <span className="text-white font-semibold text-base text-center">{skill.name}</span>
                            </div>
                        ))}
                        </div>
                    </>
                    )}
                {activeTab === "about" && (
                <>
                    <h3 className="text-xl font-bold text-yellow-300 mb-2">{aboutMe.title}</h3>
                    <p className="text-gray-200 mb-4">{aboutMe.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {aboutMe.info.map((item, idx) => (
                        <div key={idx} className="text-gray-100">
                        <span className="font-semibold text-yellow-300">{item.fieldName}:</span> {item.fieldValue}
                        </div>
                    ))}
                    </div>
                    <h4 className="text-lg font-bold text-yellow-200 mt-4 mb-2">Main Skills</h4>
                    <div className="flex flex-wrap gap-4">
                    {aboutMe.skills.map(skill => (
                        <div key={skill.id} className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded">
                        {skill.icon}
                        <span className="text-white">{skill.name}</span>
                        </div>
                    ))}
                    </div>
                </>
                )}
            </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Resume