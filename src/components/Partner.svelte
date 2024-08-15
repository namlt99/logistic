<script lang="ts">
    import vnairline from "../assets/logos/vnairline.png";
    import cma from "../assets/logos/cma.png";
    import cosco from "../assets/logos/cosco.png";
    import evergreen from "../assets/logos/evergreen.png";
    import hmm from "../assets/logos/hmm.jpg";
    import msc from "../assets/logos/msc.jpg";
    import oocl from "../assets/logos/oocl.png";
    import zim from "../assets/logos/zim.png";
    import { Splide, SplideSlide } from "@splidejs/svelte-splide";
    import "@splidejs/svelte-splide/css";

    let imagesLogo = [
        { id: 1, img: vnairline },
        { id: 2, img: cma },
        { id: 3, img: cosco },
        { id: 4, img: evergreen },
        { id: 5, img: hmm },
        { id: 6, img: msc },
        { id: 7, img: oocl },
        { id: 8, img: zim },
    ];
</script>

<div class="partner">
    <Splide
        options={{ type: "loop", autoplay: true, autoWidth: true, pagination: false, omitEnd: true, arrows: false }}
    >
        {#each imagesLogo as item}
            <SplideSlide>
                <div class="logo">
                    <img
                        class="logo-img"
                        data-id={item.id}
                        src={item.img}
                        alt="Vietnam airlines"
                    />
                </div>
            </SplideSlide>
        {/each}
    </Splide>
</div>

<style lang="scss">
    .partner {
        width: 100%;
        overflow: hidden;
        .logo {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          margin: 0 5rem;
            .logo-img {
                max-height: 10rem;
                max-width: 20rem;
            }
        }
    }
    @media only screen and (max-width: 920px) {
      .logo{
        margin: 0 2rem !important;
      }
    }
</style>
