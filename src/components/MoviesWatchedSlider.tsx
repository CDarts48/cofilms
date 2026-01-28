import React from 'react';

import './MoviesWatchedSlider.css';

const ceffLogo = 'https://ceff.net/wp-content/uploads/2025/11/CEFF-Logo-2025-Opt-1.png';
const movies = [
  {
    title: 'A Journey to Zero-Carbon',
    year: '2025',
    imageUrl: ceffLogo,
    review: 'Come learn the why and how behind John Avenson’s Westminster, CO home becoming a “zero-carbon home” by incorporating super insulation, super air-tightness, amazing windows, all-electric heating and water heating and solar PV + a battery to power it all! Directed by: Paul Kriescher',
    watchUrl: 'https://www.pbs.org/video/a-journey-to-a-zero-carbon-home-fkgodr/',
    socials: {
      facebook: 'https://www.facebook.com/share/p/174LgnsBx9/',
      instagram: 'https://www.instagram.com/p/DUAINMEDgJi/',
      x: 'https://x.com/AColoradoFilm/status/2016018172198220189?s=20',
      tiktok: '',
      youtube: '',
      spotify: '',
      linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7422104385712832512',
      bluesky: '',
      apple: '',
    }
  },
  {
    title: 'Against the Herd',
    year: '2025',
    imageUrl: ceffLogo, 
    review: 'Almost a century of overgrazing has destroyed much of America’s public lands, but in Northern Nevada, Cottonwood Ranch has discovered that cattle can actually be the key to restoring our rangelands. Now the Smith family must convince legislators that cows aren’t always eco-villains, or they’re sure to lose their land. Directed by: Jaxon Derow',
    watchUrl: 'https://www.youtube.com/watch?si=co8JWufbstXuffe7&v=UkktShz-kHU&feature=youtu.be',
    socials: {
      facebook: 'https://www.facebook.com/permalink.php?story_fbid=pfbid02BSQEupbgyRUpNuhTeryzhG9QJF2hncn63xoEfcstNr3xavg4Xc4CwzoWiTEZoyakl&id=61585835874209',
      instagram: 'https://www.instagram.com/p/DT8fQssDmig/',
      x: '',
      tiktok: '',
      youtube: '',
      spotify: '',
      linkedin: 'https://www.linkedin.com/posts/colorado-films_coloradofilms-coloradoenvironmentalfilmfest-activity-7421273290184466432-X83y?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFLT-qEBZ7EtwMpKeyAMc8VHkUNkmiNOR4A ',
      bluesky: 'https://bsky.app/profile/coloradofilms.bsky.social/post/3mdbhgcfdp22w',
      apple: '',
    }
  },
  {
    title: 'Amazing Beeches',
    year: '2025',
    imageUrl: ceffLogo, 
    review: 'Beech trees are quite amazing, but sadly their very existence is at risk, as you’ll discover in this 3-minute film. They may not be around much longer so appreciate them while you can. Directed by: Sam Hay Kauffmann',
    watchUrl: 'https://www.youtube.com/watch?v=QCFUItK7shg',
    socials: {
      facebook: 'https://www.facebook.com/share/p/1DLGUpYWA5/',
      instagram: 'https://www.instagram.com/p/DT5sGqojt49/',
      x: 'https://x.com/AColoradoFilm/status/2015118650752094545?s=20',
      tiktok: '',
      youtube: '',
      spotify: '',
      linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7420887212411764736',
      bluesky: 'https://bsky.app/profile/coloradofilms.bsky.social/post/3md6ro3ldjs23',
      apple: '',
    }
  }
];


function WatchNowButton({ url }: { url: string }) {
  if (!url) return null;
  return (
    <a
      href={url}
      className="movies-watched-watchnow"
      target="_blank"
      rel="noopener noreferrer"
    >
      Watch Now
    </a>
  );
}

function MoviesWatchedSlider() {
  return (
    <div className="movies-watched-slider">
      {movies.map((movie, idx) => (
        <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="movies-watched-card-wrapper">
            <div className="movies-watched-card">
              {/* Front of card */}
              <div className="movies-watched-card-front">
                <div className="movies-watched-image-container">
                  <img src={movie.imageUrl} alt={movie.title} className="movies-watched-image" />
                </div>
                <div className="movies-watched-title">{movie.title}</div>
                {movie.year && <div className="movies-watched-year">{movie.year}</div>}
              </div>
              {/* Back of card */}
              <div className="movies-watched-card-back">
                <div className="movies-watched-title">{movie.title}</div>
                <div className="movies-watched-review">{movie.review}</div>
              </div>
            </div>
          </div>
          <WatchNowButton url={movie.watchUrl} />
          <div className="movies-watched-footer">
            A       review of {movie.title}
            <div className="movies-watched-socials">
              {movie.socials.facebook && (
                <a href={movie.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" width="32" height="32" style={{ display: 'block' }} />
                </a>
              )}
              {movie.socials.tiktok && (
                <a href={movie.socials.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  <img src="https://external-content.duckduckgo.com/ip3/www.tiktok.com.ico" alt="TikTok" width="32" height="32" style={{ display: 'block', background: '#fff', borderRadius: 6 }} />
                </a>
              )}
              {movie.socials.x && (
                <a href={movie.socials.x} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                  <img src="https://abs.twimg.com/icons/apple-touch-icon-192x192.png" alt="X (Twitter)" width="32" height="32" style={{ display: 'block', background: '#fff', borderRadius: 6 }} />
                </a>
              )}
              {movie.socials.instagram && (
                <a href={movie.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" width="32" height="32" style={{ display: 'block', borderRadius: 6 }} />
                </a>
              )}
              {movie.socials.youtube && (
                <a href={movie.socials.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="YouTube" width="32" height="32" style={{ display: 'block', background: '#fff', borderRadius: 6 }} />
                </a>
              )}
              {movie.socials.spotify && (
                <a href={movie.socials.spotify} target="_blank" rel="noopener noreferrer" aria-label="Spotify">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" alt="Spotify" width="32" height="32" style={{ display: 'block', background: '#fff', borderRadius: 6 }} />
                </a>
              )}
              {movie.socials.linkedin && (
                <a href={movie.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" width="32" height="32" style={{ display: 'block', background: '#fff', borderRadius: 6 }} />
                </a>
              )}
              {movie.socials.bluesky && (
                <a href={movie.socials.bluesky} target="_blank" rel="noopener noreferrer" aria-label="Bluesky">
                  <img src="https://bsky.app/static/apple-touch-icon.png" alt="Bluesky" width="32" height="32" style={{ display: 'block', background: '#fff', borderRadius: 6 }} />
                </a>
              )}
              {movie.socials.apple && (
                <a href={movie.socials.apple} target="_blank" rel="noopener noreferrer" aria-label="Apple Podcasts">
                  <img src="https://marketing.services.apple/mdsa/assets/storage/blobs/images/64dbe2a8587a700007115373/en-us-large@2x.png" alt="Apple Podcasts" width="32" height="32" style={{ display: 'block', background: '#fff', borderRadius: 6 }} />
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MoviesWatchedSlider;
