<script lang="ts">
    import { page } from "$app/stores";
    import { translationStore } from "$lib/i18n";
    import { servicesStore } from "$lib/serviceStore";
    import RelatedServices from "../../../components/RelatedServices.svelte";
    let url = "";
    let _: any;
    let services: any = [];
    let serviceItem: any;
    let descArr: any = [];

    $: _ = $translationStore;
    $: {
        servicesStore.subscribe((res) => {
            services = res;
            const index = $page.url.pathname.lastIndexOf("/");
            url = $page.url.pathname.substring(index + 1);
            serviceItem = services.find(
                (item: any) => item.slug_vi === url || item.slug_en === url
            );
            if (serviceItem) {
                const obj = new Object(_[serviceItem.desc]) as any;
                descArr = Object.keys(obj).map((key) => obj[key]);
            }
        });
    }
</script>
<svelte:head>
  <title>Chi Tiết Dịch Vụ - {_[serviceItem.title]} - SIL VIETNAM</title>
  <meta name="description" content="Tìm hiểu chi tiết về {_[serviceItem.title]}, một trong những giải pháp vận tải và logistics hàng đầu từ SIL VIETNAM, giúp tối ưu hóa hoạt động kinh doanh của bạn." />
  <meta name="keywords" content="{_[serviceItem.title]}, dịch vụ SIL VIETNAM, logistics, vận tải hàng hóa" />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="Chi Tiết Dịch Vụ - {_[serviceItem.title]} - SIL VIETNAM" />
  <meta property="og:description" content="Khám phá chi tiết về {_[serviceItem.title]} từ SIL VIETNAM và cách nó có thể đáp ứng nhu cầu logistics của bạn." />
  <meta property="og:type" content="website" />
  <!-- <meta property="og:image" content="https://sil.com.vn/servicedetail-image.jpg" /> -->
  <meta property="og:url" content="https://sil.com.vn/services/{serviceItem.slug_vi}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Chi Tiết Dịch Vụ - {_[serviceItem.title]} - SIL VIETNAM" />
  <meta name="twitter:description" content="Tìm hiểu về {_[serviceItem.title]} từ SIL VIETNAM và cách nó có thể tối ưu chuỗi cung ứng của bạn." />
  <!-- <meta name="twitter:image" content="https://sil.com.vn/servicedetail-image.jpg" /> -->
</svelte:head>
{#if serviceItem}
    <div class="container-fluid page-header py-5">
        <div class="container content">
            <h1 class="text-white text-uppercase mb-3">
                {_[serviceItem.title]}
            </h1>
        </div>
    </div>
    <div class="container">
        <div class="service-detail">
            <div class="section-title">
                <h2 class="title text-center">
                    <i class={serviceItem.icon}></i>
                    {_[serviceItem.title]}
                </h2>
            </div>
            <div class="service-desc">
                <div class="desc-list">
                    {#each descArr as desc}
                        <p class="desc">{desc}</p>
                    {/each}
                </div>
                <img
                    class="desc-img"
                    src={serviceItem.img_detail}
                    alt={_[serviceItem.title]}
                />
            </div>
        </div>
    </div>
    <div class="container">
        <div class="related-services-title">
            <h1 class="title">{_.related_service}</h1>
        </div>
        <RelatedServices></RelatedServices>
    </div>
{/if}

<style lang="scss">
    .page-header {
        height: 40rem;
        margin-bottom: 10rem;
        background-image: url(../../../assets/images/bg-10.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        padding: 14rem 0 16rem;
        .content {
            padding-top: 5rem;
            h1 {
                line-height: 1.5;
                font-weight: 700;
                font-size: 5rem;
            }
        }
    }
    @media only screen and (max-width: 920px) {
        .page-header {
            height: 25rem;
            margin-bottom: 5rem;
            .content {
                padding: 3rem 0 0 1rem;
                h1 {
                    font-size: 3rem;
                }
            }
        }
    }
    .service-desc {
        margin: 2rem 0;
        .desc-list {
            line-height: 1.8;
            .desc {
                margin-bottom: 2rem;
            }
        }
        .desc-img {
            width: 100%;
            border-radius: 1.5rem;
        }
    }
    .related-services-title {
        padding-top: 2rem;
        .title {
            color: #003b5a;
            font-weight: 700;
            line-height: 1;
            text-transform: uppercase;
            font-size: 2.4rem;
        }
    }
    @media (max-width: 767px) {
        .related-services-title {
            .title {
                font-size: 1.8rem;
            }
        }
    }
</style>
