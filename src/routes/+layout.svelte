<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import Navbar from './Navbar.svelte';
	import './layout.scss'; // Your global styles

	import { onMount, onDestroy } from 'svelte';
	import Footer from './Footer.svelte';

	// --- Quantum Particle Animation Logic ---
	let canvasElement: HTMLCanvasElement | null = null;
	let animationInstance: any = null; // Store reference to the animation object if the library exposes one

	// Configuration for the particle animation (if the library allows)
	// Since the repo doesn't show explicit options, we'll use common parameters
	// and potentially modify the core animation logic if needed later.
	const particleConfig = {
		particleCount: 500, // Reduce particle density for subtlety
		// Use rgba with very low alpha for more transparency
		particleColor: 'rgba(200, 200, 200, 0.3)', // Light gray with 30% opacity for elegance
		// Use rgba with even lower alpha for links
		linkColor: 'rgba(180, 180, 180, 0.4)', // Light gray links with 8% opacity
		lineWidth: 1,
		linkDistance: 80, // Reduce link distance for subtlety
		velocity: 0.4 // Slightly slower speed
		// Add more config if the library supports it
	};

	// Function to initialize and start the animation
	const initQuantumParticles = () => {
		if (!canvasElement) {
			console.error('Canvas element for quantum particles not found.');
			return;
		}

		const canvas = canvasElement;
		const ctx = canvas.getContext('2d');
		if (!ctx) {
			console.error('Failed to get 2D context for quantum particles canvas.');
			return;
		}

		// --- Core Animation Logic (Based on common particle systems) ---
		// This is a simplified version. You might need to adapt this based on the actual library code.
		// The GitHub link provided doesn't show the *exact* implementation code,
		// so I'm creating a standard particle system structure.

		// Set canvas size to match window
		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		window.addEventListener('resize', resizeCanvas);
		resizeCanvas(); // Set initial size

		// Particle class (simplified)
		class Particle {
			x: number;
			y: number;
			vx: number;
			vy: number;
			originalSize: number;
			size: number;

			constructor() {
				this.x = Math.random() * canvas.width;
				this.y = Math.random() * canvas.height;
				// Add some initial velocity
				this.vx = (Math.random() - 0.5) * particleConfig.velocity;
				this.vy = (Math.random() - 0.5) * particleConfig.velocity;
				this.originalSize = Math.random() * 2.5 + 0.5; // Smaller size range: 0.5 to 2
				this.size = this.originalSize;
			}

			update() {
				// Update position
				this.x += this.vx;
				this.y += this.vy;

				// Bounce off edges
				if (this.x <= 0 || this.x >= canvas.width) this.vx = -this.vx;
				if (this.y <= 0 || this.y >= canvas.height) this.vy = -this.vy;

				// --- Time Dilation Effect (Conceptual) ---
				// This is a simple interpretation. You could link size or speed to mouse proximity.
				// For elegance, let's make particles slightly grow when moving faster (implies time dilation effect visually)
				// const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
				// this.size = this.originalSize + Math.min(speed * 0.1, 1); // Grow slightly with speed, capped

				// Or, make them grow when near the mouse (more interactive)
				// const mouseX = mousePos.x;
				// const mouseY = mousePos.y;
				// const distanceToMouse = Math.sqrt((this.x - mouseX) ** 2 + (this.y - mouseY) ** 2);
				// const maxDistance = 100; // Distance where effect starts
				// if (distanceToMouse < maxDistance) {
				//     this.size = this.originalSize + (1 - distanceToMouse / maxDistance) * 2; // Grow up to +2
				// } else {
				//     this.size = this.originalSize;
				// }
			}

			draw() {
				ctx.beginPath();
				ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
				// Use the configured particle color (which now has lower alpha)
				ctx.fillStyle = particleConfig.particleColor;
				ctx.fill();
			}
		}

		// Array to hold particles
		const particles: Particle[] = [];
		for (let i = 0; i < particleConfig.particleCount; i++) {
			particles.push(new Particle());
		}

		// Animation loop
		let animationFrameId: number;
		const animate = () => {
			// --- CRITICAL CHANGE: Clear with full transparency ---
			// Instead of a slightly opaque color that creates trails, clear with full transparency.
			// This ensures the background image shows through clearly each frame.
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			// Update and draw particles
			for (const p of particles) {
				p.update();
				p.draw();
			}

			// Draw links between nearby particles
			for (let i = 0; i < particles.length; i++) {
				for (let j = i + 1; j < particles.length; j++) {
					const dx = particles[i].x - particles[j].x;
					const dy = particles[i].y - particles[j].y;
					const distance = Math.sqrt(dx * dx + dy * dy);

					if (distance < particleConfig.linkDistance) {
						// Calculate link opacity based on distance (closer = more opaque, further = less)
						// Use the base alpha from config, but ensure it's the final opacity
						const baseAlpha = parseFloat(particleConfig.linkColor.split(',')[3]); // Get base alpha from config
						const normalizedDistance = distance / particleConfig.linkDistance; // Value between 0 and 1
						const alpha = baseAlpha * (1 - normalizedDistance); // Fade based on distance and base alpha

						ctx.beginPath();
						// Set the stroke style with the calculated alpha
						// Extract RGB from the config string
						const colorMatch = particleConfig.linkColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/);
						if (colorMatch) {
							const r = parseInt(colorMatch[1]);
							const g = parseInt(colorMatch[2]);
							const b = parseInt(colorMatch[3]);
							ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
						} else {
							// Fallback if the regex fails
							ctx.strokeStyle = `rgba(180, 180, 180, ${alpha})`;
						}
						ctx.lineWidth = particleConfig.lineWidth;
						ctx.moveTo(particles[i].x, particles[i].y);
						ctx.lineTo(particles[j].x, particles[j].y);
						ctx.stroke();
					}
				}
			}

			animationFrameId = requestAnimationFrame(animate);
		};

		// Start the animation
		animate();

		// Store the animation stop function for cleanup
		animationInstance = {
			stop: () => {
				cancelAnimationFrame(animationFrameId);
				window.removeEventListener('resize', resizeCanvas);
			}
		};
	};


	onMount(() => {
		// Initialize the particle animation when the component mounts
		initQuantumParticles();
	});

	onDestroy(() => {
		// Stop the animation and clean up when the component unmounts
		if (animationInstance && animationInstance.stop) {
			animationInstance.stop();
		}
		// Note: Removing window listener is handled inside animationInstance.stop now
	});

	let { children } = $props();
