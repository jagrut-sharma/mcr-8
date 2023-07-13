import { createContext, useContext, useState } from "react";
import { useImmerReducer } from "use-immer";
import { dataReducer, initialDataState } from "../reducer/dataReducer";

const DataContext = createContext({
  dataState: {},
  dataDispatch: () => {},
  filterValue: null,
  setFilterValue: () => {},
  rsvp: null,
  setRsvp: () => {},
});

export const DataProvider = ({ children }) => {
  const [dataState, dataDispatch] = useImmerReducer(
    dataReducer,
    initialDataState
  );
  const [filterValue, setFilterValue] = useState({
    select: "both",
    search: "",
  });

  const [rsvp, setRsvp] = useState(false);

  const dataContext = {
    dataState,
    dataDispatch,
    filterValue,
    setFilterValue,
    rsvp,
    setRsvp,
  };

  return (
    <DataContext.Provider value={dataContext}>{children}</DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
