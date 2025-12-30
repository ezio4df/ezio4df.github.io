<script lang="ts">
	import { onMount, onDestroy, tick } from 'svelte';

	const sections = [
		{ id: 'home', label: 'Home' },
		{ id: 'projects', label: 'Projects' },
		{ id: 'timeline', label: 'Timeline' },
		{ id: 'skills', label: 'Skills' },
		{ id: 'about', label: 'About' },
		{ id: 'contact', label: 'Contact' }
	];

	let activeSectionId = 'home';
	let underlineStyle = 'width: 0; left: 0;';
	let underlineAnimationClass = 'underline-hidden';

	function updateActiveSectionFromHash() {
		const hash = window.location.hash.substring(1);
		if (sections.some(section => section.id === hash)) {
			activeSectionId = hash;
			updateUnderlinePosition(activeSectionId);
		}
	}

	function scrollToSection(sectionId: string) {
		const targetElement = document.getElementById(sectionId);
		if (targetElement) {
			history.pushState(null, null, `#${sectionId}`);
			targetElement.scrollIntoView({ behavior: 'smooth' });
		}
	}

	async function updateUnderlinePosition(targetId: string) {
		await tick();

		const activeLink = document.querySelector(`a[data-nav-link="${targetId}"]`);
		if (activeLink) {
			const linkRect = activeLink.getBoundingClientRect();
			const navContainer = document.querySelector('.nav-links');
			if (navContainer) {
				const containerRect = navContainer.getBoundingClientRect();
				const left = linkRect.left - containerRect.left;
				const width = linkRect.width;

				underlineStyle = `width: ${width}px; left: ${left}px;`;
				underlineAnimationClass = 'underline-visible underline-animate';
			}
		} else {
			underlineAnimationClass = 'underline-hidden';
		}
	}

	function handlePopState() {
		updateActiveSectionFromHash();
	}

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
		let currentSection = 'home';
		const scrollPosition = window.scrollY + 100;

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
			if (window.location.hash.substring(1) !== currentSection) {
				history.replaceState(null, null, `#${currentSection}`);
			}
		}
	}

	onMount(() => {
		// Set initial hash to #home if no hash exists
		if (!window.location.hash) {
			history.replaceState(null, null, '#home');
		}

		updateActiveSectionFromHash();

		window.addEventListener('popstate', handlePopState);
		window.addEventListener('scroll', handleScroll, { passive: true });

		onDestroy(() => {
			window.removeEventListener('popstate', handlePopState);
			window.removeEventListener('scroll', handleScroll);
		});
	});
</script>

<style lang="scss">
  :global(html) {
    scroll-behavior: smooth;
  }

  :global(:root) {
    --navbar-height: calc(0.5rem * 2 + 3rem + 1px);
  }

  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    padding: 0.5rem 0;
    backdrop-filter: blur(12px);
    background-color: rgba(15, 15, 15, 0.4);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transition: background-color 0.3s ease;

    .nav-container {
      max-width: 64rem;
      margin: 0 auto;
      padding-left: 1rem;
      padding-right: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .nav-links {
      display: flex;
      gap: 1.5rem;
      list-style: none;
      margin: 0;
      padding: 0;
      position: relative;

      li {
        position: relative;
      }

      a {
        padding: 0.5rem 0.75rem;
        font-size: 0.875rem;
        font-weight: 800;
        color: #d1d5db;
        text-decoration: none;
        position: relative;
        z-index: 10;
        display: block;

        &:hover {
          color: var(--color-accent-primary, #6366f1);
        }

        &.active {
          color: var(--color-accent-primary, #6366f1);
        }
      }
    }

    .underline {
      position: absolute;
      bottom: 0.5rem;
      height: 2px;
      background-color: var(--color-accent-primary, #6366f1);
      transition: none;
      z-index: 0;
      border-radius: 2px;

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
        transition: left 0.4s cubic-bezier(0.22, 0.61, 0.36, 1),
        width 0.4s cubic-bezier(0.22, 0.61, 0.36, 1),
        transform 0.4s cubic-bezier(0.22, 0.61, 0.36, 1);
      }
    }
  }
</style>

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
			<div class="underline {underlineAnimationClass}" style={underlineStyle}></div>
		</ul>
	</div>
</nav>