</script>

<!-- Container for the background image and effects -->
<div class="layout-background-container">
	<!-- Target div for the Quantum Particle Animation Canvas -->
	<canvas
		id="quantum-particles-canvas"
		class="quantum-particles-canvas"
		bind:this={canvasElement}
	></canvas>
	<div class="background-overlay"></div>
</div>


<div class="app">
	<Navbar />

	<main>
		{@render children()}
	</main>

	<Footer />
</div>

<style>
    /* Style for the background container */
    .layout-background-container {
        position: fixed; /* Fixed to cover the entire viewport behind the main content */
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1; /* Behind the app content and the overlay */
        pointer-events: none; /* Allow clicks to pass through to content */

        /* Apply the background image here */
        background-image: url('/pexels-life-of-pix-7919.jpg'); /* Update path */
        background-size: cover;
        background-position: center;
        background-attachment: fixed; /* Optional: for parallax effect */
    }

    /* Quantum particles canvas */
    .quantum-particles-canvas {
        width: 100%;
        height: 100%;
        position: absolute; /* Positioned relative to .layout-background-container */
        top: 0;
        left: 0;
        /* This canvas is now directly on top of the background image */
        /* It should be at the same z-level as the background or just above it */
        /* Since .layout-background-container is z-index: -2, */
        /* and .background-overlay (next) will be z-index: -1, */
        /* this canvas implicitly sits at z-index: -2 (same as bg) or slightly above (-1.9 if possible, handled by browser) */
        /* For our purposes, placing it inside the -2 container makes it effectively z-index: -2. */
        /* To ensure it's *above* the background image but *below* the overlay, */
        /* we need the overlay to be a separate element with z-index: -1. */
        /* This is achieved by moving the overlay div outside the container. */
        pointer-events: none; /* Allow clicks to pass through to content, important for interactions */
    }


    /* Style for the darkening/blur overlay - NOW A SEPARATE ELEMENT */
    .background-overlay {
        position: fixed; /* Fixed to cover the entire viewport */
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.65); /* Dark overlay */
        backdrop-filter: blur(12px); /* Blur effect */
        z-index: -1; /* Behind the app content (z:1), but above the background image (z:-2) and particles (in the z:-2 container) */
        pointer-events: none; /* Allow interaction with content */
    }


    .app {
        position: relative; /* Needed for children's z-index */
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        overflow-x: hidden; /* Prevent horizontal scroll if particles or bg extend slightly */
        z-index: 1; /* Ensure app content is above the background layers */
    }

    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        /*padding: 1rem 0;*/
        width: 100%;
        /*max-width: 64rem;*/
        margin: 0 auto;
        box-sizing: border-box;
        /* Ensure content is above background layers */
        position: relative;
        z-index: 2; /* Above particles and overlay */
    }
</style>