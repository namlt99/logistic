<script lang="ts">
    import carouselImage_1 from "../assets/images/carousel.jpg";
    import carouselImage_2 from "../assets/images/carousel-1.jpg";
    import carouselImage_3 from "../assets/images/carousel-2.jpg";

    import aboutImg_1 from "../assets/images/about-1.jpg";
    import aboutImg_2 from "../assets/images/about-2.jpg";
    import aboutImg_3 from "../assets/images/about-3.jpg";

    import itemImg_1 from "../assets/images/item-1.png";
    import itemImg_2 from "../assets/images/item-2.png";
    import itemImg_3 from "../assets/images/item-3.png";
    import itemImg_4 from "../assets/images/item-4.png";

    import caseStudy_1 from "../assets/images/case-study-1.jpg";
    import caseStudy_2 from "../assets/images/case-study-2.jpg";
    import caseStudy_3 from "../assets/images/case-study-3.jpg";
    import caseStudy_4 from "../assets/images/case-study-4.jpg";
    import caseStudy_5 from "../assets/images/case-study-5.jpg";

    import { translationStore } from "$lib/i18n";
    import ServiceItem from "../components/ServiceItem.svelte";
    import Partner from "../components/Partner.svelte";
    import { servicesStore } from "$lib/serviceStore";
    import Carousel from "../components/Carousel.svelte";
    import { Splide, SplideSlide } from "@splidejs/svelte-splide";
    import "@splidejs/svelte-splide/css";

    let _: any;
    let services: any = [];
    $: _ = $translationStore;
    $: servicesStore.subscribe((res) => (services = res));
    let carousels = [
        {
            img: carouselImage_1,
            title: "carousel_1_title",
            desc: "carousel_1_desc",
        },
        {
            img: carouselImage_2,
            title: "carousel_2_title",
            desc: "carousel_2_desc",
        },
        {
            img: carouselImage_3,
            title: "carousel_3_title",
            desc: "carousel_3_desc",
        },
    ];
    const options = {
        type: "loop",
        perPage: 1,
        autoplay: true,
        interval: 3000,
        pauseOnHover: true,
        arrows: false,
    };
</script>

