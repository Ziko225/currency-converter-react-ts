import { useState } from "react";
import { Input, Select, Block, Bottom, Error } from "./styled";
import { useRatesData } from "./useRatesData";

const CurrencyForm = () => {
    const { data } = useRatesData();

    const [currencyFrom, setCurrencyFrom] = useState("PLN");
    const onSelectChangeFrom = (e: React.ChangeEvent<HTMLSelectElement>) => setCurrencyFrom(e.target.value);

    const [currencyTo, setCurrencyTo] = useState("USD");
    const onSelectChangeTo = (e: React.ChangeEvent<HTMLSelectElement>) => setCurrencyTo(e.target.value);

    const [amount, setAmmount] = useState(0);
    const amountChange = (e: React.ChangeEvent<HTMLInputElement>) => setAmmount(+e.target.value);

    // @ts-ignore
    const result = (amount * data.rates[currencyTo]) / data.rates[currencyFrom];

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

export default CurrencyForm;