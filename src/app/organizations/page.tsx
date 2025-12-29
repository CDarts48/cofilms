"use client";

import React, { CSSProperties } from 'react';
import BasicHeader from '../../components/BasicHeader';
import ContactSection from '../../components/ContactSection';

interface Organization {
    url: string;
    name: string;
    description: string;
    location: string;
    category: string;
}

const organizations: Organization[] = [
    // Film Permits & Government Resources
    {
        name: 'Colorado Film Commission',
        url: 'https://coloradofilm.org/',
        description: 'The official state film commission providing resources, locations, and support for film productions in Colorado. No state film permits required.',
        location: 'Statewide',
        category: 'Government'
    },


    // Regional Film Liaisons
    {
        name: 'Regional Film Liaisons Program',
        url: 'https://oedit.colorado.gov/regional-film-liaisons',
        description: 'Network of 15 volunteer regional partners who market Colorado\'s regions and help identify local support services for the film industry.',
        location: 'Statewide',
        category: 'Regional Liaison'
    },
    {
        name: 'Boulder County Film Commission',
        url: 'https://bouldercountyfilmcommission.com/',
        description: 'Regional film liaison providing resources and support for productions in Boulder County.',
        location: 'Boulder County',
        category: 'Regional Liaison'
    },
    {
        name: 'Breckenridge Film Commission',
        url: 'https://breckfilm.org/',
        description: 'Regional film liaison for Breckenridge and Summit County film productions.',
        location: 'Breckenridge',
        category: 'Regional Liaison'
    },
    {
        name: 'Colorado Springs Film Commission',
        url: 'https://coloradospringsfilmcommission.com/',
        description: 'Regional film liaison serving Colorado Springs and the Pikes Peak region.',
        location: 'Colorado Springs',
        category: 'Regional Liaison'
    },
    {
        name: 'Gunnison County Film Commission',
        url: 'https://gunnisoncrestedbutte.com/industry/film-commission/',
        description: 'Regional film liaison for Crested Butte and Gunnison County.',
        location: 'Crested Butte',
        category: 'Regional Liaison'
    },
    {
        name: 'The Four Corners Film Office',
        url: 'https://www.4cornersfilmoffice.org/',
        description: 'The 4CFO is proud to support the region’s film-friendly legacy, to assist production crews, and to increase the economic benefits of production for our communities.',
        location: 'Durango',
        category: 'Regional Liaison'
    },
    {
        name: 'Steamboat Springs Film Commission',
        url: 'https://www.steamboatchamber.com/discover-steamboat/media/steamboat-springs-film-committee/',
        description: 'Regional film liaison for Steamboat Springs and Northwest Colorado.',
        location: 'Steamboat Springs',
        category: 'Regional Liaison'
    },
    {
        name: 'Telluride Film Commission',
        url: 'http://filmtelluride.com/',
        description: 'Regional film liaison serving Telluride and the San Juan Mountains region.',
        location: 'Telluride',
        category: 'Regional Liaison'
    },

    // Film Organizations
    {
        name: 'Denver Film Society',
        url: 'https://denverfilm.org/',
        description: 'A non-profit organization dedicated to bringing the best of independent, foreign, and classic cinema to Colorado audiences.',
        location: 'Denver',
        category: 'Arts Organization'
    },
    {
        name: 'Denver Documentary Society',
        url: 'https://denverdocsoc.org/',
        description: 'Furthering the impact of documentary films through screenings, outreach and education.',
        location: 'Denver',
        category: 'Arts Organization'
    },
    {
        name: 'Aspen Film',
        url: 'https://aspenfilm.org/',
        description: 'Year-round film programming including festivals, screenings, and educational programs in the Aspen area.',
        location: 'Aspen',
        category: 'Arts Organization'
    },



    // {
    //     name: 'ProductionHUB',
    //     url: 'https://www.productionhub.com/',
    //     description: 'Production directory and job board for film professionals.',
    //     location: 'Online',
    //     category: 'Job Resources'
    // },

    // Unions
    {
        name: 'IATSE Local 7',
        url: 'https://www.iatse7denver.org/',
        description: 'Theatrical stage employees union serving Denver and Colorado film productions.',
        location: 'Denver',
        category: 'Union'
    },
    // {
    //     name: 'SAG-AFTRA',
    //     url: 'https://www.sagaftra.org/',
    //     description: 'Actors union representing performers in Colorado and Wyoming.',
    //     location: 'Colorado & Wyoming',
    //     category: 'Union'
    // }, Has contact not a website here in Colorado 

    // Film Partners & Organizations
    {
        name: 'CASA Films Denver',
        url: 'https://www.facebook.com/groups/CASAfilmsDenver/',
        description: 'Supporting Latino filmmakers and content creators in Denver.',
        location: 'Denver',
        category: 'Professional Org'
    },
    {
        name: 'Colorado Film and Video Association',
        url: 'https://www.cfva.com/',
        description: 'Professional association for Colorado film and video professionals.',
        location: 'Colorado',
        category: 'Professional Org'
    },
    {
        name: 'Cine Fe',
        url: 'https://www.cinefe.org/',
        description: 'Cine Fe’s mission is to make Colorado a place where filmmakers of all backgrounds can thrive, so our stories can be told, our voices heard, our people seen.',
        location: 'Colorado',
        category: 'Professional Org'
    },
    // {
    //     name: 'Colorado Innovators of New Entertainment Media & Arts (CINEMA)',
    //     url: 'https://www.cinemacolorado.org/',
    //     description: 'Innovation and networking organization for Colorado entertainment professionals.',
    //     location: 'Colorado',
    //     category: 'Professional Org'
    // }, Old State campaign in order to attract filmmakers.
    {
        name: 'Colorado Resource for Entertainment Workers (C.R.E.W.)',
        url: 'https://www.facebook.com/groups/250448828366285/',
        description: 'Resources and networking for Colorado entertainment industry workers.',
        location: 'Colorado',
        category: 'Professional Org'
    },
    {
        name: 'Film in Colorado',
        url: 'https://www.filmincolorado.com/',
        description: 'Resources and information for filming in Colorado.',
        location: 'Colorado',
        category: 'Professional Org'
    },

    {
        name: 'National Association for Multi-ethnicity in Communications',
        url: 'https://www.namicdenver.com/',
        description: 'Advancing diversity and inclusion in communications industries.',
        location: 'National',
        category: 'Professional Org'
    },
    {
        name: 'Women in Film and Media Colorado',
        url: 'https://www.wifmco.org/',
        description: 'Supporting women in film, television, and media industries.',
        location: 'Colorado',
        category: 'Professional Org'
    },
];

