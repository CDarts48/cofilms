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
    image?: string;
    logo?: string; // URL to logo image
}

const organizations: Organization[] = [
    // Film Permits & Government Resources
    // {
    //     name: 'Colorado Film Commission',
    //     url: 'https://coloradofilm.org/',
    //     description: 'The official state film commission providing resources, locations, and support for film productions in Colorado. No state film permits required.',
    //     location: 'Statewide',
    //     category: 'Government',
    //     logo: 'https://coloradofilm.org/files/wp-content/themes/colorado-film/images/colorado-film-logo.png'
    // },


    // Regional Film Liaisons
    {
        name: 'Regional Film Liaisons Program',
        url: 'https://oedit.colorado.gov/regional-film-liaisons',
        description: 'Network of 15 volunteer regional partners who market Colorado\'s regions and help identify local support services for the film industry.',
        location: 'Statewide',
        category: 'Regional Liaison',
        logo: 'https://oedit.colorado.gov/sites/coedit/files/logo.svg'
    },
    {
        name: 'Boulder County Film Commission',
        url: 'https://bouldercountyfilmcommission.com/',
        description: 'Regional film liaison providing resources and support for productions in Boulder County.',
        location: 'Boulder County',
        category: 'Regional Liaison',
        logo: 'https://i0.wp.com/bouldercountyfilmcommission.com/wp-content/uploads/2025/10/BCFC-logo-scaled.png?w=2280&ssl=1'
    },
    {
        name: 'Breckenridge Film Commission',
        url: 'https://breckfilm.org/',
        description: 'Regional film liaison for Breckenridge and Summit County film productions.',
        location: 'Breckenridge',
        category: 'Regional Liaison',
        logo: 'https://breckfilm.org/wp-content/uploads/2024/05/breck-film-logo-web.webp'
    },
    {
        name: 'Colorado Springs Film Commission',
        url: 'https://www.visitcos.com/film/',
        description: 'Regional film liaison serving Colorado Springs and the Pikes Peak region.',
        location: 'Colorado Springs',
        category: 'Regional Liaison',
        logo: 'https://visitcos.imgix.net/images/COS-Film-logo-Vertical-full-color-small.png?auto=compress%2Cformat&fit=max&position=50%2050&q=80&w=320&s=c73c3529dd3da115c64b7d8b34934255'
    },
    {
        name: 'Gunnison County Film Commission',
        url: 'https://gunnisoncrestedbutte.com/industry/film-commission/',
        description: 'Regional film liaison for Crested Butte and Gunnison County.',
        location: 'Crested Butte',
        category: 'Regional Liaison',
        logo: 'https://gunnisoncrestedbutte.com/wp-content/themes/yootheme/cache/bc/gcb-logo-secondary-winter-stacked-dark-bc4d02a0.webp'
    },
    {
        name: 'The Four Corners Film Office',
        url: 'https://www.4cornersfilmoffice.org/',
        description: 'The 4CFO is proud to support the region’s film-friendly legacy, to assist production crews, and to increase the economic benefits of production for our communities.',
        location: 'Durango',
        category: 'Regional Liaison',
        logo: 'https://images.squarespace-cdn.com/content/v1/661fb8032373986c202d7771/38f4acd6-301d-4e16-9d58-82a81242ddf9/4CFO-4k-logo.png?format=1500w'
    },
    {
        name: 'Steamboat Springs Film Commission',
        url: 'https://www.steamboatchamber.com/discover-steamboat/media/steamboat-springs-film-committee/',
        description: 'Regional film liaison for Steamboat Springs and Northwest Colorado.',
        location: 'Steamboat Springs',
        category: 'Regional Liaison',
        logo: 'https://www.steamboatchamber.com/includes/public/assets/images/steamboat-logo.svg'
    },
    {
        name: 'Telluride Film Commission',
        url: 'http://filmtelluride.com/',
        description: 'Regional film liaison serving Telluride and the San Juan Mountains region.',
        location: 'Telluride',
        category: 'Regional Liaison',
        logo: 'http://filmtelluride.com/LayoutResources/top.gif'
    },

    // Film Organizations
    {
        name: 'Denver Film Society',
        url: 'https://denverfilm.org/',
        description: 'A non-profit organization dedicated to bringing the best of independent, foreign, and classic cinema to Colorado audiences.',
        location: 'Denver',
        category: 'Arts Organization',
        logo: 'https://www.denverfilm.org/wp-content/uploads/2025/06/df_logo.svg'
    },
    {
        name: 'Denver Documentary Society',
        url: 'https://denverdocsoc.org/',
        description: 'Furthering the impact of documentary films through screenings, outreach and education.',
        location: 'Denver',
        category: 'Arts Organization',
        logo: 'https://e6svm8eqghc.exactdn.com/wp-content/uploads/2023/10/dds-2022-official-text-logo-1.png?strip=all&fit=406,228'
        
    },
    {
        name: 'The Independent Film Society of Colorado',
        url: 'https://ifsoc.org/',
        description: 'The Independent Film Society of Colorado (IFSOC) is a 501(c)(3) nonprofit organization based in Colorado Springs, Colorado. Our mission is to promote independent filmmaking and support filmmakers in the state of Colorado.',
        location: 'Colorado Springs',
        category: 'Arts Organization',
        logo: 'https://ifsoc.org/wp-content/uploads/2022/05/ifsoc-new-logo-final-800x600-1.png'
    },
    {
        name: 'Aspen Film',
        url: 'https://aspenfilm.org/',
        description: 'Year-round film programming including festivals, screenings, and educational programs in the Aspen area.',
        location: 'Aspen',
        category: 'Arts Organization',
        logo:'https://cdn.aspenfilm.org/assets/AspenFilmLogo.svg'
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
        category: 'Union',
        logo: 'https://www.iatse7denver.org/pics/blue%20temp.jpg'
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
        category: 'Professional Org',
        logo: 'https://images.squarespace-cdn.com/content/v1/5d4c265851a2410001c945a8/1567658832723-G50CXFOTX9CXNWQR7110/cfva+logo+no+border%40300x.png?format=750w'
    },
    {
        name: 'Cine Fe',
        url: 'https://www.cinefe.org/',
        description: 'Cine Fe’s mission is to make Colorado a place where filmmakers of all backgrounds can thrive, so our stories can be told, our voices heard, our people seen.',
        location: 'Colorado',
        category: 'Professional Org',
        logo: 'https://images.squarespace-cdn.com/content/v1/614fbc0d930d362345408114/8b5364ce-a191-43c2-9eda-c99a3d8099e8/logo.png?format=1500w'
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
        category: 'Professional Org',
        logo: 'https://scontent-den2-1.xx.fbcdn.net/v/t39.30808-6/468307830_10170251149400601_2380491439300083222_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=108&ccb=1-7&_nc_sid=2285d6&_nc_ohc=q8d64DYE0CsQ7kNvwGxqx_o&_nc_oc=AdmVSHu6FIXC02T2pgF3Y9Xl1hNNFpwcUdJXo6EbvyJDBJVFFz4CyCXQxcy0TbqKnS0&_nc_zt=23&_nc_ht=scontent-den2-1.xx&_nc_gid=Jzyxlox45Ws1EqatlW9ucg&oh=00_Afq8gYLsKUJM2n9lnN2hUiPSCQjJw-PMmRefXub39SIEaw&oe=696F34E9'
    },
    {
        name: 'Film in Colorado',
        url: 'https://www.filmincolorado.com/',
        description: 'Resources and information for filming in Colorado.',
        location: 'Colorado',
        category: 'Professional Org',
        logo: 'https://www.filmincolorado.com/wp-content/themes/mad/img/logo.png'
    },

    {
        name: 'National Association for Multi-ethnicity in Communications',
        url: 'https://www.namicdenver.com/',
        description: 'Advancing diversity and inclusion in communications industries.',
        location: 'National',
        category: 'Professional Org',
        logo: 'https://images.squarespace-cdn.com/content/v1/607e07d6430d7b01bf8f84c6/1618882526678-OMV8174WF8IOXTLKW8MJ/NAMIC-Denver_onWht_gry.png?format=1500w'
    },
    {
        name: 'Women in Film and Media Colorado',
        url: 'https://www.wifmco.org/',
        description: 'Supporting women in film, television, and media industries.',
        location: 'Colorado',
        category: 'Professional Org',
        logo: 'https://images.squarespace-cdn.com/content/v1/5f6282a6186cac2bbc401133/1601351733084-ZVVFSTYXUKWXRPW03OE3/no+words.png?format=1500w'
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
                        Colorado Film Organizations
                    </h1>
                    <p style={{ fontSize: '1.15rem', color: '#e0e0e0', marginBottom: 0 } as CSSProperties}>
                        Discover the key organizations supporting Colorado's vibrant film industry.<br />
                        <span style={{ color: '#ffb400' }}>Click any organization to visit their website.</span>
                    </p>
                </section>

                <section>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        {organizations.map((org: Organization, index: number) => {
                            // Use the image as a background for any organization with an image
                            const hasImage = !!org.image;
                            const cardStyle = hasImage
                                ? {
                                    ...orgCardStyle,
                                    backgroundImage: `url(${org.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    color: '#fff',
                                    position: 'relative' as 'relative',
                                }
                                : orgCardStyle;
                            const overlayStyle = hasImage
                                ? {
                                    position: 'absolute' as 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: 'rgba(35,40,58,0.85)',
                                    borderRadius: 12,
                                    zIndex: 1,
                                }
                                : {};
                            return (
                                <div
                                    key={index}
                                    style={cardStyle}
                                    onClick={() => window.open(org.url, '_blank')}
                                    onMouseEnter={(e) => {
                                        Object.assign(e.currentTarget.style, orgCardHoverStyle);
                                    }}
                                    onMouseLeave={(e) => {
                                        Object.assign(e.currentTarget.style, cardStyle);
                                    }}
                                >
                                    {hasImage && <div style={overlayStyle}></div>}
                                    <div style={{ display: 'flex', alignItems: 'center', ...(hasImage ? { position: 'relative', zIndex: 2 } : {}) }}>
                                        <div style={{ flex: 1 }}>
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
                                        {org.logo && (
                                            <img
                                                src={org.logo}
                                                alt={org.name + ' logo'}
                                                style={{
                                                    width: 64,
                                                    height: 64,
                                                    objectFit: 'contain',
                                                    marginLeft: 24,
                                                    borderRadius: 8,
                                                    background: '#fff',
                                                    boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
                                                }}
                                            />
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
                <ContactSection />
            </main>
        </>
    );
}
