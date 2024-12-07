export interface Books{
    imagen:string;
    titulo:string;
    autor:string;
}

export interface Authors{
    imagen:string;
    autor:string;
    pais:string;
}

export interface Narrador{
    imagen:string;
    autor:string;
}

export const narrador:Narrador[]=[
    {
        imagen:"/imgs/heydi.svg",
        autor:"Heydi Vera"
    },
    {
        imagen:"/imgs/salomon.svg",
        autor:"Salomon Arenas", 
    }
    
]

export const authors:Authors[]=[
    {
        imagen:"/imgs/gabriel.svg",
        autor:"Gabriel García Márquez",
        pais:"Colombia"
    },
    {
        imagen:"/imgs/laura.svg",
        autor:"Laura Restrepo",
        pais:"Colombia" 
    }
    
]

export const books:Books[]=[
    {
        imagen:"/imgs/ciensoledad.svg",
        titulo:"Cien Años de Soledad",
        autor:"Gabriel García Márquez"
    },
    {
        imagen:"/imgs/laberinto.svg",
        titulo:"El general en su laberinto",
        autor:"Gabriel García Márquez"
    },
    {
        imagen:"/imgs/haja.svg",
        titulo:"La hojarasca",
        autor:"Gabriel García Márquez"
    },
    {
        imagen:"/imgs/delirio.svg",
        titulo:"Delirio",
        autor:"Laura Restrepo"
    },
    {
        imagen:"/imgs/nieve.svg",
        titulo:"La Nieve del Almirante",
        autor:"Alfonso Restrepo"
    },
    {
        imagen:"/imgs/olvido.svg",
        titulo:"El olvido que seremos",
        autor:"Héctor Abad Faciolince"
    },
    {
        imagen:"/imgs/principito.svg",
        titulo:"El Principito",
        autor:"Antoine de Saint-Exupéry"
    },
    {
        imagen:"/imgs/novia.svg",
        titulo:"La Novia Oscura",
        autor:"Laura Restrepo"
    },
    {
        imagen:"/imgs/anonimo.svg",
        titulo:"El Anónimo",
        autor:"Natasha Preston"
    },
    {
        imagen:"/imgs/vivir.svg",
        titulo:"Viviv Para Contarla",
        autor:"Gabriel García Márquez"
    },
]