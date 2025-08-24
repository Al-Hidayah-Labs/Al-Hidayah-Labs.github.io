
import React from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    links: {
        demo?: string;
        github?: string;
        paper?: string;
    };
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, links }) => (
    <div className="bg-white/60 backdrop-blur-sm border border-emerald-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
        <h3 className="text-xl font-bold text-emerald-800 mb-2">{title}</h3>
        <p className="text-emerald-700 flex-grow">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
            {links.demo && <a href={links.demo} className="text-sm font-semibold text-emerald-600 hover:underline">Demo</a>}
            {links.github && <a href={links.github} className="text-sm font-semibold text-emerald-600 hover:underline">GitHub</a>}
            {links.paper && <a href={links.paper} className="text-sm font-semibold text-emerald-600 hover:underline">Paper</a>}
        </div>
    </div>
);
