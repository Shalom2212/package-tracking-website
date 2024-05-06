import { useEffect, useState } from "react";
import "./App.css";
import Web3 from "web3";

import PackageTracking from "./pages/PackageTracking";
import { Abi } from "./abi/Abi";
import { useParams } from "react-router-dom";

//const contractAddress = "0xe7bda8ea624da949cad24ac8dce642e1efa074a3";

function App() {
  const { address } = useParams();

  const contractAddress = address;
  const [web3, setWeb3] = useState();
  const [smartContract, setSmartContract] = useState();
  const [prdouctName, setProductName] = useState();
  const [allPlaces, setAllPlaces] = useState();
  const [pcontractAddress, setPcontractAddress] = useState();

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then(() => {
          const web3Instance = new Web3(window.ethereum);
          setWeb3(web3Instance);

          const courseInstance = new web3Instance.eth.Contract(
            Abi,
            contractAddress
          );
          setSmartContract(courseInstance);

          // courseInstance.methods
          //   .productPrice()
          //   .call()
          //   .then((fee) => {
          //     setProductPrice(web3Instance.utils.fromWei(fee, "ether"));
          //   });

          courseInstance.methods
            .getProductName()
            .call()
            .then((name) => {
              setProductName(name);
              console.log(name);
            });

          courseInstance.methods
            .getAllPlaces()
            .call()
            .then((places) => {
              setAllPlaces(places);
            });

          courseInstance.methods
            .getProductContractAddress()
            .call()
            .then((address) => {
              setPcontractAddress(address);
              console.log(address);
            });
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      alert("Please install an another Ethereum wallet.");
    }
  }, []);

  return (
    <>
      <PackageTracking
        productName={prdouctName}
        web3={web3}
        smartcontract={smartContract}
        contractAddress={pcontractAddress}
        allPlaces={allPlaces}
      />
    </>
  );
}

export default App;
