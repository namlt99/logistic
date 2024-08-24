<script lang="ts">
    import { translationStore } from "$lib/i18n";

    export let id;
    export let img;
    export let title: string;
    export let description: string;
    export let slug_vi: string = "";

    let _: any;
    $: _ = $translationStore;
</script>

<a href="/service/{slug_vi}">
    <div class="cart" data-id={id}>
        <div class="cart-header">
            <h3>{_.service_card_title}</h3>
            <div class="is-divider"></div>
        </div>
        <div class="cart-body">
            <h2 class="title">{_[title]}</h2>
            <p class="desc">
                {_[description]}
            </p>
        </div>
        <div class="cart-footer">
            <img class="img-fluid" src={img} alt={title} />
        </div>
    </div>
</a>

<style lang="scss">
    a {
        text-decoration: none;
        color: var(--primary-dark);
    }
    .cart {
        border-radius: 1.5rem;
        background: var(--secondary-background-color);
        box-shadow: 0rem 0rem 1.5rem rgba(207, 207, 207, 0.5);
        overflow: hidden;

        .cart-header {
            padding: 2rem 4rem;
            h3 {
                color: var(--primary-color);
                font-weight: 700;
            }
            .is-divider {
                width: 3rem;
                height: 0.3rem;
                background-color: var(--primary-color);
                transition: width 250ms;
            }
        }

        .cart-body {
            padding: 0 4rem;
            .title {
                font-weight: 700;
                font-size: 2.2rem;
                height: 5.5rem;
                text-overflow: ellipsis;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
            .desc {
                font-size: 1.6rem !important;
                height: 7rem;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
        }

        .cart-footer {
            .img-fluid {
                transition: 0.5s;
                object-fit: cover;
                width: 100%;
                height: auto;
                max-height: 18rem;
            }
        }

        &:hover {
            transform: translateY(-1.5rem);
            transition: transform 0.3s ease;
            box-shadow: 0rem 1rem 1.5rem rgba(128, 128, 128, 0.5);
            .is-divider {
                width: 4rem;
            }

            .img-fluid {
                transform: scale(1.1);
            }
        }
    }
</style>
