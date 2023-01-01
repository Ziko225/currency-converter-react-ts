import { useState } from "react";
import { Input, Select, Block, BottomText } from "./styled";
import { useRatesData } from "./useRatesData";

const Form = () => {
    const { data } = useRatesData();
    const rates = data.rates;

    const [amount1, setAmmount1] = useState(0);
    const [amount2, setAmmount2] = useState(0);

    const [currency1, setCurrency1] = useState("PLN");
    const [currency2, setCurrency2] = useState("USD");

    const handleAmount1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmmount1(+e.currentTarget.value);
        const result1 = +e.currentTarget.value * rates[currency2 as keyof typeof rates] / rates[currency1 as keyof typeof rates];
        setAmmount2(+result1.toFixed(3));
    };

    const handleCurrency1Changne = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCurrency1(e.currentTarget.value);
        setAmmount2(amount1 * rates[currency2 as keyof typeof rates] / rates[e.currentTarget.value as keyof typeof rates]);
    };

    const handleAmount2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmmount2(+e.currentTarget.value);
        const result2 = +e.target.value * rates[currency1 as keyof typeof rates] / rates[currency2 as keyof typeof rates];
        setAmmount1(+result2.toFixed(3));
    };

    const handleCurrency2Changne = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCurrency2(e.currentTarget.value);
        setAmmount1(+amount2 * rates[currency1 as keyof typeof rates] / rates[e.currentTarget.value as keyof typeof rates]);
    };

    return (
        <form >
            <Block>
                <label>
                    <Input
                        placeholder="Wpisz kwotę"
                        min="0"
                        type="number"
                        value={amount1 === 0 ? "" : amount1}
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
                        value={amount2 === 0 ? "" : amount2}
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