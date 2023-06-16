

function App() {
  return (
    <form className="form">
    <fieldset className="form__fieldset">
      <legend className="form__legend">Kalkulator walutowy</legend>
      <p>
        <label>
          <span className="form__labelText">Kwota:</span>
        </label>
        <input className="form__field" type="number" step="1" min="1" name="amount" required/>
      </p>
      <p>
        <label>
          <span className="form__labelText">Waluta:</span>
        </label>
        <select className="form__field" name="currency">
          <option name="EUR">EUR</option>
          <option name="USD">USD</option>
        </select>
      </p>
      <p className="form__paragraph">Wartość w PLN: <strong className=""></strong></p>
      <button className="form__button ">Przelicz</button>
    </fieldset>
  </form>
  );
}

export default App;
