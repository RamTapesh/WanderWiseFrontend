import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { toast } from "sonner";

const AddExpense = ({ trip, setDependency }) => {
  const onSubmit = async () => {
    try {
      const expenseName = document.getElementById("expense-name");
      const expenseAmount = document.getElementById("expense-amount");

      if(expenseName.value== "" || expenseAmount.value==""){
        toast.error("Please fill all the fields");
        return;
      }

      const expenseData = {
        name: expenseName.value,
        amount:Number(expenseAmount.value),
      };
      const response = await api.post(
        `/trips/expense/${trip._id}`,
        expenseData,
      );
      console.log(expenseName, expenseAmount);
      if (response.status === 200) {
        toast.success(response.data?.message);
        setDependency((prev) => prev + 1);
        expenseName.value = "";
        expenseAmount.value = "";
      } else {
        toast.error("failed to add expense");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Expense</CardTitle>
        <CardDescription>Add your expense amount below.</CardDescription>
      </CardHeader>
      <CardContent>
        <Input
          type="expense-name"
          text="name"
          placeholder="Train Ticket"
          className="mb-4"
        />
        
        <Input type="number" placeholder="100" className="mb-4" />
        <Button className="w-full" onClick={onSubmit}>
          Add Expense
        </Button>
      </CardContent>
    </Card>
  );
};

export default AddExpense;