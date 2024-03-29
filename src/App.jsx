import { useState, useEffect } from "react";
import Result from "./component/Result";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./data.json"); // Fetch the JSON file
        const fetchedData = await response.json(); // Parse the JSON response
        setData(fetchedData); // Update data state
      } catch (error) {
        console.error("Error fetching data:", error); // Handle errors
      }
    };

    fetchData(); // Call the fetch function
  }, []);

  return (
    <>
      {/* Main screen */}
      <main>
        <div className="data_container" id="data-container">
          <Result />
          <div className="summary_section">
            <h2>Summary</h2>
            <div>
              <ul>
                {data.map((item) => (
                  <li key={item.category}>
                    <img src={item.icon} alt="Icon" />
                    <span className="category">{item.category}</span>
                    <h4 className="score">
                      {item.score}
                      <span>/100</span>
                    </h4>
                  </li>
                ))}
              </ul>
              <button>Continue</button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <div className="attribution">
        <p>
          {" "}
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://github.com/rohitdubey1352/">Rohit Dubey</a>.
        </p>
      </div>
    </>
  );
};

export default App;
