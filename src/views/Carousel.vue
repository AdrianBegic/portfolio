<template>
  <section onload="slide();">
    <div class="container">
      <div class="carousel">
        <input type="radio" name="slides" checked="checked" id="slide-1" />
        <input type="radio" name="slides" id="slide-2" />
        <input type="radio" name="slides" id="slide-3" />
        <input type="radio" name="slides" id="slide-4" />
        <input type="radio" name="slides" id="slide-5" />
        <input type="radio" name="slides" id="slide-6" />
        <ul class="carousel__slides">
          <li class="carousel__slide">
            <figure>
              <div>
                <img src="../assets/images/paradign_roofing.png" alt="" />
              </div>
              <figcaption>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <span class="credit">Photo: Tim Marshall</span>
              </figcaption>
            </figure>
          </li>
          <li class="carousel__slide">
            <figure>
              <div>
                <img src="../assets/images/simracer.png" alt="" />
              </div>
              <figcaption>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <span class="credit">Photo: Christian Joudrey</span>
              </figcaption>
            </figure>
          </li>
          <li class="carousel__slide">
            <figure>
              <div>
                <img src="../assets/images/nobii.png" alt="" />
              </div>
              <figcaption>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <span class="credit">Photo: Steve Carter</span>
              </figcaption>
            </figure>
          </li>
          <li class="carousel__slide">
            <figure>
              <div>
                <img src="../assets/images/freedom_surplus.png" alt="" />
              </div>
              <figcaption>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <span class="credit">Photo: Aleksandra Boguslawska</span>
              </figcaption>
            </figure>
          </li>
          <li class="carousel__slide">
            <figure>
              <div>
                <img src="https://iili.io/Ele4ff.gif" alt="" />
              </div>
              <figcaption>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <span class="credit">Photo: Rosan Harmens</span>
              </figcaption>
            </figure>
          </li>
          <li class="carousel__slide">
            <figure>
              <div>
                <img src="../assets/images/snowday.png" alt="" />
              </div>
              <figcaption>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <span class="credit">Photo: Annie Spratt</span>
              </figcaption>
            </figure>
          </li>
        </ul>
        <ul class="carousel__thumbnails">
          <li>
            <label for="slide-1"
              ><img src="../assets/images/paradign_roofing.png" alt=""
            /></label>
          </li>
          <li>
            <label for="slide-2"
              ><img src="../assets/images/simracer.png" alt=""
            /></label>
          </li>
          <li>
            <label for="slide-3"
              ><img src="../assets/images/nobii.png" alt=""
            /></label>
          </li>
          <li>
            <label for="slide-4"
              ><img src="../assets/images/freedom_surplus.png" alt=""
            /></label>
          </li>
          <li>
            <label for="slide-5"
              ><img src="../assets/images/npm_packages.webp" alt=""
            /></label>
          </li>
          <li>
            <label for="slide-6"
              ><img src="../assets/images/snowday.png" alt=""
            /></label>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {

computed:{
  slide(){
     setTimeout(function(){
         document.getElementById('elementToMove').style.left = '1000px'; // new left position is 1000px in this example
     }, 2000); // 2000 = 2 seconds after page load
}
}

};
</script>

<style scoped lang="scss">
@mixin aspect-ratio($width, $height) {
  position: relative;

  &:before {
    display: block;
    content: "";
    width: 100%;
    padding-top: ($height / $width) * 100%;
  }

  > img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
}

// Styling

section {
  background: #000;
  padding: 50px 0;
  
}

.container {
  max-width: 1044px;
  margin: 0 auto;
  padding: 0 20px;
}

.carousel {
  display: block;
  text-align: left;
  position: relative;
  margin-bottom: 22px;

  > input {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;

    &:nth-of-type(6):checked
      ~ .carousel__slides
      .carousel__slide:first-of-type {
      margin-left: -500%;
    }
    &:nth-of-type(5):checked
      ~ .carousel__slides
      .carousel__slide:first-of-type {
      margin-left: -400%;
    }
    &:nth-of-type(4):checked
      ~ .carousel__slides
      .carousel__slide:first-of-type {
      margin-left: -300%;
    }
    &:nth-of-type(3):checked
      ~ .carousel__slides
      .carousel__slide:first-of-type {
      margin-left: -200%;
    }
    &:nth-of-type(2):checked
      ~ .carousel__slides
      .carousel__slide:first-of-type {
      margin-left: -100%;
    }
    &:nth-of-type(1):checked
      ~ .carousel__slides
      .carousel__slide:first-of-type {
      margin-left: 0%;
    }

    &:nth-of-type(1):checked ~ .carousel__thumbnails li:nth-of-type(1) {
      box-shadow: 0px 0px 0px 5px yellow;
    }
    &:nth-of-type(2):checked ~ .carousel__thumbnails li:nth-of-type(2) {
      box-shadow: 0px 0px 0px 5px yellow;
    }
    &:nth-of-type(3):checked ~ .carousel__thumbnails li:nth-of-type(3) {
      box-shadow: 0px 0px 0px 5px yellow;
    }
    &:nth-of-type(4):checked ~ .carousel__thumbnails li:nth-of-type(4) {
      box-shadow: 0px 0px 0px 5px yellow;
    }
    &:nth-of-type(5):checked ~ .carousel__thumbnails li:nth-of-type(5) {
      box-shadow: 0px 0px 0px 5px yellow;
    }
    &:nth-of-type(6):checked ~ .carousel__thumbnails li:nth-of-type(6) {
      box-shadow: 0px 0px 0px 5px yellow;
    }
  }
}

.carousel__slides {
  position: relative;
  z-index: 1;
  padding: 0;
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  box-sizing: border-box;
  display: flex;
}

.carousel__slide {
  position: relative;
  display: block;
  flex: 1 0 100%;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: all 300ms ease-out;
  vertical-align: top;
  box-sizing: border-box;
  white-space: normal;

  figure {
    display: flex;
    margin: 0;
  }

  div {
    @include aspect-ratio(3, 2);
    width: 100%;
  }

  img {
    display: block;
    flex: 1 1 auto;
    object-fit: cover;
  }

  figcaption {
    align-self: flex-end;
    padding: 20px 20px 0 20px;
    flex: 0 0 auto;
    width: 25%;
    min-width: 150px;
    color: #fff;
  }

  .credit {
    margin-top: 1rem;
    color: #fff;
    display: block;
  }

  &.scrollable {
    overflow-y: scroll;
  }
}

.carousel__thumbnails {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;

  margin: 0 -10px;

  .carousel__slides + & {
    margin-top: 20px;
  }

  li {
    flex: 1 1 auto;
    max-width: calc((100% / 6) - 20px);
    margin: 0 10px;
    transition: all 300ms ease-in-out;
  }

  label {
    display: block;
    @include aspect-ratio(1, 1);

    &:hover,
    &:focus {
      cursor: pointer;

      img {
        box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.25);
        transition: all 300ms ease-in-out;
      }
    }
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
