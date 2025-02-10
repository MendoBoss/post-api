
export interface User{
    id:number,
    name:string,
    email:string,
    created_at:string,
    updated_at:string,
}

export interface UserAndToken{
    user:User,
    token:string,
}

export type UserOrNull = UserAndToken | null ;

