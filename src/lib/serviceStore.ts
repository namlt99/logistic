import { writable } from "svelte/store";
import img_service_1 from "/src/assets/images/service-1.jpg";
import img_service_2 from "/src/assets/images/service-2.jpg";
import img_service_3 from "/src/assets/images/service-3.png";
import img_service_4 from "/src/assets/images/service-4.jpg";
import img_service_5 from "/src/assets/images/service-5.jpg";
import img_service_6 from "/src/assets/images/service-6.jpg";

import img_service_detail_1 from "/src/assets/images/service-detail/service-1.jpg";
import img_service_detail_2 from "/src/assets/images/service-detail/service-2.jpg";
import img_service_detail_3 from "/src/assets/images/service-detail/service-3.jpg";
import img_service_detail_4 from "/src/assets/images/service-detail/service-4.png";
import img_service_detail_5 from "/src/assets/images/service-detail/service-5.jpg";
import img_service_detail_6 from "/src/assets/images/service-detail/service-6.png";

const serviceList = [
    {
        id: 1,
        icon: "bi bi-tsunami",
        title: "service_cart_1_title",
        description: "service_cart_1_desc",
        desc: "service_1",
        slug_vi: "van-chuyen-duong-bien",
        slug_en: "sea-freight",
        img: img_service_1,
        img_detail: img_service_detail_1
    },
    {
        id: 2,
        icon: "bi bi-airplane-fill",
        title: "service_cart_2_title",
        description: "service_cart_2_desc",
        desc: "service_2",
        slug_vi: "van-chuyen-duong-hang-khong",
        slug_en: "air-freight",
        img: img_service_2,
        img_detail: img_service_detail_2
    },
    {
        id: 3,
        icon: "bi bi-people-fill",
        title: "service_cart_3_title",
        description: "service_cart_3_desc",
        desc: "service_3",
        slug_vi:
            "moi-gioi-hai-quan-va-cap-co-giay-chung-nhan-kiem-dich-thuc-vat",
        slug_en: "custom-brokerage-and-co-phytosanitary-certificate-issuance",
        img: img_service_3,
        img_detail: img_service_detail_3
    },
    {
        id: 4,
        icon: "bi bi-house-door-fill",
        title: "service_cart_4_title",
        description: "service_cart_4_desc",
        desc: "service_4",
        slug_vi: "kho-hang",
        slug_en: "Warehousing",
        img: img_service_4,
        img_detail: img_service_detail_4
    },
    {
        id: 5,
        icon: "bi bi-postcard-fill",
        title: "service_cart_5_title",
        description: "service_cart_5_desc",
        desc: "service_5",
        slug_vi: "dich-vu-xin-giay-chung-nhan-kiem-dich-thuc-vat",
        slug_en: "phytosanitary-certificate-application-service",
        img: img_service_5,
        img_detail: img_service_detail_5
    },
    {
        id: 6,
        icon: "bi bi-grid-1x2-fill",
        title: "service_cart_6_title",
        description: "service_cart_6_desc",
        desc: "service_6",
        slug_vi: "van-tai-da-phuong-thuc",
        slug_en: "multimodal-transport",
        img: img_service_6,
        img_detail: img_service_detail_6
    },
];

export const servicesStore = writable(serviceList);
