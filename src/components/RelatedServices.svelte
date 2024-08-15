<script lang="ts">
    import { servicesStore } from "$lib/serviceStore";
    import { Splide, SplideSlide } from "@splidejs/svelte-splide";
    import "@splidejs/svelte-splide/css";
    import Cart from "./Cart.svelte";

    let services: any = [];
    $: servicesStore.subscribe((res) => (services = res));
</script>

<div class="related-services">
    <Splide
        options={{
            type: "loop",
            autoplay: true,
            autoWidth: true,
            pagination: true,
            omitEnd: true,
            arrows: false,
        }}
    >
        {#each services as item}
            <SplideSlide>
                <div class="cart-item">
                    <Cart {...item}></Cart>
                </div>
            </SplideSlide>
        {/each}
    </Splide>
</div>

<style lang="scss">
    .cart-item {
        max-width: 35rem;
        padding: 2rem 2rem 3rem 2rem;
    }
</style>
