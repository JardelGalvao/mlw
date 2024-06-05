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
    user_id: number,
    category_id: number,
    name: string,
    description: string,
}

export interface Items {
    id: number,
    user_id: number,
    category_id: number,
    sub_category_id: number,
    name: string,
    description: string,
    creation_date: string,
    estimated_date: string,
    update_date: string,
    due_date: string,
    value: number
}