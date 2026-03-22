import {Either } from "effect"

export function selectFirstElement<T>(items:T[]): Either.Either<T,string>{
    const [f] = items
    if(f==undefined) return Either.left("not found any item")
    return Either.right(f)
}