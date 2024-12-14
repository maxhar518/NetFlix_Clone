import React from 'react';

interface ClassProps {
  classes: string;
}

const NetfuixLogo: React.FC<ClassProps> = ({ classes }) => {
  return (
    <svg
      viewBox='0 0 1280 346'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      role='img'
      className={classes}
    >
      <path d='M114.407,330.889q27.321-3.231,54.673-6.123l0.564-323.84H122.127l-0.279,197-0.968.067Q94.149,101.334,67.337.926H0.425q0,172.462,0,344.924Q24.3,342.4,48.2,339.216q0.081-122.509.161-245.019l0.969-.035Q81.943,215.428,114.407,330.889ZM275.718,45.768q46.064-.538,92.134-0.94,0.041-21.951.083-43.9H222.475q-0.314,159.287-.626,318.572,72.678-6.817,145.5-11.262,0.042-21.951.083-43.9-46.11,2.412-92.177,5.641l0.189-91.926q36.608-1.689,73.237-3.039,0.043-22.036.086-44.072-36.622,1.008-73.232,2.27Q275.629,89.489,275.718,45.768Zm124.124-1.2q27.887-.215,55.774-0.38-0.189,129.777-.379,259.554,26.721-1.106,53.449-1.89,0.141-128.967.281-257.934,27.889-.117,55.779-0.185,0.015-21.4.028-42.8H399.919Q399.882,22.746,399.842,44.566Zm256.077-.921q43.9,0.022,87.792.168Q743.693,22.37,743.674.927h-141.1q-0.048,149.575-.1,299.151,26.736-.225,53.474-0.13-0.009-61.726-.017-123.453,34.478,0.072,68.954.455-0.015-21.414-.031-42.828-34.462-.29-68.929-0.344ZM781.478,0.927L781.745,230.3c0.05,48.2,27.3,76.371,79.765,79.012,52.455,2.778,79.566-23.394,79.469-73.01L940.514,0.927H890.088l0.426,236.059c0.04,21.873-10.626,29.2-27.621,28.454s-27.692-8.927-27.724-30.582Q834.99,117.893,834.813.927H781.478ZM992.047,313.764q26.675,2.1,53.333,4.524-0.33-158.68-.64-317.361H991.407Q991.727,157.346,992.047,313.764ZM1226.56,0.926q-20.325,62.212-40.59,122.516L1185,123.4Q1165.08,61.267,1145.1.926h-55.27q28.02,78.123,56,159.149-29.67,82.613-59.28,162.145,24.93,2.5,49.86,5.277,21.66-62.187,43.36-126.166l0.97,0.071q21.615,67.223,43.16,136.724,28.02,3.683,55.99,7.72-29.655-92.974-59.5-181.353,27.75-80.02,55.62-163.567h-49.45Z' />
    </svg>
  );
};

export default NetfuixLogo;
