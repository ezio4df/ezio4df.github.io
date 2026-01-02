<script>
	import { onMount } from 'svelte';

	// Props
	export let initialText = 'I am into ';
	export let phrases = [
		'reinforcement learning.',
		'building DQN agents.',
		'teaching AIs to play games.',
		'small AI projects with big curiosity.'
	];

	let dynamicText = '';
	let isDeleting = false;
	let phraseIndex = 0;
	let charIndex = 0;
	let timeoutId = null;

	onMount(() => {
		const type = () => {
			const currentPhrase = phrases[phraseIndex];

			if (isDeleting) {
				// Delete one character
				charIndex -= 1;
				dynamicText = currentPhrase.substring(0, charIndex);

				if (charIndex <= 0) {
					// Done deleting → move to next phrase
					isDeleting = false;
					phraseIndex = (phraseIndex + 1) % phrases.length;
					charIndex = 0;
					// Small pause before typing next
					timeoutId = setTimeout(type, 300);
				} else {
					timeoutId = setTimeout(type, 30); // fast delete
				}
			} else {
				// Typing forward
				if (charIndex < currentPhrase.length) {
					charIndex += 1;
					dynamicText = currentPhrase.substring(0, charIndex);
					timeoutId = setTimeout(type, 80); // typing speed
				} else {
					// Full phrase typed → pause, then delete
					timeoutId = setTimeout(() => {
						isDeleting = true;
						type();
					}, 2000);
				}
			}
		};

		// Start the loop
		timeoutId = setTimeout(type, 500);

		return () => {
			if (timeoutId) clearTimeout(timeoutId);
		};
	});
</script>

<span class="typing-tagline">
  {initialText}
	<span class="dynamic-part">{dynamicText}</span>
  <span class="cursor">|</span>
</span>

<style>
    .typing-tagline {
        display: inline-block;
        font-size: 1.25rem;
        color: #e0e0e0;
        line-height: 1.4;
        white-space: nowrap;
    }

    .dynamic-part {
        display: inline;
    }

    .cursor {
        display: inline-block;
        width: 2px;
        height: 1.2em;
        background: #e0e0e0;
        margin-left: 2px;
        animation: blink 1s infinite;
        vertical-align: middle;
    }

    @keyframes blink {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
    }
</style>