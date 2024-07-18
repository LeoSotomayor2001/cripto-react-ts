import axios from "axios";
import { create } from "zustand"
import { CryptoCurrenciesResponseSchema } from "./schemas/cripto-schema";
import { CryptoCurrency, CryptoPrice, Pair } from "./types";
import { devtools } from "zustand/middleware";
import { fetchCurrentCryptoPrice, getCriptos } from "./Services/CriptoService";
type CriptoStore = {
    cryptoCurrencies: CryptoCurrency[];
    result: CryptoPrice;
    loading: boolean
    fetchCriptos: () => Promise<void>;
    fetchData: (pair: Pair) => Promise<void>;

}

export const useCriptoStore = create<CriptoStore>()(devtools((set) => ({
    cryptoCurrencies: [],
    result: {} as CryptoPrice,
    fetchCriptos: async () => {
        const cryptoCurrencies = await getCriptos()
        set(() => {
            return { cryptoCurrencies }
        })
    },
    loading: false,
    fetchData: async (pair) => {
        set(() => ({ loading: true }))
        const result = await fetchCurrentCryptoPrice(pair)
        set(() => ({
            result,
            loading: false
        }))
    }
})))