export interface PokemonBaseInterface {
    baseExperience: string,
    height: number,
    name: string,
    weight: number
}

export interface PokemonAbilityInterface {
    name: string,
    isHidden: boolean
}

export interface PokemonStatInterface {
    baseStat: number,
    effort: number,
    name: string
}

export interface PokemonSpeciesInterface {
    flavorText: string,
    genera: string,
    generation: string
}