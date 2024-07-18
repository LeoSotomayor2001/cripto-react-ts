import axios from "axios";
import { CryptoCurrenciesResponseSchema, CryptoPriceSchema } from "../schemas/cripto-schema";
import { Pair } from "../types";

export async function getCriptos(){
    const url=`https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`;
    const {data: {Data}}= await axios.get(url);
    const result= CryptoCurrenciesResponseSchema.safeParse(Data);
    if(result.success) return result.data
}

export async function fetchCurrentCryptoPrice(pair:Pair){
    const url= `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptocorrency}&tsyms=${pair.currency}`
    const {data: {DISPLAY}}= await axios.get(url);

    const result= CryptoPriceSchema.safeParse(DISPLAY[pair.criptocorrency][pair.currency]);

    if(result.success) return result.data
}   

