<script lang="ts">
    import { translationStore } from "$lib/i18n";
    import { servicesStore } from "$lib/serviceStore";
    import Cart from "../../components/Cart.svelte";
    let _: any;
    $: _ = $translationStore;

    let services: any = [];
    $:servicesStore.subscribe(res => services = res);

</script>

<div class="container services">
    <div class="section-title">
        <h2 class="title text-center">{_.service}</h2>
    </div>
    <div class="row service-list">
        {#each services as item}
            <div class="col-md-6 col-lg-4 service-item" data-aos="fade-up">
                <Cart {...item}></Cart>
            </div>
        {/each}
    </div>
</div>

<style lang="scss">
    .service-list{
        margin-top: 3rem;
    }
    .service-item {
        padding: 2rem;
    }
</style>
