import { writable } from "svelte/store";

const translations: any = {
    en: () => import('../locales/en.json'),
    vi: () => import('../locales/vi.json')
}

// store cho ngon ngu hien tai = default
export const currentLocale = writable('vi');

// Store cho cac ban dich
export const translationStore = writable<{[key:string]: string}>({});

// ham tai cac ban dich dua tren language code
export const loadTranslations = async (locale:string) => {
    const translationsModule = await translations[locale]();
    translationStore.set(translationsModule.default);
}

//cap nhat cac ban dich khi thay doi ngon ngu
currentLocale.subscribe((locale:string) => {
    loadTranslations(locale);
})
