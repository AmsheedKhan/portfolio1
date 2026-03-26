"use client"
import React from 'react';
import BackgroundEffects from '@/components/ui/background-effects';
import SectionTitle from './components/SectionTitle';
import ProjectCategories from './components/ProjectCategories';

const ProjectsPage = () => {
    return (
        <section className="py-16" id="projects">

            <div className="w-full px-6 md:px-16 lg:px-24">

                <BackgroundEffects
                    variant="diagonal"
                    colors={{ first: "secondary", second: "secondary" }}
                    intensity="10"
                    blurAmount="3xl"
                />

                <div className="relative">
                    <SectionTitle />

                    {/* NEW CATEGORY UI */}
                    <ProjectCategories />

                </div>
            </div>

        </section>
    );
};

export default ProjectsPage;