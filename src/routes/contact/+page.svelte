<script lang="ts">
    import { translationStore } from "$lib/i18n";
    const URI = "https://script.google.com/macros/s/AKfycbxwSy2nY7k4ogKewBJ5gv1S-gjZtg7DyNNNzzR2HKPXvJZnhNlzASxNcGPXqeRjahgaeg/exec"
    //https://script.google.com/macros/s/AKfycbxwSy2nY7k4ogKewBJ5gv1S-gjZtg7DyNNNzzR2HKPXvJZnhNlzASxNcGPXqeRjahgaeg/exec?action=addUser
    //   {
    //     "name": "nam",
    //     "age":"123",
    //     "mobile":"123314123",
    //     "email": "asdfasf@gmail.com"
    // }


  
    let _: any;
    $: _ = $translationStore;

    const contactForm = {
      firstName: '',
      lastName: '',
      phone: '',
      email: "",
      message: ""
    }

    async function handleSend() {
      const response = await fetch(URI, {
        method: "POST",
        body: JSON.stringify(contactForm),
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const result = await response.json();
      console.log(result);
    }
</script>

<div class="container">
    <div class="section-title contact-title">
        <h2 class="title">{_.contact_title}</h2>
    </div>
    <div class="row">
        <div class="col-lg-8">
            <form action="">
                <div class="row">
                    <div class="col-md-6 col-lg-6">
                        <input
                            type="text"
                            name="firstName"
                            bind:value={contactForm.firstName}
                            placeholder={_.contact_form_first_name}
                        />
                    </div>
                    <div class="col-md-6 col-lg-6">
                        <input
                            type="text"
                            name="lastName"
                            bind:value={contactForm.lastName}
                            placeholder={_.contact_form_last_name}
                        />
                    </div>
                    <div class="col-md-6 col-lg-6">
                        <input
                            type="text"
                            name="phone"
                            bind:value={contactForm.phone}
                            placeholder={_.contact_form_phone}
                        />
                    </div>
                    <div class="col-md-6 col-lg-6">
                        <input
                            type="email"
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
                        <button on:click={handleSend} class="btn-submit" type="submit"
                            >{_.contact_form_submit}</button
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
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
</div>

<style lang="scss">
    .contact-title {
        margin-bottom: 3rem;
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
