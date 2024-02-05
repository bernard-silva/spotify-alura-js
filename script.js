const greetingElement = document.getElementById("greeting");
const currentHour = new Date().getHours();

const greetingMessage =
    currentHour >= 5 && currentHour < 12
        ? "Bom dia"
        : currentHour >= 12 && currentHour < 18
            ? "Boa tarde"
            : "Boa noite";

greetingElement.textContent = greetingMessage;

// GRID INTELIGENTE
const container = document.querySelector(".offer__list-item");

const observer = new ResizeObserver(() => {  //mudanças no tamanho do elemento 
    const containerWidth = container.offsetWidth; //largura total do elemento, incluindo largura do conteúdo, bordas e preenchimento.
    const numColumns = Math.floor(containerWidth / 200); //número de colunas com base na largura do container

    //largura mínima de 200px e máxima de 1fr (uma fração do espaço disponível).
    container.style.gridTemplateColumns = `repeat(${numColumns}, minmax(200px, 1fr))`;

    console.log({ container });
    console.log({ numColumns });
});
//observando a mudança do elemento
observer.observe(container);