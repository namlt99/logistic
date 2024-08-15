<script lang="ts">
    import { currentLocale, translationStore } from "../lib/i18n";
    import { LOCALE } from "../consts/common";
    import logo from "../assets/images/logo.png";
    import { onMount } from "svelte";
    import viImg from "../assets/images/vi.png";
    import enImg from "../assets/images/en.png";

    let navbarCollapse: HTMLElement | null;
    let collapse;
    const handleClick = () => {
        import("bootstrap").then((boostrap) => {
            if(!navbarCollapse) return;
            collapse = new boostrap.Collapse(navbarCollapse, { toggle: false });
            collapse.hide();
        });
    };
    let _: any;
    $: _ = $translationStore;

    function switchLanguage(lang: string) {
        currentLocale.set(lang);
        handleClick();
    }

    onMount(() => {
        navbarCollapse = document.getElementById("navbarSupportedContent");
    });
</script>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
        <a class="navbar-brand logo" href="/">
            <img src={logo} alt="logo" />
        </a>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav p-4 p-lg-0">
                <li class="nav-item">
                    <a class="nav-link" href="/" on:click={handleClick}
                        >{_.home}</a
                    >
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/about" on:click={handleClick}
                        >{_.about}</a
                    >
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/service" on:click={handleClick}
                        >{_.service}</a
                    >
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/contact" on:click={handleClick}
                        >{_.contact}</a
                    >
                </li>
            </ul>
            <div class="d-flex">
                <div class="languages">
                    <button
                        class="btn-language"
                        type="button"
                        on:click={() => switchLanguage(LOCALE.VIETNAMESE)}
                        ><img src={viImg} alt="vi" /></button
                    >
                    <button
                        class="btn-language"
                        type="button"
                        on:click={() => switchLanguage(LOCALE.ENGLISH)}
                        ><img src={enImg} alt="en" /></button
                    >
                </div>
            </div>
        </div>
    </div>
</nav>

<style lang="scss">
    .logo {
        display: block;
    }

    .navbar {
        font-size: 1.6rem;
        color: var(--secondary-text-color);
        background: var(--secondary) !important;
        box-shadow: 0rem 0.1rem 1rem var(--secondary-light);
        min-height: 10rem;
        z-index: 10;
        .navbar-collapse {
            justify-content: end;
        }
        .navbar-nav {
            gap: 3rem;
            text-align: end;
            .nav-item {
                .nav-link {
                    font-weight: 700;
                    transition: color 300ms;
                    display: inline-block;
                    &:focus,
                    &:hover {
                        color: var(--primary-color);
                        border-bottom: solid 0.2rem var(--primary-color);
                        margin-bottom: -0.2rem;
                    }
                }
            }
        }
        // .btn-languages {
        //     border: none;
        //     background: none;
        // }
        // .dropdown-menu {
        //     border: 0.1rem solid var(--primary-color);

        //     .dropdown-item {
        //         cursor: pointer;
        //         font-size: 1.4rem;
        //         &:hover {
        //             // background: var(--primary-colors);
        //             color: var(--primary-color);
        //         }
        //     }
        // }
        // .dropdown-toggle::after {
        //     content: "";
        //     border: none !important;
        // }
    }
    .d-flex {
        justify-content: end;
        padding: 0 2rem 1rem;
        .languages {
            .btn-language {
                border: none;
                background: transparent;
                margin-left: 0.5rem;
            }
        }
    }
    @media (max-width: 767px) {
        .navbar-nav {
            gap: 1rem !important;
        }
    }
</style>
