/* eslint-disable no-unused-vars */
import React from "react";
import "./Tour.css";
import { useGlobalContext } from "../Context/Context";
import Tours from "../../Pages/Tours/Tours";
import Loading from "../Loading/Loading";

const Tour = () => {
  const { tours, filteredTours, isLoading, readMore, setReadMore } =
    useGlobalContext();
  const allTours = tours.map((tour) => {
    const { id, image, name, price, info } = tour;
    return <Tours key={id} {...tour} filteredTours={filteredTours} />;
  });
  return (
    <>
      {isLoading ? (
        <section>
          <Loading />
        </section>
      ) : (
        <section className="tours-section">{allTours}</section>
      )}
    </>
    // <main>
    //   {tours.map((tour) => {
    //     const { id, image, name, price } = tour;

    //     return <Tours key={id} {...tour} filteredTours={filteredTours} />;
    //   })}
    // </main>
  );
};

export default Tour;
