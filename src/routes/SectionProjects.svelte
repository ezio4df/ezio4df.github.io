<script>
</script>

<section id="projects">
	<div class="container">
		<h1>Projects</h1>
		<div class="projects-grid">
			{#each [1, 2, 3, 4, 5, 6] as _, i}
				<div class="project-card" title="2">
					<div class="card-image">
						<img src={`https://placehold.co/300x400?text=Project+${i+1}`} alt={`Project ${i+1}`} />
						<div class="card-overlay">
							<div class="card-content">
								<h3>Project Title {i + 1}</h3>
								<p>Description of the project goes here. This is a brief explanation of what the project does and its
									key features.</p>
								<div class="card-buttons">
									<button class="btn btn-code">Code</button>
									<button class="btn btn-read-more">Read More</button>
								</div>
							</div>
						</div>
					</div>
					<div class="card-title">
						<h3>Project Title {i + 1}</h3>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
    section {
        padding: var(--navbar-height) 2rem;
        background: rgba(150, 150, 150, 0.3);
        backdrop-filter: blur(20px);
        min-height: 100vh;
    }

    .container {
        max-width: var(--page-max-width);
    }

    h1 {
        margin: 1rem 0 3rem;
        text-align: center;
        color: var(--color-text-primary);
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }

    .projects-grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2rem;
        /*margin-bottom: 2rem;*/
    }

    .project-card {
        width: 280px;
        position: relative;
        border-radius: var(--border-radius);
        overflow: hidden;
        background: var(--color-bg-card);
        box-shadow: var(--shadow-lg);
        transition: transform 0.3s ease, box-shadow 0.3s ease;

        &:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
        }
    }


    .card-image {
        width: 100%;
        height: 350px;
        position: relative;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }
    }


    .card-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(to top, rgba(15, 15, 15, 0.95) 50%, transparent 160%);
        display: flex;
        align-items: flex-end;
        opacity: 0;
        transition: opacity 0.3s ease;

        .project-card:hover & {
            opacity: 1;
        }
    }


    .card-content {
        padding: 1.5rem;
        width: 100%;
        transform: translateY(100%);
        transition: transform 0.3s ease;

        .project-card:hover & {
            transform: translateY(0);
        }

        h3 {
            color: var(--color-text-primary);
            margin: 0 0 0.5rem 0;
            font-size: 1.2rem;
        }

        p {
            color: var(--color-text-secondary);
            margin: 0 0 1rem 0;
            font-size: 0.9rem;
            line-height: 1.4;
            font-weight: 600;
            /*text-align: justify;*/
        }
    }


    .card-buttons {
        display: flex;
        gap: 0.5rem;
    }

    .btn {
        padding: 0.5rem 1rem;
        border: none;
        border-radius: calc(var(--border-radius) / 2);
        cursor: pointer;
        font-size: 0.8rem;
        font-weight: 600;
        transition: all 0.2s ease;
    }

    .btn-read-more {
        background: var(--color-accent-primary);
        color: var(--color-bg-primary);
        flex: 1;

        &:hover {
            background: #2a90c5;
        }
    }


    .btn-code {
        background: var(--color-bg-tertiary);
        color: var(--color-text-primary);
        flex: 1;

        &:hover {
            background: #3a3a3a;
        }
    }

    .card-title {
        background: var(--color-bg-secondary);
        padding: 1rem;
        text-align: center;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 2;
        transform: translateY(0);
        transition: transform 0.3s ease;

        .project-card:hover & {
            transform: translateY(100%);
        }

        h3 {
            margin: 0;
            color: var(--color-text-primary);
            font-size: 1rem;
        }
    }

</style>