import americano from '../../../../assets/products/americano.png'
import arabe from '../../../../assets/products/arabe.png'
import cafeComLeite from '../../../../assets/products/cafe-com-leite.png'
import cafeGelado from '../../../../assets/products/cafe-gelado.png'
import capuccino from '../../../../assets/products/capuccino.png'
import chocolateQuente from '../../../../assets/products/chocolate-quente.png'
import cubano from '../../../../assets/products/cubano.png'
import expresso from '../../../../assets/products/expresso.png'
import expressoCremoso from '../../../../assets/products/expresso-cremoso.png'
import havaiano from '../../../../assets/products/havaiano.png'
import irlandes from '../../../../assets/products/irlandes.png'
import latte from '../../../../assets/products/latte.png'
import macchiato from '../../../../assets/products/macchiato.png'
import mochaccino from '../../../../assets/products/mochaccino.png'

export interface Product {
  id: number
  title: string
  price: number
  categories: string[]
  description: string
  imageURL: string
}

export const productsList: Product[] = [
  {
    id: 1,
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    imageURL: expresso,
    categories: ['tradicional'],
  },
  {
    id: 2,
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    imageURL: americano,
    categories: ['tradicional'],
  },
  {
    id: 3,
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    imageURL: expressoCremoso,
    categories: ['tradicional'],
  },
  {
    id: 4,
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    imageURL: cafeGelado,
    categories: ['tradicional', 'gelado'],
  },
  {
    id: 5,
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    imageURL: cafeComLeite,
    categories: ['tradicional', 'com leite'],
  },
  {
    id: 6,
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    imageURL: latte,
    categories: ['tradicional', 'com leite'],
  },
  {
    id: 7,
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    imageURL: capuccino,
    categories: ['tradicional', 'com leite'],
  },
  {
    id: 8,
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    imageURL: macchiato,
    categories: ['tradicional', 'com leite'],
  },
  {
    id: 9,
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    imageURL: mochaccino,
    categories: ['tradicional', 'com leite'],
  },
  {
    id: 10,
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    imageURL: chocolateQuente,
    categories: ['especial', 'com leite'],
  },
  {
    id: 11,
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    imageURL: cubano,
    categories: ['especial', 'alcoólico', 'gelado'],
  },
  {
    id: 12,
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    imageURL: havaiano,
    categories: ['especial'],
  },
  {
    id: 13,
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    imageURL: arabe,
    categories: ['especial'],
  },
  {
    id: 14,
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    imageURL: irlandes,
    categories: ['especial', 'alcoólico'],
  },
]
