import { FlatList, Text } from "react-native";
import ExpenseItem from "./ExpenseItem";

export default function ExpensesList({ expenses, periodName }) {
  return (
    <FlatList
      data={expenses}
      renderItem={(itemData) => {
        return (
          <ExpenseItem
            id={itemData.item.id}
            description={itemData.item.description}
            amount={itemData.item.amount}
            date={itemData.item.date}
          />
        );
      }}
      keyExtractor={(item) => item.id}
    />
  );
}
