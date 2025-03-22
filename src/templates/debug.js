/**
 * Debug script to check data loading and template rendering
 */

const fs = require('fs');
const path = require('path');
const Mustache = require('mustache');

// Configuration
const SRC_DIR = path.join(__dirname, '..');
const CONTENT_DIR = path.join(SRC_DIR, 'content');
const TEMPLATES_DIR = path.join(SRC_DIR, 'templates');
const DEBUG_OUTPUT = path.join(SRC_DIR, 'debug-output.txt');

function debugTemplateRendering() {
  console.log('Starting template rendering debug...');
  let output = '';
  
  // 1. Check template files
  const templateFiles = {
    base: path.join(TEMPLATES_DIR, 'base', 'base.html'),
    cheatsheet: path.join(TEMPLATES_DIR, 'layouts', 'cheatsheet.html'),
    header: path.join(TEMPLATES_DIR, 'partials', 'header.html'),
    sidebar: path.join(TEMPLATES_DIR, 'partials', 'sidebar.html'),
    footer: path.join(TEMPLATES_DIR, 'partials', 'footer.html')
  };
  
  output += 'TEMPLATE FILES:\n';
  Object.entries(templateFiles).forEach(([name, filePath]) => {
    const exists = fs.existsSync(filePath);
    const fileSize = exists ? fs.statSync(filePath).size : 0;
    output += `${name}: ${exists ? 'EXISTS' : 'MISSING'} (${fileSize} bytes)\n`;
  });
  
  output += '\n';
  
  // 2. Check content files for platform "suno"
  const contentFiles = {
    config: path.join(CONTENT_DIR, 'suno', 'config.json'),
    parameters: path.join(CONTENT_DIR, 'suno', 'parameters.json'),
    tags: path.join(CONTENT_DIR, 'suno', 'tags.json'),
    examples: path.join(CONTENT_DIR, 'suno', 'examples.json'),
    bestPractices: path.join(CONTENT_DIR, 'suno', 'best-practices.json')
  };
  
  output += 'CONTENT FILES FOR SUNO:\n';
  Object.entries(contentFiles).forEach(([name, filePath]) => {
    const exists = fs.existsSync(filePath);
    const fileSize = exists ? fs.statSync(filePath).size : 0;
    output += `${name}: ${exists ? 'EXISTS' : 'MISSING'} (${fileSize} bytes)\n`;
  });
  
  output += '\n';
  
  // 3. Load content data
  output += 'LOADING CONTENT DATA:\n';
  try {
    // Load config
    const configPath = contentFiles.config;
    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    output += 'Config loaded successfully\n';
    
    // Sample content from config
    output += 'Platform name: ' + config.platform.name + '\n';
    output += 'Platform version: ' + config.platform.version + '\n';
    
    // Load parameters
    const paramsPath = contentFiles.parameters;
    if (fs.existsSync(paramsPath)) {
      const params = JSON.parse(fs.readFileSync(paramsPath, 'utf8'));
      output += 'Parameters loaded successfully\n';
      output += `Technical parameters count: ${params.technical_parameters.length}\n`;
    } else {
      output += 'Parameters file missing\n';
    }
    
    // Load tags
    const tagsPath = contentFiles.tags;
    if (fs.existsSync(tagsPath)) {
      const tags = JSON.parse(fs.readFileSync(tagsPath, 'utf8'));
      output += 'Tags loaded successfully\n';
      output += `Section tags count: ${tags.section_tags.length}\n`;
    } else {
      output += 'Tags file missing\n';
    }
    
    // Load examples
    const examplesPath = contentFiles.examples;
    if (fs.existsSync(examplesPath)) {
      const examples = JSON.parse(fs.readFileSync(examplesPath, 'utf8'));
      output += 'Examples loaded successfully\n';
      output += `Has basic example: ${examples.basic_example ? 'Yes' : 'No'}\n`;
    } else {
      output += 'Examples file missing\n';
    }
    
    // Load best practices
    const bpPath = contentFiles.bestPractices;
    if (fs.existsSync(bpPath)) {
      const bp = JSON.parse(fs.readFileSync(bpPath, 'utf8'));
      output += 'Best practices loaded successfully\n';
      output += `Best practices count: ${bp.best_practices.length}\n`;
    } else {
      output += 'Best practices file missing\n';
    }
    
    // 4. Combine all data
    const data = {
      ...config,
      parameters: fs.existsSync(paramsPath) ? JSON.parse(fs.readFileSync(paramsPath, 'utf8')) : {},
      tags: fs.existsSync(tagsPath) ? JSON.parse(fs.readFileSync(tagsPath, 'utf8')) : {},
      examples: fs.existsSync(examplesPath) ? JSON.parse(fs.readFileSync(examplesPath, 'utf8')) : {},
      bestPractices: fs.existsSync(bpPath) ? JSON.parse(fs.readFileSync(bpPath, 'utf8')) : {},
      current_year: new Date().getFullYear()
    };
    
    // 5. Try rendering templates
    output += '\nTEMPLATE RENDERING TEST:\n';
    
    // Load templates
    const baseTemplate = fs.readFileSync(templateFiles.base, 'utf8');
    const cheatsheetTemplate = fs.readFileSync(templateFiles.cheatsheet, 'utf8');
    const partials = {
      header: fs.readFileSync(templateFiles.header, 'utf8'),
      sidebar: fs.readFileSync(templateFiles.sidebar, 'utf8'),
      footer: fs.readFileSync(templateFiles.footer, 'utf8')
    };
    
    try {
      // First render cheatsheet content
      const cheatsheetContent = Mustache.render(cheatsheetTemplate, data);
      output += 'Cheatsheet template rendered successfully\n';
      output += `Rendered cheatsheet length: ${cheatsheetContent.length} characters\n`;
      
      // Then combine with base template
      const finalHtml = Mustache.render(
        baseTemplate, 
        {
          ...data,
          content: cheatsheetContent
        },
        partials
      );
      
      output += 'Final HTML rendered successfully\n';
      output += `Final HTML length: ${finalHtml.length} characters\n`;
      
      // Save sample HTML to debug 
      fs.writeFileSync(path.join(SRC_DIR, 'debug-output.html'), finalHtml, 'utf8');
      output += 'Sample HTML saved to debug-output.html\n';
    } catch (err) {
      output += `ERROR RENDERING TEMPLATES: ${err.message}\n`;
      output += err.stack + '\n';
    }
    
  } catch (err) {
    output += `ERROR LOADING CONTENT: ${err.message}\n`;
    output += err.stack + '\n';
  }
  
  // Save debug output
  fs.writeFileSync(DEBUG_OUTPUT, output, 'utf8');
  console.log(`Debug information saved to ${DEBUG_OUTPUT}`);
}

// Run the debug
debugTemplateRendering();