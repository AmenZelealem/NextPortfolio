"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaJava,
  FaDocker,
  FaFigma,
  FaNodeJs,
  FaLaravel,
} from 'react-icons/fa'

// About data
const about = {
  title: 'About Me',
  description: "I am a passionate software developer with a focus on creating efficient and scalable web applications. With over 2 years of experience in the tech industry, I thrive on solving complex problems and continuously learning new technologies.",
  info: [
    { fieldName: "Name", fieldValue: "Amen Zelealem" },
    { fieldName: "Phone", fieldValue: "(+251) 936639391" },
    { fieldName: "Experience", fieldValue: "2+ years" },
    { fieldName: "Telegram", fieldValue: "@CaptainAmeNEL" },
    { fieldName: "Nationality", fieldValue: "Ethiopian 🇪🇹 " },
    { fieldName: "Email", fieldValue: "amenzelealem@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "Amharic, English" },
  ]
};

// Experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My Experience',
  description: "I have worked with diverse teams to develop innovative solutions that improve user experiences and drive business growth. My roles have taught me the importance of collaboration and adaptability in a fast-paced environment.",
  items: [
    { company: "Amhara Bank P.L.C.", position: "Application Developer", duration: "November 2023 - Present" },
    { company: "Huawei Technologies Co.", position: "ICT Academy Ambassador", duration: "April 2022 - November 2023" },
    { company: "National Election Board of Ethiopia (NEBE)", position: "Network Administrator", duration: "July 2022 - September 2023" },
    { company: "Young Men Christian Association", position: "Teacher and Fund Raiser", duration: "July 2017 - September 2017" },
  ]
};

// Education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My Education',
  description: "I have completed rigorous training programs and gained a solid foundation in computer science and software development principles. My education has equipped me with the skills necessary to tackle real-world challenges.",
  items: [
    { institution: "Online Course Platform", degree: "Full Stack Web Development Bootcamp", duration: "2024" },
    { institution: "Online Course Platform", degree: "WSO2 Integration", duration: "2024" },
    { institution: "Salale University", degree: "BSc. Computer Science", duration: "2019 - 2023" },
    { institution: "Radical Academy", degree: "High School", duration: "2014 - 2019" },
  ]
};

// Skills data
const skills = {
  icon: '/assets/resume/cap.svg',
  title: 'My Skills',
  description: "I am proficient in a variety of programming languages and frameworks. I am constantly updating my skills to stay current with industry trends and best practices.",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML 5" },
    { icon: <FaCss3 />, name: "CSS 3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaLaravel />, name: "Laravel" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <FaJava />, name: "Java" },
    { icon: <FaDocker />, name: "Docker" },
  ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@radix-ui/react-tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className='container mx-auto'>
        <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* Contents */}
          <div className='min-h-[70vh] w-full'>
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                <ScrollArea className='h-[480px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index) => (
                      <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                        <span className='text-accent'>{item.duration}</span>
                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                        <div className='flex items-center gap-3'>
                          <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                          <p className='text-white/60'>{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                <ScrollArea className='h-[480px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => (
                      <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                        <span className='text-accent'>{item.duration}</span>
                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                        <div className='flex items-center gap-3'>
                          <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                          <p className='text-white/60'>{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                            <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className='capitalize'>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* About */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left">
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                        <span className='text-white/60'>{item.fieldName}</span>
                        <span className='text-xl'>{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume;