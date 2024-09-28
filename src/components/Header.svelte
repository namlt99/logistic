<script lang="ts">
    import { currentLocale, translationStore } from "../lib/i18n";
    import { LOCALE } from "../consts/common";
    import logo from "../assets/images/logo.png";
    import viImg from "../assets/images/vi.png";
    import enImg from "../assets/images/en.png";
    let fileUrl = '/files/SIL Profile.pdf';
    let _: any;
    $: _ = $translationStore;

    let isNavbarOpen = false;

    const toggleNavbar = () => {
        isNavbarOpen = !isNavbarOpen;
    };

    const closeNavbar = () => {
        if (isNavbarOpen) {
            isNavbarOpen = false;
        }
    };
    const handleClick = () => {
        closeNavbar();
    };

    function switchLanguage(lang: string) {
        currentLocale.set(lang);
        handleClick();
    }


    function downloadFile() {
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'SIL profile.pdf';  // Tên file sau khi tải về
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
</script>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
        <a class="navbar-brand logo" on:click={handleClick} href="/">
            <img  class="logo-img" src={logo} alt="logo" />
        </a>
        <button
            on:click={toggleNavbar}
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={isNavbarOpen ? "true" : "false"}
            aria-label="Toggle navigation"
        >
        {#if isNavbarOpen}
            <i class="bi bi-x toggler-icon"></i>
            {:else}
            <i class="bi bi-list toggler-icon"></i>
        {/if}
            
        </button>
        <div
            class="collapse navbar-collapse"
            id="navbarSupportedContent"
            class:show={isNavbarOpen}
        >
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
                <li class="nav-item">
                    <button class="nav-link btn-download" on:click={downloadFile}> SIL Profile <i class="bi bi-file-earmark-arrow-down"></i></button>
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
    .navbar-toggler{
        border: none;
        background: rgb(164,164,167);
        background: linear-gradient(90deg, rgba(164,164,167,1) 0%, rgba(0,138,255,1) 13%, rgba(24,183,246,1) 83%);
        &:focus{
            box-shadow: none;
        }
        .toggler-icon{
            font-size: 2.5rem;
            font-weight: 700;
            color: white;
        }
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

    .btn-download{
        border: none;
    border-radius: 1rem;
    }
    @media (max-width: 767px) {
        .navbar-nav {
            gap: 1rem !important;
        }
    }
    @media (max-width: 991px) {
        .navbar {
            min-height: 7rem !important;
        }
    }
</style>
