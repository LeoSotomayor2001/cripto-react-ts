import { currencies } from "../data";
import { useCriptoStore } from "../store";
export const CriptoSearchForm = () => {
  const {cryptoCurrencies}= useCriptoStore();
  return (
    <form className="form">
      <div className="field">

        <label htmlFor="currency">Moneda:</label>
        <select name="currency" id="currency">
          <option value="">Seleccione</option>
        </select>

      </div>
      <div className="field">

        <label htmlFor="criptocorrency">Criptomoneda:</label>
        <select name="criptocorrency" id="criptocorrency">
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
