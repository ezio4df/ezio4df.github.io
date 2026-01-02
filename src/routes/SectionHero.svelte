<script>
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faGithub, faKaggle, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
	import { faAt } from '@fortawesome/free-solid-svg-icons';
	import TypingTagline from './TypingTagline.svelte';
</script>

<section id="home">
	<div class="content">


		<h1 class="massive-hi">
			<span>Hi</span>
			<!--			<span>there</span>-->
		</h1>
		<h2>
			<TypingTagline
				initialText="I am into "
				phrases={[
				'coding',
				'machine learning',
				'reinforcement learning',
  		]} />
		</h2>

		<ul class="socials">
			<li><a href="https://github.com/ezio4df">
				<FontAwesomeIcon icon={faGithub} size="2x" />
			</a></li>
			<li><a href="https://www.kaggle.com/mdalamin24">
				<FontAwesomeIcon icon={faKaggle} size="2x" />
			</a></li>
			<li><a href="https://stackoverflow.com/users/10794140/ezio4df">
				<FontAwesomeIcon icon={faStackOverflow} size="2x" />
			</a></li>
			<li><a href="mailto:ezio4df@gmail.com?subject=Hi">
				<FontAwesomeIcon icon={faAt} size="2x" />
			</a></li>
		</ul>
	</div>
</section>


<style lang="scss">
  section {
    background: transparent;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content {
    padding: var(--navbar-height) 0;
    text-align: center;
  }

  /**************************************************/

  .massive-hi {
    display: flex;
    flex-flow: column nowrap;
    text-align: center;
    box-shadow: var(--box-shadow);

    span:first-child {
      font-size: 20rem;
      line-height: 0.85;
      font-weight: normal;
      text-transform: lowercase;
      color: rgba(255, 255, 255, 0.6);
    }

    //span:last-child {
    //  margin-right: -2rem;
    //  font-size: 3rem;
    //  font-weight: bold;
    //  letter-spacing: 1.5rem;
    //  opacity: 0.7;
    //}
  }

  /**************************************************/
  h2 {
    opacity: 0.8;
    margin: 8rem 0 1rem;
  }


  /**************************************************/
  ul.socials {
    margin: 1.5rem 0 0;
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: center;

    li:not(:last-child) {
      margin-right: 1rem;
    }

    li > a {
      color: #bbb;
      opacity: 0.8;
      transition: opacity color 0.2s;

      &:hover {
        color: #fff;
        opacity: 1;
      }
    }
  }
</style>