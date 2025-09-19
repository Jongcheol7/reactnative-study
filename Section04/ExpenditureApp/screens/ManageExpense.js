import { useContext, useLayoutEffect, useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import IconButton from "../components/ui/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/ui/Button";
import { ExpensesContext } from "../store/expenses-context";
import { getFormattedDate } from "../util/date";

export default function ManageExpense({ route, navigation }) {
  const [inputValues, setInputValues] = useState({
    amount: "",
    date: "",
    description: "",
  });
  const expenseId = route.params?.expenseId;
  //!!는 falsy -> false, truthy -> true
  const isEditing = !!expenseId;

  const expensesCtx = useContext(ExpensesContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });

    if (isEditing) {
      const selectedExpense = expensesCtx.expenses.find(
        (e) => e.id === expenseId
      );
      setInputValues({
        amount: selectedExpense.amount.toString(),
        date: getFormattedDate(selectedExpense.date),
        description: selectedExpense.description,
      });
    }
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    expensesCtx.deleteExpense(expenseId);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler() {
    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.description,
    };

    // 유효성 검사
    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      Alert.alert("Invalid input", "Please check your input values");
      return;
    }

    if (isEditing) {
      expensesCtx.updateExpense(expenseId, expenseData);
    } else {
      expensesCtx.addExpense(expenseData);
    }
    navigation.goBack();
  }

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputValues((state) => {
      return {
        ...state,
        [inputIdentifier]: enteredValue,
      };
    });
  }

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>AMOUNT</Text>
          <TextInput
            keyboardType="decimal-pad"
            // onChangeText={inputChangedHandler.bind(this, "amount")}
            onChangeText={(value) => inputChangedHandler("amount", value)}
            style={styles.input}
            value={inputValues.amount}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>DATE</Text>
          <TextInput
            placeholder="YYYY-MM-DD"
            maxLength={10}
            onChangeText={(value) => inputChangedHandler("date", value)}
            style={styles.input}
            value={inputValues.date}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>DESCRIPTION</Text>
          <TextInput
            multiline={true}
            style={[styles.input, styles.inputMultiline]}
            onChangeText={(value) => inputChangedHandler("description", value)}
            value={inputValues.description}
          />
        </View>
      </View>

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

  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 16,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    color: GlobalStyles.colors.primary700,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});
