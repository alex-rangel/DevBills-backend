import { z } from "zod";

import { TransactionType } from "../entities/transaction.entity";

export  const createTransactionsSchema = {
    title: z.string(),
    amount: z.number().int().positive(),
    type: z.nativeEnum(TransactionType),
    date: z.coerce.date(),
    categoryId: z.string().length(24),
}

const createTransactionObject = z.object(createTransactionsSchema)
export type createTransactionDTO = z.infer<typeof createTransactionObject>

export const indexTransactionsSchema = {
    title: z.string().optional(),
    categoryId: z.string().length(24).optional(),
    beginDate: z.coerce.date().optional(),
    endDate: z.coerce.date().optional(),
};

const indexTransactionsObject = z.object(indexTransactionsSchema)
export type indexTransactionsDTO = z.infer<typeof  indexTransactionsObject>