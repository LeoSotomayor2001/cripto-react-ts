import axios from "axios";
import { create } from "zustand"
import { CryptoCurrenciesResponseSchema } from "./schemas/cripto-schema";
import { CryptoCurrency } from "./types";
import { devtools } from "zustand/middleware";
import { getCriptos } from "./Services/CriptoService";
type CriptoStore={
    cryptoCurrencies: CryptoCurrency[];
    fetchCriptos: () => Promise<void>;

}

export const useCriptoStore=create<CriptoStore>()(devtools((set)=>({
    cryptoCurrencies:[],
    fetchCriptos:async()=>{
       const cryptoCurrencies = await getCriptos()
       set(()=> {
           return {cryptoCurrencies}
       })
    }
})))