<script lang="ts">
    import { translationStore } from "../lib/i18n";
    import logo from "../assets/images/logo.png"
    let _: any;
    $: _ = $translationStore;
</script>

<div class="process-board">
    <div class="process-board_header">
        <img src={logo} alt="logo">
    </div>
    <div class="process-board_body">
        <div class="step">
            <h4 class="step-number">{_.step_1_title}</h4>
            <h3 class="step-desc">{_.step_1_desc}</h3>
            <div class="arrow-right"></div>
        </div>

        <div class="step">
            <h4 class="step-number">{_.step_2_title}</h4>
            <h3 class="step-desc">{_.step_2_desc}</h3>
            <div class="arrow-right"></div>
        </div>

        <div class="step">
            <h4 class="step-number">{_.step_3_title}</h4>
            <h3 class="step-desc">{_.step_3_desc}</h3>
            <div class="arrow-right"></div>
        </div>

        <div class="step">
            <h4 class="step-number">{_.step_4_title}</h4>
            <h3 class="step-desc">{_.step_4_desc}</h3>
            <div class="arrow-right"></div>
        </div>

        <div class="step">
            <h4 class="step-number">{_.step_5_title}</h4>
            <h3 class="step-desc">{_.step_5_desc}</h3>
            <div class="arrow-right"></div>
        </div>

        <div class="step">
            <h4 class="step-number">{_.step_6_title}</h4>
            <h3 class="step-desc">{_.step_6_desc}</h3>
        </div>
    </div>
</div>

<style lang="scss">
    .process-board {
        background: white;
        width: 100%;
        margin-bottom: 2rem;
        height: auto;
        border-radius: 1.5rem;
        padding: 5rem;
        box-shadow: 0px 0px 1.5rem rgba(128, 128, 128, 0.5);
        .process-board_header {
            width: 100%;
            height: auto;
            text-align: center;
        }
        .process-board_body {
            padding-top: 2rem;
            height: auto;
            display: grid;
            gap: 1rem;
            grid-template-columns: repeat(6, 1fr);
            align-content: space-around;
            justify-content: space-between;
            .step {
                background-color: white;
                max-width: 20rem;
                padding: 2rem;
                position: relative;
                font-weight: 600;
                .step-number {
                    text-align: center;
                    margin-bottom: 1rem;
                    font-weight: 600;
                    color: var(--thirt-color);
                }
                .step-desc {
                    font-weight: 600;
                    text-align: center;
                    white-space: pre-wrap;
                    word-wrap: break-word;
                }
                .arrow-right {
                    width: 2rem;
                    height: 0.2rem;
                    background: var(--four-color);
                    position: absolute;
                    right: -1rem;
                    top: 30%;
                    transform: translateY(-50%);
                    &::before {
                        position: absolute;
                        content: "";
                        width: 0;
                        height: 0;
                        border-top: 0.5rem solid transparent;
                        border-bottom: 0.5rem solid transparent;
                        border-left: 0.5rem solid var(--four-color);
                        right: 0;
                        top: 50%;
                        transform: translateY(-50%);
                    }
                }
            }
        }
        @media only screen and (max-width: 920px) {
            .process-board_body {
                grid-template-columns: auto auto auto;
                grid-template-rows: auto auto;
            }
            .step:nth-child(3) {
                .arrow-right {
                    transform: rotate(90deg) translateX(-50%);
                    right: 40%;
                    top: 106%;
                }
            }

            .step:nth-child(4) {
                order: 6;
                .arrow-right {
                    left: -1rem;
                    &::before {
                        border-right: 0.5rem solid var(--four-color);
                        border-left: none;
                        left: 0;
                    }
                }
            }

            .step:nth-child(5) {
                order: 5;
                .arrow-right {
                    left: -1rem;
                    &::before {
                        border-right: 0.5rem solid var(--four-color);
                        border-left: none;
                        left: 0;
                    }
                }
            }

            .step:nth-child(6) {
                order: 4;
            }

            .step {
                display: flex;
                flex-direction: column;
                padding: 1rem !important;
            }
        }

        @media only screen and (max-width: 431px) {
            .step {
                min-width: 10rem;
                padding: 0.5rem !important;
                margin-bottom: 1rem;
                .step-number{
                    font-size: 1.4rem !important;
                }
                .step-desc{
                    font-size: 1.2rem !important;
                }
            }
            .arrow-right{
                width: 1.5rem;

            }
            .step:nth-child(3) {
                .arrow-right {
                    top: 120%;
                }
            }
        }
    }
    @media only screen and (max-width: 920px) {
        .process-board {
            padding: 1rem;
        }
    }
</style>
