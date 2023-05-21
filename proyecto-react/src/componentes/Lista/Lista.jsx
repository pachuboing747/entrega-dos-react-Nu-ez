const lista = [
    {
        id: "1",
        nombre :"Camiseta Titular",
        precio:123, 
        img:"public/camiseta.png",
        stock: 20,
        categoria:"Camiseta",
        descripcion:" Una camiseta que le rinde homenaje a una temporada histórica, en la versión utilizada por los jugadores de 1981."
    },
    {
        id:"2",
        nombre:"Short Titular",
        precio:456,
        img:"public/short.png",
        stock: 15,
        categoria:"Short",
        descripcion:" Estos shorts de fútbol de Boca Juniors adidas son los que usan los jugadores cuando juegan en La Bombonera. Inspirados en la identidad del inolvidable equipo campeón 1992."
    },
    {
        id:"3",
        nombre:"Remera Escudo Boca Jrs",
        precio: 789, 
        img:"public/remera.png",
        stock: 25,
        categoria:"Remera",
        descripcion:" Esta remera adidas Boca Juniors destaca tu amor por el club."
    },
    {
        id:"4",
        nombre: "Pantalón Entrenamiento",
        precio: 987,
        img:"public/pantalon.png",
        stock:10,
        categoria:"Pantalon",
        descripcion:" Estos pantalones de entrenamiento de fútbol de adidas tienen un ajuste ceñido e incorporan las clásicas piernas cónicas Tiro para estilizar a los jugadores de Boca Juniors a medida que mejoran sus habilidades."
    },
    {
        id:"5",
        nombre: "Buzo adidas Boca Juniors",
        precio :654,
        img:"public/buzo.png",
        stock:10,
        categoria:"Buzo",
        descripcion:" Llevá tu pasión Xeneize a donde vayas con este Buzo Confeccionado en algodón, tiene capucha y bolsillo canguro. Su estilo sobrio con las iniciales del club te hará visibilizar la sangre azul que corre por tus venas."
    },
    {
        id:"6",
        nombre :"Campera de Presentación",
        precio : 321,
        img:"public/campera-azul.png",
        stock:12,
        categoria:"Campera",
        descripcion:" Héroes dentro y fuera de la cancha. Los jugadores de Boca Juniors van y vienen de los partidos con camperas de fútbol adidas como esta."

    },
    {
        id: "7",
        nombre :"Camiseta Alternativa",
        precio:123, 
        img:"public/camiseta-blanca.png",
        stock: 20,
        categoria:"Camiseta",
        descripcion:" Un verdadero clásico. Un revestimiento tejido en el pecho y un escudo de los 80 se destacan sobre el fondo blanco de la camiseta alternativa de Boca Juniors."
    },
    {
        id:"8",
        nombre:"Short Alternativo",
        precio:456,
        img:"public/short-blanco.png",
        stock: 15,
        categoria:"Short",
        descripcion:" Fieles al azul y oro, estos shorts de fútbol adidas para jóvenes tienen un panel de malla para ventilación y cortes laterales para brindar comodidad dentro y fuera de la cancha."
    },
    {
        id:"9",
        nombre: "Remera Boca Juniors",
        precio: 789, 
        img:"public/remera-azul.png",
        stock: 25,
        categoria:"Remera",
        descripcion:" Camiseta de fútbol con un trifolio tejido junto al escudo del equipo en el pecho. El ajuste regular y la tela suave de esta camiseta se unen para brindar un soporte informal y cómodo."
    },
    {
        id:"10",
        nombre: "Pantalón de Entrenamiento Condivo",
        precio: 987,
        img:"public/pantalon-azul.png",
        stock:10,
        categoria:"Pantalon",
        descripcion:" Entrená como si fueras una de las estrellas de Boca Juniors. Este pantalón de fútbol adidas es una versión del que usan los jugadores del club para entrenar."
    },
    {
        id:"11",
        nombre: "Buzo de Entrenamiento",
        precio :654,
        img:"public/buzo-blanco.png",
        stock:10,
        categoria:"Buzo",
        descripcion:" Entrená como si fueras una de las figuras de Boca Juniors. Este top de entrenamiento de fútbol adidas es similar a la camiseta que los jugadores del club usan."
    },
    {
        id:"12",
        nombre :"Campera de Presentación Blanca",
        precio : 321,
        img:"public/campera-blanca.png",
        stock:12,
        categoria:"Campera",
        descripcion:" Héroes dentro y fuera de la cancha. Los jugadores de Boca Juniors van y vienen de los partidos con camperas de fútbol adidas como esta."

    },
    {
        id:"13",
        nombre: "Tercera Camiseta",
        precio: 789, 
        img:"public/camiseta-celeste.png",
        stock: 25,
        categoria:"Camiseta",
        descripcion:" Una conexión con su hogar. Los estampados dinámicos en el frente de esta camiseta adidas de fútbol para jóvenes se inspira en las vigas de acero angulares del icónico puente transportador que se destaca en la vista de La Boca."
    },
    {
        id:"14",
        nombre:"Short Tercer Uniforme",
        precio: 987,
        img:"public/short-celeste.png",
        stock:10,
        categoria:"Short",
        descripcion:" Parte del tercer uniforme de Boca Juniors que te conectará con el hogar del equipo"
    },
    {
        id:"15",
        nombre: "Medias Alternativas Boca",
        precio :654,
        img:"public/medias-blancas.png",
        stock:10,
        categoria:" Medias",
        descripcion:"Su tejido con tecnología de absorción AEROREADY mantiene tus pies secos y su diseño específico para el pie derecho y el izquierdo garantiza un ajuste perfecto. El acolchado en las zonas donde más lo necesitás se encarga de mantener tus pies cómodos del primer al último minuto del partido."
    },
    {
        id:"16",
        nombre :"Medias Titular",
        precio : 321,
        img:"public/medias-azul.png",
        stock:12,
        categoria:"Medias",
        descripcion:"Su tejido con tecnología de absorción AEROREADY mantiene tus pies secos y su diseño específico para el pie derecho y el izquierdo garantiza un ajuste perfecto. El acolchado en las zonas donde más lo necesitás se encarga de mantener tus pies cómodos del primer al último minuto del partido."

    },
    {
        id:"17",
        nombre :"Medias Tercer Uniforme",
        precio : 321,
        img:"public/medias-celeste.png",
        stock:12,
        categoria:"Medias",
        descripcion:"Su tejido con tecnología de absorción AEROREADY mantiene tus pies secos y su diseño específico para el pie derecho y el izquierdo garantiza un ajuste perfecto. El acolchado en las zonas donde más lo necesitás se encarga de mantener tus pies cómodos del primer al último minuto del partido."

    },



]

export const getLista = (id) => {
    return new Promise ((resultado) =>{
        setTimeout(() =>{
            resultado(lista)
        }, 2000)
    })
}

export const getProduct = (listId) => {
    return new Promise((resultado) =>{
        setTimeout(() => {
            resultado(lista.find( prod => prod.id === listId))
        },1000)
    })
}