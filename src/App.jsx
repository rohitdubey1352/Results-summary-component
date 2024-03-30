import { useState, useEffect } from "react";
import Result from "./component/Result";

const App = () => {
  const [data, setData] = useState([]);
  const API = "/data.json";

  useEffect(() => {
    const fetchData = async () => {
      console.log(API);
      try {
        console.log(`${API} inside the try block`);
        const response = await fetch(API); // Fetch the JSON file
        console.log(`${API} After the fetch function`);

        const fetchedData = await response.json(); // Parse the JSON response
        setData(fetchedData); // Update data state
        console.log(fetchedData);
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
