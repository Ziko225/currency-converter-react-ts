import { useState } from "react";
import { Input, Select, Block, Bottom, Error } from "./styled";
import { useRatesData } from "./useRatesData";

const Form = () => {
    const { data, status } = useRatesData();

    const [currencyFrom, setCurrencyFrom] = useState("PLN");
    const onSelectChangeFrom = ({ target }:any) => setCurrencyFrom(target.value);

    const [currencyTo, setCurrencyTo] = useState("USD");
    const onSelectChangeTo = ({ target }:any) => setCurrencyTo(target.value);

    const [amount, setAmmount] = useState(Number);
    const amountChange = ({ target }:any) => setAmmount(target.value);


    const result = 5

    if (status === "error") {
        return <Error>Ups, coś poszło nie tak!</Error>
    } else if (status === "loading") {
        return <h2>Ładowanie . . .</h2>
    }
    return (
        <form >
            <Block>
                <label>
                    <Input placeholder="Wpisz kwotę"
                        min="0"
                        type="number"
                        value={amount}
                        onChange={amountChange}
                    />
                </label>
                <label>
                    <Select
                        name="currencyFrom"
                        value={currencyFrom}
                        onChange={onSelectChangeFrom}>
                        {Object.keys(data.rates).map((currency) => (
                            <option
                                key={currency}
                                value={currency}
                            >{currency}</option>
                        ))}
                    </Select>
                </label>
            </Block>
            <Block>
                <label>
                    <Input
                        disabled
                        value={result < 0 ? "N/A" : result.toFixed(2)
                            &&
                            currencyFrom === currencyTo ? "same currency detected" : result.toFixed(2)} />
                </label>
                <label>
                    <Select
                        name="currencyTo"
                        value={currencyTo}
                        onChange={onSelectChangeTo} >
                        {Object.keys(data.rates).map((currency) => (
                            <option
                                key={currency}
                                value={currency}
                            >{currency}</option>
                        ))}
                    </Select>
                </label>
            </Block>
            <Bottom>kursy walut pobierane są bezpośrednio z baz danych Komisji Europejskiej.</Bottom>
            <Bottom>Aktualne na dzień: {data.date}</Bottom>
        </form>
    );
};

export default Form;