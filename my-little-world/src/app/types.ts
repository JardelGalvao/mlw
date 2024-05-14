export interface Users {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    username: string,
    password: string,
}

export interface Categories {
    id: number,
    user_id: number,
    name: string,
    description: string,
}

export interface SubCategories {
    id: number,
    uder_id: number,
    categorie_id: number,
    name: string,
    description: string,
}

export interface Items {
    id: number,
    user_id: number,
    categorie_id: number,
    sub_categorie_id: number,
    name: string,
    description: string,
    creation_date: Date,
    estimated_date: Date,
    update_date: Date,
    due_date: Date,
    value: number
}