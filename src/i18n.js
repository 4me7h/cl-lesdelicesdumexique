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
              "about-title": "Notre histoire",
              "about-content": "Notre histoire s'enracine dans les traditions familiales du Chiapas, au Mexique. Depuis des générations, nous perpétuons l'art de la cuisine mexicaine authentique, en utilisant des recettes transmises de mère en fille. Aujourd'hui, nous avons apporté ces saveurs uniques à Salaberry, pour que vous puissiez découvrir la richesse et la chaleur de notre culture à travers chaque plat que nous servons.",
              "about-content-02": "Enracinée dans les traditions familiales de Chiapas, au Mexique, notre cuisine apporte les saveurs authentiques du Mexique directement à Salaberry. Chaque plat est un hommage à nos recettes ancestrales, transmises de génération en génération."
            }
        },
        es: {
            translation: {
              "home-small": "Cocina mexicana en Salaberry-de-Valleyfield",
              "home-title": "Nuetra Cocina",
              "home-subtitle-01": "El mejor sabor a tu alcance",
              "home-subtitle-02": "Descubre sabores auténticos",
              "home-content": "Nuestro restaurante en Salaberry-de-Valleyfield ofrece una auténtica cocina mexicana, con platos preparados siguiendo tradiciones y recetas familiares.",
              "home-cta": "Descubre nuestro menú",
              "about-title": "Nuestra historia",
              "about-content": "Nuestra historia se nutre de las raíces profundas de las tradiciones familiares de Chiapas, México. Por generaciones, hemos guardado el arte de la auténtica cocina mexicana, con recetas que han viajado de madre a hija. Hoy, estos sabores únicos llegan a Salaberry, invitándote a descubrir la riqueza y el corazón de nuestra cultura en cada bocado.",
              "about-content-02": "Con raíces profundas en las tradiciones familiares de Chiapas, México, nuestra cocina lleva los sabores auténticos de México hasta Salaberry. Cada platillo es un viaje al pasado, un homenaje a recetas ancestrales que han viajado de generación en generación."
              
            }
        },
        en: {
            translation: {
              "home-small": "Mexican cuisine in Salaberry-de-Valleyfield",
              "home-title": "Taste Mexico",
              "home-subtitle-01": "The best flavor within your reach",
              "home-subtitle-02": "Discover authentic flavors",
              "home-content": "Our restaurant in Salaberry-de-Valleyfield offers authentic Mexican cuisine, with dishes prepared following family traditions and recipes.",
              "home-cta": "Explore our menu",
              "about-title": "Our Story",
              "about-content": "Our story is deeply connected to the family traditions of Chiapas, Mexico. For generations, we've kept alive the art of authentic Mexican cuisine, with recipes handed down from mother to daughter. Now, we bring these unique flavors to Salaberry, inviting you to experience the richness and soul of our culture in every dish.",
              "about-content-02": "Inspired by the family traditions of Chiapas, Mexico, our cuisine brings the true flavors of Mexico to Salaberry. Every dish celebrates our heritage, with recipes passed down through generations."
              
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