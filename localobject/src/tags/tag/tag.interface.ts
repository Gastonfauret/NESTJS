export enum stock {
    stock = 'Stock',
    noStock = 'No Stock',
    ordered = 'Ordered'
}

export interface Tag {
    id: number,
    item: string,
    type: string,
    code: number,
    brand: string,
    stock: stock
}
