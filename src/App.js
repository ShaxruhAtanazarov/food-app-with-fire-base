import Router from "config/Router";

// animation wrapper
import { AnimatePresence } from "framer-motion";
import useGetDataFromDb from "hook/useGetDataFromDb";
import { useEffect } from "react";

function App() {
  const { getDataFromDb } = useGetDataFromDb();

  useEffect(() => {
    getDataFromDb();
  }, [getDataFromDb]);

  return (
    <div className="h-auto flex flex-col">
      <AnimatePresence>
        <Router />
      </AnimatePresence>
    </div>
  );
}

export default App;
