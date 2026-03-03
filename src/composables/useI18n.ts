import { ref, computed } from 'vue';

const currentLanguage = ref(localStorage.getItem('lang') || 'en-US');
const translations = ref<Record<string, any>>({});

export function useI18n() {
    const loadTranslations = async (lang: string) => {
        try {
            const response = await fetch(`/lang/${lang}.json`);
            const data = await response.json();
            translations.value = data;
            currentLanguage.value = lang;
            localStorage.setItem('lang', lang);
            return data;
        } catch (error) {
            console.error('Failed to load translations:', error);
        }
    };

    const t = (key: string) => {
        const keys = key.split('.');
        let result = translations.value;
        for (const k of keys) {
            if (result && result[k] !== undefined) {
                result = result[k];
            } else {
                return key;
            }
        }
        return result;
    };

    return {
        t,
        currentLanguage: computed(() => currentLanguage.value),
        loadTranslations,
        translations
    };
}
