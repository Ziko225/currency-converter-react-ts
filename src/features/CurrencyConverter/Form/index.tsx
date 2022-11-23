import Form from "./form";
import { Error } from "./styled";
import { useRatesData } from "./useRatesData";

const CurrencyForm = () => {
    const { status } = useRatesData();

    switch (status) {
        case "loading":
            return (< h3 > ładowanie...</h3 >)
        case "ok":
            return (<Form />)
        default: return (
            <>
                <Form />
                <Error>brak połączenia z serwerem!</Error>
            </>
        )
    }
};

export default CurrencyForm;