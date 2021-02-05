import { useState, useEffect } from "react";
import formatNumber from "../../utils/formatNumber";
import LinearProgress from "@material-ui/core/LinearProgress";
import MonthSelector from "./MonthSelector";
import {
  MainContainer,
  BalanceGrid,
  InCard,
  OutCard,
  BalanceCard,
  InOutCard,
  Money,
  Item,
  AddButton,
  TransactionMoney,
  DeleteButton,
  AddCard,
  Mask,
  Input,
  CancelButton,
  SaveButton,
  Loading,
} from "./style";

import {
  createTransaction,
  deleteTransaction,
  getTransactions,
} from "../../api/transactions";

const monthsNames = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

export default function Dashboard({ theme }) {
  const [loadingState, setLoadingState] = useState(false);
  const [data, setData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [showAddCard, setShowAddCard] = useState(false);
  const [session, setSession] = useState(() =>
    JSON.parse(sessionStorage.getItem("session"))
  );
  const [balance, setBalance] = useState({
    income: "0,00",
    expenses: "0,00",
    balance: "0,00",
  });
  const [months, setMonths] = useState(() => {
    const date = new Date();

    const name = monthsNames[date.getMonth()];
    const year = date.getFullYear();

    return [{ name, year }];
  });
  
  function calcBalance() {
    let income = 0;
    let expenses = 0;
    let balance = 0;

    for (let i = 0; i < data.length; i++) {
      const element = data[i];

      if (element.type === "input") {
        income += element.cost;
      } else if (element.type === "output") {
        expenses += element.cost;
      }
    }

    balance = income - expenses;
    balance = formatNumber(balance);
    income = formatNumber(income);
    expenses = formatNumber(expenses);

    setBalance({
      income,
      expenses,
      balance,
    });
  }

  async function fetchData() {
    setLoadingState(true);
    const transactions = await getTransactions(session.user._id, session.token);
    setData(transactions.data);
    setLoadingState(false);
  }

  useEffect(fetchData, []);
  useEffect(calcBalance,[data]);

  function AddTransaction() {
    const [name, setName] = useState("");
    const [value, setValue] = useState("");
    const [type, setType] = useState("");
    const [date, setDate] = useState("");

    async function saveTransaction(name, cost, type, date) {
      if (
        name.length === 0 ||
        cost.length === 0 ||
        type.length === 0 ||
        date.length === 0
      ) {
        return;
      }

      let temp_type;
      if (type === "Entrada") {
        temp_type = "input";
      } else if (type === "Despesa") {
        temp_type = "output";
      } else {
        return;
      }

      let temp_data = data;
      let temp_cost = parseFloat(cost);
      let temp_date = new Date(date);

      temp_data.push({
        name,
        cost: temp_cost,
        type: temp_type,
        date: temp_date
      });

      console.log(temp_data)

      setData(temp_data);
      setShowAddCard(false);
      calcBalance();

      setLoadingState(true);
      const transaction = await createTransaction({
        name,
        cost: temp_cost,
        type: temp_type,
        date: new Date(date),
        user: session.user._id
      }, session.token);

      console.log(transaction)
      setLoadingState(false);
    }

    return (
      <Mask>
        <AddCard theme={theme}>
          <h2>Nova Transação</h2>
          <Input
            placeholder="Descrição"
            type="text"
            onChange={({ target }) => setName(target.value)}
          />
          <div style={{ display: "flex", flexDirection: "row", columnGap: 10 }}>
            <Input
              placeholder="R$ 0,00"
              type="number"
              step="0.01"
              onChange={({ target }) => setValue(target.value)}
            />
            <Input
              placeholder="Tipo"
              list="type"
              onChange={({ target }) => setType(target.value)}
            />
            <datalist id="type">
              <option value="Entrada" />
              <option value="Despesa" />
            </datalist>
          </div>
          <Input
            placeholder="dd/mm/yyyy"
            type="date"
            onChange={({ target }) => setDate(target.value)}
          />
          <div style={{ display: "flex", flexDirection: "row", columnGap: 10 }}>
            <CancelButton onClick={() => setShowAddCard(false)}>
              Cancelar
            </CancelButton>
            <SaveButton
              onClick={() => saveTransaction(name, value, type, date)}
            >
              Salvar
            </SaveButton>
          </div>
        </AddCard>
      </Mask>
    );
  }

  async function deleteItem(index) {
    const transactionId = data[index]._id;
    let temp_data = data;


    if (temp_data.length === 1) {
      temp_data = [];
    } else {
      temp_data.splice(index, 1);
    }

    setData(temp_data);
    calcBalance();

    setLoadingState(true);
    const response = await deleteTransaction(transactionId, session.token);
    if (response.ok) {
      setLoadingState(false);
    } else {
      alert("Erro ao deletar transação do servidor");
    }
  }

  return (
    <MainContainer theme={theme}>
      {loadingState && (
        <Loading>
          <LinearProgress color="primary" />
        </Loading>
      )}
      {showAddCard && <AddTransaction />}
      <MonthSelector
        theme={theme}
        data={months}
        month={selectedMonth}
        setMonth={setSelectedMonth}
      />

      <BalanceGrid theme={theme}>
        <InCard>
          <h3>Entradas:</h3>
          <Money>R$ {balance.income}</Money>
        </InCard>

        <OutCard>
          <h3>Despesas:</h3>
          <Money>R$ {balance.expenses}</Money>
        </OutCard>

        <BalanceCard>
          <h3>$ Balanço:</h3>
          <Money>R$ {balance.balance}</Money>
        </BalanceCard>
      </BalanceGrid>

      <InOutCard theme={theme}>
        <AddButton theme={theme} onClick={() => setShowAddCard(!showAddCard)}>
          + Nova transação
        </AddButton>
        <Items data={data} theme={theme} deleteItem={deleteItem} />
      </InOutCard>
    </MainContainer>
  );
}

function Items({ data, theme, deleteItem }) {
  const Rows = data.map((item, index) => {
    let date = new Date(item.date);
    date = date.toLocaleDateString("pt-br");
    return (
      <Item key={item.name} theme={theme}>
        <p>{item.name}</p>
        <TransactionMoney neg={item.type === "output"}>
          {item.type === "output" ? "- " : "+ "}R$ {formatNumber(item.cost)}
        </TransactionMoney>
        <p>{date}</p>

        <DeleteButton onClick={() => deleteItem(index)}>
          highlight_off
        </DeleteButton>
      </Item>
    );
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: 8,
      }}
    >
      <Item theme={theme}>
        <strong>Descrição</strong>
        <strong>Valor</strong>
        <strong>Data</strong>
      </Item>
      {Rows}
      {data.length === 0 && (
        <p style={{ alignSelf: "center" }}>Nenhuma transação</p>
      )}
    </div>
  );
}
