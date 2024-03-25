import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../Card";
import "@splidejs/splide/dist/css/splide.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Recent = () => {
  const [showArrows, setShowArrows] = useState(false); // State to control arrow visibility
  const [data, setdata] = useState([]);
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    async function getData() {
      if (user) {
        // console.log(user.recent);
        const productRequests = user.recent.map(async (productId) => {
          const productResponse = await fetch(
            `https://backend-last-v.onrender.com/products/${productId}`
          );
          return productResponse.json();
        });
        const productDataArray = await Promise.all(productRequests);
        setdata(productDataArray);
      }
    }
    getData();
  }, [user]);

  useEffect(() => {
    // Determine whether to show arrows based on the length of recent array and perPage setting
    setShowArrows(data.length > 3); // Change 4 to your perPage setting
  }, [data]);

  return (
    <>
      {user && (
        <div className="g-5 container-fulid m-5">
          <h2 className="mb-3 fs-3 my-3">Recent Viewed Products</h2>
          <Splide
            options={{
              gap: "3em",
              drag: "free",
              arrows: showArrows, // Show arrows based on the state
              pagination: false,
              perPage: 4, // Set your perPage value here
              perMove: 1,
              breakpoints: {
                900: { perPage: 3 },
                640: { perPage: 3 },
              },
            }}
          >
            {data.map((prd, index) => (
              <SplideSlide key={index}>
                <Card product={prd}></Card>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      )}
    </>
  );
};

export default Recent;
