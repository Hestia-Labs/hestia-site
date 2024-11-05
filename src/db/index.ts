import {  drizzle } from "drizzle-orm/d1"

export async function createDB(d1:  D1Database) {
    return drizzle(d1)
}