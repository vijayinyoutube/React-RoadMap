import { Button } from "antd";
import { useState } from "react";
import "../CSS/stepper_styles.css";
import StepperComp from "../Comp/Stepper";
import { HeightSpacer } from "../../../Components/Spacer";

import { Typography } from "antd";
import REGAgent from "../Comp/REG_Agent";
const { Text } = Typography;

const HomePage = () => {
  const description = "This is a description.";
  const steps = [
    {
      title: "Fill the form",
      description: "Details needs to be filled",
    },
    {
      title: "Payment Details",
      description: "Make payment and receive bonus",
    },
    {
      title: "Receive Credits",
      description: "Get clarification",
    },
  ];

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const content = [
    <>
      <div>Page1</div>
    </>,
    <>
      <div>Page2</div>
    </>,
    <>
      <div>Page3</div>
    </>,
  ];

  return (
    <div className="flex justify-center items-center bg-sky-500 w-screen h-screen">
      <div className="bg-[#f6f8fa] xl:w-1/3 lg:w-1/2 md:w-1/2 w-auto m-5 h-auto rounded-xl border-4 border-white">
        {/* * *  Stepper Component * * */}
        {StepperComp(current, steps)}

        <div className="px-kSpace_20">
          {/* * *  Title Text * * */}
          <Text className="text-kFontNormal flex justify-center font-medium ">
            Let's calculate your Federal Tax
          </Text>

          {/* First Component */}
          {HeightSpacer({ heightClass: "py-kSpace_10" })}
          {REGAgent()}
        </div>

        <Button
          type="primary"
          onClick={() => next()}
          className="bg-btnColor m-kSpace_20"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
