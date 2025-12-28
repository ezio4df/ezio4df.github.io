<!-- Navbar.svelte -->
<script>
  import { onMount, onDestroy, tick } from 'svelte';
  import { page } from '$app/state'; // For SvelteKit 2.0+, use $app/navigation if needed for older versions

  // Define your sections
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'skills', label: 'Skills' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  let activeSectionId = 'home'; // Default active section
  let underlineStyle = 'width: 0; left: 0;';
  let underlineAnimationClass = 'underline-hidden';

  // Function to update the active section based on URL hash
  function updateActiveSectionFromHash() {
    const hash = window.location.hash.substring(1);
    if (sections.some(section => section.id === hash)) {
      activeSectionId = hash;
      updateUnderlinePosition(activeSectionId);
    }
  }

  // Function to smoothly scroll to a section and update the hash
  function scrollToSection(sectionId) {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      // Prevent default behavior of anchor links if using them directly
      // Use history.pushState to update the hash without triggering popstate immediately
      history.pushState(null, null, `#${sectionId}`);
      targetElement.scrollIntoView({ behavior: 'smooth' });
      // The popstate event listener will handle updating activeSectionId
    }
  }

  // Function to update the underline position
  async function updateUnderlinePosition(targetId) {
    // Trigger a tick to ensure DOM is updated if needed
    await tick();

    const activeLink = document.querySelector(`a[data-nav-link="${targetId}"]`);
    if (activeLink) {
      const linkRect = activeLink.getBoundingClientRect();
      const navRect = activeLink.closest('nav').getBoundingClientRect();
      const left = linkRect.left - navRect.left;
      const width = linkRect.width;

      underlineStyle = `width: ${width}px; left: ${left}px;`;
      underlineAnimationClass = 'underline-visible underline-animate';
    } else {
      // If link is not found, hide the underline
      underlineAnimationClass = 'underline-hidden';
    }
  }

  // Handle popstate event (when browser back/forward is used or hash changes)
  function handlePopState() {
    updateActiveSectionFromHash();
  }

  // Handle scroll events to potentially update active section based on viewport
  let ticking = false;
  function handleScroll() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateActiveSectionBasedOnScroll();
        ticking = false;
      });
      ticking = true;
    }
  }

  function updateActiveSectionBasedOnScroll() {
    // Simple logic: find the first section that is at the top of the viewport
    // You might want a more sophisticated intersection observer for better UX
    let currentSection = 'home'; // Default
    const scrollPosition = window.scrollY + 100; // Add offset

    for (let i = sections.length - 1; i >= 0; i--) {
      const sectionId = sections[i].id;
      const element = document.getElementById(sectionId);
      if (element && element.offsetTop <= scrollPosition) {
        currentSection = sectionId;
        break;
      }
    }

    if (currentSection !== activeSectionId) {
      activeSectionId = currentSection;
      updateUnderlinePosition(activeSectionId);
      // Update URL hash if necessary, but avoid triggering popstate immediately
      // Only update if it's different from the current hash
      if (window.location.hash.substring(1) !== currentSection) {
         history.replaceState(null, null, `#${currentSection}`);
      }
    }
  }


  onMount(() => {
    // Initialize based on current hash
    updateActiveSectionFromHash();

    // Add event listeners
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup on unmount
    onDestroy(() => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('scroll', handleScroll);
    });
  });

</script>

