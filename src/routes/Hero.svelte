<script>
	import Counter from './Counter.svelte';
</script>

<section id="home">
	<div class="content">

<!--		<h1>Md. Abdul Al-Amin</h1>-->
		<h1>ezio4df</h1>
		<h2>Student, ML researcher, Programmer</h2>

		<ul class="socials">
			<li><a href="#">Github</a></li>
			<li><a href="#">Kaggle</a></li>
			<li><a href="#">StackOverflow</a></li>
			<li><a href="#">Email</a></li>
		</ul>
	</div>
</section>


<style>
    section {
        background: transparent;
        height: 100vh;
        min-height: 300px;

				display: flex;
				justify-content: center;
				align-items: center;
    }
		.content {
				text-align: center;
		}
		/**************************************************/
		h2 {
				opacity: 0.8;
				margin: 3rem 0 1rem;
		}


		/**************************************************/
    ul.socials {
        list-style-type: none;
        padding: 0;
        display: flex;
				justify-content: center;

        li:not(:last-child) {
            margin-right: 10px;
        }

				li > a {
						color: navajowhite;
				}
    }
</style>