<svelte:head>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</svelte:head>


<script lang="ts">
	// Timeline data
	const timelineItems = [
		// {
		// 	id: 12,
		// 	title: 'lorem ipsum',
		// 	subtitle: 'lorem ipsum',
		// 	description: 'lorem ipsum',
		// 	startDate: '2025-06',
		// 	endDate: null,
		// 	icon: 'code'
		// },
		{
			id: 7,
			title: 'China Scholastic Competency Assessment (CSCA)',
			subtitle: 'Academic',
			description: 'Completed the CSCA exam administered by the China Scholarship Council',
			startDate: null,
			endDate: '2025-12',
			icon: 'school'
		},
		{
			id: 6,
			title: 'SAT Exam',
			subtitle: 'Academic',
			description: 'Achieved a score of 1360 on the SAT taken on October 4, 2025',
			startDate: null,
			endDate: '2025-10',
			icon: 'school'
		},
		{
			id: 5,
			title: 'IELTS Exam',
			subtitle: 'Language',
			description: 'Achieved an overall band score of 7 on the IELTS Academic test',
			startDate: null,
			endDate: '2025-08',
			icon: 'language'
		},
		{
			id: 4,
			title: 'Machine Learning Exploration',
			subtitle: 'Self-Study',
			description: 'Began learning machine learning basics and experimenting with small projects. Gradually shifted focus away from full-stack web development toward AI, which became the primary technical interest',
			startDate: '2025-02',
			endDate: null,
			icon: 'brain'
		},
		{
			id: 3,
			title: 'Higher Secondary School',
			subtitle: 'Academic',
			description: 'Completed higher secondary education and obtained the national HSC.',
			startDate: null,
			endDate: '2024-12',
			icon: 'school'
		},
		{
			id: 2,
			title: 'Secondary School',
			subtitle: 'Academic',
			description: 'Completed secondary school education and obtained the national Secondary School Certificate',
			startDate: null,
			endDate: '2022-12',
			icon: 'school'
		},
		{
			id: 1,
			title: 'Stack Overflow Contributions',
			subtitle: 'Q&A',
			description: 'Started by using Stack Overflow to solve coding issues in React, JavaScript, and HTML. Later began answering questions during the early pandemic months, eventually posting 100+ answers and earning ~4k rep',
			startDate: '2020-01',
			endDate: '2020-10',
			icon: 'code'
		},
		{
			id: 0,
			title: 'Started Programming',
			subtitle: '',
			description: 'Started tinkering with HTML and basic scripting in free time as a hobby. Tried PHP for a while, deepened work with JavaScript (frontend and Node.js backend), then added Python. Focused mostly on learning full-stack web projects',
			startDate: null,
			endDate: '2017-01',
			icon: 'code'
		}
	];

	function formatDate(dateString: string) {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
	}

	function calculateDuration(start: string, end: string): string | null {
		if (!end) return null;

		const [startYear, startMonth] = start.split('-').map(Number);
		const [endYear, endMonth] = end.split('-').map(Number);

		// Convert to total months since year 0
		const startTotalMonths = startYear * 12 + (startMonth - 1);
		const endTotalMonths = endYear * 12 + (endMonth - 1);

		// Add 1 to make it inclusive (Jan to Oct = 10 months, not 9)
		const totalMonths = endTotalMonths - startTotalMonths + 1;

		const years = Math.floor(totalMonths / 12);
		const months = totalMonths % 12;

		let result = '';
		if (years > 0) result += `${years} yr${years > 1 ? 's' : ''} `;
		if (months > 0) result += `${months} mo${months > 1 ? 's' : ''}`;

		return result.trim() || '1 mo';
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
							{#if item.startDate && item.endDate}
								{formatDate(item.startDate)} - {formatDate(item.endDate)}
								<div class="duration">{calculateDuration(item.startDate, item.endDate)}</div>
							{:else if item.startDate && !item.endDate}
								{formatDate(item.startDate)} - Present
							{:else if !item.startDate && item.endDate}
								{formatDate(item.endDate)}
							{:else}
								<span class="unknown-date">Date not specified</span>
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

  $vertical-line-width: 6px;
  $card-space-from-line: 40px;


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
    max-width: 896px;
    margin: 0 auto;
  }

  /* Vertical line */
  .timeline::after {
    content: '';
    position: absolute;
    width: $vertical-line-width;
    background: var(--color-accent-primary);
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: - math.div($vertical-line-width, 2);
    border-radius: 3px;
  }

  .timeline-item {
    position: relative;
    width: 50%;
    padding: 20px $card-space-from-line 80px;

    &.left {
      left: 0;
    }

    &.right {
      left: 50%;
    }
  }


  .timeline-content {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .timeline-card {
    background: var(--color-bg-card);
    padding: 1.5rem;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);

    // border side
    .timeline-item.left & {
      border-left: 3px solid var(--color-accent-primary);
    }

    .timeline-item.right & {
      border-right: 3px solid var(--color-accent-primary);
    }

    // main title
    h3 {
      color: var(--color-text-primary);
      margin: 0 0 0.5rem 0;
      font-size: 1.4rem;
    }

    // sub title
    h4 {
      color: var(--color-accent-primary);
      margin: 0 0 1rem 0;
      font-size: 1rem;
      font-weight: 400;
    }

    // detailed paragraph
    p {
      color: var(--color-text-secondary);
      margin: 0;
      line-height: 1.5;
    }
  }


  .timeline-date {
    text-align: center;
    padding: 0.75rem;
    background: var(--color-bg-tertiary);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
    color: var(--color-text-primary);
    font-weight: 600;

    position: absolute;
    top: 1rem;
    width: 100%;

    .timeline-item.left & {
      left: calc(100% + #{$card-space-from-line * 2});
    }

    .timeline-item.right & {
      left: calc(-100% - #{$card-space-from-line * 2});
    }

    .duration {
      font-size: 0.9rem;
      font-weight: bold;
      color: var(--color-accent-secondary);
      margin-top: 0.2rem;
    }
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
    margin-left: - math.div($size, 2);
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

    i {
      color: var(--color-bg-primary);
      font-size: 1.3rem;
    }
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

