import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function Accordion(props) {
  const { data } = props;
  const [accordion, setAccordion] = useState(false);
  return (
    <div>
      <h2>
        <button
          onClick={() => setAccordion((preState) => !preState)}
          className={`flex w-full items-center justify-between border-black/20 bg-white p-5 ${
            accordion ? "border-b-0" : "border-b-2"
          }`}
        >
          <span>{data.title}</span>
          <div>{accordion ? <FiMinus size={25} /> : <FiPlus size={25} />}</div>
        </button>
      </h2>

      <div
        className={`${
          accordion ? "block border-black/20 border-b-2 pb-4" : "hidden"
        } px-5`}
      >
        <ul className="flex flex-col">
          {data.list.map((list) => (
            <li
              key={list.id}
              className="text-xs font-normal mt-1 cursor-pointer text-black/50 hover:text-black"
            >
              {list.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
