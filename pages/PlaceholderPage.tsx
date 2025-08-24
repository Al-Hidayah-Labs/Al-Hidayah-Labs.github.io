
import React from 'react';

interface PlaceholderPageProps {
    title: string;
    description: string;
}

export const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title, description }) => (
    <div className="container mx-auto py-16 px-4 text-center min-h-[50vh] flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-emerald-800">{title}</h1>
        <p className="mt-4 text-lg text-emerald-700 max-w-2xl mx-auto">{description}</p>
    </div>
);
