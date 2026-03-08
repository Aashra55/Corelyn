import React from 'react';
import { notFound } from 'next/navigation';
import { servicesData } from '../../../lib/services-data';
import ServiceTemplate from '../../../Components/ServiceTemplate';

export async function generateMetadata({ params }) {
    const { slug } = params;
    const service = servicesData[slug];

    if (!service) {
        return {
            title: 'Service Not Found | Corelyn',
        };
    }

    return {
        title: `${service.title} | Corelyn`,
        description: service.positioning,
    };
}

export default function ServicePage({ params }) {
    const { slug } = params;
    const service = servicesData[slug];

    if (!service) {
        notFound();
    }

    return <ServiceTemplate data={service} />;
}

export async function generateStaticParams() {
    return Object.keys(servicesData).map((slug) => ({
        slug,
    }));
}
