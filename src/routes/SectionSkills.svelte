<script lang="ts">
	const skills = [
		// ————— Core Languages —————
		{ name: 'Python', icon: 'python', category: 'Language', proficiency: 5 },
		{ name: 'JavaScript', icon: 'javascript', category: 'Language', proficiency: 4 },
		{ name: 'NodeJS', icon: 'nodejs', category: 'Language', proficiency: 4 },
		{ name: 'TypeScript', icon: 'typescript', category: 'Language', proficiency: 4 }, // You said it's a strong point
		{ name: 'PHP', icon: 'php', category: 'Language', proficiency: 2 },

		// ————— AI / ML —————
		{ name: 'Machine Learning', icon: 'machine-learning-06-svgrepo-com', category: 'AI/ML', proficiency: 4 },
		{ name: 'Deep Learning', icon: 'deep-learning-svgrepo-com', category: 'AI/ML', proficiency: 3 },
		{ name: 'PyTorch', icon: 'pytorch', category: 'AI/ML', proficiency: 3 },
		{ name: 'Scikit-learn', icon: 'scikitlearn', category: 'AI/ML', proficiency: 3 },
		{ name: 'Pandas', icon: 'pandas', category: 'AI/ML', proficiency: 4 },
		{ name: 'NumPy', icon: 'numpy', category: 'AI/ML', proficiency: 4 },
		{ name: 'Matplotlib', icon: 'matplotlib', category: 'AI/ML', proficiency: 2 },
		{ name: 'OpenCV', icon: 'opencv', category: 'AI/ML', proficiency: 3 },

		// ————— Data & Scraping —————
		{ name: 'Data Mining', icon: 'data-mining', category: 'Data', proficiency: 4 }, // Group Puppeteer + Selenium under this
		{ name: 'SQL (mysql + sqlite)', icon: 'mysql', category: 'Data', proficiency: 4 }, // Covers SQLite + MySQL
		{ name: 'MongoDB', icon: 'mongodb', category: 'Database', proficiency: 2 },

		// ————— Frontend —————
		{ name: 'React', icon: 'react', category: 'Frontend', proficiency: 4 },
		{ name: 'Next.js', icon: 'nextjs', category: 'Frontend', proficiency: 3 }, // Rusty but deep past experience → Level 3
		{ name: 'Sass', icon: 'sass', category: 'Frontend', proficiency: 4 }, // You said "strongly known"
		{ name: 'Tailwind CSS', icon: 'tailwindcss', category: 'Frontend', proficiency: 2 },

		// ————— Backend & APIs —————
		{ name: 'GraphQL', icon: 'graphql', category: 'Backend', proficiency: 3 }, // Used well, can refresh quickly
		{ name: 'FastAPI', icon: 'fastapi', category: 'Backend', proficiency: 3 },

		// ————— Tools —————
		{ name: 'Git', icon: 'git', category: 'Tools', proficiency: 5 },
		// { name: 'GitHub', icon: 'github', category: 'Tools', proficiency: 4 },
		{ name: 'Docker', icon: 'docker', category: 'DevOps', proficiency: 3 }, // Include if you’ve containerized *anything*
		{ name: 'Bash', icon: 'bash', category: 'Tools', proficiency: 2 }, // Represents shell scripting
		{ name: 'LaTeX', icon: 'latex', category: 'Tools', proficiency: 3 } // Valuable for research
	];

	function getSegmentColor(proficiency: number, segmentIndex: number) {
		if (segmentIndex < proficiency) {
			if (proficiency === 1) return '#38BDF8';
			if (proficiency === 2) return '#06B6D4';
			if (proficiency === 3) return '#34D399';
			if (proficiency === 4) return '#10B981';
			if (proficiency === 5) return '#16e3a4';
		}
		return 'rgba(255, 255, 255, 0.05)';
	}

	function getArcPath(segmentIndex: number, totalSegments = 5, gap = 18) {
		const segmentAngle = 360 / totalSegments;
		const startAngle = (-segmentIndex * segmentAngle + (180 - segmentAngle / 2)) % 360;
		const endAngle = (startAngle + segmentAngle) % 360;

		// Add small gap between segments
		const adjustedStartAngle = startAngle + gap / 2;
		const adjustedEndAngle = endAngle - gap / 2;

		// Convert degrees to radians
		const startRad = (adjustedStartAngle - 90) * Math.PI / 180;
		const endRad = (adjustedEndAngle - 90) * Math.PI / 180;

		// Calculate start and end points
		const cx = 50, cy = 50, r = 40;
		const startX = cx + r * Math.cos(startRad);
		const startY = cy + r * Math.sin(startRad);
		const endX = cx + r * Math.cos(endRad);
		const endY = cy + r * Math.sin(endRad);

		// Large arc flag (1 for arcs > 180°, 0 for arcs <= 180°)
		const largeArcFlag = 0;

		// Sweep flag (1 for clockwise, 0 for counter-clockwise)
		const sweepFlag = 1;

		return `M${startX},${startY} A${r},${r} 0 ${largeArcFlag},${sweepFlag} ${endX},${endY}`;
	}
