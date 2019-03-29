<main>
  <section>
    <div class="nucleus" >
      <span>SS</span>
    </div>
    <div class="comm">
      <a href="https://twitter.com/stephensprinkle">
        <i class="icofont-twitter"/>
      </a>
      <a href="https://www.linkedin.com/in/stephensprinkle/">
        <i class="icofont-linkedin"/>
      </a>
      <a href="mailto:hi@sprinkle.io">
        <i class="icofont-email"/>
      </a>
    </div>
  </section>
  <Footer />
</main>

<style>
  main {
    display: flex;
    flex: 1;
    flex-direction: column;

    width: 100%;
    height: 100%;
  }

  section {
    flex: 1;

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
  }

  .nucleus {
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4em;
    height: 4em;
  }

  .nucleus span {
    display: block;
    font-size: 2.6em;
  }

  .comm {
    margin: 0.8em;
  }

  .comm a {
    color: #898989;
    text-decoration: none;
    transition: color 0.2s ease-in-out;
  }

  .comm a:hover {
    color: #666666;
  }

  .comm i {
    font-size: 2.8em;
    margin: 0 0.2em;
  }
</style>

<script>
import Footer from '../Footer/Footer.svelte';

export default {
  components: {
    Footer
  }
}
</script>
