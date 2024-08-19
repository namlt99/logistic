<script lang="ts">
    import { translationStore } from "$lib/i18n";

    let _: any;
    $: _ = $translationStore;
</script>

<div
    class="container-fluid bg-dark text-light footer pt-5 wow fadeIn"
    data-wow-delay="0.1s"
    style="margin-top: 6rem;"
>
    <div class="container py-5">
        <div class="row g-5">
            <div class="col-lg-4 col-md-6">
                <h4 class="text-light mb-4">{_.contact_information}</h4>
                <p class="mb-2">
                    <i class="bi bi-geo-alt-fill me-3"></i>{_.contact_address}
                </p>
                <p class="mb-2">
                    <i class="bi bi-telephone-fill me-3"></i>093 407 3162
                </p>
                <p class="mb-2">
                    <i class="bi bi-envelope-fill me-3"></i>haivh@sil.com.vn
                </p>
            </div>
            <div class="col-lg-4 col-md-6">
                <h4 class="text-light mb-4">{_.quick_link}</h4>
                <a class="btn btn-link" href="/"
                    ><i class="bi bi-caret-right-fill me-3"></i>{_.home}</a
                >
                <a class="btn btn-link" href="/about"
                    ><i class="bi bi-caret-right-fill me-3"></i>{_.about}</a
                >
                <a class="btn btn-link" href="/service"
                    ><i class="bi bi-caret-right-fill me-3"></i>{_.service}</a
                >
                <a class="btn btn-link" href="/contact"
                    ><i class="bi bi-caret-right-fill me-3"></i>{_.contact}</a
                >
            </div>
            <div class="col-lg-4 col-md-6">
                <h4 class="text-light mb-4">{_.address}</h4>
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.5848113929906!2d106.65054277688263!3d10.843051389309743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529a27a1e2eef%3A0x2848f190898594b4!2zMTQ0IE5ndXnhu4VuIFbEg24gS2jhu5FpLCBQaMaw4budbmcgOCwgR8OyIFbhuqVwLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1723695334535!5m2!1svi!2s"
                width="100%"
                height="200"
                style="border:0;"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="google map"
            ></iframe>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    .footer {
        background:
            linear-gradient(rgba(6, 3, 21, 0.5), rgba(6, 3, 21, 0.5)),
            url(../assets/images/map.png) center center no-repeat;
        background-size: cover;
    }

    // .footer .btn.btn-social {
    //   margin-right: 5px;
    //   width: 35px;
    //   height: 35px;
    //   display: flex;
    //   align-items: center;
    //   justify-content: center;
    //   color: var(--light);
    //   border: 1px solid #FFFFFF;
    //   border-radius: 35px;
    //   transition: .3s;
    // }

    // .footer .btn.btn-social:hover {
    //   color: var(--primary);
    // }

    .footer .btn.btn-link {
        display: block;
        margin-bottom: 5px;
        padding: 0;
        text-align: left;
        color: #ffffff;
        font-size: 15px;
        font-weight: normal;
        text-transform: capitalize;
        transition: 0.3s;
        text-decoration: none;
    }

    .footer .btn.btn-link:hover {
        letter-spacing: 1px;
        box-shadow: none;
    }

    // .footer .copyright {
    //   padding: 25px 0;
    //   font-size: 15px;
    //   border-top: 1px solid rgba(256, 256, 256, .1);
    // }

    // .footer .copyright a {
    //   color: var(--light);
    // }
</style>
