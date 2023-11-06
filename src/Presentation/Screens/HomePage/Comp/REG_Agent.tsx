import { Alert, Spin } from "antd";
import { HeightSpacer } from "../../../Components/Spacer";

import "../CSS/stepper_styles.css";

import { FcFinePrint } from "react-icons/fc";
import { LoadingOutlined } from "@ant-design/icons";
import { Typography } from "antd";
const { Text } = Typography;

function REGAgent() {
  return (
    <div className="border-[1px] border-neutral-300 rounded-lg p-kSpace_20">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center">
          {/* TITLE TEXT */}
          <div className="flex flex-col">
            <Text className="text-slate-400 text-kFontVerySmall font-normal tracking-wider">
              REGISTERED AGENT TRANSFER
            </Text>
            <Text className="font-semibold tracking-wide">ROCKETSHIP LLC</Text>
          </div>

          {/* ACTION ICONS */}
          <div className="text-xl">
            <FcFinePrint size="40px" />
          </div>
        </div>
        {HeightSpacer({ heightClass: "py-kSpace_10" })}
        <Text className="text-slate-400 text-kFontVerySmall font-light tracking-wide">
          An internal document that serves as owner's manual for an LLC. It
          provides the necessary informations and instructions so that your
          business can function properly
        </Text>{" "}
        {HeightSpacer({ heightClass: "py-kSpace_5" })}
        <Alert
          type="warning"
          showIcon
          icon={
            <Spin
              indicator={<LoadingOutlined style={{ fontSize: 16 }} spin />}
              delay={10}
            />
          }
          message={
            <div className="text-[#faad14]">Request is processing...</div>
          }
        />
      </div>
    </div>
  );
}

export default REGAgent;
