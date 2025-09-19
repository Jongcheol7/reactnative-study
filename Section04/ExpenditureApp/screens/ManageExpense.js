import { useContext, useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../components/ui/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/ui/Button";
import { ExpensesContext } from "../store/expenses-context";

export default function ManageExpense({ route, navigation }) {
  const expenseId = route.params?.expenseId;
  //!!는 falsy -> false, truthy -> true
  const isEditing = !!expenseId;

  const expensesCtx = useContext(ExpensesContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    expensesCtx.deleteExpense(expenseId);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler() {
    console.log("수정 혹은 추가");
    console.log("isEditing : ", isEditing);
    if (isEditing) {
      expensesCtx.updateExpense(expenseId, {
        description: "Test!!",
        amount: 19.99,
        date: new Date("2025-09-19"),
      });
    } else {
      expensesCtx.addExpense({
        description: "Test!!",
        amount: 19.99,
        date: new Date("2025-09-19"),
      });
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button mode={"flat"} onPress={cancelHandler} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={confirmHandler} style={styles.button}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon={"trash"}
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
