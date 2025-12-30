<svelte:head>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</svelte:head>


<script lang="ts">
	// Timeline data
	const timelineItems = [
		{
			id: 12,
			title: 'Open-Source Contribution',
			subtitle: 'Collaborative Development',
			description: 'Contributed documentation improvements and small fixes to an open-source project.',
			startDate: '2025-06',
			endDate: null,
			icon: 'code'
		},
		{
			id: 11,
			title: 'Podcast Experiment',
			subtitle: 'Audio Storytelling',
			description: 'Produced a short podcast series featuring interviews about creative hobbies and side projects.',
			startDate: '2025-01',
			endDate: '2025-04',
			icon: 'microphone-lines'
		},
		{
			id: 10,
			title: 'Environmental Cleanup',
			subtitle: 'Community Service',
			description: 'Joined monthly cleanup events targeting riverbanks and public parks.',
			startDate: '2024-05',
			endDate: '2024-10',
			icon: 'recycle'
		},
		{
			id: 9,
			title: 'Chess Tournament Series',
			subtitle: 'Competitive Play',
			description: 'Participated in multiple local chess tournaments, focusing on improving strategic thinking.',
			startDate: '2024-03',
			endDate: '2024-11',
			icon: 'chess'
		},
		{
			id: 8,
			title: 'Local History Archive',
			subtitle: 'Volunteer Research',
			description: 'Helped digitize and organize historical documents for a neighborhood archive project.',
			startDate: '2024-02',
			endDate: '2024-06',
			icon: 'archive'
		},
		{
			id: 7,
			title: 'Freelance Illustration',
			subtitle: 'Creative Commissions',
			description: 'Created digital illustrations for small online clients, focusing on icons and simple character designs.',
			startDate: '2023-09',
			endDate: '2023-12',
			icon: 'pen-ruler'
		},
		{
			id: 6,
			title: 'Science Fair Entry',
			subtitle: 'Experimental Research',
			description: 'Conducted an experiment on plant growth under different lighting conditions and presented the results.',
			startDate: '2023-06',
			endDate: '2023-08',
			icon: 'flask'
		},
		{
			id: 5,
			title: 'Mobile App Prototype',
			subtitle: 'Personal Tech Experiment',
			description: 'Designed and prototyped a simple mobile app to track habits and visualize daily progress.',
			startDate: '2023-01',
			endDate: '2023-04',
			icon: 'mobile'
		},
		{
			id: 4,
			title: 'Language Immersion',
			subtitle: 'Self-Directed Study',
			description: 'Dedicated several months to learning a new language through daily practice and conversation exchanges.',
			startDate: '2022-12',
			endDate: '2023-05',
			icon: 'globe'
		},
		{
			id: 3,
			title: 'Robotics Club',
			subtitle: 'Team-Based Engineering',
			description: 'Worked in a small team to build and program a line-following robot for a regional competition.',
			startDate: '2022-04',
			endDate: '2022-10',
			icon: 'robot'
		},
		{
			id: 2,
			title: 'Short Film Production',
			subtitle: 'Independent Creative Work',
			description: 'Planned, filmed, and edited a short narrative film that was screened at a small local showcase.',
			startDate: '2021-11',
			endDate: '2022-02',
			icon: 'film'
		},
		{
			id: 1,
			title: 'Community Garden Project',
			subtitle: 'Urban Sustainability Initiative',
			description: 'Collaborated with local residents to design and maintain a shared garden space promoting sustainable food practices.',
			startDate: '2021-03',
			endDate: '2021-09',
			icon: 'leaf'
		}
	];

	// Function to format date
	function formatDate(dateString: string) {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
	}

	// Function to calculate duration
	function calculateDuration(start: string, end: string) {
		if (!end) return null;

		const startDate = new Date(start);
		const endDate = new Date(end);

		let years = endDate.getFullYear() - startDate.getFullYear();
		let months = endDate.getMonth() - startDate.getMonth();

		if (months < 0) {
			years--;
			months += 12;
		}

		let result = '';
		if (years > 0) result += `${years} yr${years > 1 ? 's' : ''} `;
		if (months > 0) result += `${months} mo${months > 1 ? 's' : ''}`;

		return result.trim();
	}
