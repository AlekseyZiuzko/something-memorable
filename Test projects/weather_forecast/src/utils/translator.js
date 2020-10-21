import en from "../dictionaries/en.json";
import ru from "../dictionaries/ru.json";

export default function translator(lang, propName) {
    if (lang === "en") {
        return en[propName];
    } else if (lang === "ru") {
        return ru[propName];
    }
}