<style lang="scss">
  /* Reference Tailwind CSS theme variables and utilities */
  @reference 'tailwindcss';

  :global(html) {
    scroll-behavior: smooth; /* Optional: for smooth scrolling */
  }

  /* Spacer element to push content down */
  .navbar-spacer {
    height: calc(1rem * 2 + 1.5rem + 2px); /* Match the height of the navbar (padding-top + padding-bottom + border-bottom) */
    width: 100%;
    display: block; /* Ensure it takes up space */
  }

  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 50; /* Ensure it's above other content */
    padding: 1rem 0;
    backdrop-filter: blur(12px); /* Glassmorphism effect */
    background-color: rgba(15, 15, 15, 0.7); /* Semi-transparent dark bg */
    border-bottom: 1px solid rgba(255, 255, 255, 0.1); /* Subtle border */
    transition: background-color 0.3s ease; /* Smooth transition for state changes if needed */

    .nav-container {
      max-width: 1200px; /* Replace container max-width */
      margin: 0 auto;    /* Replace container mx-auto */
      padding-left: 1rem;  /* Replace px-4 */
      padding-right: 1rem; /* Replace px-4 */
      display: flex;       /* Replace flex */
      justify-content: space-between; /* Replace justify-between */
      align-items: center; /* Replace items-center */
    }

    .logo {
      font-size: 1.125rem; /* Replace text-xl */
      font-weight: 700;    /* Replace font-bold */
      color: #f3f4f6;      /* Replace text-gray-100 (adjust color as needed) */
      cursor: pointer;     /* Replace cursor-pointer */
      font-family: var(--font-mono); /* Use your defined monospace font */
      transition: color 0.2s ease;

      &:hover {
        color: var(--color-accent-primary, #6366f1); /* Hover effect */
      }
    }

    .nav-links {
      display: flex;       /* Replace flex */
      gap: 1.5rem;         /* Replace space-x-6 (gap handles spacing between items) */
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        position: relative; // Needed for underline positioning
      }

      a {
        padding: 0.5rem 0.75rem; /* Replace px-3 py-2 */
        font-size: 0.875rem;     /* Replace text-sm */
        font-weight: 500;        /* Replace font-medium */
        color: #d1d5db;          /* Replace text-gray-300 (adjust color as needed) */
        text-decoration: none;   /* Replace no-underline */
        position: relative;      /* For z-index */
        z-index: 10;             /* Replace z-10 */
        display: block;

        &[data-nav-link='home'] { /* Example specific style if needed */
          // ...
        }

        &:hover {
          color: var(--color-accent-primary, #6366f1); /* Hover effect */
        }

        &.active {
          color: var(--color-accent-primary, #6366f1); /* Active link color */
        }
      }
    }

    /* Underline styles */
    .underline {
      position: absolute;
      bottom: 0.5rem; /* Adjust vertical position */
      height: 2px;
      background-color: var(--color-accent-primary, #6366f1);
      transition: none; /* We control animation via class */
      z-index: 0;
      border-radius: 2px; /* Rounded edges */

      &.underline-hidden {
        opacity: 0;
        transform: scaleX(0);
        transform-origin: left center;
      }

      &.underline-visible {
         opacity: 1;
         transform-origin: left center;
      }

      &.underline-animate {
        /* Springy animation using cubic-bezier */
        /* Adjust these values for different "springiness" */
        transition: left 0.4s cubic-bezier(0.22, 0.61, 0.36, 1),
                    width 0.4s cubic-bezier(0.22, 0.61, 0.36, 1),
                    transform 0.4s cubic-bezier(0.22, 0.61, 0.36, 1);
      }
    }
  }

  /* Optional: Style for when the page is scrolled */
  /* You might want to add a class to nav based on scroll position */
  /*
  nav.scrolled {
    background-color: rgba(15, 15, 15, 0.9); // More opaque when scrolled
  }
  */
</style>

<!-- Spacer element -->
<div class="navbar-spacer"></div>

<!-- Actual navbar -->
<nav>
  <div class="nav-container">
    <div class="logo" on:click={() => scrollToSection('home')}>
      ezio4df
    </div>
    <ul class="nav-links">
      {#each sections as section (section.id)}
        <li>
          <a
            href="#"
            data-nav-link={section.id}
            class={activeSectionId === section.id ? 'active' : ''}
            on:click|preventDefault={() => scrollToSection(section.id)}
          >
            {section.label}
          </a>
        </li>
      {/each}
      <!-- The underline div -->
      <div class="underline {underlineAnimationClass}" style={underlineStyle}></div>
    </ul>
  </div>
</nav>