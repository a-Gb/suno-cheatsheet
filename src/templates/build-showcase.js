/**
 * Build script for Suno Showcase Example
 */

const fs = require('fs');
const path = require('path');
const Mustache = require('mustache');

// Configuration
const SRC_DIR = path.join(__dirname, '..');
const PUBLIC_DIR = path.join(SRC_DIR, '..', 'public');
const TEMPLATES_DIR = path.join(SRC_DIR, 'templates');
const CONTENT_DIR = path.join(SRC_DIR, 'content');

// Ensure output directories exist
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

ensureDirectoryExists(PUBLIC_DIR);

// Build showcase example
function buildShowcase() {
  console.log('🚀 Building showcase example');
  
  // Load template
  const showcaseTemplate = fs.readFileSync(path.join(TEMPLATES_DIR, 'showcase.html'), 'utf8');
  
  // Load content data
  const showcaseData = JSON.parse(fs.readFileSync(path.join(CONTENT_DIR, 'suno', 'examples-showcase.json'), 'utf8'));
  
  // Prepare data for template
  const templateData = {
    prompt_content: showcaseData.prompt,
    technical_parameters: showcaseData.explanation.technical_parameters,
    meta_tags: showcaseData.explanation.meta_tags,
    section_tags: showcaseData.explanation.section_tags,
    lyrical_techniques: showcaseData.explanation.lyrical_techniques,
    sound_design: showcaseData.explanation.sound_design,
    genre_fusion: showcaseData.explanation.genre_fusion
  };
  
  // Render template
  const renderedHtml = Mustache.render(showcaseTemplate, templateData);
  
  // Write the output file
  const outputPath = path.join(PUBLIC_DIR, 'suno-showcase-example.html');
  fs.writeFileSync(outputPath, renderedHtml, 'utf8');
  
  console.log('✅ Showcase example built successfully');
}

// Run the build process
buildShowcase();