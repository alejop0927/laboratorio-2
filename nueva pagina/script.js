const textos = [
  '<b>Misión:</b>Nuestra misión en El Glamping Nube es proporcionar a nuestros clientes una experiencia inigualable de acampar al aire libre con todas las comodidades y lujos en nuestros campamentos y domos. Nos esforzamos por crear un ambiente tranquilo y exclusivo, donde nuestros huéspedes puedan conectar con la naturaleza y disfrutar de momentos memorables. Nos comprometemos a ofrecer servicios de hospedaje excepcionales y paquetes adicionales que superen las expectativas de nuestros clientes, brindándoles una experiencia única y rejuvenecedora.',
  '<b>Visión:</b>Nuestra visión en El Glamping Nube es convertirnos en la opción preferida de los amantes de la naturaleza y el lujo en la experiencia de glamping. Buscamos ser reconocidos a nivel nacional e internacional por nuestra excelencia en el servicio, la calidad de nuestras instalaciones y la atención personalizada que ofrecemos a nuestros clientes. Aspiramos a expandirnos a nuevas ubicaciones, creando un portafolio diverso de campamentos y domos, donde cada uno refleje la belleza y singularidad de su entorno. Nos esforzamos por ser líderes en la industria del glamping, destacando por nuestra innovación, sostenibilidad y compromiso con la conservación del medio ambiente.',
  '<b>Objetivos:</b><br>1. Apertura y expansión: Nuestro objetivo principal es abrir prontamente nuestros servicios y establecer nuestra presencia en el mercado del glamping. Nos enfocaremos en identificar ubicaciones estratégicas y atractivas para nuestros campamentos y domos, asegurándonos de proporcionar una experiencia única en cada destino.<br>2.. Establecer y promocionar nuestra marca: Realizar campañas de marketing efectivas para dar a conocer El Glamping Nube como una opción única y exclusiva en el mercado del glamping. Esto incluye la creación de una identidad visual atractiva, la presencia en redes sociales, la participación en eventos y colaboraciones estratégicas con influencers o empresas afines.',
];

const images = document.querySelectorAll('.image img');

images.forEach((image, index) => {
  image.addEventListener('click', () => {
    mostrarAlerta(image.src, index);
  });
});

function mostrarAlerta(imagenSrc, indice) {
  const texto = textos[indice];
  
  Swal.fire({
    imageUrl: imagenSrc,
    imageAlt: 'Imagen',
    html: `<div>${texto}</div>`,
    showConfirmButton: false,
    customClass: {
      container: 'my-swal-container',
      content: 'my-swal-content',
    },
    position: 'center',
  });
}

