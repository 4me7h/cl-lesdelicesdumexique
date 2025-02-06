import i18n from 'i18next';
import { initReactI18next} from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        fr: {
            translation: {
              "home-small": "Découvrez la vraie cuisine mexicaine à Salaberry-de-Valleyfield",
              "home-title": "Les Délices du Mexique",
              "home-subtitle-01": "La meilleure saveur à votre portée",
              "home-subtitle-02": "Plongez dans des saveurs authentiques", 
              "home-content": "Notre restaurant à Salaberry-de-Valleyfield propose une cuisine mexicaine authentique, avec des plats préparés selon les traditions et les recettes familiales.", 
              "home-cta": "Découvrez notre menu",
              "about-title": "Notre histoire" 
            }
        },
        es: {
            translation: {
              "home-small": "Cocina mexicana en Salaberry-de-Valleyfield",
              "home-title": "Los Sabores de México",
              "home-subtitle-01": "El mejor sabor a tu alcance",
              "home-subtitle-02": "Descubre sabores auténticos",
              "home-content": "Nuestro restaurante en Salaberry-de-Valleyfield ofrece una auténtica cocina mexicana, con platos preparados siguiendo tradiciones y recetas familiares.",
              "home-cta": "Descubre nuestro menú",
              "about-title": "español" 
            }
        },
        en: {
            translation: {
              "home-small": "Mexican cuisine in Salaberry-de-Valleyfield",
              "home-title": "The Flavors of Mexico",
              "home-subtitle-01": "The best flavor within your reach",
              "home-subtitle-02": "Discover authentic flavors",
              "home-content": "Our restaurant in Salaberry-de-Valleyfield offers authentic Mexican cuisine, with dishes prepared following family traditions and recipes.",
              "home-cta": "Explore our menu",
              "about-title": "english" 
            }
        }
    },
    lng: "fr", //idioma por defecto
    fallbacking: "fr",

    interpolation: {
        escapeValue: false
    }
});

export default i18n;