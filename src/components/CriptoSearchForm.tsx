import { ChangeEvent, FormEvent, useState } from "react";
import { currencies } from "../data";
import { useCriptoStore } from "../store";
import { Pair } from "../types";
import { ErrorMessage } from './ErrorMessage';
export const CriptoSearchForm = () => {
  const { cryptoCurrencies, fetchData} = useCriptoStore();
  const [pair, setPair] = useState<Pair>({
    currency: "",
    criptocorrency: "",
  });
  const [error, setError] = useState('');
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPair((prevPair) => ({
      ...prevPair,
      [name]: value,
    }));
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(Object.values(pair).includes('')){
      setError('Todos los campos son obligatorios')
      return
    }
    setError('')
    //consultar la api
    fetchData(pair)
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <div className="field">
        <label htmlFor="currency">Moneda:</label>
        <select name="currency" id="currency" onChange={handleChange} value={pair.currency}>
          <option value="">Seleccione</option>
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="criptocorrency">Criptomoneda:</label>
        <select
          name="criptocorrency"
          id="criptocorrency"
          onChange={handleChange}
          value={pair.criptocorrency}
        >
          <option value="">Seleccione</option>
          {cryptoCurrencies.map((currency) => (
            <option key={currency.CoinInfo.Name} value={currency.CoinInfo.Name}>
              {currency.CoinInfo.FullName}
            </option>
          ))}
        </select>
      </div>

      <input type="submit" value="Calcular" />
    </form>
  );
};
