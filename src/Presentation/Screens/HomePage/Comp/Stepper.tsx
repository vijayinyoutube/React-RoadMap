import { ConfigProvider, Steps } from "antd";
import { useEffect, useState } from "react";

function StepperComp(
  current: number,
  steps: (
    | { title: string; description: string; content?: undefined }
    | { title: string; content: string; description?: undefined }
  )[]
) {
  const [lineWidth, setlineWidth] = useState(0.5);

  useEffect(() => {
    function handleResize() {
      window.innerWidth <= 500 ? setlineWidth(2.5) : setlineWidth(0.5);
    }
    window.addEventListener("resize", handleResize);
  });

  return (
    <ConfigProvider
      theme={{
        components: {
          Steps: {},
        },
        token: {
          lineWidth: lineWidth,
        },
      }}
    >
      <Steps
        className="py-kSpace_20 px-kSpace_20"
        current={current}
        items={steps}
        progressDot
        responsive={true}
      />
    </ConfigProvider>
  );
}

export default StepperComp;
