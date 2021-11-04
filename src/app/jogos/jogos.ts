export interface Jogo {
  _id: string
  stock:number
  category: any
  gameName: string
  description: string
  price: string
  createAt: string
}

export type Jogos = Array<Jogo>
