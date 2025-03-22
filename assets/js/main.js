/**
 * Main JavaScript for AI Music Cheatsheet Template
 */

document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  
  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', function() {
      sidebar.classList.toggle('open');
      menuToggle.classList.toggle('active');
    });
  }
  
  // Close sidebar when clicking outside of it on mobile
  document.addEventListener('click', function(event) {
    if (sidebar && sidebar.classList.contains('open') && !sidebar.contains(event.target) && event.target !== menuToggle) {
      sidebar.classList.remove('open');
      menuToggle.classList.remove('active');
    }
  });
  
  // Tabs functionality
  const tabLinks = document.querySelectorAll('.tab');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabLinks.forEach(link => {
    link.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      
      // Remove active class from all tabs and content
      tabLinks.forEach(tab => tab.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Add active class to clicked tab and corresponding content
      this.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    });
  });
  
  // Code copy functionality
  const codeBlocks = document.querySelectorAll('pre');
  
  codeBlocks.forEach(block => {
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-button';
    copyButton.textContent = 'Copy';
    block.appendChild(copyButton);
    
    copyButton.addEventListener('click', function() {
      const code = block.querySelector('code') ? block.querySelector('code').innerText : block.innerText;
      navigator.clipboard.writeText(code).then(() => {
        copyButton.textContent = 'Copied!';
        setTimeout(() => {
          copyButton.textContent = 'Copy';
        }, 2000);
      }).catch(err => {
        console.error('Failed to copy: ', err);
        copyButton.textContent = 'Failed';
        setTimeout(() => {
          copyButton.textContent = 'Copy';
        }, 2000);
      });
    });
  });
  
  // Active state for sidebar links based on scroll position
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.sidebar-link');
  
  function setActiveNavLink() {
    const scrollPosition = window.scrollY;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  
  if (sections.length > 0 && navLinks.length > 0) {
    window.addEventListener('scroll', setActiveNavLink);
    setActiveNavLink(); // Set active on page load
  }
  
  // Search functionality
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  
  if (searchInput && searchResults) {
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();
      
      if (searchTerm.length < 2) {
        searchResults.innerHTML = '';
        searchResults.style.display = 'none';
        return;
      }
      
      // Get all searchable content
      const headings = document.querySelectorAll('h2, h3, h4');
      const resultItems = [];
      
      headings.forEach(heading => {
        const text = heading.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
          const id = heading.closest('section').id || heading.id;
          resultItems.push({
            text: heading.textContent,
            id: id,
            type: heading.tagName
          });
        }
      });
      
      // Display results
      if (resultItems.length > 0) {
        searchResults.innerHTML = '';
        resultItems.forEach(item => {
          const resultItem = document.createElement('a');
          resultItem.href = `#${item.id}`;
          resultItem.className = 'search-result-item';
          resultItem.textContent = item.text;
          resultItem.dataset.type = item.type;
          
          resultItem.addEventListener('click', function() {
            searchResults.style.display = 'none';
            searchInput.value = '';
          });
          
          searchResults.appendChild(resultItem);
        });
        searchResults.style.display = 'block';
      } else {
        searchResults.innerHTML = '<div class="no-results">No results found</div>';
        searchResults.style.display = 'block';
      }
    });
    
    // Close search results when clicking outside
    document.addEventListener('click', function(event) {
      if (event.target !== searchInput && event.target !== searchResults && !searchResults.contains(event.target)) {
        searchResults.style.display = 'none';
      }
    });
  }
  
  // Theme selector
  const themeSelector = document.getElementById('theme-selector');
  
  if (themeSelector) {
    themeSelector.addEventListener('change', function() {
      document.documentElement.setAttribute('data-theme', this.value);
      localStorage.setItem('preferred-theme', this.value);
    });
    
    // Set theme from localStorage if available
    const savedTheme = localStorage.getItem('preferred-theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
      themeSelector.value = savedTheme;
    }
  }
});