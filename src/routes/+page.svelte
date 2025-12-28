<script lang="ts">
	import Hero from './Hero.svelte';
	import Projects from './Projects.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="portfolio site of ezio4df" />
</svelte:head>

<Hero />
<Projects />



<section>
	<h1 id="timeline">Timeline</h1>

	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque labore omnis similique. Atque commodi eaque fugit
		illum iusto odio quo. Amet harum laborum unde ut voluptate. Ab, adipisci animi asperiores cum cupiditate delectus
		dolorem ea earum facilis fuga ipsam ipsum laudantium nam neque numquam perspiciatis placeat porro quisquam, quo
		rerum sed sequi voluptates? At cupiditate doloremque dolores error expedita facilis illo minima sint sit vero? Ab
		aperiam aut autem blanditiis commodi consequuntur cum delectus, deserunt dicta dignissimos harum impedit iure
		maiores nisi nulla omnis optio quas quidem saepe sapiente similique veniam voluptate voluptates. A aliquam debitis
		enim error et eveniet iste libero maxime minima nihil nulla, porro quod recusandae rem sapiente, sed sit velit! Id
		maxime molestias optio rerum tempora. Ab assumenda cupiditate eligendi eos, error fuga illum in incidunt laborum non
		obcaecati praesentium quasi saepe tempore veniam, vitae, voluptas. Alias earum nostrum quo quos reprehenderit vero
		voluptatum. Alias amet aperiam ea eum eveniet exercitationem illo in, magnam molestiae nesciunt nisi quaerat qui
		quibusdam quo reiciendis vitae voluptas voluptatibus? Animi at culpa cupiditate dignissimos dolore dolorem doloribus
		enim error excepturi exercitationem expedita explicabo inventore, labore laboriosam magnam maxime minima minus
		mollitia nobis odio odit officiis placeat, porro quam quia quod quos recusandae saepe, sequi soluta velit veritatis
		vero voluptatibus. Adipisci architecto assumenda at beatae doloremque et exercitationem fugiat, fugit ipsam iste
		minima minus molestiae, nobis odio perferendis perspiciatis ratione ut. Alias autem eum fugiat ipsum laboriosam
		possimus quas quis tempore totam ullam! Corporis cumque dolores, fugit harum illum ipsam labore nobis odit quisquam
		quos reiciendis veritatis voluptate, voluptatibus. Autem consectetur culpa dicta est facere hic itaque labore minus
		nihil saepe? Aliquid aperiam architecto aspernatur atque corporis distinctio dolor eligendi illo incidunt laborum
		nam obcaecati pariatur perferendis provident, quia quis quisquam, voluptatum? Ab accusantium animi cum debitis
		delectus dolores dolorum earum est facilis fugit, illo illum impedit incidunt ipsum itaque magni maiores maxime
		nobis non optio perferendis placeat porro possimus quaerat rem reprehenderit repudiandae sapiente sequi sint sunt
		tenetur velit voluptas voluptatem. A, at aut cupiditate delectus, dolorum esse et eveniet minus nam nobis pariatur
		perspiciatis quam quisquam saepe sequi tempora tempore. Accusantium amet aperiam culpa cum cumque cupiditate
		deleniti dicta dolor dolores ducimus ea error et, incidunt iste laboriosam laborum molestiae mollitia nam
		necessitatibus neque nisi nobis nulla odio, officiis optio qui quia reiciendis reprehenderit saepe sequi sit, velit
		veniam veritatis. Ad beatae eaque, eius facilis impedit iusto laudantium molestiae nemo praesentium quo! Aliquam
		animi aspernatur blanditiis commodi, consectetur consequatur corporis cum debitis, dolor doloremque dolorum eius
		fugit id illum impedit itaque laboriosam laudantium libero magni maiores nisi pariatur quibusdam quidem quos
		recusandae rerum sit veniam voluptas voluptatem voluptates? Amet debitis deleniti, id in modi porro similique
		voluptatem. Aspernatur assumenda corporis deserunt exercitationem laborum maxime perspiciatis rem? Accusantium
		aspernatur cupiditate delectus deleniti dolore, dolores earum eius exercitationem hic illo ipsa molestias nostrum
		perspiciatis quaerat quas quo recusandae reiciendis, rem reprehenderit sed tempora voluptate, voluptatibus. Eligendi
		iusto minima nisi pariatur provident quibusdam ratione sed ullam ut voluptatem. Dicta dignissimos eveniet magni.</p>

</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 0.6;
    }

    h1 {
        width: 100%;
    }

    .welcome {
        display: block;
        position: relative;
        width: 100%;
        height: 0;
        padding: 0 0 calc(100% * 495 / 2048) 0;
    }

    .welcome img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        display: block;
    }
</style>
