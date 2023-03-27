import { Cuisine } from "./cuisine"

export type Order={
    "id"?:number,
    "cuisines"?:Cuisine[],
    "totalBillAmount"?:number
}