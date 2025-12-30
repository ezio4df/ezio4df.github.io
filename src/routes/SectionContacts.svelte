<script>
	let name = '';
	let email = '';
	let phone = '';
	let message = '';

	const myEmail = 'ezio4df@gmail.com';

	function handleSubmit(e) {
		e.preventDefault();

		const subject = `Contact from ${name}`;
		const body = `Hi.\n\n${message}\n\n${phone ? `Phone: ${phone}\n` : ''}Name: ${name}`;

		const mailtoLink = `mailto:${myEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
		window.location.href = mailtoLink;
	}
</script>

<section id="contact">
	<div class="container">
		<h1>Contact Me</h1>
		<form class="contact-form" on:submit={handleSubmit}>
			<div class="form-group">
				<label for="name">Name *</label>
				<input
					type="text"
					id="name"
					bind:value={name}
					required
					placeholder="Your name"
				/>
			</div>

			<div class="form-group">
				<label for="email">Email *</label>
				<input
					type="email"
					id="email"
					bind:value={email}
					required
					placeholder="your.email@example.com"
				/>
			</div>

			<div class="form-group">
				<label for="phone">Phone (Optional)</label>
				<input
					type="tel"
					id="phone"
					bind:value={phone}
					placeholder="+1234567890"
				/>
			</div>

			<div class="form-group">
				<label for="message">Message *</label>
				<textarea
					id="message"
					bind:value={message}
					required
					placeholder="Your message here..."
					rows="5"
				></textarea>
			</div>

			<button type="submit" class="submit-btn">Send Message</button>
		</form>
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
        padding: 2rem;
    }

    h1 {
        text-align: center;
        margin-bottom: 2rem;
        color: var(--color-text-primary);
        font-size: 2.5rem;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }

    .contact-form {
        max-width: 600px;
        margin: 0 auto;
        background: var(--color-bg-card);
        padding: 2rem;
        border-radius: var(--border-radius);
        box-shadow: var(--shadow);
    }

    .form-group {
        margin-bottom: 1.5rem;

        label {
            display: block;
            margin-bottom: 0.5rem;
            color: var(--color-text-primary);
            font-weight: 600;
        }

        input,
        textarea {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid var(--color-border);
            border-radius: var(--border-radius);
            background: var(--color-bg-tertiary);
            color: var(--color-text-primary);
            font-size: 1rem;
            transition: border-color 0.3s ease;
            box-sizing: border-box;
        }

        textarea {
            resize: vertical;
        }

        input:focus,
        textarea:focus {
            outline: none;
            border-color: var(--color-accent-primary);
        }
    }


    .submit-btn {
        width: 100%;
        padding: 1rem;
        background: var(--color-accent-primary);
        color: var(--color-bg-primary);
        border: none;
        border-radius: var(--border-radius);
        font-size: 1.1rem;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.3s ease;

        &:hover {
            background: #2a90c5;
        }
    }

</style>