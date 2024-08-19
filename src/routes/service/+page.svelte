<script lang="ts">
    import { translationStore } from "$lib/i18n";
    import { servicesStore } from "$lib/serviceStore";
    import Cart from "../../components/Cart.svelte";
    let _: any;
    $: _ = $translationStore;

    let services: any = [];
    $:servicesStore.subscribe(res => services = res);

</script>
<svelte:head>
  <title>Dịch Vụ Vận Tải Logistics - SIL Logistic</title>
  <meta name="description" content="Khám phá các dịch vụ vận tải và logistics toàn diện từ SIL Logistic, bao gồm vận chuyển hàng hóa, quản lý chuỗi cung ứng và nhiều hơn nữa." />
  <meta name="keywords" content="dịch vụ SIL Logistic, vận tải hàng hóa, quản lý chuỗi cung ứng, vận tải quốc tế" />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="Dịch Vụ Vận Tải Logistics - SIL Logistic" />
  <meta property="og:description" content="SIL Logistic cung cấp dịch vụ vận tải chuyên nghiệp, tối ưu cho mọi nhu cầu của doanh nghiệp." />
  <meta property="og:type" content="website" />
  <!-- <meta property="og:image" content="https://sil-logistic.com/services-image.jpg" />
  <meta property="og:url" content="https://sil-logistic.com/services" /> -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Dịch Vụ Vận Tải Logistics - SIL Logistic" />
  <meta name="twitter:description" content="Khám phá các dịch vụ vận tải và logistics hàng đầu từ SIL Logistic." />
  <!-- <meta name="twitter:image" content="https://sil-logistic.com/services-image.jpg" /> -->
</svelte:head>
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