</script>

<section id="skills">
	<div class="container">
		<h1>Skills</h1>
		<div class="skills-grid">
			{#each skills as skill, i (skill.name)}
				<div class="skill-item">
					<div class="skill-icon-container">
						<svg class="skill-svg" viewBox="0 0 100 100">
							<path
								d="{getArcPath(0)}"
								fill="none"
								stroke="{getSegmentColor(skill.proficiency, 0)}"
								stroke-width="7"
								stroke-linecap="round"
							/>
							<path
								d="{getArcPath(1)}"
								fill="none"
								stroke="{getSegmentColor(skill.proficiency, 1)}"
								stroke-width="7"
								stroke-linecap="round"
							/>
							<path
								d="{getArcPath(2)}"
								fill="none"
								stroke="{getSegmentColor(skill.proficiency, 2)}"
								stroke-width="7"
								stroke-linecap="round"
							/>
							<path
								d="{getArcPath(3)}"
								fill="none"
								stroke="{getSegmentColor(skill.proficiency, 3)}"
								stroke-width="7"
								stroke-linecap="round"
							/>
							<path
								d="{getArcPath(4)}"
								fill="none"
								stroke="{getSegmentColor(skill.proficiency, 4)}"
								stroke-width="7"
								stroke-linecap="round"
							/>
						</svg>
						<img
							src={`/skills/${skill.icon}.svg`}
							alt={skill.name}
							class="skill-icon"
						/>
					</div>
					<div class="skill-name">{skill.name}</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
  section {
    padding: var(--navbar-height) 2rem;
    background: rgba(150, 150, 150, 0.3);
    backdrop-filter: blur(20px);
    min-height: 100vh;
  }

  .container {
    max-width: var(--page-max-width);
    padding: 2rem;
  }

  h1 {
    text-align: center;
    margin-bottom: 3rem;
    color: var(--color-text-primary);
    font-size: 2.5rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 2.5rem 0.5rem;
    justify-items: center;
  }

  .skill-item {
    cursor: pointer;
    width: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
  }

  .skill-icon-container {
    position: relative;
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-radius: 100%;

    &:hover {
      transform: translateY(-8px);
      box-shadow: var(--shadow-lg);
    }
  }

  .skill-svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 120px;
    height: 120px;
    z-index: 1;
  }

  .skill-icon {
    width: 37%;
    height: 37%;
    object-fit: contain;
    filter: brightness(1.1);
    z-index: 2;
    position: relative;
  }

  .skill-name {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--color-text-primary);
    text-align: center;
    word-break: break-word;
    max-width: 100%;
    overflow-wrap: break-word;
    line-height: 1.3;
  }

  // Responsive adjustments
  @media (max-width: 768px) {
    .skills-grid {
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      gap: 2rem;
    }

    .skill-item {
      width: 120px;
    }

    .skill-icon-container {
      width: 90px;
      height: 90px;
    }

    .skill-svg {
      width: 90px;
      height: 90px;
    }

    .skill-icon {
      width: 45%;
      height: 45%;
    }

    .skill-name {
      font-size: 0.8rem;
    }
  }
</style>