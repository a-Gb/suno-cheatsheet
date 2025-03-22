/**
 * Build script for AI Music Cheatsheet Template
 * 
 * This script processes the template files and content data
 * to generate the final HTML files for each platform.
 */

const fs = require('fs');
const path = require('path');
const Mustache = require('mustache');

// Configuration
const PLATFORMS = ['suno', 'udio']; // Add more platforms as needed
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
ensureDirectoryExists(path.join(PUBLIC_DIR, 'assets', 'css'));
ensureDirectoryExists(path.join(PUBLIC_DIR, 'assets', 'js'));
ensureDirectoryExists(path.join(PUBLIC_DIR, 'assets', 'images'));

// Copy static assets
function copyStaticAssets() {
  // Copy CSS
  fs.copyFileSync(
    path.join(TEMPLATES_DIR, 'css', 'styles.css'),
    path.join(PUBLIC_DIR, 'assets', 'css', 'styles.css')
  );
  
  // Copy JS
  fs.copyFileSync(
    path.join(TEMPLATES_DIR, 'js', 'main.js'),
    path.join(PUBLIC_DIR, 'assets', 'js', 'main.js')
  );
  
  console.log('✅ Static assets copied');
}

// Load templates
function loadTemplates() {
  const templates = {
    base: fs.readFileSync(path.join(TEMPLATES_DIR, 'base', 'base.html'), 'utf8'),
    cheatsheet: fs.readFileSync(path.join(TEMPLATES_DIR, 'layouts', 'cheatsheet.html'), 'utf8'),
    partials: {
      header: fs.readFileSync(path.join(TEMPLATES_DIR, 'partials', 'header.html'), 'utf8'),
      sidebar: fs.readFileSync(path.join(TEMPLATES_DIR, 'partials', 'sidebar.html'), 'utf8'),
      footer: fs.readFileSync(path.join(TEMPLATES_DIR, 'partials', 'footer.html'), 'utf8')
    }
  };
  
  console.log('✅ Templates loaded');
  return templates;
}

// Load content data for each platform
function loadContentData(platform) {
  const configPath = path.join(CONTENT_DIR, platform, 'config.json');
  const parametersPath = path.join(CONTENT_DIR, platform, 'parameters.json');
  const tagsPath = path.join(CONTENT_DIR, platform, 'tags.json');
  const examplesPath = path.join(CONTENT_DIR, platform, 'examples.json');
  const bestPracticesPath = path.join(CONTENT_DIR, platform, 'best-practices.json');
  
  // Load mandatory config
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  
  // Load other data files if they exist
  let data = {
    // Initialize arrays
    nav_items: config.navigation?.nav_items || [],
    sidebar_sections: config.navigation?.sidebar_sections || [],
    footer_links: config.navigation?.footer_links || [],
    // Set defaults
    title: `${config.platform.name} Ultimate Parameter & Meta-Tag Cheatsheet (v${config.platform.version})`,
    // Pull data from config
    description: config.platform.description,
    keywords: config.platform.keywords,
    author: config.platform.author,
    platform_name: config.platform.name,
    logo_url: config.platform.logo_url,
    copyright: config.platform.copyright,
    // Pull from meta section
    og_title: config.meta.og_title,
    og_description: config.meta.og_description,
    og_image: config.meta.og_image,
    og_url: config.meta.og_url,
    canonical_url: config.meta.canonical_url,
    // Set structured data
    structured_data: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": config.meta.og_title,
      "description": config.meta.og_description,
      "author": { "@type": "Person", "name": config.platform.author },
      "publisher": { "@type": "Organization", "name": config.platform.copyright }
    }, null, 2),
    // Spread the rest of config for access to other properties
    ...config,
  };
  
  try {
    if (fs.existsSync(parametersPath)) {
      data.parameters = JSON.parse(fs.readFileSync(parametersPath, 'utf8'));
      // Also spread parameters to root level for template access
      Object.assign(data, data.parameters);
    }
    
    if (fs.existsSync(tagsPath)) {
      data.tags = JSON.parse(fs.readFileSync(tagsPath, 'utf8'));
      // Also spread tags to root level for template access
      Object.assign(data, data.tags);
    }
    
    if (fs.existsSync(examplesPath)) {
      data.examples = JSON.parse(fs.readFileSync(examplesPath, 'utf8'));
      // Also spread examples to root level for template access
      Object.assign(data, data.examples);
    }
    
    if (fs.existsSync(bestPracticesPath)) {
      data.bestPractices = JSON.parse(fs.readFileSync(bestPracticesPath, 'utf8'));
      // Also spread best practices to root level for template access
      Object.assign(data, data.bestPractices);
    }
  } catch (error) {
    console.error(`Error loading data for ${platform}:`, error);
  }
  
  // Add current year for copyright
  data.current_year = new Date().getFullYear();
  
  // Debug output
  console.log(`Platform: ${data.platform_name}, Title: ${data.title}`);
  
  console.log(`✅ Content data loaded for ${platform}`);
  return data;
}

// Build HTML files for a platform
function buildPlatform(platform, templates) {
  const data = loadContentData(platform);
  
  // Process cheatsheet layout with content data
  const cheatsheetContent = Mustache.render(templates.cheatsheet, data);
  
  // Combine with base template
  const finalHtml = Mustache.render(
    templates.base, 
    {
      ...data,
      content: cheatsheetContent
    },
    templates.partials
  );
  
  // Write the output file
  const outputPath = path.join(PUBLIC_DIR, `${platform}-cheatsheet.html`);
  fs.writeFileSync(outputPath, finalHtml, 'utf8');
  
  // If this is the default platform, also create index.html
  if (platform === PLATFORMS[0]) {
    fs.writeFileSync(path.join(PUBLIC_DIR, 'index.html'), finalHtml, 'utf8');
  }
  
  console.log(`✅ Built ${platform}-cheatsheet.html`);
}

// Main build function
function build() {
  console.log('🚀 Starting build process');
  
  // Copy static assets
  copyStaticAssets();
  
  // Load templates
  const templates = loadTemplates();
  
  // Build each platform
  PLATFORMS.forEach(platform => {
    buildPlatform(platform, templates);
  });
  
  console.log('✅ Build completed successfully');
}

// Run the build process
build();