const orgCardStyle: CSSProperties = {
    marginBottom: 24,
    background: '#23283a',
    borderRadius: 12,
    overflow: 'hidden',
    boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s',
    padding: '20px 24px',
};

const orgCardHoverStyle: CSSProperties = {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 24px rgba(255, 180, 0, 0.3)',
};

export default function OrganizationsPage(): React.ReactElement {

    return (
        <>
            <BasicHeader />

            <main
                style={{
                    maxWidth: 800,
                    margin: '40px auto',
                    background: '#181c24',
                    color: '#fff',
                    borderRadius: 16,
                    boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
                    padding: '32px 24px',
                    fontFamily: 'Segoe UI, Arial, sans-serif',
                } as CSSProperties}
            >
                <section style={{ marginBottom: 32 } as CSSProperties}>
                    <h1
                        style={{
                            fontSize: '2.5rem',
                            marginBottom: 8,
                            letterSpacing: 1,
                            color: '#ffb400',
                            textShadow: '1px 2px 8px #0008',
                        } as CSSProperties}
                    >
                        🎬 Colorado Film Organizations
                    </h1>
                    <p style={{ fontSize: '1.15rem', color: '#e0e0e0', marginBottom: 0 } as CSSProperties}>
                        Discover the key organizations supporting Colorado's vibrant film industry.<br />
                        <span style={{ color: '#ffb400' }}>Click any organization to visit their website.</span>
                    </p>
                </section>

                <section>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        {organizations.map((org: Organization, index: number) => (
                            <div
                                key={index}
                                style={orgCardStyle}
                                onClick={() => window.open(org.url, '_blank')}
                                onMouseEnter={(e) => {
                                    Object.assign(e.currentTarget.style, orgCardHoverStyle);
                                }}
                                onMouseLeave={(e) => {
                                    Object.assign(e.currentTarget.style, orgCardStyle);
                                }}
                            >
                                <h2 style={{
                                    margin: '0 0 12px',
                                    fontSize: '1.4rem',
                                    color: '#ffb400',
                                    fontWeight: 600,
                                } as CSSProperties}>
                                    {org.name}
                                </h2>
                                <p style={{
                                    margin: '0 0 12px',
                                    color: '#e0e0e0',
                                    fontSize: '1.05rem',
                                    lineHeight: 1.6
                                } as CSSProperties}>
                                    {org.description}
                                </p>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    fontSize: '0.95rem',
                                    color: '#bbb',
                                    marginTop: 12,
                                    paddingTop: 12,
                                    borderTop: '1px solid #333'
                                } as CSSProperties}>
                                    <span>
                                        <span style={{ color: '#ffb400', fontWeight: 600 }}>Location:</span>{' '}
                                        {org.location}
                                    </span>
                                    <span>
                                        <span style={{ color: '#ffb400', fontWeight: 600 }}>Category:</span>{' '}
                                        {org.category}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <ContactSection />
            </main>
        </>
    );
}
