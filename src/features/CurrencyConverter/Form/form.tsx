import { useState } from "react";
import { Input, Select, Block, BottomText } from "./styled";
import { useRatesData } from "./useRatesData";

const Form = () => {
    const { data } = useRatesData();
    const rates = data.rates;

    const [amount1, setAmmount1] = useState(Number);
    const [amount2, setAmmount2] = useState(Number);

    const [currency1, setCurrency1] = useState("PLN");
    const [currency2, setCurrency2] = useState("USD");

    const handleAmount1Change = (amount1: React.ChangeEvent<HTMLInputElement>) => {
        setAmmount1(+amount1.target.value);
        // @ts-ignore
        const result1 = +amount1.target.value * rates[currency2] / rates[currency1];
        setAmmount2(+result1.toFixed(3));
    };

    const handleCurrency1Changne = (currency1: React.ChangeEvent<HTMLSelectElement>) => {
        setCurrency1(currency1.target.value);
        // @ts-ignore
        setAmmount2((+amount1 * rates[currency2] / rates[currency1.target.value]).toFixed(3));
    };

    const handleAmount2Change = (amount2: React.ChangeEvent<HTMLInputElement>) => {
        setAmmount2(+amount2.target.value);
        // @ts-ignore
        const result2 = +amount2.target.value * rates[currency1] / rates[currency2];
        setAmmount1(+result2.toFixed(3));
    };

    const handleCurrency2Changne = (currency2: React.ChangeEvent<HTMLSelectElement>) => {
        setCurrency2(currency2.target.value);
        // @ts-ignore
        setAmmount1((+amount2 * rates[currency1] / rates[currency2.target.value]).toFixed(3));
    };



    return (
        <form >
            <Block>
                <label>
                    <Input
                        placeholder="Wpisz kwotę"
                        min="0"
                        type="number"
                        value={amount1}
                        onChange={handleAmount1Change}
                    />
                </label>
                <label>
                    <Select
                        name="currency1"
                        value={currency1}
                        onChange={handleCurrency1Changne}>
                        {Object.keys(data.rates).map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </Select>
                </label>
            </Block>
            <Block>
                <label>
                    <Input
                        placeholder="Wpisz kwotę"
                        min="0"
                        type="number"
                        value={amount2}
                        onChange={handleAmount2Change} />
                </label>
                <label>
                    <Select
                        name="currency2"
                        value={currency2}
                        onChange={handleCurrency2Changne} >
                        {Object.keys(data.rates).map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </Select>
                </label>
            </Block>
            <BottomText>kursy walut pobierane są bezpośrednio z baz danych Komisji Europejskiej.</BottomText>
            <BottomText>Aktualne na dzień: {data.date}</BottomText>
        </form>
    );
};

export default Form;