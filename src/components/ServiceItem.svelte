<script lang="ts">
    import { translationStore } from "$lib/i18n";
    import { servicesStore } from "$lib/serviceStore";

    export let id;
    export let img;
    export let title: string;
    export let description: string;
    export let slug_vi: string = "";
    export let icon: string = "";
    export let desc;

    let _: any;
    $: _ = $translationStore;

    let services: any = [];
    $: servicesStore.subscribe((res) => (services = res));

</script>

<div class="service-item" data-id={id}>
    <div class="service-item-header">
        <div class="service-icon"><i class={icon}></i></div>
    </div>
    <div class="service-item-body">
        <h2 class="title">{_[title]}</h2>
        <p class="desc">
            {_[description]}
        </p>
    </div>
    <div class="service-item-footer">
        <a class="hyper-link" href="/service/{slug_vi}">{_.learn_more} <i class="bi bi-chevron-right"></i></a>
    </div>
</div>

<style lang="scss">
    .service-item {
        overflow: hidden;
        border: none;
        margin-bottom: 2rem;
        padding: 2rem;
        border-bottom: solid 0.1rem #f1f1f1;
        .service-item-header {
            display: flex;
            justify-content: center;
            padding: 2rem;
            .service-icon {
                width: 12rem;
                aspect-ratio: 1;
                border-radius: 50%;
                outline: solid 1.5rem
                    rgba($color: rgba(232, 245, 253, 1), $alpha: 0.7);
                display: flex;
                justify-content: center;
                align-items: center;
                background: rgba($color: rgb(190, 223, 254, 1), $alpha: 0.7);
                .bi {
                    font-size: 5.2rem;
                }
            }
        }
        .service-item-body {
            padding: 2rem;
            .title {
                height: 8rem;
                text-align: center;
                font-size: 2.4rem;
                font-weight: 700;
            }
            .desc {
                margin-top: 3rem;
                max-height: 13rem;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
        }

        .service-item-footer{
          display: flex;
          justify-content: center;
          .hyper-link{
            letter-spacing: 0.2rem;
            text-decoration: none;
            font-weight: 600;
            color: #65afe6;
          }
        }
    }
</style>
