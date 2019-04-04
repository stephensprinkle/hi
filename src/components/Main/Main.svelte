<main>
  <section>
    <div class="nucleus" >
      <span>SS</span>
    </div>
    <Comm />
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
</style>

<script>
import Comm from '../Comm/Comm.svelte';
import Footer from '../Footer/Footer.svelte';

export default {
  components: {
    Comm,
    Footer
  }
}
</script>
