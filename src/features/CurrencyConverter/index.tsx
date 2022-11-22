import Clock from "./Clock";
import CurrencyForm from "./Form/form";
import { Content, Header } from "./styled";

const CurrencyConverter = () => {
    return (
        <Content>
            <Clock />
            <Header>Kalkulator walutowy</Header>
            <CurrencyForm />
        </Content>
    )
};

export default CurrencyConverter;