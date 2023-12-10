// @ts-nocheck
import React, { useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";

const Collapsible = ({
  title,
  description,
  requestUrl,
  curlCommand,
  parameters,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col w-full border-b border-[#7A7A7A]">
      <div
        className="flex flex-row justify-between py-[26px] cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-4">
          <span className="text-[20px] font-[500]">{title}</span> -{" "}
          <span className="text-[16px] text-[#00000070]">{description}</span>
        </div>
        <img
          className={`transform ${
            isOpen ? "rotate-180" : "rotate-0"
          } transition-transform duration-400`}
          src="/icons/chevron.svg"
          alt="Toggle"
        />
      </div>

      {isOpen && (
        <div className="flex flex-col pb-[26px]">
          <div className="flex flex-row items-center gap-[25px] mt-[25px]">
            <span className="text-[20px] font-[500]">Request URL</span>
            <div className="flex items-center h-[48px] w-[450px] rounded-[6px] border-[0.5px] border-black px-4">
              <span className="text-sm">{requestUrl}</span>
            </div>
          </div>
          {curlCommand && (
            <>
              <p className="text-[20px] font-[500] mt-[25px]">Curl</p>
              <div className="w-full mt-[10px]">
                <CopyBlock
                  language="curl"
                  text={curlCommand}
                  codeBlock
                  theme={dracula}
                  showLineNumbers={false}
                />
              </div>
            </>
          )}
          {parameters && (
            <>
              <p className="text-[20px] font-[500] my-[25px]">Parameters</p>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-[20px] font-medium  border-b">
                        Name
                      </th>
                      <th className="px-6 py-3 text-[20px] font-medium  border-b">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {parameters.map((param, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 text-[20px] border-b">
                          {param.name}
                        </td>
                        <td className="px-6 py-4 text-[20px] border-b">
                          {param.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Collapsible;
