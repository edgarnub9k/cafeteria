/* Datos del menú.
   Para agregar un platillo, copie una línea y cambie sus valores.
   Precios en dólares (USD). */

const CATEGORIAS = [
  { id: "cafes",   nombre: "Cafés calientes" },
  { id: "frias",   nombre: "Bebidas frías" },
  { id: "desayunos", nombre: "Desayunos" },
  { id: "panaderia", nombre: "Pan dulce y postres" },
  { id: "antojitos", nombre: "Antojitos" }
];

const MENU = [
  /* Cafés calientes */
  { nombre: "Café negro de altura",   categoria: "cafes", precio: 1.25, icono: "☕", descripcion: "Café salvadoreño colado en chorreador, intenso y aromático." },
  { nombre: "Espresso",               categoria: "cafes", precio: 1.50, icono: "☕", descripcion: "Un shot corto de café de tueste medio con crema espesa." },
  { nombre: "Americano",              categoria: "cafes", precio: 1.75, icono: "☕", descripcion: "Espresso alargado con agua caliente, suave y limpio." },
  { nombre: "Capuchino",              categoria: "cafes", precio: 2.50, icono: "☕", descripcion: "Espresso, leche vaporizada y una capa de espuma cremosa." },
  { nombre: "Café con leche",         categoria: "cafes", precio: 2.00, icono: "🥛", descripcion: "Mitad café, mitad leche caliente, como en casa." },
  { nombre: "Chocolate caliente",     categoria: "cafes", precio: 2.25, icono: "🍫", descripcion: "Chocolate de tableta batido con leche y un toque de canela." },
  { nombre: "Atol de elote",          categoria: "cafes", precio: 1.75, icono: "🌽", descripcion: "Atol espeso de maíz tierno con canela, servido bien caliente." },

  /* Bebidas frías */
  { nombre: "Café helado",            categoria: "frias", precio: 2.50, icono: "🧊", descripcion: "Café frío sobre hielo con leche y un poco de azúcar de caña." },
  { nombre: "Frappé de café",         categoria: "frias", precio: 3.25, icono: "🥤", descripcion: "Café licuado con hielo y leche, coronado con crema." },
  { nombre: "Horchata de morro",      categoria: "frias", precio: 1.75, icono: "🥛", descripcion: "Bebida fría de semilla de morro con canela, típica salvadoreña." },
  { nombre: "Limonada con hierbabuena", categoria: "frias", precio: 1.75, icono: "🍋", descripcion: "Limón natural, hierbabuena fresca y hielo." },
  { nombre: "Licuado de frutas",      categoria: "frias", precio: 2.50, icono: "🍓", descripcion: "Fruta de temporada licuada con agua o leche, a su gusto." },

  /* Desayunos */
  { nombre: "Desayuno típico",        categoria: "desayunos", precio: 4.75, icono: "🍳", descripcion: "Huevos al gusto, frijoles molidos, plátano frito, crema, queso fresco y tortillas." },
  { nombre: "Huevos rancheros",       categoria: "desayunos", precio: 4.25, icono: "🍅", descripcion: "Huevos fritos sobre tortilla con salsa de tomate y frijoles." },
  { nombre: "Pan con frijoles y queso", categoria: "desayunos", precio: 2.75, icono: "🥖", descripcion: "Pan francés tostado con frijoles molidos y queso duro rallado." },
  { nombre: "Sándwich de jamón y queso", categoria: "desayunos", precio: 3.25, icono: "🥪", descripcion: "Pan de molde tostado, jamón, queso, tomate y lechuga." },

  /* Pan dulce y postres */
  { nombre: "Pan dulce surtido",      categoria: "panaderia", precio: 0.50, icono: "🥐", descripcion: "Pan del día: semita, cachitos, orejas y más, recién horneado." },
  { nombre: "Quesadilla salvadoreña", categoria: "panaderia", precio: 1.75, icono: "🧀", descripcion: "Torta dulce de queso y harina de arroz con ajonjolí por encima." },
  { nombre: "Empanada de leche",      categoria: "panaderia", precio: 1.25, icono: "🥧", descripcion: "Masa crujiente rellena de crema de leche, con azúcar y canela." },
  { nombre: "Torrejas en miel",       categoria: "panaderia", precio: 2.50, icono: "🍯", descripcion: "Pan bañado en huevo, frito y cubierto de dulce de panela." },
  { nombre: "Nuégados de yuca",       categoria: "panaderia", precio: 2.25, icono: "🍠", descripcion: "Yuca frita en bolitas bañadas con miel de panela." },
  { nombre: "Pastel de tres leches",  categoria: "panaderia", precio: 2.75, icono: "🍰", descripcion: "Bizcocho húmedo con tres leches y merengue suave." },

  /* Antojitos */
  { nombre: "Pupusas (unidad)",       categoria: "antojitos", precio: 1.00, icono: "🫓", descripcion: "Revueltas, queso, frijol con queso o loroco. Con curtido y salsa." },
  { nombre: "Yuca frita con chicharrón", categoria: "antojitos", precio: 4.00, icono: "🍟", descripcion: "Yuca dorada con chicharrón crujiente, curtido y salsa roja." },
  { nombre: "Plátanos fritos con crema", categoria: "antojitos", precio: 2.75, icono: "🍌", descripcion: "Plátano maduro frito con crema fresca y frijoles molidos." },
  { nombre: "Pan con pollo",          categoria: "antojitos", precio: 3.50, icono: "🐔", descripcion: "Pan francés con pollo guisado, pepino, rábano y salsa." },
  { nombre: "Riguas (2 unidades)",    categoria: "antojitos", precio: 2.50, icono: "🌽", descripcion: "Tortitas de elote tierno a la plancha con crema." }
];
