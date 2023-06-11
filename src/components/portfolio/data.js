import ecommercewebexample from './images/ecommercewebexample.png'
import portfolioimgexample from './images/portfolioimgexample.png'
import todolistapp from './images/todolistapp.png'
import tindogexampletemplate from './images/tindogexampletemplate.png'

const PORTFOLIODATA = [
  {
    id: 1,
    img: ecommercewebexample,
    title: 'Ecommerce PetShop Project',
    description:
      'This is web  you can see an ecommerce example for a PetShop',
    demo: 'https://ejemplo-tienda-mascota2023.surge.sh/',
  },
  {
    id: 2,
    img: portfolioimgexample,
    title: 'Portfolio Web page',
    description:
      'portfolio personal website',
    demo: 'https://portfoliocarlosalbertowebdeveloper.surge.sh/',
  },
  {
    id: 3,
    img: todolistapp,
    title: 'TODO list web with react',
    description:
      'In this basic project, you can add, edit, and delete tasks',
    /* github: '',*/
    demo: 'https://example-todo-list-2023.surge.sh/',
  },
  {
    id: 4,
    img: tindogexampletemplate,
    title: 'Tindog template',
    description:
      'This is a template of a tinder app for dogs',
    demo: 'https://tindog-template-example.surge.sh/',
  },
]

export function portfolioData() {
  return PORTFOLIODATA
}

export function getPortfolioId(id) {
  return PORTFOLIODATA.find((portfolio) => portfolio.id === id)
}
