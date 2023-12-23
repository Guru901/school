import React, { useEffect, useState } from "react";
import Fimg from "../../components/fimg";
import "./style.css";
import Msgimg from "../../components/msgimg";

const Infrastructure = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3002", {
          method: "GET",
        });
        const fetchedData = await response.json();
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Msgimg src="https://images.unsplash.com/photo-1698685425028-49105e29e793?auto=format&fit=crop&q=80&w=1632&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <div className="fimgs-container absolute-center">
        <div className="fimgss">
          {data.map((item) => (
            <Fimg key={item.id} src={item.src} title={item.title} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Infrastructure;
