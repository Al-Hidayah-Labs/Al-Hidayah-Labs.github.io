
import React from 'react';
import { Button } from '../components/Button';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../constants/data';

interface HomePageProps {
    navigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate }) => (
    <>
        {/* Hero Section */}
        <section className="text-center py-20 lg:py-32 px-4">
             <div className="max-w-4xl mx-auto">
                <div className="flex justify-center mb-4">
                    <span className="inline-block bg-white/80 backdrop-blur-sm border border-emerald-200 rounded-full px-4 py-1 text-sm font-medium text-emerald-700">Open Source  •  Islamic AI</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-emerald-900">
                    Building open-source AI <br className="hidden md:block"/> for Muslims.
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-emerald-700">
                    We create open research, inclusive datasets, and practical tools to serve communities with technology that is authentic and accessible.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                    <Button onClick={() => navigate('Projects')}>View Projects</Button>
                    <Button onClick={() => navigate('Community')} variant="secondary">Join Community</Button>
                </div>
            </div>
        </section>

        {/* Problem & Vision */}
        <section className="py-16 lg:py-24 bg-white/50 border-y border-emerald-200/60 px-4">
            <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-emerald-800">Our Vision</h2>
                    <p className="mt-4 text-lg text-emerald-700">To foster an ecosystem where AI development is guided by Islamic ethical principles, benefiting Muslim communities globally through accessible, authentic, and inclusive technology.</p>
                </div>
                <div className="space-y-4">
                   <p><strong>Access:</strong> Democratizing AI tools for developers, researchers, and organizations.</p>
                   <p><strong>Authenticity:</strong> Ensuring models are grounded in reliable and well-understood sources.</p>
                   <p><strong>Inclusivity:</strong> Representing the diverse languages and cultures of the Ummah.</p>
                </div>
            </div>
        </section>

        {/* Featured Projects */}
        <section className="py-16 lg:py-24 px-4">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-emerald-800">Featured Projects</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-emerald-700">Explore our open-source applications, toolkits, and demos.</p>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
                    {projects.map(p => <ProjectCard key={p.title} {...p} />)}
                </div>
            </div>
        </section>

        {/* Research, Datasets, Models */}
        <section className="py-16 lg:py-24 bg-white/50 border-y border-emerald-200/60 px-4">
            <div className="container mx-auto text-center grid lg:grid-cols-3 gap-12">
                <div>
                    <h3 className="text-2xl font-bold text-emerald-800">Research Areas</h3>
                    <p className="mt-2 text-emerald-700">NLP for Qur’an/Hadith, ASR for khutbahs, multilingual safety, and evals for Islamic contexts.</p>
                    <Button onClick={() => navigate('Research')} variant="secondary" className="mt-4">Learn More</Button>
                </div>
                 <div>
                    <h3 className="text-2xl font-bold text-emerald-800">Public Datasets</h3>
                    <p className="mt-2 text-emerald-700">Curated datasets across multiple domains and languages, available with permissive licenses.</p>
                    <Button onClick={() => navigate('Datasets')} variant="secondary" className="mt-4">Browse Datasets</Button>
                </div>
                 <div>
                    <h3 className="text-2xl font-bold text-emerald-800">Open Models</h3>
                    <p className="mt-2 text-emerald-700">Access our models on Hugging Face with guides for inference and fine-tuning.</p>
                     <Button onClick={() => navigate('Models')} variant="secondary" className="mt-4">Browse Models</Button>
                </div>
            </div>
        </section>

        {/* Social Proof */}
        <section className="py-16 text-center px-4">
            <h3 className="text-lg font-semibold text-emerald-700">Acknowledged and supported by leading organizations</h3>
            <div className="mt-8 flex justify-center items-center gap-8 md:gap-12 flex-wrap opacity-50">
                <span className="text-2xl font-bold text-gray-500">Partner A</span>
                <span className="text-2xl font-bold text-gray-500">University B</span>
                <span className="text-2xl font-bold text-gray-500">Foundation C</span>
                <span className="text-2xl font-bold text-gray-500">Org D</span>
            </div>
        </section>
    </>
);
