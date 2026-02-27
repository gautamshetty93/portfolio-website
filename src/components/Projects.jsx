import project1 from '../assets/proj1.png';
import project2 from '../assets/proj2.png';
import project3 from '../assets/proj3.png';
import project4 from '../assets/proj4.png';
import {FaGithub} from 'react-icons/fa';

const Projects = ({darkMode}) => {
    const projects = [
        {
            id: 1,
            title: 'E-commerce Platform',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt',
            image: project1,
            tags: ['Java', 'SpringBoot', 'MySQL']
        },
        {
            id: 2,
            title: 'Fitness tracker',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt',
            image: project2,
            tags: ['React natiive', 'Firebase', 'Redux']
        },
        {
            id: 3,
            title: 'Content Generator',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt',
            image: project3,
            tags: ['Java', 'SpringBoot', 'MySQL']
        },
        {
            id: 4,
            title: 'Dashboard',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt',
            image: project4,
            tags: ['Larvel', 'Vue.js', 'PostgreSQL']
        }
        ];
    return (
        <section
            id='projects'
            style={{
                background: darkMode ? "#111827" : "#f9fafb"
            }}
            className='relative py-24'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-20' data-aos='fade-up'>
                    <h2
                        className='text-3xl sm:text-4xl font-bold mb-3'
                        style={{'color': darkMode ? 'white' : '#1f2937'
                    }}>
                    My <span style={{
                        background: 'linear-gradient(to right, #f97316, #f59e0b)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        color: 'transparent'
                    }}>
                        Projects
                    </span>
                    </h2>
                    <p
                    className='max-w-xl mx-auto'
                    style={{
                        color: darkMode ? '#d1d5db' : '#6b7280'
                            }}>
                        A showcase of my recent work
                        </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12'>
                    {projects.map((project, index) => (
                    <div
                        key={project.id}
                        style={{
                    background: darkMode
                            ? 'linear-gradient(to right, #1f2937, #111827)'
                            : 'linear-gradient(to right, #ffffff, #f9fafb)',
                            borderColor: darkMode ? '#374151' : '#e5e7eb'
                        }}
                        className='group rounded-xl border duration-300
                        hover:border-orange-500/50 transition-all'
                    data-aos='fade-up'
                    data-aos-delay={`${index * 100}`}>
                        <div className='h-36 overflow-hidden rounded-t-xl'>
                            <img
                            src={project.image}
                            alt={project.title}
                            className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'/>
                            </div>
                        <div className='p-4'>
                            <h3
                                className='text-lg font-semibold mb-2'
                                style={{
                                    color: darkMode ? 'white' : '#1f2937'
                                }}>
                                {project.title}
                            </h3>
                            <p
                            className='text-sm mb-3'
                            style={{
                                color: darkMode ? '#d1d5db' : '#6b7280'
                                    }}>
                                {project.desc}
                            </p>
                            <div className='flex flex-wrap gap-1.5 mb-4'>
                                {project.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                    style={{
                                        background: darkMode ? '#374151' : '#f3f4f6',
                                        color: darkMode ? '#d1d5db' : '#4b5563',
                                    }}
                                        className='px-2 py-1 text-xs rounded-full'>
                                    {tag}
                                    </span>
                        ))}
                            </div>
                            <div className='flex gap-2'>
                                {/* Demo */}
                                <a
                                    href="#"
                                    style={{
                                background: 'linear-gradient(to right, #f97316, #f59e0b)',
                                    }}
                                    className='flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-white text-sm rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all'
                                dara-aos='zoom-in'
                                data-aos-delay='400'>
                                    <FaGithub className='text-sm'/>
                                    <span>Code</span>
                                </a>
                            </div>

                        </div>
                    </div>
                        ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;