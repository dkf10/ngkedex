export interface PokemonInterface { 
    abilities: PAbility[],
    base_experience: string,
    height: string,
    moves: PMove[],
    name: string,
    stats: PStat[],
    types: PType[],
    weight: string
}

export interface PAbility {
    name: string,
    url: string
}

export interface PMove {
    name: string,
    url: string
}

export interface PStat {
    base_stat: string,
    name: string,
    url: string
}

export interface PType {
    name: string,
    url: string
}