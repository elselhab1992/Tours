import { createContext, useContext, useEffect, useState } from "react";

const url = "https://course-api.com/react-tours-project";
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const [readMore, setReadMore] = useState(false);

  const filteredTours = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const jsonResponse = await response.json();

      setTours(jsonResponse);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <AppContext.Provider
      value={{
        tours,
        filteredTours,
        isLoading,
        setIsLoading,
        setTours,
        readMore,
        setReadMore,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
