import React from "react";
import { Steps } from "antd";
import { Typography } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const { Title } = Typography;

const { Step } = Steps;

const PackageTracking = ({
  steps,
  productName,
  web3,
  smartcontract,
  contractAddress,
  allPlaces,
}) => {
  if (!Array.isArray(allPlaces)) {
    return <LoadingOutlined />;
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Title>{productName}</Title>
      <Title level={4}>
        {productName} blockchain address {contractAddress}
      </Title>
      <div>
        <Steps direction="vertical" progressDot current={100}>
          {allPlaces.map((step, index) => (
            <Step
              key={index}
              title={step.name}
              description={step.description}
            />
          ))}
        </Steps>
      </div>
    </div>
  );
};

export default PackageTracking;
