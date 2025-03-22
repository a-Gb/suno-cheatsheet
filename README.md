# AI Music Cheatsheet Template System

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Status](https://img.shields.io/badge/status-active-success)

A modular template system for creating comprehensive reference guides for various AI music generation platforms like Suno AI, Udio, and more.

## Key Features

- **Modular Design**: Separate content from presentation for easy maintenance
- **Multi-Platform Support**: Create cheatsheets for different AI music platforms using the same template
- **Modern UI**: Elegant responsive interface with light/dark mode support
- **Complete Documentation**: Parameters, tags, examples, and best practices
- **Easy Customization**: JSON-based content structure for simple updates

## Project Structure

- `/public` - Generated HTML files and assets for web deployment
  - `index.html` - Main entry point (redirects to default platform)
  - `suno-cheatsheet.html` - Suno AI reference guide
  - `udio-cheatsheet.html` - Udio AI reference guide
  - `/assets` - Static assets (CSS, JS, images)
- `/src` - Source files
  - `/content` - Platform-specific content files in JSON format
    - `/suno` - Suno AI content data
    - `/udio` - Udio AI content data
  - `/templates` - Template files
    - `/base` - Base HTML template
    - `/layouts` - Page layout templates
    - `/partials` - Reusable HTML components
    - `/css` - Stylesheet files
    - `/js` - JavaScript files
    - `build.js` - Template processing script

## Development

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Setup

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/ai-music-cheatsheet.git
   cd ai-music-cheatsheet
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Build the project:
   ```
   npm run build
   ```

4. Start the development server:
   ```
   npm run dev
   ```

### Adding a New Platform

1. Create a new directory under `/src/content/[platform-name]`
2. Create the required JSON files:
   - `config.json` - Basic platform information
   - `parameters.json` - Technical parameters
   - `tags.json` - Tags and structure markers
   - `examples.json` - Example prompts
   - `best-practices.json` - Usage tips and best practices

3. Add the platform name to the `PLATFORMS` array in `src/templates/build.js`

4. Run the build script to generate the new platform's cheatsheet

## Deployment

To deploy to GitHub Pages:

```
npm run deploy
```

This will build the project and publish the contents of the `/public` directory to GitHub Pages.

## License

This project is released under the MIT License. See LICENSE file for details.

## Contributing

Contributions are welcome! If you'd like to add support for another AI music platform or improve the template, please submit a pull request or open an issue.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request