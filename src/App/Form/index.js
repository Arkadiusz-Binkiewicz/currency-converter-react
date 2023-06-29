import './Form.css';
import { currencies } from '../currencies';
import { Result } from './Result';

  export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
      event.preventDefault();
      calculateResult(currency, amount);
    }

    return (
      <form className="form" onSubmit={onSubmit}>
        <fieldset className="form__fieldset">
          <legend className="form__legend">Kalkulator walutowy</legend>
          <p>
            <label>
              <span className="form__labelText">Kwota:</span>
            </label>
            <input
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              placeholder="Wpisz kwotę w zł"
              className="form__field"
              type="number"
              step="0.01"
              required
            />
          </p>
          <p>
            <label>
              <span className="form__labelText">
                Waluta:
              </span>
            </label>
            <select
              className="form__field"
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {currencies.map((currency => (
                <option
                  key={currency.short}
                  value={currency.short}
                >
                  {currency.name}
                </option>
              )))}
            </select>
          </p>
          <p className="form__paragraph">Wartość w PLN: <strong className=""></strong></p>
          <button className="form__button ">Przelicz</button>
        </fieldset>

        <Result result={result} />
      </form>
    );
  };

  export default Form;