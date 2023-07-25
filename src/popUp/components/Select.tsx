import React from "react";
import { selectType } from "../types";



const Select = ({ nameOfSelect, setInputSelect }: selectType) => {
  return (
    <div className="w-[360.64px] h-[41.14px] mb-6">
      <select
        id="countries"
        onChange={(e) => setInputSelect(e.target.value)}
        className="bg-gray-50 shadow-md text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>Choose a {nameOfSelect}</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </div>
  );
};

export default Select;
