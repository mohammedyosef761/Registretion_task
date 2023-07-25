import React from 'react'
import { InputStep1Type } from '../types'



const InputStep1 = ({inputName,setInputName}:InputStep1Type) => {
  return (
    <form className="mt-2">
          <label className="mb-2 text-sm font-bold text-primary sr-only dark:text-white">
          your name
          </label>
          <div className="relative">
            <input
              type="text"
              id="search"
              className= "appearance-none text-lg w-[244.71px] text-center font-bold fon block h-[41.14px] p-4 pl-10  text-primary  rounded-[8px] bg-gray-50  shadow "
              placeholder="your name"
              onChange={(e)=>setInputName(e.target.value)}
              value={inputName}
              required
            />
            <div className="absolute inset-y-0 right-1 flex items-center pl-3 pointer-events-none">
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.76073 11.4686L1.01904 11.846L1.5811 8.28899L6.35858 3.11004L7.62722 1.8414C8.11701 1.35161 8.91192 1.35161 9.40974 1.8414L10.7828 3.21443C11.2886 3.72028 11.2886 4.53927 10.7828 5.04512L4.76073 11.4686Z"
                  stroke="#B3B3B3"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>{" "}
          </div>
        </form>
  )
}

export default InputStep1