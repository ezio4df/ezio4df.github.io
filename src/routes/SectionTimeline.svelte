<svelte:head>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</svelte:head>


<script>
	import { onMount } from 'svelte';

	// Timeline data
	const timelineItems = [
		{
			id: 1,
			title: 'Started Learning to Code',
			subtitle: 'Self-taught Beginnings',
			description: 'Began my journey in programming with PHP and JavaScript, spending countless hours learning the fundamentals of web development.',
			startDate: '2018-01',
			endDate: '2019-06',
			icon: 'code'
		},
		{
			id: 2,
			title: 'Advanced to Python',
			subtitle: 'Expanding Skill Set',
			description: 'Dove deep into Python programming, exploring its applications in web development and automation scripts.',
			startDate: '2019-07',
			endDate: '2020-08',
			icon: 'laptop-code'
		},
		{
			id: 3,
			title: 'High School Graduation (SSC)',
			subtitle: 'Dhaka, Bangladesh',
			description: 'Completed Secondary School Certificate with a GPA of 5.00, focusing on science stream.',
			startDate: '2020-09',
			endDate: '2022-03',
			icon: 'graduation-cap'
		},
		{
			id: 4,
			title: 'Higher Secondary (HSC)',
			subtitle: 'Dhaka, Bangladesh',
			description: 'Completed Higher Secondary education with a GPA of 4.83 (without optional) / 5.00 (with optional), preparing for university studies.',
			startDate: '2022-04',
			endDate: '2023-12',
			icon: 'school'
		},
		{
			id: 5,
			title: 'Gap Year',
			subtitle: 'Focused Learning Period',
			description: 'Took a year to intensify my knowledge in AI/ML/DL/RL and work on personal projects while preparing for university applications.',
			startDate: '2024-01',
			endDate: '2024-12',
			icon: 'brain'
		},
		{
			id: 6,
			title: 'Starting University',
			subtitle: 'BSc in Computer Science',
			description: 'Beginning my undergraduate studies with a focus on AI/ML research and development.',
			startDate: '2025-01',
			endDate: null, // null means ongoing
			icon: 'university'
		}
	];

	// Function to format date
	function formatDate(dateString) {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
	}

	// Function to calculate duration
	function calculateDuration(start, end) {
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

	// Function to get icon class
	function getIconClass(iconName) {
		return `fa-solid fa-${iconName}`;
	}

	// For responsiveness
	let isMobile = false;

	onMount(() => {
		const checkMobile = () => {
			isMobile = window.innerWidth < 768;
		};

		checkMobile();
		window.addEventListener('resize', checkMobile);

		return () => {
			window.removeEventListener('resize', checkMobile);
		};
	});
</script>

<section id="timeline">
	<div class="container">
		<h1>Timeline</h1>

		<div class="timeline">
			{#each timelineItems as item, index}
				<div class="timeline-item {index % 2 === 0 ? 'left' : 'right'}">
					<div class="timeline-content">
						{#if index % 2 === 0}
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
						{:else}
							<!-- Date side (left) -->
							<div class="timeline-date">
								{formatDate(item.startDate)} - {item.endDate ? formatDate(item.endDate) : 'Present'}
								{#if item.endDate}
									<div class="duration">{calculateDuration(item.startDate, item.endDate)}</div>
								{/if}
							</div>
							<!-- Details side (right) -->
							<div class="timeline-card">
								<h3>{item.title}</h3>
								<h4>{item.subtitle}</h4>
								<p>{@html item.description}</p>
							</div>
						{/if}
					</div>
					<div class="timeline-marker">
						<i class="{getIconClass(item.icon)}"></i>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
    section {
        padding: var(--navbar-height) 0;
        min-height: 100vh;
        background: var(--color-bg-secondary);
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
        border-left: 3px solid var(--color-accent-primary);
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
        position: absolute;
        width: 24px;
        height: 24px;
        background: var(--color-accent-primary);
        border: 4px solid var(--color-bg-primary);
        border-radius: 50%;
        top: 40px;
        left: 50%;
        margin-left: -12px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10;
    }

    .timeline-marker i {
        color: var(--color-bg-primary);
        font-size: 0.8rem;
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

