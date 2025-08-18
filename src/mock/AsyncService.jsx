 export const products = [
  
  {
    title: 'Hummus',
    description: 'Puré de garbanzos con tahini, aceite de oliva y limón. Ideal como entrada.',
    price: 90,
    stock: 18,
    category: 'oferta',
    img:'../hummus.jpg'
  },
  {
    title: 'Baklava',
    description: 'Dulce tradicional con masa filo, nueces y miel. Crujiente y sabroso.',
    price: 120,
    stock: 10,
    category: 'nuevo',
    img: '../baklava.jpg',
  },
  {
    title: 'Basterma',
    description: 'Fiambre artesanal de carne curada con especias orientales.',
    price: 180,
    stock: 7,
    category: 'oferta',
    img: '../basterma.jpg',
  },
  {
    title: 'Falafel',
    description: 'Croquetas crujientes de garbanzo y especias. Apto vegano.',
    price: 80,
    stock: 15,
    category: 'nuevo',
    img: '../falafel.jpg',
  },
  {
    title: 'Madzun',
    description: 'Yogur natural de receta armenia, suave y refrescante.',
    price: 60,
    stock: 9,
    category: 'oferta',
    img: '../madzun.jpg',
  },
  {
    title: 'Mamul',
    description: 'Galletas rellenas de nuez o dátil, típicas en celebraciones.',
    price: 75,
    stock: 14,
    category: 'nuevo',
    img: '../mamul.jpg',
  },
  {
    title: 'Queso Blanco',
    description: 'Queso fresco estilo armenio, ideal para desayunos o ensaladas.',
    price: 95,
    stock: 11,
    category: 'oferta',
    img: '../quesoblanco.jpg',
  },
  {
    title: 'Shamali',
    description: 'Bizcocho húmedo de sémola con almíbar, un postre clásico.',
    price: 70,
    stock: 10,
    category: 'nuevo',
    img: '../shamali.jpg',
  },
  {
    title: 'Shawarma',
    description: 'Roll de carne asada al estilo oriental, con vegetales y salsa.',
    price: 200,
    stock: 8,
    category: 'oferta',
    img: '../shawarma.jpg',
  },
  {
    title: 'Tabule',
    description: 'Ensalada fresca de trigo burgol, tomate, perejil y limón.',
    price: 65,
    stock: 16,
    category: 'nuevo',
    img: '../tabule.jpg',
  },
  {
    title: 'Lehemeyun vegetariano',
    description: 'Deliciosa masa fina con carne especiada, típico de Medio Oriente.',
    price: 150,
    stock: 15,
    category: 'nuevo',
    img:'../lehemeyun1.jpg'

  }
]

export const getProducts = () => {
    let error = false
    return new Promise((resolve, reject)=>
    {
        setTimeout(()=>{
            if(error){
                reject('hubo error')
            }else{
                resolve(products)
            }
        },2000)
    }
    )
}

export const getOneProduct = (id) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            let oneProduct = products.find((prod)=> prod.id === id)
            resolve(oneProduct)
        },2000)
    })
}