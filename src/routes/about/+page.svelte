<script lang="ts">
    import ProcessBoard from "../../components/ProcessBoard.svelte";
    import aboutImg_4 from "../../assets/images/container-7.png";
    import aboutImg_5 from "../../assets/images/about-5.jpg";
    import aboutImg_6 from "../../assets/images/about-6.jpg";
    import aboutShape from "../../assets/images/about-shape.png";

    import { translationStore } from "../../lib/i18n";
    let _: any;
    $: _ = $translationStore;
</script>
<svelte:head>
  <title>Giới Thiệu - SIL VietNam</title>
  <meta name="description" content="Tìm hiểu về SIL VIETNAM - công ty logistics uy tín với nhiều năm kinh nghiệm, cung cấp các giải pháp vận tải toàn cầu và quản lý chuỗi cung ứng tối ưu." />
  <meta name="keywords" content="về SIL VIETNAM, công ty logistics, vận tải hàng hóa, chuỗi cung ứng" />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="Giới Thiệu - SIL VIETNAM" />
  <meta property="og:description" content="Khám phá lịch sử, sứ mệnh và giá trị cốt lõi của SIL VIETNAM trong ngành logistics." />
  <meta property="og:type" content="website" />
  <!-- <meta property="og:image" content="https://sil.com.vn/about-image.jpg" /> -->
  <meta property="og:url" content="https://sil.com.vn/about" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Giới Thiệu - SIL VIETNAM" />
  <meta name="twitter:description" content="SIL VIETNAM - Đối tác logistics đáng tin cậy của bạn." />
  <!-- <meta name="twitter:image" content="https://sil.com.vn/about-image.jpg" /> -->
</svelte:head>
<div class="container section" data-aos="fade-up">
    <div class="section-title left">
        <h2 class="title">SIL VIETNAM</h2>
        <p class="description">
            {_.about_desc_1}
        </p>
        <p class="description">
            {_.about_desc_2}
        </p>
        <p class="description">
            {_.about_desc_3}
        </p>
    </div>
</div>

<div class="container section" data-aos="fade-zoom-in">
    <div class="section-title">
        <h2 class="title text-center">{_.process_board_title}</h2>
    </div>
    <ProcessBoard></ProcessBoard>
</div>
<!-- Why choose us-->
<div class="container section">
    <div class="row">
        <div class="col-lg-6" data-aos="fade-right">
            <div class="single-image">
                <div class="img-1">
                    <img src={aboutImg_4} alt="about 1" />
                </div>
                <div class="img-2"><img src={aboutImg_6} alt="about 2" /></div>
                <div class="img-3"><img src={aboutImg_5} alt="about 3" /></div>
                <div class="text-box">
                    <h2>10+</h2>
                    <h4>{_.about_years_exp}</h4>
                </div>
                <div class="shape">
                    <img src={aboutShape} alt="shape" />
                </div>
            </div>
        </div>
        <div class="col-lg-6" data-aos="fade-left">
            <div class="about-content">
                <div class="section-title left">
                    <h4 class="subtitle">{_.about_why_choose_sub_title}</h4>
                    <h2 class="title">{_.about_why_choose_title}</h2>
                    <p class="description">
                       {_.about_why_choose_desc}
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Why choose us-->

<div class="container-fluid p-0 pb-5 section" data-aos="fade-zoom-in">
    <div class="counter">
        <div class="container">
            <div class="counter-area">
                <div class="counter-box2">
                    <div class="content" id="counter">
                        <span class="count">10</span><span class="suffix"
                            >+</span
                        >
                        <p>{_.about_years_exp}</p>
                    </div>
                </div>
                <div class="counter-box2">
                    <div class="content" id="counter">
                        <span class="count">30</span><span class="suffix"
                            >+</span
                        >
                        <p>{_.about_team_member}</p>
                    </div>
                </div>
                <div class="counter-box2">
                    <div class="content" id="counter">
                        <span class="count">100</span><span class="suffix"
                            >+</span
                        >
                        <p>{_.about_team_customer}</p>
                    </div>
                </div>
                <div class="counter-box2">
                    <div class="content" id="counter">
                        <span class="count">5</span><span class="suffix">+</span
                        >
                        <p>{_.about_team_type_trans}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container section">
    <div class="section-title">
        <h2 class="title">{_.about_our_mission_title}</h2>
    </div>
    <div class="row" data-aos="fade-up">
        <div class="col-md-6">
            <ul class="mission-list">
                <li class="mission-text">
                    <i class="bi bi-check"></i>{_.about_mission_1}
                </li>
                <li class="mission-text">
                    <i class="bi bi-check"></i>{_.about_mission_2}
                </li>
                <li class="mission-text">
                    <i class="bi bi-check"></i>{_.about_mission_3}
                </li>
                <li class="mission-text">
                    <i class="bi bi-check"></i>{_.about_mission_4}
                </li>
                <li class="mission-text">
                    <i class="bi bi-check"></i>{_.about_mission_5}
                </li>
            </ul>
        </div>
        <div class="col-md-6">
            <ul class="mission-list">
                <li class="mission-text">
                    <i class="bi bi-check"></i>{_.about_mission_6}
                </li>
                <li class="mission-text">
                    <i class="bi bi-check"></i>{_.about_mission_7}
                </li>
                <li class="mission-text">
                    <i class="bi bi-check"></i>{_.about_mission_8}
                </li>
                <li class="mission-text">
                    <i class="bi bi-check"></i>{_.about_mission_9}
                </li>
                <li class="mission-text">
                    <i class="bi bi-check"></i>{_.about_mission_10}
                </li>
            </ul>
        </div>
    </div>
