const PRODUCTS = [
  {
    id: 1,
    name: "AMARETTO",
    price: 389,
    image: require("../../assets/product_images/T-124_NEGRO.jpg"),
    description:
      "Termo difuminado con doble pared de acero inoxidable, colador metálico y tapa enroscable de plástico con correa de silicón. Cap. 360 ml.",
  },
  {
    id: 2,
    name: "HIMALAYA",
    price: 79,
    image: require("../../assets/product_images/T151_BLANCO.jpg"),
    description:
      "Termo con doble pared de acero inoxidable insulado al vacío con acabado rugoso. Incluye tapa transparente de cierre a presión.",
  },
  {
    id: 3,
    name: "AIREN",
    price: 979,
    image: require("../../assets/product_images/T147_GRIS.jpg"),
    description:
      "Termo con doble pared de acero inoxidable y acabado rubber. Incluye tapa transparente de cierre a presión.",
  },
  {
    id: 4,
    name: "SET DE ESCRITORIO LENAR",
    price: 979,
    image: require("../../assets/product_images/60200.jpg"),
    description:
      "SET DE ESCRITORIO LENAR(Incluye tarjetero, base con bolígrafo, abrecartas, reloj y caja de regalo.)",
  },
  {
    id: 5,
    name: "SET BORAWLI",
    price: 389,
    image: require("../../assets/product_images/61900-N_2.jpg"),
    description: "SET BORAWLI (Incluye bolígrafo, llavero y caja de regalo.)",
  },
  {
    id: 6,
    name: "SET KLADNO",
    price: 79,
    image: require("../../assets/product_images/SET-012-S_1.jpg"),
    description:
      "Incluye batería auxiliar de 10,000 mAh, con salida USB, entrada micro USB y tipo C, display para mostrar nivel de batería, bolígrafo con memoria USB de 8 GB con función OTG para transferencia de información entre dispositivo",
  },
  {
    id: 7,
    name: "SET SHAKER SALÓN",
    price: 979,
    image: require("../../assets/product_images/91A190CD.jpeg"),
    description:
      "Set para preparación de bebidas. Incluye shaker y vaso metálico de doble pared, sellados al vacío.",
  },
  {
    id: 8,
    name: "SET DE ESCRITORIO LENAR",
    price: 979,
    image: require("../../assets/product_images/60200.jpg"),
    description:
      "SET DE ESCRITORIO LENAR(Incluye tarjetero, base con bolígrafo, abrecartas, reloj y caja de regalo.",
  },
  {
    id: 9,
    name: "AKUMAL",
    price: 979,
    image: require("../../assets/product_images/1E9FB9D2.jpeg"),
    description: "Morral de algodón cosido.",
  },
];

export function getProducts() {
  return PRODUCTS;
}

export function getProduct(id) {
  return PRODUCTS.find((product) => product.id == id);
}
