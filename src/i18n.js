import i18n from 'i18next';
import { initReactI18next} from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        fr: {
            translation: {
              "nav-title": "Les Délices du Mexique",
              "nav-home": "Accueil",
              "nav-about": "Notre histoire",
              "nav-menu": "Menu",
              "nav-contact": "Contact", 

              "home-small": "Découvrez la vraie cuisine mexicaine à Salaberry-de-Valleyfield",
              "home-title": "Les Délices du Mexique",
              "home-subtitle-01": "La meilleure saveur à votre portée",
              "home-subtitle-02": "Plongez dans des saveurs authentiques", 
              "home-content": "Notre restaurant à Salaberry-de-Valleyfield propose une cuisine mexicaine authentique, avec des plats préparés selon les traditions et les recettes familiales.", 
              "home-cta": "Découvrez notre menu",

              "about-title": "Notre histoire",
              "about-content": "Notre histoire s'enracine dans les traditions familiales du Chiapas, au Mexique. Depuis des générations, nous perpétuons l'art de la cuisine mexicaine authentique, en utilisant des recettes transmises de mère en fille. Aujourd'hui, nous avons apporté ces saveurs uniques à Salaberry, pour que vous puissiez découvrir la richesse et la chaleur de notre culture à travers chaque plat que nous servons.",
              "about-content-02": "Enracinée dans les traditions familiales du Chiapas, au Mexique, notre cuisine apporte les saveurs authentiques du Mexique directement à Salaberry. Chaque plat est un hommage à nos recettes ancestrales, transmises de génération en génération.",

              "menu-title": "Notre Menu",

              "menu-title-01": "tacos",
              "menu-subtitle-01": "México, Préhispanique",
              "menu-text-01": "Tortilla de maïs souple garnie de la protéine de votre choix, oignons et coriandre fraîche.",

              "menu-title-02": "Quesadilla",
              "menu-subtitle-02": "Veracruz, Mexique",
              "menu-text-02": "Tortilla de farine souple garnie de fromage fondant, de la protéine de votre choix, d'oignons et de coriandre fraîche.",

              "menu-title-03": "Nachos",
              "menu-subtitle-03": "Coahuila, Mexique",
              "menu-text-03": "Tortillas de maïs frites croustillantes, garnies de haricots, de fromage américain jaune, de fromage blanc, de cheddar fondant et de jalapeños.",

              "menu-title-04": "Chilaquiles",
              "menu-subtitle-04": "Náhuatl, Mexique précolombien",
              "menu-text-04": "Tortillas de maïs frites recouvertes de la sauce de votre choix, verte ou rouge, accompagnées de fromage frais et de crème.",

              "menu-title-05": "Enchiladas",
              "menu-subtitle-05": "Náhuatl, Mexique précolombien",
              "menu-text-05": "Tortillas garnies de fromage, nappées de sauce verte ou rouge, accompagnées d'oignons rouges, de poitrine de poulet, de fromage fondu et de crème fraîche.",

              "menu-title-06": "Burritos",
              "menu-subtitle-06": "Chihuahua, Mexique",
              "menu-text-06": "Tortilla de farine garnie de haricots, de fromage fondu, de pico de gallo et d'oignons. Choix de protéine en option.",

              "menu-title-07": "Tostadas",
              "menu-subtitle-07": "Oaxaca, Mexique",
              "menu-text-07": "Tortilla de maïs frite croustillante, garnie de haricots refrits, de poulet grillé, de laitue croquante, de fromage frais et de crème.",

              "menu-title-08": "Poutine",
              "menu-subtitle-08": "Québec, Canada",
              "menu-text-08": "Frites croustillantes recouvertes de sauce gravy et de fromage en grains frais.",

              "menu-title-09": "Frites",
              "menu-subtitle-09": "À la mexicaine (Chiapas)",
              "menu-text-09": "Frites croustillantes accompagnées de notre délicieuse sauce maison, inspirée des saveurs du Mexique.",

              "menu-title-10": "Ailes de poulet",
              "menu-subtitle-10": "New York",
              "menu-text-10": "Ailes de poulet croustillantes, disponibles en trois saveurs explosives : BBQ classique, Buffalo épicée et Mangue Habanero sucrée-piquante.",

              "menu-title-11": "Empanadas",
              "menu-subtitle-11": "Chiapas, Mexique",
              "menu-text-11": "Tortilla de maïs nixtamalisée garnie de fromage, de poulet ou de fromage aux champignons, nappée de sauce rouge à base de tomate, accompagnée de chou, de carottes et de piments marinés, le tout garni de crème et de fromage.",

              "menu-title-12": "Tacos dorados",
              "menu-subtitle-12": "Sinaloa, Mexique",
              "menu-text-12": "Protéine enveloppée dans une tortilla de maïs, frite jusqu'à obtenir une texture croustillante, nappée de sauce rouge, accompagnée de chou, de carottes et de piments marinés, le tout garni de fromage et de crème.",

              "menu-title-13": "Grillades",
              "menu-subtitle-13": "Salaberry-de-Valleyfield",
              "menu-text-13": "Grillades fraîchement préparées et assaisonnées avec nos épices maison exclusives.",

              "menu-title-14": "Grillades de la maison",
              "menu-subtitle-14": "Mexique, Canada",
              "menu-text-14": "Assaisonnées avec des épices traditionnelles mexicaines, pour un goût authentique.",

              "menu-title-15": "Sandwich",
              "menu-subtitle-15": "Salaberry-de-Valleyfield",
              "menu-text-15": "Pain blanc traditionnel garni de tomates juteuses, d'oignons croquants, d'une touche de moutarde et légèrement grillé pour plus de saveur.",

              "menu-title-16": "Boneless",
              "menu-subtitle-16": "New York",
              "menu-text-16": "Petits morceaux de poitrine de poulet, sans os, panés et croustillants, à déguster nature ou nappés d'une délicieuse sauce de votre choix (Mangue Habanero, Buffalo, BBQ).",

              "menu-title-17": "Desserts",
              "menu-subtitle-17": "Mexique",
              "menu-text-17": "Découvrez nos délicieux desserts mexicains : une salade de pommes rafraîchissante, un riz au lait onctueux, une gelée mosaïque colorée et un champurrado réconfortant.",

              "menu-title-18": "Protéines",
              "menu-subtitle-18": "Mexique / Canada",
              "menu-text-18": "Découvrez nos délicieuses options de protéines : poulet tendre, bœuf grillé, chorizo épicé (porc), campechano savoureux, cochito fondant (porc), barbacoa parfumée (bœuf) et champignons gourmands.",

              "menu-title-19": "Extras",
              "menu-subtitle-19": "Mexique",
              "menu-text-19": "Personnalisez votre plat avec nos extras : pico de gallo, guacamole, fromage, crème, protéine supplémentaire et option grillée.",

              "contact-title": "Contactez-nous",
              "contact-subtitle": "Pour plus d'informations ou pour réserver une table, contactez-nous via WhatsApp ou Facebook.",
              "contact-btn-01": "WhatsApp",
              "contact-btn-02": "Facebook"

            }
        },
        es: {
            translation: {
              "nav-title": "Nuestra Cocina",
              "nav-home": "Inicio",
              "nav-about": "Nuestra historia",
              "nav-menu": "Menú",
              "nav-contact": "Contacto",

              "home-small": "Cocina mexicana en Salaberry-de-Valleyfield",
              "home-title": "Nuetra Cocina",
              "home-subtitle-01": "El mejor sabor a tu alcance",
              "home-subtitle-02": "Descubre sabores auténticos",
              "home-content": "Nuestro restaurante en Salaberry-de-Valleyfield ofrece una auténtica cocina mexicana, con platos preparados siguiendo tradiciones y recetas familiares.",
              "home-cta": "Descubre nuestro menú",

              "about-title": "Nuestra historia",
              "about-content": "Nuestra historia se nutre de las raíces profundas de las tradiciones familiares de Chiapas, México. Por generaciones, hemos guardado el arte de la auténtica cocina mexicana, con recetas que han viajado de madre a hija. Hoy, estos sabores únicos llegan a Salaberry, invitándote a descubrir la riqueza y el corazón de nuestra cultura en cada bocado.",
              "about-content-02": "Con raíces profundas en las tradiciones familiares de Chiapas, México, nuestra cocina lleva los sabores auténticos de México hasta Salaberry. Cada platillo es un viaje al pasado, un homenaje a recetas ancestrales que han viajado de generación en generación.",

              "menu-title": "Nuestro Menu",

              "menu-title-01": "tacos",
              "menu-subtitle-01": "México, Prehispánico",
              "menu-text-01": "Tortilla de maíz suave rellena con la proteína de tu elección, cebolla y cilantro fresco. Acompañado de salsa verde y salsa roja.",

              "menu-title-02": "Quesadilla",
              "menu-subtitle-02": "Veracruz, México",
              "menu-text-02": "Tortilla de harina suave rellena de queso derretido, la proteína que elijas, cebolla picada y cilantro fresco.",

              "menu-title-03": "Nachos",
              "menu-subtitle-03": "Coahuila, México",
              "menu-text-03": "Crujientes totopos de maíz fritos, cubiertos con frijoles refritos, queso amarillo americano, queso blanco, cheddar derretido y jalapeños en rodajas.",

              "menu-title-04": "Chilaquiles",
              "menu-subtitle-04": "Náhuatl, México precolombino",
              "menu-text-04": "Crujientes totopos de maíz fritos, bañados en la salsa que elijas, verde o roja, y acompañados de queso fresco desmenuzado y crema ácida.",

              "menu-title-05": "Enchiladas",
              "menu-subtitle-05": "Náhuatl, México precolombino",
              "menu-text-05": "Tortillas rellenas de queso, bañadas en salsa verde o roja, y acompañadas de cebolla morada en aros, pechuga de pollo desmenuzada, queso fundido y crema ácida.",

              "menu-title-06": "Burritos",
              "menu-subtitle-06": "Chihuahua, México",
              "menu-text-06": "Tortilla de harina rellena de frijoles refritos, queso fundido, pico de gallo fresco y cebolla picada. Opción de agregar la proteína de tu preferencia.",

              "menu-title-07": "Tostadas",
              "menu-subtitle-07": "Oaxaca, México",
              "menu-text-07": "Tortilla de maíz frita y dorada, cubierta de frijoles refritos, pollo asado desmenuzado, lechuga fresca, queso fresco desmoronado y crema ácida.",

              "menu-title-08": "Poutine",
              "menu-subtitle-08": "Québec, Canadá",
              "menu-text-08": "Crujientes papas fritas cubiertas de salsa gravy caliente y queso fresco en grano que se derrite al contacto.",

              "menu-title-09": "Papas fritas",
              "menu-subtitle-09": "Estilo mexicano (Chiapas)",
              "menu-text-09": "Papas fritas doradas y crujientes, servidas con nuestra deliciosa salsa casera.",

              "menu-title-10": "Alitas",
              "menu-subtitle-10": "Nueva York",
              "menu-text-10": "Alitas de pollo con sabores BBQ, Buffalo y Mango Habanero.",

              "menu-title-11": "Empanadas",
              "menu-subtitle-11": "Chiapas, México",
              "menu-text-11": "Tortilla de maíz nixtamalizada rellena de queso, pollo desmenuzado o queso con champiñones, bañada en una salsa roja de tomate casera, acompañada de repollo, zanahorias y chiles encurtidos, y decorada con crema ácida y queso fresco.",

              "menu-title-12": "Tacos dorados",
              "menu-subtitle-12": "Sinaloa, México",
              "menu-text-12": "Proteína envuelta en una tortilla de maíz, frita hasta quedar dorada y crujiente, bañada en salsa roja casera, acompañada de repollo, zanahorias y chiles encurtidos, y decorada con queso fresco y crema ácida.",

              "menu-title-13": "Carnes a la parrilla",
              "menu-subtitle-13": "Salaberry-de-Valleyfield",
              "menu-text-13": "Carnes asadas a la parrilla, sazonadas con una mezcla exclusiva de nuestras especias caseras.",

              "menu-title-14": "Carnes a la parrilla de la casa",
              "menu-subtitle-14": "México, Canadá",
              "menu-text-14": "Carnes asadas a la parrilla, sazonadas con un toque especial al estilo mexicano.",

              "menu-title-15": "Sandwich",
              "menu-subtitle-15": "Salaberry-de-Valleyfield",
              "menu-text-15": "Pan blanco clásico con tomate fresco, cebolla, mostaza y ligeramente tostado.",

              "menu-title-16": "Boneless",
              "menu-subtitle-16": "Nueva York",
              "menu-text-16": "Pequeños trozos de pechuga de pollo, sin hueso, empanizados y crujientes, para disfrutar solos o bañados en una deliciosa salsa de tu elección (Mango Habanero, Buffalo, BBQ).",

              "menu-title-17": "Postres",
              "menu-subtitle-17": "México",
              "menu-text-17": "Prueba nuestros deliciosos postres mexicanos: ensalada de manzanas refrescante, arroz con leche cremoso, gelatina de mosaico colorida y champurrado reconfortante.",

              "menu-title-18": "Proteínas",
              "menu-subtitle-18": "México / Canadá",
              "menu-text-18": "Elige entre nuestras opciones de proteínas: pollo tierno, res asada, chorizo picante, campechano sabroso, cochito jugoso, barbacoa aromática y champiñones deliciosos.",

              "menu-title-19": "Extras",
              "menu-subtitle-19": "México",
              "menu-text-19": "Personaliza tu platillo con nuestros extras: pico de gallo, guacamole, queso, crema, proteína adicional y opción a la parrilla.",
              
              "contact-title": "Contáctanos",
              "contact-subtitle": "Para más información o para reservar una mesa, contáctanos por WhatsApp o Facebook.",
              "contact-btn-01": "WhatsApp",
              "contact-btn-02": "Facebook"
            }
        },
        en: {
            translation: {
              "nav-title": "Taste Mexico",
              "nav-home": "Home",
              "nav-about": "Our Story",
              "nav-menu": "Menu",
              "nav-contact": "Contact",

              "home-small": "Mexican cuisine in Salaberry-de-Valleyfield",
              "home-title": "Taste Mexico",
              "home-subtitle-01": "The best flavor within your reach",
              "home-subtitle-02": "Discover authentic flavors",
              "home-content": "Our restaurant in Salaberry-de-Valleyfield offers authentic Mexican cuisine, with dishes prepared following family traditions and recipes.",
              "home-cta": "Explore our menu",

              "about-title": "Our Story",
              "about-content": "Our story is deeply connected to the family traditions of Chiapas, Mexico. For generations, we've kept alive the art of authentic Mexican cuisine, with recipes handed down from mother to daughter. Now, we bring these unique flavors to Salaberry, inviting you to experience the richness and soul of our culture in every dish.",
              "about-content-02": "Inspired by the family traditions of Chiapas, Mexico, our cuisine brings the true flavors of Mexico to Salaberry. Every dish celebrates our heritage, with recipes passed down through generations.",
              
              "menu-title": "Our Menu",

              "menu-title-01": "tacos",
              "menu-subtitle-01": "Mexico, Pre-Hispanic",
              "menu-text-01": "Soft corn tortilla stuffed with your choice of protein, topped with onions and fresh cilantro.",

              "menu-title-02": "Quesadilla",
              "menu-subtitle-02": "Veracruz, Mexico",
              "menu-text-02": "Soft flour tortilla filled with melted cheese, your choice of protein, onions, and fresh cilantro.",

              "menu-title-03": "Nachos",
              "menu-subtitle-03": "Coahuila, Mexico",
              "menu-text-03": "Golden fried corn tortilla chips, loaded with refried beans, yellow American cheese, white cheese, gooey melted cheddar, and sliced jalapeños.",

              "menu-title-04": "Chilaquiles",
              "menu-subtitle-04": "Náhuatl, Pre-Columbian Mexico",
              "menu-text-04": "Crispy fried corn tortilla chips, smothered in your choice of green or red sauce, and topped with crumbled fresh cheese and sour cream.",

              "menu-title-05": "Enchiladas",
              "menu-subtitle-05": "Náhuatl, Pre-Columbian Mexico",
              "menu-text-05": "Tortillas filled with cheese, smothered in your choice of green or red sauce, and topped with red onion rings, shredded chicken breast, gooey melted cheese, and sour cream.",

              "menu-title-06": "Burritos",
              "menu-subtitle-06": "Chihuahua, Mexico",
              "menu-text-06": "Flour tortilla stuffed with refried beans, melted cheese, fresh pico de gallo, and diced onions. Add your choice of protein for an extra touch.",

              "menu-title-07": "Tostadas",
              "menu-subtitle-07": "Oaxaca, Mexico",
              "menu-text-07": "Golden fried corn tortilla loaded with refried beans, shredded grilled chicken, crisp lettuce, crumbled fresh cheese, and a drizzle of cream.",

              "menu-title-08": "Poutine",
              "menu-subtitle-08": "Quebec, Canada",
              "menu-text-08": "Golden crispy fries smothered in hot gravy sauce and topped with fresh, squeaky cheese curds.",

              "menu-title-09": "French fries",
              "menu-subtitle-09": "Mexican style (Chiapas)",
              "menu-text-09": "Golden crispy fries paired with our signature homemade sauce.",

              "menu-title-10": "Wings",
              "menu-subtitle-10": "New York",
              "menu-text-10": "Chicken wings with BBQ, Buffalo, and Mango Habanero flavors.",

              "menu-title-11": "Empanadas",
              "menu-subtitle-11": "Chiapas, Mexico",
              "menu-text-11": "Nixtamalized corn tortilla stuffed with cheese, shredded chicken, or cheese and mushrooms, smothered in a homemade tomato-based red sauce, served with tangy pickled cabbage, carrots, and chili peppers, and finished with a drizzle of cream and a sprinkle of cheese.",

              "menu-title-12": "Crispy tacos",
              "menu-subtitle-12": "Sinaloa, Mexico",
              "menu-text-12": "Protein wrapped in a corn tortilla, fried to golden perfection, smothered in a homemade red sauce, served with tangy pickled cabbage, carrots, and chili peppers, and finished with a sprinkle of cheese and a drizzle of cream.",

              "menu-title-13": "Grilled meats",
              "menu-subtitle-13": "Salaberry-de-Valleyfield",
              "menu-text-13": "Perfectly grilled meats, seasoned with our signature blend of homemade spices.",

              "menu-title-14": "House grilled meats",
              "menu-subtitle-14": "Mexico, Canada",
              "menu-text-14": "Grilled to perfection and seasoned with a bold Mexican-style twist.",

              "menu-title-15": "Sandwich",
              "menu-subtitle-15": "Salaberry-de-Valleyfield",
              "menu-text-15": "Classic white bread with fresh tomatoes, onions, mustard, and lightly grilled.",

              "menu-title-16": "Boneless",
              "menu-subtitle-16": "New York",
              "menu-text-16": "Bite-sized pieces of boneless chicken breast, breaded and crispy, served plain or smothered in a delicious sauce of your choice (Mango Habanero, Buffalo, BBQ).",

              "menu-title-17": "Desserts",
              "menu-subtitle-17": "Mexico",
              "menu-text-17": "Indulge in our delicious Mexican desserts: a refreshing apple salad, creamy rice pudding, vibrant mosaic jelly, and cozy champurrado.",

              "menu-title-18": "Proteins",
              "menu-subtitle-18": "Mexico / Canada",
              "menu-text-18": "Choose from our mouthwatering protein options: tender chicken, grilled beef, spicy chorizo, flavorful campechano, juicy cochito, aromatic barbacoa, and delightful mushrooms.",

              "menu-title-19": "Extras",
              "menu-subtitle-19": "Mexico",
              "menu-text-19": "Customize your dish with our extras: pico de gallo, guacamole, cheese, cream, extra protein, and grilled option.",

              "contact-title": "Contact Us",
              "contact-subtitle": "For more information or to book a table, contact us via WhatsApp or Facebook.",
              "contact-btn-01": "WhatsApp",
              "contact-btn-02": "Facebook"
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