</script>

<section id="timeline">
	<div class="container">
		<h1>Timeline</h1>

		<div class="timeline">
			{#each timelineItems as item, index (item.id)}
				<div class="timeline-item {index % 2 === 0 ? 'left' : 'right'}">
					<div class="timeline-content">
						<!-- Details side (left) -->
						<div class="timeline-card">
							<h3>{item.title}</h3>
							<h4>{item.subtitle}</h4>
							<p>{@html item.description}</p>
						</div>
						<!-- Date side (right) -->
						<div class="timeline-date">
							{formatDate(item.startDate)} - {item.endDate ? formatDate(item.endDate) : 'Present'}
							{#if item.endDate}
								<div class="duration">{calculateDuration(item.startDate, item.endDate)}</div>
							{/if}
						</div>
					</div>
					<div class="timeline-marker">
						<i class="{`fa-solid fa-${item.icon}`}"></i>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
  @use "sass:math";

  section {
    padding: var(--navbar-height) 0;
    min-height: 100vh;
    background: rgba(26, 26, 26, 0.7);
    backdrop-filter: blur(6px);
  }

  .container {
    max-width: var(--page-max-width);
    padding: 2rem;
  }

  h1 {
    text-align: center;
    margin-bottom: 3rem;
    color: var(--color-text-primary);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
    font-size: 2.5rem;
  }

  .timeline {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
  }

  /* Vertical line */
  .timeline::after {
    content: '';
    position: absolute;
    width: 6px;
    background: var(--color-accent-primary);
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
    border-radius: 3px;
  }

  .timeline-item {
    position: relative;
    width: 50%;
    padding: 20px 40px;
  }

  .timeline-item.left {
    left: 0;
  }

  .timeline-item.right {
    left: 50%;
  }

  .timeline-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .timeline-card {
    background: var(--color-bg-card);
    padding: 1.5rem;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);

    .timeline-item.left & {
      border-left: 3px solid var(--color-accent-primary);
    }

    .timeline-item.right & {
      border-right: 3px solid var(--color-accent-primary);
    }
  }

  .timeline-card h3 {
    color: var(--color-text-primary);
    margin: 0 0 0.5rem 0;
    font-size: 1.4rem;
  }

  .timeline-card h4 {
    color: var(--color-accent-primary);
    margin: 0 0 1rem 0;
    font-size: 1rem;
    font-weight: 400;
  }

  .timeline-card p {
    color: var(--color-text-secondary);
    margin: 0;
    line-height: 1.6;
  }

  .timeline-date {
    text-align: center;
    padding: 1rem;
    background: var(--color-bg-tertiary);
    border-radius: var(--border-radius);
    color: var(--color-text-primary);
    font-weight: 600;
  }

  .duration {
    font-size: 0.8rem;
    font-weight: bold;
    color: var(--color-accent-secondary);
    margin-top: 0.5rem;
  }

  .timeline-marker {
    $size: 54px;

    position: absolute;
    width: $size;
    height: $size;
    background: var(--color-accent-primary);
    border: 4px solid var(--color-bg-primary);
    border-radius: 50%;
    top: 40px;
    margin-left: - math.div($size, 2);;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;

    .timeline-item.left > & {
      left: 100%;
    }

    .timeline-item.right > & {
      left: 0%;
    }
  }

  .timeline-marker i {
    color: var(--color-bg-primary);
    font-size: 1.3rem;
  }

  /* Responsive styles */
  @media (max-width: 768px) {
    .timeline::after {
      left: 31px;
    }

    .timeline-item {
      width: 100%;
      padding-left: 70px;
      padding-right: 25px;
      left: 0 !important;
    }

    .timeline-content {
      align-items: flex-start;
    }

    .timeline-card {
      width: 100%;
    }

    .timeline-date {
      width: 100%;
      text-align: left;
    }

    .timeline-marker {
      left: 31px;
      margin-left: -12px;
    }
  }
</style>

