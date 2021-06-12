import React from "react";

const Logo = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 327 50">
        <g fill="none" fill-rule="evenodd">
          <g>
            <circle fill="#64748B" cx="25" cy="25" r="25" />
            <g stroke="#F8FAFC">
              <path
                d="M8.28188001,1.49243952 C12.7230401,6.71689074 15,11.5636007 15,16.0648814 C15,18.6460791 14.2422826,20.4427441 13.1676146,21.658188 C11.5426053,23.496065 9.24610494,24 8.09977014,24 C6.94485386,24 4.56274287,23.4920157 2.87790139,21.6334126 C1.77849887,20.4206261 1,18.631451 1,16.0648814 C1,11.5608078 3.47298721,6.7164336 8.28188001,1.49243952 Z"
                stroke-width="2"
                transform="translate(17 10)"
              />
              <path
                d="M8 7L8 30M11 11.375L7.99097766 13.625 5 11.375M12 17L8.17257025 20 4 17"
                transform="translate(17 10)"
              />
            </g>
          </g>
          <text
            font-family="WorkSans-Regular_Light, Work Sans"
            font-size="30"
            font-weight="300"
            letter-spacing="6"
            fill="#64748B"
          >
            <tspan x="92" y="35">
              HEC
            </tspan>
          </text>
          <path fill="#CBD5E1" d="M70 0H72V50H70z" />
          <text
            font-family="WorkSans-Regular_Bold, Work Sans"
            font-size="28"
            font-weight="bold"
            letter-spacing=".5"
            fill="#64748B"
          >
            <tspan x="173.5" y="35">
              PARTNERS
            </tspan>
          </text>
        </g>
      </svg>
    </>
  );
};

export default Logo;
