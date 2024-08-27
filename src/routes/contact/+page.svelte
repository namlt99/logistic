<script lang="ts">
    import { translationStore } from "$lib/i18n";
    const URI =
        "https://script.google.com/macros/s/AKfycbyOUM3as5qxLCY9PsTF6HDpkQAT1noaub-ijGdO9AbiuSHjWBntBKGQeIZIp8AdahgBRA/exec";

    let _: any;
    $: _ = $translationStore;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    interface Contact {
        firstName: string;
        lastName: string;
        phone: string;
        email: string;
        message: string;
        status: string;
    }

    let contactForm: Contact;

    let firstNameError = "";
    let lastNameError = "";
    let phoneError = "";
    let emailError = "";

    function initForm() {
        contactForm = {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            message: "",
            status: "chưa xử lý"
        };
    }

    initForm();

    const validateForm = () => {
        let valid = true;

        if (!contactForm.firstName.trim()) {
            firstNameError = "Họ không được để trống";
            valid = false;
        } else {
            firstNameError = "";
        }

        if (!contactForm.lastName.trim()) {
            lastNameError = "Tên không được để trống";
            valid = false;
        } else {
            lastNameError = "";
        }

        if (!contactForm.phone.trim()) {
            phoneError = "Số điện thoại không được để trống";
            valid = false;
        } else {
            phoneError = "";
        }

        if (!contactForm.email.trim()) {
            emailError = "Email không được để trống";
            valid = false;
        } else {
            if (!emailRegex.test(contactForm.email)) {
                emailError = "Không đúng định dạng email";
                valid = false;
            } else {
                emailError = "";
            }
        }

        return valid;
    };

    async function handleSend() {
        if (!validateForm()) return;

        const response = await fetch(URI, {
            method: "POST",
            body: JSON.stringify(contactForm),
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json",
            },
        });
        // const result = await response.json();

        // console.log(result);
        initForm();
        alert("Thông tin đã được gửi đi");
       
    }
</script>
<svelte:head>
  <title>Liên Hệ - SIL VIETNAM</title>
  <meta name="description" content="Liên hệ với SIL VIETNAM để nhận tư vấn về dịch vụ vận tải toàn cầu và giải pháp logistics tối ưu cho doanh nghiệp của bạn." />
  <meta name="keywords" content="liên hệ SIL VIETNAM, tư vấn logistics, dịch vụ vận tải" />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="Liên Hệ - SIL VIETNAM" />
  <meta property="og:description" content="Liên hệ SIL VIETNAM để được hỗ trợ và tư vấn về các dịch vụ vận tải và logistics chuyên nghiệp." />
  <meta property="og:type" content="website" />
  <!-- <meta property="og:image" content="https://sil.com.vn/contact-image.jpg" />-->
  <meta property="og:url" content="https://sil.com.vn/contact" /> 
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Liên Hệ - SIL VIETNAM" />
  <meta name="twitter:description" content="Chúng tôi sẵn sàng hỗ trợ bạn với các giải pháp logistics tốt nhất từ SIL VIETNAM." />
  <!-- <meta name="twitter:image" content="https://sil.com.vn/contact-image.jpg" /> -->
