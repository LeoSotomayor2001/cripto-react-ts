import { CurrencySchema } from "../schemas/cripto-schema"
import {z} from 'zod'

export type Currency = z.infer<typeof CurrencySchema>