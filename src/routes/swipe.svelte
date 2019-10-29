<script>

  import { Swipe, SwipeItem } from "./_components/svelte-swipe/src/index.js"

  let autoplay = false;
  let delay = 2000; //ms
  let showIndicators = true;
  let transitionDuration = 1000; //ms

</script>

<style>
  .swipe-holder{
    height: 30vh;
    width: 100%;
  }
  img{
    max-width: 100%;
    height: auto;
  }
</style>

<div class="swipe-holder">
  <Swipe {showIndicators} {autoplay} {delay} {transitionDuration}>
    <SwipeItem>
      <img src="./images/1.jpg" alt="">
    </SwipeItem>

    <SwipeItem>
      <img src="./images/2.jpg" alt="">
    </SwipeItem>

    <SwipeItem>
      <img src="./images/3.jpg" alt="">
    </SwipeItem>

    <SwipeItem>
      <img src="./images/4.jpg" alt="">
    </SwipeItem>
  </Swipe>
</div>