<!-- Carousel Start -->
<div class="container-fluid p-0 pb-5 section">
    <div class="carousel-inner">
        <Splide class="carousel" {options}>
            {#each carousels as item}
                <SplideSlide>
                    <div class="carousel-item active">
                        <img
                            style="width: 100%; height: 100%;  object-fit: cover;"
                            src={item.img}
                            alt="Image 1"
                        />
                        <div
                            class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                            style="background: rgba(6, 3, 21, 0.6)"
                        >
                            <div class="container">
                                <div
                                    class="row justify-content-start carousel-content"
                                >
                                    <div class="col-10 col-lg-8">
                                        <h1
                                            class="text-white text-uppercase mb-3 animated slideInDown carousel-title"
                                        >
                                            {_[item.title]}
                                        </h1>
                                        <h5
                                            class="display-3 text-white animated slideInDown mb-4 carousel-desc"
                                        >
                                            {_[item.desc]}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SplideSlide>
            {/each}
        </Splide>
    </div>
    <!-- <Splide class="carousel"
            options={{
                type: "loop", // Chạy vòng lặp
                perPage: 1, // Số lượng slides hiển thị mỗi trang
                autoplay: true, // Tự động chạy
                interval: 3000, // Thời gian mỗi slide (ms)
                pauseOnHover: true,
                arrows: false,
            }}
        >
            {#each carousels as item}
                <SplideSlide>
                    <div class="carousel-item active">
                        <img
                            src={item.img}
                            class="d-block w-100"
                            alt="SIL logistic"
                        />
                        <div
                            class="carousel-main-content align-items-center"
                            style="background: rgba(6, 3, 21, 0.2)"
                        >
                            <div class="container">
                                <div
                                    class="row justify-content-start carousel-content"
                                >
                                    <div class="col-10 col-lg-8">
                                        <h1
                                            class="text-white text-uppercase mb-3 animated slideInDown carousel-title"
                                        >
                                            {_[item.title]}
                                        </h1>
                                        <h5
                                            class="display-3 text-white animated slideInDown mb-4 carousel-desc"
                                        >
                                            {_[item.desc]}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SplideSlide>
            {/each}
        </Splide> -->
    <!-- </div> -->
    <!-- <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="5000"
    >
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img
                    src={carouselImage_1}
                    class="d-block w-100"
                    alt="SIL logistic"
                />
                <div
                    class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                    style="background: rgba(6, 3, 21, 0.2)"
                >
                    <div class="container">
                        <div class="row justify-content-start carousel-content">
                            <div class="col-10 col-lg-8">
                                <h1
                                    class="text-white text-uppercase mb-3 animated slideInDown carousel-title"
                                >
                                    {_.carousel_1_title}
                                </h1>
                                <h5
                                    class="display-3 text-white animated slideInDown mb-4 carousel-desc"
                                >
                                    {_.carousel_1_desc}
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <img
                    src={carouselImage_2}
                    class="d-block w-100"
                    alt="SIL logistic"
                />
                <div
                    class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                    style="background: rgba(6, 3, 21, 0.6)"
                >
                    <div class="container">
                        <div class="row justify-content-start carousel-content">
                            <div class="col-10 col-lg-8">
                                <h1
                                    class="text-white text-uppercase mb-3 animated slideInDown carousel-title"
                                >
                                    {_.carousel_2_title}
                                </h1>
                                <h5
                                    class="display-3 text-white animated slideInDown mb-4 carousel-desc"
                                >
                                    {_.carousel_2_desc}
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <img
                    src={carouselImage_3}
                    class="d-block w-100"
                    alt="SIL logistic"
                />
                <div
                    class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                    style="background: rgba(6, 3, 21, 0.6)"
                >
                    <div class="container">
                        <div class="row justify-content-start carousel-content">
                            <div class="col-10 col-lg-8">
                                <h1
                                    class="text-white text-uppercase mb-3 animated slideInDown carousel-title"
                                >
                                    {_.carousel_3_title}
                                </h1>
                                <h5
                                    class="display-3 text-white animated slideInDown mb-4 carousel-desc"
                                >
                                    {_.carousel_3_desc}
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
</div>
<!-- Carousel End -->

<div class="container section">
    <div class="row">
        <div class="col-lg-6">
            <div class="section-title">
                <h4 class="subtitle">{_.home_block_1_sub_title}</h4>
                <h2 class="title">
                    {_.home_block_1_title}
                </h2>
            </div>
        </div>
        <div class="col-lg-6" data-aos="fade-right">
            <div class="section-title">
                <p class="description">
                    {_.home_block_1_desc}
                </p>
            </div>
        </div>
    </div>
</div>
<!-- About us -->
<div class="container section">
    <div class="common-content-container">
        <div class="row align-items-center">
            <div class="col-lg-6" data-aos="fade-up">
                <div class="single-image">
                    <div class="wrapper">
                        <div class="left">
                            <div class="main-img">
                                <img src={aboutImg_1} alt="truck" />
                            </div>
                            <div class="image-1">
                                <img src={aboutImg_2} alt="container" />
                            </div>
                        </div>
                        <div class="right">
                            <div class="text-box">
                                <h2 class="title">10+</h2>
                                <p class="description">{_.about_years_exp}</p>
                            </div>
                            <div class="image-2">
                                <img src={aboutImg_3} alt="ship" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6" data-aos="fade-left">
                <div class="about-content">
                    <div class="section-title left">
                        <h4 class="subtitle">{_.home_block_2_sub_title}</h4>
                        <h2 class="title">
                            {_.home_block_2_title_1}<span
                                >{_.home_block_2_title_2}</span
                            >{_.home_block_2_title_3}
                        </h2>
                        <p class="description">
                            {_.home_block_2_desc}
                        </p>
                    </div>
                    <ul class="list">
                        <li>
                            <i class="bi bi-check"></i>
                            {_.home_block_2_item_1}
                        </li>
                        <li>
                            <i class="bi bi-check"></i>
                            {_.home_block_2_item_2}
                        </li>
                        <li>
                            <i class="bi bi-check"></i>
                            {_.home_block_2_item_3}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Our Services -->
<div class="container section">
    <div class="common-title-container">
        <h1 class="common-title" data-aos="fade-up">{_.service}</h1>
    </div>
    <div class="common-content-container">
        <div class="row">
            {#each services as service}
                <div class="col-md-6 col-lg-4" data-aos="fade-up">
                    <ServiceItem {...service}></ServiceItem>
                </div>
            {/each}
        </div>
    </div>
</div>
<!-- Our Services End -->
<!-- Why we are best -->
<div class="container section">
    <div class="row">
        <div class="col-lg-6" data-aos="fade-right">
            <div class="section-title">
                <h2 class="title">{_.home_block_3_title}</h2>
                <p class="description">
                    {_.home_block_3_desc}
                </p>
            </div>
        </div>
        <div class="col-lg-6" data-aos="fade-left">
            <div class="row">
                <div class="col-md-6" data-aos="fade-up">
                    <div class="item">
                        <img
                            class="item-img"
                            src={itemImg_1}
                            alt="item-package"
                        />
                        <div class="item-content">
                            <h4 class="item-title">
                                {_.home_block_3_item_1_title}
                            </h4>
                            <p class="item-desc">
                                {_.home_block_3_item_1_desc}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6" data-aos="fade-up">
                    <div class="item">
                        <img
                            class="item-img"
                            src={itemImg_2}
                            alt="item-package"
                        />
                        <div class="item-content">
                            <h4 class="item-title">
                                {_.home_block_3_item_2_title}
                            </h4>
                            <p class="item-desc">
                                {_.home_block_3_item_2_desc}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6" data-aos="fade-up">
                    <div class="item">
                        <img
                            class="item-img"
                            src={itemImg_3}
                            alt="item-package"
                        />
                        <div class="item-content">
                            <h4 class="item-title">
                                {_.home_block_3_item_3_title}
                            </h4>
                            <p class="item-desc">
                                {_.home_block_3_item_3_desc}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6" data-aos="fade-up">
                    <div class="item">
                        <img
                            class="item-img"
                            src={itemImg_4}
                            alt="item-package"
                        />
                        <div class="item-content">
                            <h4 class="item-title">
                                {_.home_block_3_item_4_title}
                            </h4>
                            <p class="item-desc">
                                {_.home_block_3_item_4_desc}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Why we are best End -->
<!-- case study -->
<div class="container section">
    <div class="align-items-center">
        <div class="section-title left case-study-title" data-aos="fade-right">
            <h4 class="subtitle">{_.home_block_4_sub_title}</h4>
            <h2 class="title">
                {_.home_block_4_title_1} <span>{_.home_block_4_title_2}</span>
            </h2>
        </div>
    </div>
    <div class="case-grid">
        <div class="row">
            <div class="col-md-5" data-aos="fade-right">
                <div class="case-item">
                    <div class="image">
                        <img src={caseStudy_1} alt="case-study" />
                    </div>
                </div>
            </div>
            <div class="col-md-7" data-aos="fade-left">
                <div class="case-item">
                    <div class="image">
                        <img src={caseStudy_2} alt="case-study" />
                    </div>
                </div>
            </div>
            <div class="col-md-4" data-aos="fade-up">
                <div class="case-item">
                    <div class="image">
                        <img src={caseStudy_3} alt="case-study" />
                    </div>
                </div>
            </div>
            <div class="col-md-4" data-aos="fade-up">
                <div class="case-item">
                    <div class="image">
                        <img src={caseStudy_4} alt="case-study" />
                    </div>
                </div>
            </div>
            <div class="col-md-4" data-aos="fade-up">
                <div class="case-item">
                    <div class="image">
                        <img src={caseStudy_5} alt="case-study" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- case study end -->

<!-- Partner -->
<div class="container section">
    <div class="common-title-container">
        <h1 class="common-title">{_.partner}</h1>
    </div>
    <div class="common-content-container">
        <div class="row">
            <Partner></Partner>
        </div>
    </div>
</div>

<!-- Partner End -->

<style lang="scss">
    @keyframes scale {
        0% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }
    .splide {
        // height: 900px; /* Đặt chiều cao cố định cho carousel */
        height: 100%;
    }

    // height: 60rem;
    .carousel-item {
        width: 100%;
        aspect-ratio: 3;
        h1 {
            font-weight: 700;
            font-size: 6.4rem;
            margin-bottom: 2rem !important;
        }
        h5 {
            font-size: 3rem;
            font-weight: 500;
        }
    }

    .common-title-container {
        text-align: center;
        padding: 5rem 0 2rem 0;
        .common-title {
            font-size: 5.2rem;
            font-weight: 700;
            letter-spacing: 0.2rem;
            color: var(--six-color);
            // font-family: "Urbanist";
        }
    }

    .common-content-container {
        width: 100%;
        margin-top: 2rem;
    }

    .single-image {
        position: relative;
        margin-right: 3.3rem;
        .wrapper {
            display: flex;
            gap: 3rem;
            .left {
                width: 50%;
                .main-img {
                    position: relative;
                    margin-right: 1.5rem;
                    margin-bottom: 2.8rem;
                    img {
                        vertical-align: middle;
                        max-width: 100%;
                        border-radius: 2rem;
                    }

                    &::before {
                        content: "";
                        position: absolute;
                        height: 99%;
                        width: 99%;
                        border: 1px solid var(--five-color);
                        border-radius: 2rem;
                        top: 1.7rem;
                        left: 1.7rem;
                    }
                }
                .image-1 {
                    img {
                        border-radius: 20px;
                        max-width: 100%;
                        vertical-align: middle;
                    }
                }
            }
            .right {
                width: calc(50% - 3rem);
                .text-box {
                    display: flex;
                    margin-bottom: 2rem;
                    padding: 3rem 4rem;
                    background-color: var(--five-color);
                    border-radius: 2rem;
                    .title {
                        color: #fff;
                        font-size: 5rem;
                        margin-bottom: 0;
                        margin-right: 3rem;
                        font-weight: 700;
                    }
                    .description {
                        color: #fff;
                        margin-bottom: 0;
                    }
                }
                .image-2 {
                    img {
                        height: 404px;
                        width: 100%;
                        -o-object-fit: cover;
                        object-fit: cover;
                        border-radius: 20px;
                        vertical-align: middle;
                    }
                }
            }
        }
    }
    .about-content {
        // font-family: "Urbanist";

        .list {
            margin-top: 3rem !important;
            margin: 0;
            padding: 0;
            list-style: none;

            li {
                display: flex;
                align-items: center;
                color: #000;
                font-size: 2.4rem;
                font-weight: bold;
                line-height: 1.25;
                border-bottom: 0.1rem solid #e3e3e3;
                margin-bottom: 1.5rem;
                padding-bottom: 1.4rem;
                i {
                    color: #003b5a;
                    font-size: 1.6rem;
                    margin-right: 1.5rem;
                }
            }
        }
    }

    .case-study-title {
        margin: 6rem 0;
    }
    .case-item {
        position: relative;
        margin-bottom: 30px;
        border-radius: 20px;
        overflow: hidden;
        .image {
            position: relative;
            width: 100%;
            height: 100%;
            img {
                height: 100%;
                width: 100%;
                -o-object-fit: cover;
                object-fit: cover;
                vertical-align: middle;
            }

            &::before {
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                border: 1px solid #ff5c00;
                border-radius: 20px;
                opacity: 0;
                z-index: 2;
                transition: 0.3s;
            }

            &::after {
                content: "";
                position: absolute;
                height: 100%;
                width: 100%;
                background-color: rgba(0, 59, 90, 0.5);
                top: 0 !important;
                left: 0 !important;
                opacity: 0;
                z-index: 1;
                transition: 0.3s;
            }
        }

        &:hover {
            .image {
                &::before,
                &::after {
                    left: 20px;
                    right: 20px;
                    top: 20px;
                    bottom: 20px;
                    opacity: 1;
                }
            }
        }
    }

    .item {
        display: flex;
        margin: 2rem 0;
        .item-img {
            width: 6rem;
            height: 6rem;
        }
        .item-content {
            display: block;
            padding-left: 2rem;
            .item-title {
                font-size: 2rem;
                font-weight: 700;
            }
            .item-desc {
                font-size: 1.6rem;
                color: #54595f;
            }
        }
    }
    //--------------------------

    @media (max-width: 767px) {
        h1 {
            font-size: 4rem !important;
        }
        h5 {
            font-size: 1.6rem !important;
        }
        .single-image {
            margin-right: 0;
            img {
                width: 100%;
            }
            .wrapper {
                flex-wrap: wrap;
                gap: 2rem;
                .left {
                    width: 100%;
                    .main-img {
                        margin: 0 0 2rem 0;
                        &::before {
                            display: none;
                        }
                    }
                }
                .right {
                    width: 100%;
                    .text-box {
                        display: block;
                    }
                }
            }
        }
        .about-content {
            margin-top: 3.3rem;
            .list {
                li {
                    font-size: 1.8rem;
                }
            }
        }
        .item {
            padding: 1rem;
            margin-top: 2rem;
            margin-bottom: 0;
        }
    }

    @media (max-width: 991px) {
        .about-content {
            margin-top: 3.3rem;
        }
    }

    @media only screen and (max-width: 920px) {
        .carousel-item {
            aspect-ratio: 2;
        }

        .carousel-content {
            justify-content: center !important;
        }
        .common-title-container {
            padding: 3rem 0 2rem 2rem;
        }
    }
</style>