</div>

<style lang="scss">
    img {
        border-radius: 2rem;
    }
    .single-image {
        position: relative;
        max-width: 60rem;
        .img-1 {
            display: inline-block;
            margin: 6.3rem 0 24.6rem;
        }
        .img-2 {
            position: absolute;
            top: 0;
            right: 0;
        }
        .img-3 {
            position: absolute;
            bottom: 3.3rem;
            right: 4.7rem;
            img {
                border: 0.7rem solid #fff;
                border-radius: 2rem;
                width: 29rem;
            }
        }
        .text-box {
            position: absolute;
            background-color: #ff5c00;
            padding: 4rem 3.5rem 2rem;
            height: 21.2rem;
            width: 21.8rem;
            border-radius: 2rem;
            left: 7.9rem;
            top: 31.8rem;

            h2 {
                color: #fff;
                font-size: 6.8rem;
                margin-bottom: 0.4rem;
                font-weight: bold;
            }
            h4 {
                color: #fff;
                margin-bottom: 0;
                font-size: 1.8rem;
                font-weight: bold;
            }
        }
        .shape {
            position: absolute;
            left: 0;
            bottom: 0;
            z-index: -1;
        }
    }

    .counter {
        position: relative;
        background-image: url(../../assets/images/aboutCounter-2-bg.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        padding: 8.5rem 0 8.4rem;
        &::before {
            content: "";
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            background-color: rgba(0, 162, 255, 0.8);
        }
        .counter-area {
            position: relative;
            display: flex;
            justify-content: space-between;
            .counter-box2 {
                position: relative;
                .content {
                    line-height: 1;
                    .count,
                    .suffix {
                        color: #fff;
                        font-size: 6.8rem;
                        font-weight: bold;
                        // font-family: "Urbanist";
                    }
                    p {
                        color: #fff;
                        font-size: 1.8rem;
                        font-weight: bold;
                        // font-family: "Urbanist";
                        margin-top: 1rem;
                        margin-bottom: 0;
                    }
                }
            }
        }
    }

    .mission-list {
        list-style-type: none;
        padding: 0;
        .mission-text {
            font-size: 2rem;
            margin-bottom: 1.5rem;
            i {
                font-size: 2rem;
                color: #00c5a8;
                margin-right: 1rem;
            }
        }
    }

    @media (max-width: 767px) {
        img {
            width: 100%;
        }
        .single-image {
            text-align: center;
            .img-1 {
                margin: 0 0 2rem;
            }
            .img-2 {
                position: static;
                width: 50%;
                float: left;
                padding-right: 1.8rem;
                img {
                    width: 100%;
                }
            }
            .img-3 {
                position: static;
                width: 50%;
                display: inline-block;
                img {
                    border: 0;
                    width: 100%;
                }
            }
            .text-box,
            .shape {
                display: none;
            }
        }
        .counter {
            padding: 7.3rem 0 5.5rem;
            .counter-area {
                flex-wrap: wrap;
                .counter-box2 {
                    width: 50%;
                    margin-bottom: 2.6rem;
                    .content {
                        .count,
                        .suffix {
                            font-size: 4.8rem;
                        }
                        p {
                            font-weight: 600;
                        }
                    }
                }
            }
        }
        .mission-text {
            font-size: 1.8rem !important;
            margin-bottom: 1rem !important;
        }
    }
</style>
