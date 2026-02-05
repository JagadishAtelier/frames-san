import React, { useEffect } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import ParallaxImage from './ParallaxImage'
import ResearchSection from './ResearchSection'
import ZoomImageOne from './ZoomImageOne'
import Development from './Development'
import DevelopmentImage from './DevelopmentImage'
import Concept from './Concept'
import ConceptImage from './ConceptImage'
import SliderText from './SliderText'
import MoreData from './MoreData'
import { useParams } from "react-router-dom";
import { projects } from '../../plugins/projectsData'
import FAQSection from '../FAQSection'

function WorkHero() {
    const { title } = useParams();
    console.log(title)
    const project = projects.find((p) => p.slug === title);
    useEffect(()=>{
        console.log(project)
    })
    if (!project) return null;
    return (
        <div className=''>
            <Navbar />
            <div className='flex flex-col gap-5 justify-center items-center text-center md:w-[80%] w-full h-[90vh] mx-auto'>
                <h1 className='font-handwriting min-[1024px]:text-7xl min-[1280px]:text-8xl min-[1536px]:text-9xl text-2xl text-[#BD0100]'>{project.title}</h1>
                <p className='min-[1024px]:text-base min-[1280px]:text-xl min-[1536px]:text-xl min-[1537px]:text-2xl text-base w-[70%]'>{project.description}</p>
                <div className="mt-10">
                    <a href="/contact" className="px-12 py-5 border border-white bg-black text-white rounded-full uppercase tracking-widest hover:bg-[#BD0100] hover:border-[#BD0100] hover:text-white transition-all">
                        Live Preview
                    </a>
                </div>
            </div>
            <ParallaxImage data={project}/>
            <ResearchSection />
            <ZoomImageOne />
            <Development />
            <DevelopmentImage />
            <Concept />
            <ConceptImage />
            <SliderText />
            <MoreData />
            <FAQSection/>
            <Footer />
        </div>
    )
}

export default WorkHero