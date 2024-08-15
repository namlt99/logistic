<script lang="ts">
    import { onMount } from "svelte";
    import "../lib/i18n";
    import {
        currentLocale,
        loadTranslations,
        translationStore,
    } from "../lib/i18n";
    // import {locale, translate} from "../lib/i18n";
    import { get, writable } from "svelte/store";
    import "../styles/global.scss";
    import Footer from "../components/Footer.svelte";
    import Header from "../components/Header.svelte";
    import { page } from "$app/stores";
    import AOS from "aos";
    import "aos/dist/aos.css";

    let showHeader = writable(true);

    let lastScrollY = 0;
    let isNotHomePage = true;
    let namePage = "";
    const navbar = ["", "about", "service", "event", "contact"];

    let _: any;
    $: _ = $translationStore;

    $: {
        namePage = $page.url.pathname.substring(
            $page.url.pathname.lastIndexOf("/") + 1
        );
        if (navbar.includes(namePage)) {
            if (namePage === "") {
                isNotHomePage = false;
            } else {
                isNotHomePage = true;
            }
        } else {
            isNotHomePage = false;
        }
    }
    // load ban dich khi khoi tao app
    onMount(() => {
        AOS.init();
        loadTranslations(get(currentLocale));
        // locale.subscribe(value => current = value);

        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                showHeader.set(false);
            } else {
                showHeader.set(true);
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    // load ban dich khi thay đoi ngon ngu
    currentLocale.subscribe((locale) => {
        loadTranslations(locale);
    });
</script>

<header>
    <div class="header-container" class:hidden={!$showHeader}>
        <Header></Header>
    </div>
</header>
<main>
    {#if isNotHomePage}
        <div class="container-fluid page-header py-5">
            <div class="container content">
                <h1 class="text-white text-uppercase mb-3">
                    {_[namePage]}
                </h1>
            </div>
        </div>
    {/if}
    <slot></slot>
</main>
<footer>
    <Footer></Footer>
</footer>

<style lang="scss">
    @keyframes stuckMoveDown {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-100%);
        }
    }
    header {
        position: relative;
        .header-container {
            width: 100%;
            position: fixed;
            top: 0;
            z-index: 100;
            transition: transform 0.3s ease-in-out;
        }

        .hidden {
            transform: translateY(-100%);
            animation: 0.5s linear stuckMoveDown;
        }
    }

    main {
        margin-top: 10rem;
        flex: 1;
        .page-header {
            height: 40rem;
            margin-bottom: 10rem;
            background-image: url(../assets/images/breadcrumb-bg.jpg);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            padding: 14rem 0 16rem;
            .content {
                padding-top: 5rem;
                h1 {
                    font-weight: 700;
                    font-size: 7rem;
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
                        font-size: 4.2rem;
                    }
                }
            }
        }
    }

    footer {
        position: relative;
        bottom: 0;
    }
</style>