</svelte:head>
<div class="container">
    <div class="section-title contact-title">
        <h2 class="title">{_.contact_title}</h2>
    </div>
    <div class="row">
        <div class="col-lg-8">
            <form action="">
                <div class="row">
                    <div class="col-md-6 col-lg-6">
                        {#if firstNameError}
                            <p class="msg_error">{firstNameError}</p>
                        {/if}
                        <input
                            type="text"
                            name="firstName"
                            bind:value={contactForm.firstName}
                            placeholder={_.contact_form_first_name}
                        />
                    </div>
                    <div class="col-md-6 col-lg-6">
                        {#if lastNameError}
                            <p class="msg_error">{lastNameError}</p>
                        {/if}
                        <input
                            type="text"
                            name="lastName"
                            bind:value={contactForm.lastName}
                            placeholder={_.contact_form_last_name}
                        />
                    </div>
                    <div class="col-md-6 col-lg-6">
                        {#if phoneError}
                            <p class="msg_error">{phoneError}</p>
                        {/if}
                        <input
                            type="text"
                            name="phone"
                            bind:value={contactForm.phone}
                            placeholder={_.contact_form_phone}
                        />
                    </div>
                    <div class="col-md-6 col-lg-6">
                        {#if emailError}
                            <p class="msg_error">{emailError}</p>
                        {/if}
                        <input
                            type="email"
                            id="email"
                            name="email"
                            bind:value={contactForm.email}
                            placeholder={_.contact_form_email}
                        />
                    </div>
                    <div class="col-lg-12">
                        <textarea
                            name="message"
                            placeholder={_.contact_form_message}
                            bind:value={contactForm.message}
                            id="message"
                            rows="6"
                        ></textarea>
                    </div>
                    <div class="col-lg-12">
                        <button
                            on:click={handleSend}
                            class="btn-submit"
                            type="submit">{_.contact_form_submit}</button
                        >
                    </div>
                </div>
            </form>
        </div>
        <div class="col-lg-4">
            <div class="info-box">
                <div class="icon-box">
                    <div class="icon">
                        <i class="bi bi-geo-alt-fill"></i>
                    </div>
                    <div class="content">
                        <h4 class="title">{_.address}</h4>
                        <p>
                            {_.contact_address}
                        </p>
                    </div>
                </div>
                <div class="icon-box">
                    <div class="icon">
                        <i class="bi bi-envelope-fill"></i>
                    </div>
                    <div class="content">
                        <h4 class="title">{_.email_title}</h4>
                        <p>haivh@sil.com.vn</p>
                    </div>
                </div>
                <div class="icon-box">
                    <div class="icon">
                        <i class="bi bi-telephone-fill"></i>
                    </div>
                    <div class="content">
                        <h4 class="title">{_.hotline}</h4>
                        <p>093 407 3162</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container-fluid page-header py-5">
    <div class="map-container">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.5848113929906!2d106.65054277688263!3d10.843051389309743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529a27a1e2eef%3A0x2848f190898594b4!2zMTQ0IE5ndXnhu4VuIFbEg24gS2jhu5FpLCBQaMaw4budbmcgOCwgR8OyIFbhuqVwLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1723695334535!5m2!1svi!2s"
            width="100%"
            style="border:0;"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="google map"
        ></iframe>
    </div>
</div>

<style lang="scss">
    .contact-title {
        margin-bottom: 3rem;
    }
    .msg_error {
        font-size: 11px;
        color: #f05923;
        display: block;
        padding: 0 5px 5px 5px;
        margin: 0;
    }
    form {
        input {
            width: 100%;
            border: 0;
            outline: 0;
            background-color: #f5f7fa;
            padding: 20px 30px;
            margin-bottom: 30px;
            border-radius: 30px;
        }
        textarea {
            color: #003b5a;
            width: 100%;
            border: 0;
            outline: 0;
            background-color: #f5f7fa;
            padding: 20px 30px;
            margin-bottom: 16px;
            border-radius: 30px;
            height: 216px;
        }
        .btn-submit {
            color: #fff;
            border: 0;
            outline: 0;
            background-color: #ff5c00;
            padding: 15px 30px;
            font-weight: bold;
            letter-spacing: 1.28px;
            border-radius: 40px;
            transition: 0.3s;
            &:hover {
                background-color: #003b5a;
            }
        }
    }

    .info-box {
        border: 1px solid #e3e3e3;
        border-radius: 20px;
        padding: 40px 40px 40px;
        .icon-box {
            display: flex;
            margin-bottom: 3rem;
            .icon {
                color: #fff;
                font-size: 2rem;
                height: 5rem;
                width: 5rem;
                line-height: 5rem;
                text-align: center;
                background-color: #003b5a;
                border-radius: 50%;
                flex-shrink: 0;
                margin-right: 2rem;
            }
        }
        .content {
            .title {
                margin-bottom: 4px;
                font-size: 18px;
                line-height: 1.5;
                color: #003b5a;
                font-weight: bold;
            }
        }
    }

    iframe {
        height: 70rem;
    }

    @media (max-width: 991px) {
        .info-box {
            margin-top: 4rem;
            padding: 4rem 2rem 4rem;
        }
        iframe {
            height: 50rem;
        }
    }
    @media (max-width: 767px) {
        iframe {
            height: 35rem;
        }
    }
</style>
