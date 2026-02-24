'use client';

import React, { useState } from 'react';
import Footer from '../../components/Footer';
import BasicHeader from '../../components/BasicHeader';
import emailjs from '@emailjs/browser';

export default function ColoradoFilmsThePodcast() {
    const [email, setEmail] = useState('');
    const [showPastEpisodes, setShowPastEpisodes] = useState(false);
    const [name, setName] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage('');

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    from_name: name,
                    from_email: email,
                    message: `New podcast subscriber: ${name} (${email})`,
                    to_email: 'info@coloradofilms.com',
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );

            setMessage('✅ Thanks for subscribing! We\'ll keep you updated.');
            setEmail('');
            setName('');
        } catch (error) {
            console.error('Subscription error:', error);
            setMessage('❌ Oops! Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <BasicHeader />

            <div style={styles.container}>
                <div style={styles.hero}>
                    <h1 style={styles.title}>Colorado Films: The Podcast!</h1>
                </div>

                <div style={styles.content}>
                    <section style={styles.section}>
                        <h2 style={styles.sectionTitle}>
                            Latest Episodes
                        </h2>
                        <p style={styles.text}>
                            Listen to our podcast exploring Colorado's film industry, behind-the-scenes stories, and interviews with filmmakers.
                        </p>

                        <div style={styles.episodeCard}>
                        <div style={styles.episodeCard}>
                            <h3 style={styles.episodeTitle}>Episode 8: Conversation with Evan Cannon & Tyson Kroening of ScorpiusFest</h3>
                            <p style={styles.episodeDescription}>
                                In this episode, we sit down with Evan Cannon and Tyson Kroening, the creative minds behind ScorpiusFest. We discuss the festival's origins, its unique approach to showcasing independent films, and the challenges and triumphs of building a new film festival in Colorado. Hear about their vision for the future, advice for aspiring filmmakers, and what makes ScorpiusFest a must-attend event for film lovers in the region.
                            </p>
                            <div style={styles.buttonGroup}>
                                <a
                                    href="https://open.spotify.com/episode/0MbOq8okzWWB1CLRyuFR6x?si=K0lRao2wTY6vPo08kcCWeg"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={styles.iconButton}
                                    title="Listen on Spotify"
                                >
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="#1DB954">
                                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://podcastsconnect.apple.com/my-podcasts/show/colorado-films-the-podcast/a6028231-db54-4975-bcaf-6ecb507c7cea/episode/episode-8-of-colorado-films-the-podcast-a-conversation-with-evan-cannon-and-tyson-kroening-of-scorpiusfest/f3d357d4-1777-4c43-a7c1-89662938c16b"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={styles.iconButton}
                                    title="Listen on Apple Podcasts"
                                >
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="#FC3C44">
                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://studio.youtube.com/video/SFAX-qsBfy4/edit"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={styles.iconButton}
                                    title="Watch on YouTube"
                                >
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="#FF0000">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        </div>

                       
                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <button
                                onClick={() => setShowPastEpisodes(!showPastEpisodes)}
                                style={styles.loadAllButton}
                            >
                                {showPastEpisodes ? '▲ Hide Past Episodes' : '▼ Load All Past Episodes'}
                            </button>
                        </div>

                        {showPastEpisodes && (
                            <div style={{ marginTop: '2rem' }}>
                                <div style={styles.episodeCard}>
                                    <h3 style={styles.episodeTitle}>Episode 7: Conversation with Darla Rae</h3>
                                    <p style={styles.episodeDescription}>
                                        I recently had the privilege of sitting down with Darla Rae—award-winning filmmaker, actress, and CEO of Film It Productions.<br/>
                                        <br/>
                                        Darla has built her career around telling stories that matter—stories rooted in resilience, healing, faith, and the strength of the human spirit. From documentaries that have screened before the U.S. Congress to powerful projects like <i>Courageous Warriors: Beauty from the Ashes</i>, her work consistently shines a light on people who transform adversity into purpose.<br/>
                                        <br/>
                                        But what also stood out in our conversation was her heart for community-building through film.<br/>
                                        <br/>
                                        Her most recent project <b>Pool Ladies</b> is an improvisational filmmaking experience, which is having a huge impact on communities across the US. Pool Ladies is designed to bring women together—not just as performers, but as collaborators. It’s less about rigid scripts and more about connection, creativity, and shared storytelling. Through improv, laughter, and vulnerability, the project creates real bonds between participants while building something artistic and meaningful.<br/>
                                        <br/>
                                        Darla doesn’t just make films—she creates spaces where people feel seen, supported, and empowered.<br/>
                                        <br/>
                                        This was a heartwarming and impactful conversation.<br/>
                                        Check out Darla's work here: <a href="https://film-itproductions.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'underline' }}>https://film-itproductions.com/</a>
                                    </p>
                                    <p style={styles.listenLabel}>Listen here:</p>
                                    <div style={styles.buttonGroup}>
                                        <a
                                            href="https://open.spotify.com/episode/6kQmT0bhUNiVFm3Fcm6EiG?si=qLeZm05oRCOkcWIgEvUPGw"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={styles.iconButton}
                                            title="Listen on Spotify"
                                        >
                                            <svg width="32" height="32" viewBox="0 0 24 24" fill="#1DB954">
                                                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                                            </svg>
                                        </a>
                                        <a
                                            href="https://podcastsconnect.apple.com/my-podcasts/show/colorado-films-the-podcast/a6028231-db54-4975-bcaf-6ecb507c7cea/episode/a-conversation-with-darla-rae-film-it-productions/9ecc392f-e756-49d5-ab84-6bf52fba9a34"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={styles.iconButton}
                                            title="Listen on Apple Podcasts"
                                        >
                                            <svg width="32" height="32" viewBox="0 0 24 24" fill="#FC3C44">
                                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                            </svg>
                                        </a>
                                        <a
                                            href="https://youtu.be/LqyN2EZlvoQ"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={styles.iconButton}
                                            title="Watch on YouTube"
                                        >
                                            <svg width="32" height="32" viewBox="0 0 24 24" fill="#FF0000">
                                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                ...existing code...

                                                                <div style={styles.episodeCard}>
                            <h3 style={styles.episodeTitle}>Episode 5: Conversation with Scott Crady</h3>
                            <p style={styles.episodeDescription}>
                                Scott Crady details his career shift from graphic design to filmmaking, now balancing photography and filmmaking. Scott discussed his work in outdoor adventure filmmaking, including a two-year documentary project for HBO Max, <i>Here to Climb</i>, about athlete Sasha DiGiulian. As well as the technical aspects of filming extreme climbing, as well as their pivot from action sports to outdoor cooking and wild food, with an upcoming dream project focused on gaucho cooking. Scott shared his advice for pricing creative work, emphasized business literacy for filmmakers, and addressed the impact of short-form content, maintaining that AI will not replace human storytelling due to the enduring value of human narratives.
                            </p>
                            <p style={styles.listenLabel}>Listen here:</p>
                            <div style={styles.buttonGroup}>
                                <a
                                    href="https://open.spotify.com/episode/7s0xdSwIZvKEU09Y5q6ULm?si=JYosHjDxTKyRPL45EMPlXA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={styles.iconButton}
                                    title="Listen on Spotify"
                                >
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="#1DB954">
                                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://podcasts.apple.com/us/podcast/colorado-films-the-podcast/id1860422839"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={styles.iconButton}
                                    title="Listen on Apple Podcasts"
                                >
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="#FC3C44">
                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://youtu.be/AWIw6NQAxDw"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={styles.iconButton}
                                    title="Watch on YouTube"
                                >
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="#FF0000">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                                                        <div style={styles.episodeCard}>
                            
                                    <h3 style={styles.episodeTitle}>Episode 4: Ousmane Ndoye – Askkanwii Filmmaking Hub</h3>
                            <p style={styles.episodeDescription}>
                                On this episode of <b>Colorado Films: The Podcast</b>, I speak with Ousmane Ndoye.<br /><br />
                                Ousmane, a social entrepreneur and philanthropist based in Denver, Colorado, founded Askkanwii Filmmaking Hub Incubator in 2013. Originally from Senegal, he has pursued various certifications and college degrees in Arts, organizational management, and filmmaking. Ndoye is currently involved in several projects, including documentaries, films, and TV series produced in collaboration with Askkanwii Hub groups in Africa and Denver. He is also working on two upcoming films, “Fishing For My Dreams” and “My African Dream” with his writing partners. With a passion for storytelling and community development, Ndoye is dedicated to empowering underrepresented groups in the film industry.
                            </p>
                            <p style={styles.listenLabel}>Listen here:</p>
                            
                            <div style={styles.buttonGroup}>
                                <a
                                    href="https://open.spotify.com/episode/3PIeF2jrGADzDL7xqmBXrf?si=bpFTmZqoQWWIja1YCpxEEw"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={styles.iconButton}
                                    title="Listen on Spotify"
                                >
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="#1DB954">
                                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://podcasts.apple.com/us/podcast/conversation-with-ousmane-ndoye-askkanwii-filmmaking/id1860422839?i=1000745498909"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={styles.iconButton}
                                    title="Listen on Apple Podcasts"
                                >
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="#FC3C44">
                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://youtu.be/ygMReOmTv_c"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={styles.iconButton}
                                    title="Watch on YouTube"
                                >
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="#FF0000">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                                <div style={styles.episodeCard}>
                            <h3 style={styles.episodeTitle}> Episode 3: A Conversation with Justin Balog</h3>
                            <p style={styles.episodeDescription}>
                                A conversation with Justin Balog about his work in Colorado's film community, insights on producing and promoting local film, and reflections on recent projects. Justin shares stories from his career and advice for emerging filmmakers.
                            </p>
                            <p style={styles.listenLabel}>Listen here:</p>
                            <div style={styles.buttonGroup}>
                                <a
                                    href="https://open.spotify.com/episode/58VIortyTLDPjkPPWUdxNc"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={styles.iconButton}
                                    title="Listen on Spotify"
                                >
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="#1DB954">
                                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://podcasts.apple.com/us/podcast/conversation-with-ousmane-ndoye-askkanwii-filmmaking/id1860422839?i=1000745498909"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={styles.iconButton}
                                    title="Listen on Apple Podcasts"
                                >
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="#FC3C44">
                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                                <div style={styles.episodeCard}>
                                    <h3 style={styles.episodeTitle}> Episode 2: A Conversation with Bruce of BruceMichaelFilms</h3>
                                    <p style={styles.episodeDescription}>
                                        A chat with Colorado filmmaker Bruce Michael about his journey, creative process, and the unique challenges and opportunities of making films in Colorado. Discover how Bruce got started, his advice for aspiring filmmakers, and what inspires his work.
                                    </p>
                                    <p style={styles.listenLabel}>Listen here:</p>
                                    <div style={styles.buttonGroup}>
                                        <a
                                            href="https://open.spotify.com/episode/5VU9e3jzptQE3cs9Yvi59M"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={styles.iconButton}
                                            title="Listen on Spotify"
                                        >
                                            <svg width="32" height="32" viewBox="0 0 24 24" fill="#1DB954">
                                                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                                            </svg>
                                        </a>
                                        <a
                                            href="https://podcasts.apple.com/us/podcast/colorado-films/id1860422839"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={styles.iconButton}
                                            title="Listen on Apple Podcasts"
                                        >
                                            <svg width="32" height="32" viewBox="0 0 24 24" fill="#FC3C44">
                                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                            </svg>
                                        </a>
                                        <a
                                            href="https://youtu.be/ZctaksPB2sU"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={styles.iconButton}
                                            title="Watch on YouTube"
                                        >
                                            <svg width="32" height="32" viewBox="0 0 24 24" fill="#FF0000">
                                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                <div style={styles.episodeCard}>
                                    <h3 style={styles.episodeTitle}> Episode 1: Colorado Films - An Introduction</h3>
                                    <p style={styles.episodeDescription}>
                                        Welcome to Colorado Films The Podcast! Join us as we begin our journey through the state's rich cinematic history.
                                    </p>
                                    <p style={styles.listenLabel}>Listen here:</p>
                                    <div style={styles.buttonGroup}>
                                        <a
                                            href="https://open.spotify.com/episode/3bGQHoPhjJDauQuDzLFQpY"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={styles.iconButton}
                                            title="Listen on Spotify"
                                        >
                                            <svg width="32" height="32" viewBox="0 0 24 24" fill="#1DB954">
                                                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                                            </svg>
                                        </a>
                                        <a
                                            href="https://podcasts.apple.com/us/podcast/colorado-films/id1860422839"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={styles.iconButton}
                                            title="Listen on Apple Podcasts"
                                        >
                                            <svg width="32" height="32" viewBox="0 0 24 24" fill="#FC3C44">
                                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}

                    </section>
                    <section style={styles.sponsorSection}>
                        <h2 style={styles.sponsorTitle}>Sponsor / Hire Us</h2>
                        <p style={styles.sponsorText}>
                            Interested in sponsoring our podcast or hiring us for your project?
                            We'd love to hear from you!
                        </p>
                        <a href="mailto:info@coloradofilms.com?subject=Sponsorship/Collaboration Inquiry" style={styles.sponsorButton}>
                            Get in Touch
                        </a>
                    </section>
                </div>
            </div>
        </>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1a0000 0%, #2d0a0a 50%, #1a0000 100%)',
        color: '#FFFFFF',
        paddingTop: '4rem',
        paddingBottom: '2rem',
    },
    hero: {
        textAlign: 'center',
        padding: '2rem 1.5rem',
        maxWidth: '800px',
        margin: '0 auto',
    },
    title: {
        fontSize: '2.5rem',
        fontWeight: '900',
        marginTop: '1rem',
        marginBottom: '0.75rem',
        background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
    },
    subtitle: {
        fontSize: '1rem',
        color: '#C19A6B',
        lineHeight: '1.6',
        maxWidth: '600px',
        margin: '0 auto',
    },
    sponsorHeaderLink: {
        display: 'inline-block',
        marginTop: '1.25rem',
        padding: '0.75rem 1.5rem',
        backgroundColor: '#FFD700',
        color: '#1a0000',
        textDecoration: 'none',
        borderRadius: '50px',
        fontSize: '0.95rem',
        fontWeight: '700',
        border: '2px solid #FFA500',
        boxShadow: '0 4px 16px rgba(255, 215, 0, 0.4)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
    },
    content: {
        maxWidth: '900px',
        margin: '0 auto',
        padding: '1rem',
    },
    section: {
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '12px',
        padding: '1.5rem',
        marginBottom: '1.25rem',
        border: '2px solid rgba(255, 215, 0, 0.2)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
    },
    sectionTitle: {
        fontSize: '1.5rem',
        fontWeight: '700',
        marginBottom: '1rem',
        color: '#FFD700',
        display: 'flex',
        alignItems: 'center',
    },
    text: {
        fontSize: '1.125rem',
        lineHeight: '1.8',
        color: '#E8E8E8',
    },
    loadingNote: {
        fontSize: '0.9rem',
        lineHeight: '1.6',
        color: '#C19A6B',
        fontStyle: 'italic',
        marginTop: '1rem',
        marginBottom: '0.5rem',
        textAlign: 'center',
    },
    episodeCard: {
        background: 'rgba(255, 255, 255, 0.08)',
        borderRadius: '12px',
        padding: '1.5rem',
        marginTop: '1.5rem',
        marginBottom: '1.5rem',
        border: '2px solid rgba(255, 215, 0, 0.3)',
        transition: 'all 0.3s ease',
    },
    episodeTitle: {
        fontSize: '1.25rem',
        fontWeight: '700',
        color: '#FFD700',
        marginBottom: '0.75rem',
    },
    episodeDescription: {
        fontSize: '1rem',
        lineHeight: '1.6',
        color: '#E8E8E8',
        marginBottom: '1.25rem',
    },
    listenLabel: {
        fontSize: '1rem',
        fontWeight: '600',
        color: '#FFD700',
        marginBottom: '0.75rem',
        textAlign: 'center',
    },
    listenButton: {
        display: 'inline-block',
        padding: '0.85rem 2rem',
        backgroundColor: '#1DB954',
        color: '#FFFFFF',
        textDecoration: 'none',
        borderRadius: '50px',
        fontWeight: '700',
        fontSize: '1rem',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        border: '2px solid #1ed760',
        boxShadow: '0 4px 16px rgba(29, 185, 84, 0.4)',
    },
    appleButton: {
        display: 'inline-block',
        padding: '0.85rem 2rem',
        backgroundColor: '#FC3C44',
        color: '#FFFFFF',
        textDecoration: 'none',
        borderRadius: '50px',
        fontWeight: '700',
        fontSize: '1rem',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        border: '2px solid #ff4d55',
        boxShadow: '0 4px 16px rgba(252, 60, 68, 0.4)',
    },
    buttonGroup: {
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    iconButton: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        cursor: 'pointer',
    },
    loadAllButton: {
        display: 'inline-block',
        padding: '1rem 2.5rem',
        backgroundColor: 'rgba(255, 215, 0, 0.15)',
        color: '#FFD700',
        textDecoration: 'none',
        borderRadius: '50px',
        fontWeight: '700',
        fontSize: '1.1rem',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        border: '2px solid #FFD700',
        boxShadow: '0 4px 16px rgba(255, 215, 0, 0.3)',
    },
    viewAllButton: {
        display: 'inline-block',
        marginTop: '1.5rem',
        padding: '1rem 2.5rem',
        backgroundColor: 'rgba(255, 215, 0, 0.1)',
        color: '#FFD700',
        textDecoration: 'none',
        borderRadius: '50px',
        fontWeight: '700',
        fontSize: '1.1rem',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        border: '2px solid #FFD700',
        boxShadow: '0 4px 16px rgba(255, 215, 0, 0.3)',
    },
    list: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    listItem: {
        fontSize: '1.125rem',
        lineHeight: '2',
        color: '#E8E8E8',
        paddingLeft: '2rem',
        position: 'relative',
        marginBottom: '0.75rem',
    },
    episodeContainer: {
        marginTop: '1rem',
        marginBottom: '1rem',
        borderRadius: '12px',
        overflow: 'hidden',
    },
    spotifyEmbed: {
        borderRadius: '12px',
    },
    spotifyLink: {
        display: 'inline-block',
        marginTop: '0.75rem',
        padding: '0.5rem 1.25rem',
        backgroundColor: '#1DB954',
        color: '#FFFFFF',
        textDecoration: 'none',
        borderRadius: '24px',
        fontWeight: '600',
        fontSize: '0.9rem',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
    },
    subscribeForm: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        marginTop: '1rem',
        maxWidth: '500px',
    },
    input: {
        padding: '0.75rem',
        fontSize: '0.95rem',
        borderRadius: '8px',
        border: '2px solid rgba(255, 215, 0, 0.3)',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        color: '#FFFFFF',
        outline: 'none',
        transition: 'all 0.3s ease',
    },
    subscribeButton: {
        padding: '0.75rem 1.5rem',
        fontSize: '1rem',
        fontWeight: '600',
        backgroundColor: '#FFD700',
        color: '#1a0000',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
    },
    message: {
        marginTop: '0.75rem',
        fontSize: '0.95rem',
        fontWeight: '500',
        textAlign: 'center',
    },
    sponsorSection: {
        background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(255, 165, 0, 0.1) 100%)',
        borderRadius: '12px',
        padding: '2rem 1.5rem',
        marginBottom: '1.25rem',
        border: '3px solid rgba(255, 215, 0, 0.4)',
        boxShadow: '0 8px 32px rgba(255, 215, 0, 0.2)',
        textAlign: 'center',
    },
    sponsorTitle: {
        fontSize: '1.75rem',
        fontWeight: '800',
        marginBottom: '1rem',
        background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
    },
    sponsorText: {
        fontSize: '1rem',
        lineHeight: '1.6',
        color: '#E8E8E8',
        marginBottom: '1.5rem',
        maxWidth: '600px',
        margin: '0 auto 1.5rem',
    },
    sponsorButton: {
        display: 'inline-block',
        padding: '0.85rem 2rem',
        fontSize: '1rem',
        fontWeight: '700',
        backgroundColor: '#FFD700',
        color: '#1a0000',
        textDecoration: 'none',
        borderRadius: '50px',
        border: '2px solid #FFA500',
        boxShadow: '0 4px 16px rgba(255, 215, 0, 0.4)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
    },
};
