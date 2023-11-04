import { Button, Steps } from "antd";
import { useState } from "react";

const HomePage = () => {
  const description = "This is a description.";
  const steps = [
    {
      title: "First",
      content: "First-content",
    },
    {
      title: "Second",
      content: "Second-content",
    },
    {
      title: "Last",
      content: "Last-content",
    },
  ];

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };


  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <div className="flex justify-center items-center bg-sky-500 w-screen h-screen">
      <div className="bg-white w-1/3  h-96 rounded-lg">
        <Steps 
        className="p-kSpace_20"
        current={current} items={steps} />
        <Button type="primary" onClick={() => next()} className="bg-btnColor">
            Next
          </Button>
      </div>
    </div>
  );
};

export default HomePage;
