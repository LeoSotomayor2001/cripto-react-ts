import { useMemo } from "react";
import { useCriptoStore } from "../store";
import { Spinner } from "./Spinner";

export const CryptoPriceDisplay = () => {
  const { result,loading} = useCriptoStore();
  const hasResult = useMemo(() => Object.keys(result).length > 0, [result]);
  return (
    <div className="result-wrapper">
      {loading ? <Spinner /> : hasResult && (
        <>
          <h2>Cotización</h2>
          <div className="result">
            <img src={`https://cryptocompare.com/${result.IMAGEURL}`} alt="imagen cripto" />
            <div>
              <p>
                El precio es de : <span>{result.PRICE}</span>
              </p>
              <p>
                El precio mas alto del dia  : <span>{result.HIGHDAY}</span>
              </p>
              <p>
                El precio mas bajo del dia: <span>{result.LOWDAY}</span>
              </p>
              <p>
                Variación 24hs: <span>{result.CHANGEPCT24HOUR}</span>
              </p>
              <p>
                Última actualización: <span>{result.LASTUPDATE}</span>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
