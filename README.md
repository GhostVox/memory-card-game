# Memory Card Game

A React-based memory card game that challenges players to click on each image exactly once without repeating any selections. The game features beautiful cat images from the Pexels API and includes score tracking, shuffle mechanics, and responsive design.

## Features

- **Memory Challenge** - Click on each image once without repeating to win
- **Dynamic Image Loading** - Fetches random cat images from Pexels API
- **Shuffle Algorithm** - Cards shuffle after each click using Fisher-Yates algorithm
- **Score Tracking** - Tracks successful choices and total wins
- **Responsive Design** - Works on desktop and mobile devices
- **Loading States** - Smooth loading experience with error handling
- **Win Detection** - Automatic win detection when all cards are clicked once

## Game Rules

1. **Objective**: Click on each image exactly once to win the game
2. **Scoring**: Each successful new click increases your score
3. **Failure**: Clicking the same image twice resets your current score
4. **Victory**: Successfully clicking all images once completes the game
5. **Challenge**: Cards shuffle after each click, making it harder to track

## Tech Stack

- **Frontend**: React 18 with Vite
- **Styling**: CSS3 with CSS Modules
- **API**: Pexels API for high-quality images
- **Build Tool**: Vite for fast development and building
- **Linting**: ESLint with React and Prettier configurations

## Prerequisites & Installation

### Required Software

- **Node.js 18+** - Download from [nodejs.org](https://nodejs.org)
- **npm** or **yarn** - Package manager (comes with Node.js)
- **Pexels API Key** - Free from [pexels.com/api](https://www.pexels.com/api/)

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone [your-repo-url]
   cd memory-card-game
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:

   ```env
   VITE_REACT_APP_PEXELS_API_KEY=your_pexels_api_key_here
   ```

4. **Get a Pexels API key**

   - Visit [pexels.com/api](https://www.pexels.com/api/)
   - Sign up for a free account
   - Generate an API key
   - Add it to your `.env` file

5. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint for code quality
npm run lint
```

## Project Structure

```
memory-card-game/
├── public/                          # Static assets
│   ├── github-mark/                 # GitHub logo assets
│   └── vite.svg                     # Vite logo
├── src/                             # Source code
│   ├── api/
│   │   └── pexelApi.js             # Pexels API integration
│   ├── components/                  # React components
│   │   ├── about.jsx               # Game instructions
│   │   ├── footer.jsx              # Footer with GitHub link
│   │   ├── header.jsx              # Header with score display
│   │   ├── imageCard.jsx           # Individual card component
│   │   └── imageContainer.jsx      # Game grid container
│   ├── styles/                     # Component-specific CSS
│   │   ├── about.css
│   │   ├── footer.css
│   │   ├── header.css
│   │   └── imageCard.css
│   ├── App.jsx                     # Main application component
│   ├── App.css                     # Main application styles
│   ├── index.css                   # Global styles
│   └── main.jsx                    # Application entry point
├── .env                            # Environment variables
├── .eslintrc.cjs                   # ESLint configuration
├── package.json                    # Dependencies and scripts
├── vite.config.js                  # Vite configuration
└── README.md                       # This file
```

## Game Mechanics

### Fisher-Yates Shuffle Algorithm

The game uses the Knuth-Fisher-Yates shuffle algorithm for randomizing card positions:

```javascript
function kunthShuffle(array) {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}
```

### State Management

- **Images State**: Stores fetched images from Pexels API
- **Clicked Images**: Tracks which images have been clicked
- **Success Counter**: Counts successful (non-duplicate) clicks
- **Win Counter**: Tracks total number of games won
- **Game State**: Manages start screen vs. active game

### API Integration

The game fetches 9 random cat images from the Pexels API:

- **Endpoint**: `https://api.pexels.com/v1/search?query=cats&per_page=9`
- **Authentication**: Bearer token via API key
- **Image Quality**: Uses landscape format for consistent display
- **Error Handling**: Graceful fallback for API failures

## Responsive Design

The game adapts to different screen sizes:

- **Desktop**: Grid layout with hover effects
- **Mobile**: Responsive grid that stacks appropriately
- **Touch Devices**: Optimized touch targets for mobile play

### CSS Grid Layout

```css
.image-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1rem;
}
```

## Development Features

### Hot Module Replacement (HMR)

- **Vite** provides instant updates during development
- **React Fast Refresh** preserves component state during edits

### Code Quality

- **ESLint** with React-specific rules
- **Prettier** integration for consistent formatting
- **React Hooks** rules for proper hook usage

### Environment Variables

- **Development**: Uses `.env` for local API keys
- **Production**: Configure environment variables in deployment platform

## Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist/` folder with optimized production files.

### Deployment Platforms

**Vercel**

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Add environment variables in Vercel dashboard
```

**Netlify**

```bash
# Build command: npm run build
# Publish directory: dist
# Add environment variables in Netlify dashboard
```

**GitHub Pages** (with GitHub Actions)

- Set up GitHub Actions workflow
- Configure environment secrets for API key

## API Configuration

### Getting Pexels API Key

1. Visit [pexels.com/api](https://www.pexels.com/api/)
2. Create free account
3. Generate API key
4. Add to environment variables

### Rate Limits

- **Free Tier**: 200 requests per hour
- **Caching**: Images are fetched once per game session
- **Error Handling**: Graceful degradation if API fails

## Performance Optimizations

- **Image Optimization**: Uses Pexels' built-in image optimization
- **Lazy Loading**: Images load as needed
- **Efficient Shuffling**: In-place array shuffling algorithm
- **Minimal Re-renders**: Optimized React state updates

## Browser Compatibility

- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **ES2020+ Features**: Uses modern JavaScript features
- **CSS Grid**: Requires modern browser support
- **Fetch API**: Native browser API for HTTP requests

## Troubleshooting

### Common Issues

**"Images not loading"**

- Check your Pexels API key in `.env` file
- Verify API key is valid and not expired
- Check browser console for network errors

**"Game doesn't start"**

- Ensure JavaScript is enabled
- Check for console errors
- Verify all dependencies are installed

**"Cards not shuffling"**

- Check browser console for errors
- Verify click handlers are working
- Test with browser developer tools

**"Responsive layout issues"**

- Clear browser cache
- Test on different screen sizes
- Check CSS Grid support

### Development Debugging

```bash
# Check for unused dependencies
npm run lint

# Build and test locally
npm run build && npm run preview

# Check bundle size
npm run build --report
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Future Enhancements

Potential improvements you could add:

- **Multiple Themes** - Different image categories (dogs, nature, etc.)
- **Difficulty Levels** - Different grid sizes (4x4, 6x6, 8x8)
- **High Score System** - Local storage for best times/scores
- **Sound Effects** - Audio feedback for clicks and wins
- **Animations** - Smooth card flip animations
- **Multiplayer Mode** - Turn-based or competitive play
- **Progressive Web App** - Offline functionality
- **Custom Image Upload** - Allow players to use their own images

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- **Pexels** - For providing high-quality free images via their API
- **React Team** - For the excellent React framework
- **Vite** - For the fast build tool and development server
- **The Odin Project** - For project inspiration and learning resources

Perfect for React developers looking to learn about API integration, state management, game logic, and responsive design in a fun, interactive project!
