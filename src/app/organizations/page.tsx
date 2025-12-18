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
    {
        name: 'City of Denver Office of Special Events',
        url: 'https://www.denvergov.org/Government/Agencies-Departments-Offices/Agencies-Departments-Offices-Directory/Special-Events',
        description: 'Free film permits for Denver. The cost does not cover additional expenses for closing streets or utilizing city resources.',
        location: 'Denver',
        category: 'Permits'
    },
    {
        name: 'Boulder County Film Commission',
        url: 'https://www.bouldercounty.org/property-and-land/land-use/special-permits/',
        description: 'Film permits for Boulder County. A damage deposit may be required.',
        location: 'Boulder',
        category: 'Permits'
    },
    {
        name: 'Colorado Springs Film Commission',
        url: 'https://coloradospringsfilmcommission.com/',
        description: 'Film permits for Colorado Springs. Cost varies by location.',
        location: 'Colorado Springs',
        category: 'Permits'
    },
    {
        name: 'Colorado State Highways and State Patrol',
        url: 'https://www.colorado.gov/csp',
        description: 'Required permits for filming on state highways and roads.',
        location: 'Statewide',
        category: 'Permits'
    },
    {
        name: 'Colorado Department of Transportation',
        url: 'https://www.codot.gov/',
        description: 'Transportation and highway filming permits and coordination.',
        location: 'Statewide',
        category: 'Permits'
    },
    {
        name: 'Colorado Parks and Wildlife',
        url: 'https://cpw.state.co.us/',
        description: 'Required permits for filming in Colorado state parks and wildlife areas.',
        location: 'Statewide',
        category: 'Permits'
    },
    {
        name: 'U.S. Forest Service',
        url: 'https://www.fs.usda.gov/',
        description: 'Federal permits required for filming in national forests.',
        location: 'Federal',
        category: 'Permits'
    },
    {
        name: 'National Park Service',
        url: 'https://www.nps.gov/',
        description: 'Federal permits required for filming in national parks.',
        location: 'Federal',
        category: 'Permits'
    },
    {
        name: 'Bureau of Land Management, Colorado',
        url: 'https://www.blm.gov/colorado',
        description: 'Federal permits for filming on BLM-managed public lands in Colorado.',
        location: 'Federal',
        category: 'Permits'
    },
    
    // Film Organizations & Festivals
    {
        name: 'Denver Film Society',
        url: 'https://denverfilm.org/',
        description: 'A non-profit organization dedicated to bringing the best of independent, foreign, and classic cinema to Colorado audiences.',
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
    {
        name: 'Boulder International Film Festival',
        url: 'https://biff1.com/',
        description: 'Annual film festival celebrating independent cinema with screenings, panels, and networking events.',
        location: 'Boulder',
        category: 'Film Festival'
    },
    {
        name: 'Telluride Film Festival',
        url: 'https://www.telluridefilmfestival.org/',
        description: 'One of the world\'s most prestigious film festivals, showcasing premiere screenings over Labor Day weekend.',
        location: 'Telluride',
        category: 'Film Festival'
    },
    {
        name: 'Sie FilmCenter',
        url: 'https://denverfilm.org/filmcenter/',
        description: 'Denver\'s premier venue for independent and international films, operated by Denver Film Society.',
        location: 'Denver',
        category: 'Venue'
    },
    
    // Job & Crew Resources
    {
        name: 'StaffMeUp',
        url: 'https://www.staffmeup.com/',
        description: 'Entertainment industry job board for finding film crew positions.',
        location: 'Online',
        category: 'Job Resources'
    },
    {
        name: 'Mandy',
        url: 'https://www.mandy.com/',
        description: 'International casting and crew database for film and TV jobs.',
        location: 'Online',
        category: 'Job Resources'
    },
    {
        name: 'EntertainmentCareers.net',
        url: 'https://www.entertainmentcareers.net/',
        description: 'Job board specializing in entertainment industry positions.',
        location: 'Online',
        category: 'Job Resources'
    },
    {
        name: 'ProductionHUB',
        url: 'https://www.productionhub.com/',
        description: 'Production directory and job board for film professionals.',
        location: 'Online',
        category: 'Job Resources'
    },
    {
        name: 'The Denver Egotist',
        url: 'https://www.thedenveregotist.com/',
        description: 'Denver creative advertising and production industry news and jobs.',
        location: 'Denver',
        category: 'Job Resources'
    },
    
    // Unions
    {
        name: 'Teamsters Local 17',
        url: 'https://teamsters17.org/',
        description: 'Union representing drivers and transportation workers in Colorado and Wyoming film industry.',
        location: 'Colorado & Wyoming',
        category: 'Union'
    },
    {
        name: 'IATSE Local 7',
        url: 'https://www.iatselocal7.org/',
        description: 'Theatrical stage employees union serving Denver and Colorado film productions.',
        location: 'Denver',
        category: 'Union'
    },
    {
        name: 'SAG-AFTRA',
        url: 'https://www.sagaftra.org/',
        description: 'Actors union representing performers in Colorado and Wyoming.',
        location: 'Colorado & Wyoming',
        category: 'Union'
    },
    
    // Film Partners & Organizations
    {
        name: 'AD Club Colorado',
        url: 'https://www.adclubcolorado.com/',
        description: 'Professional organization for advertising and marketing professionals.',
        location: 'Colorado',
        category: 'Professional Org'
    },
    {
        name: 'AD2 Colorado',
        url: 'https://www.ad2colorado.org/',
        description: 'Young professionals organization for advertising and marketing.',
        location: 'Colorado',
        category: 'Professional Org'
    },
    {
        name: 'Black Actors Guild',
        url: 'https://www.blackactorsguild.com/',
        description: 'Organization supporting Black actors and performers.',
        location: 'National',
        category: 'Professional Org'
    },
    {
        name: 'Black Public Media',
        url: 'https://www.blackpublicmedia.org/',
        description: 'Supporting Black content creators and filmmakers.',
        location: 'National',
        category: 'Professional Org'
    },
    {
        name: 'CASA Films Denver',
        url: 'https://www.casafilmsdenver.org/',
        description: 'Supporting Latino filmmakers and content creators in Denver.',
        location: 'Denver',
        category: 'Professional Org'
    },
    {
        name: 'Colorado Film and Video Association',
        url: 'https://www.cfva.biz/',
        description: 'Professional association for Colorado film and video professionals.',
        location: 'Colorado',
        category: 'Professional Org'
    },
    {
        name: 'Colorado Filmmaking Incubator',
        url: 'https://www.coloradofilmmakingincubator.com/',
        description: 'Supporting emerging filmmakers with resources and mentorship.',
        location: 'Colorado',
        category: 'Professional Org'
    },
    {
        name: 'Colorado Innovators of New Entertainment Media & Arts (CINEMA)',
        url: 'https://www.cinemacolorado.org/',
        description: 'Innovation and networking organization for Colorado entertainment professionals.',
        location: 'Colorado',
        category: 'Professional Org'
    },
    {
        name: 'Colorado Professional Videographers Association',
        url: 'https://www.cpva.org/',
        description: 'Professional association for videographers and video production professionals.',
        location: 'Colorado',
        category: 'Professional Org'
    },
    {
        name: 'Colorado Resource for Entertainment Workers (C.R.E.W.)',
        url: 'https://www.crewcolorado.org/',
        description: 'Resources and networking for Colorado entertainment industry workers.',
        location: 'Colorado',
        category: 'Professional Org'
    },
    {
        name: 'Colorado UP',
        url: 'https://www.coloradoup.com/',
        description: 'Promoting Colorado as a premier production destination.',
        location: 'Colorado',
        category: 'Professional Org'
    },
    {
        name: 'Denver Media Professionals',
        url: 'https://www.denvermediaprofessionals.com/',
        description: 'Networking organization for Denver media professionals.',
        location: 'Denver',
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
        name: 'Film Industry Networking Denver (F.I.N.D.)',
        url: 'https://www.finddenver.com/',
        description: 'Networking events and resources for Denver film professionals.',
        location: 'Denver',
        category: 'Professional Org'
    },
    {
        name: 'Latino Public Broadcasting',
        url: 'https://www.lpbp.org/',
        description: 'Supporting Latino content creators and public media.',
        location: 'National',
        category: 'Professional Org'
    },
    {
        name: 'Motion Picture Association',
        url: 'https://www.motionpictures.org/',
        description: 'Advocacy organization for the film, TV, and streaming industry.',
        location: 'National',
        category: 'Professional Org'
    },
    {
        name: 'National Association for Multi-ethnicity in Communications',
        url: 'https://www.namic.com/',
        description: 'Advancing diversity and inclusion in communications industries.',
        location: 'National',
        category: 'Professional Org'
    },
    {
        name: 'Women in Film and Media Colorado',
        url: 'https://womeninfilmandmediaco.org/',
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
