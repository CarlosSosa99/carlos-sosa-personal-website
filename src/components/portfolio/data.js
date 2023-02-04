import ecommerce from './images/ecommerce.png'
import portfolio from './images/portfolio.png'
import todolist from './images/todolist.png'

const PORTFOLIODATA = [
  {
    id: 1,
    img: ecommerce,
    title: 'Ecommerce PestShop App Project',
    description:
      'This is a project of a pest store app. In this project you can see an ecommerce for a pets store, i made it with React,Bootstrap and firebase',
    github: '',
    demo: '',
  },
  {
    id: 2,
    img: portfolio,
    title: 'Portfolio Web page',
    description:
      'portfolio personal website',
    github: '',
    demo: '',
  },
  {
    id: 3,
    img: todolist,
    title: 'TODO list App with react Project',
    description:
      'In this project you can add, edit and delete tasks',
    github: '',
    demo: '',
  },
]

export function portfolioData() {
  return PORTFOLIODATA
}

export function getPortfolioId(id) {
  return PORTFOLIODATA.find((portfolio) => portfolio.id === id)
}
