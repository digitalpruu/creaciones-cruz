const title = "Creaciones Luzmar";
const email = "Huerfanoluz03@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy interesado en los productos de ${title} y me gustaría recibir más información sobre la ropa y otros artículos. ¡Espero su respuesta!`
);
const numeroWhatsApp = "3046032455";
const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "*Creaciones Luzmar* se especializa en la confección de ropa y otros productos hechos a mano, con un enfoque en calidad y diseño personalizado.",
        description2: "Nos dedicamos a ofrecer productos únicos que reflejan nuestra pasión por la moda y la artesanía, utilizando materiales de alta calidad para asegurar la satisfacción de nuestros clientes.",
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: "Ropa y más",
            p2: "Diseños personalizados y hechos a mano",
        },
        address: "",
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com", // No se proporcionó link de Facebook.
        instagram: "https://www.instagram.com", // No se proporcionó link de Instagram.
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
    },
};
export default textos;
