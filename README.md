# Colorado Films

A comprehensive website dedicated to Colorado's vibrant film community, featuring film festivals, movie screenings, podcast episodes, and local cinema news.

## Features

- **Film Festivals** - Discover upcoming film festivals across Colorado, from Telluride to Boulder to Denver
- **Out Now** - Browse current and upcoming film screenings at theaters throughout the state
- **Colorado Films: The Podcast** - Listen to episodes covering Colorado's film scene
- **Film Organizations** - Connect with local film organizations and communities
- **Movie Scores** - Track and review films
- **Calendar** - Stay updated on film events

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org) with Turbopack
- **Frontend**: React 19, TypeScript
- **Styling**: CSS Modules, Inline Styles
- **Icons**: Lucide React, React Icons
- **Email**: EmailJS, Resend
- **Analytics**: Mixpanel

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/CDarts48/cofilms.git
   cd cofilms
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
cofilms/
├── public/              # Static assets & JSON data
│   ├── outNow.json      # Current film screenings
│   └── ...
├── server/              # API routes and utilities
│   ├── api/
│   ├── middleware/
│   └── utils/
├── src/
│   ├── app/             # Next.js App Router pages
│   │   ├── calendar/
│   │   ├── film/
│   │   ├── FilmFestivals/
│   │   ├── OutNow/
│   │   ├── organizations/
│   │   ├── scores/
│   │   └── ColoradoFilmsThePodcast/
│   ├── components/      # Reusable UI components
│   ├── sections/        # Page sections (Header, Hero, etc.)
│   └── utils/           # Utility functions
└── ...
```

## Available Scripts

| Command         | Description                             |
| --------------- | --------------------------------------- |
| `npm run dev`   | Start development server with Turbopack |
| `npm run build` | Build for production                    |
| `npm run start` | Start production server                 |
| `npm run lint`  | Run ESLint                              |

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## License

This project is private and not open for public distribution.

## Contact

For inquiries about Colorado Films, visit the website or info@ColoradoFilms.com

---

_Built for Colorado's film community_
