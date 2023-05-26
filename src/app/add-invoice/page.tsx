'use client';
import { useState } from "react";
import Button from "../components/Button";
import GoBackBtn from "../components/GoBackBtn";
import Navbar from "../components/navbar";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

type FormData = {
  automaticDebit: boolean;
  currency: string;
  currentInstallment: number;
  description: string;
  dueDate: Date;
  installments: number;
  obs: string;
  recurrent: boolean;
  value: number;
  paid: boolean;
}

export default function AddInvoice() {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data, 'teste');
  }

  return (
    <main>
      <Navbar />
      <div className="flex flex-col bg-white">
        <div className="pl-6">
          <GoBackBtn />
        </div>
        <article className="p-6">
          <header className="flex justify-start items-center">
            <h1 className="heading-m text-gray-800">New Invoice</h1>
          </header>

          <div className="flex flex-col mt-12">
            <label className="body-variant text-gray-400 mb-4  ">Description</label>
            <input className="focus:border-violet-500 heading-s text-gray-800 border border-gray-300 h-12 rounded-md p-4 mb-6" type="text" {...register("description")} />

            <label className="body-variant text-gray-400 mb-4  ">Currency</label>
            <div className="flex justify-start items-center mb-8">
              <input className="focus:border-violet-500 heading-s text-gray-800 appearance-none rounded-full checked:bg-violet-600 border border-gray-300 h-5 w-5 mr-1 " type="radio" value="EUR" {...register("currency")} />
              <label>EUR</label>
              <input className="focus:border-violet-500 heading-s text-gray-800 appearance-none rounded-full checked:bg-violet-600 border border-gray-300 h-5 w-5 mr-1 ml-4" type="radio" value="BRL" {...register("currency")} />
              <label>BRL</label>
              <input className="focus:border-violet-500 heading-s text-gray-800 appearance-none rounded-full checked:bg-violet-600 border border-gray-300 h-5 w-5 mr-1 ml-4" type="radio" value="USD" {...register("currency")} />
              <label>USD</label>
            </div>

            <label className="body-variant text-gray-400 mb-4  ">Value</label>
            <input className="focus:border-violet-500 heading-s text-gray-800 border border-gray-300 h-12 rounded-md p-4 mb-6" type="number" {...register("value")} />

            <label className="body-variant text-gray-400 mb-4  ">Due date</label>
            <input className="focus:border-violet-500 heading-s text-gray-800 bg-transparent border border-gray-300 h-12 rounded-md p-4 mb-6" type="date" {...register("dueDate")} />

            <div className="flex justify-between items-center">
              <div className="flex flex-col items-center">
                <label className="body-variant text-gray-400 mb-4">Automatic Debit</label>
                <input className="focus:border-violet-500 heading-s text-gray-800 appearance-none rounded-full checked:bg-violet-600 border border-gray-300 h-6 w-6 mb-6" type="checkbox" {...register("automaticDebit")} />
              </div>
              <div className="flex flex-col items-center">
                <label className="body-variant text-gray-400 mb-4 ">Recurrent</label>
                <input className="focus:border-violet-500 heading-s text-gray-800 appearance-none rounded-full checked:bg-violet-600 border border-gray-300 h-6 w-6 mb-6" type="checkbox" {...register("recurrent")} />
              </div>
              <div className="flex flex-col items-center">
                <label className="body-variant text-gray-400 mb-4  ">Paid</label>
                <input className="focus:border-violet-500 heading-s text-gray-800 appearance-none rounded-full checked:bg-violet-600 border border-gray-300 h-6 w-6 mb-6" type="checkbox" {...register("paid")} />
              </div>
            </div>

            <label className="body-variant text-gray-400 mb-4  ">Installments</label>
            <div className="flex justify-start items-center">
              <input className="focus:border-violet-500 heading-s text-gray-800 border border-gray-300 h-12 w-20 rounded-md p-4 mb-6" type="number" {...register("currentInstallment")} />
              <span className="body-variant text-gray-400 text-center mx-2 h-10">of</span>
              <input className="focus:border-violet-500 heading-s text-gray-800 border border-gray-300 h-12 w-20 rounded-md p-4 mb-6" type="number" {...register("installments")} />
            </div>

            <label className="body-variant text-gray-400 mb-4  ">Observation</label>
            <input
              className="focus:border-violet-500 heading-s text-gray-800 border border-gray-300 h-12 rounded-md p-4 mb-6"
              type="text"
              {...register("obs")} />
          </div>
        </article>

        <div className="h-16 bg-line bg-gradient-to-b from-transparent to-gray-200" />

        <footer className="flex justify-between items-center w-full p-6 bg-white">
          <Button textColor="text-gray-400" bgColor="bg-gray-100" name="Discard" />
          <Button textColor="text-gray-400" bgColor="bg-gray-700" name="Save as Draft" />
          <Button textColor="text-gray-100" bgColor="bg-violet-500" name="Save & Send" onClick={() => handleSubmit(onSubmit)()} />
        </footer>
      </div>
    </main>
  )
}