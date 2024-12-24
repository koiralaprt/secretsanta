import { useState } from "react";
import data from './config.json'
import "./App.css";

export default function App() {
  const [page, setPage] = useState(1);
  return (
    <div className="App santa">
      {page === 1 && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img
            alt="a1"

            className="buddy"
            style={{ height: "300px", width: "300px" }}
            src={
              "https://image.freepik.com/free-vector/cartoon-santa-claus-holding-merry-christmas-banner_74855-941.jpg"
            }
          />
          <div
            style={{
              color: "white",
              display: "flex",
              alignItems: "center",
              flexDirection: "column"
            }}
          >
            <h2>
              <i>Merry Christmas fellow Laudian!</i>
            </h2>
            <h4>Click the button to find where your gift is!!</h4>
            <div
              onClick={() => setPage(2)}
              className="buddy santa"
              style={{
                height: "100px",
                width: "100px",
                background: "red",
                cursor: "pointer"
              }}
            >
              Click Me
            </div>
          </div>
        </div>
      )}
      {page === 2 && (
        <div className="santa">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "20px"
            }}
          >
            <h2>
              Funny thing about buttons, they don't always seem to do what you
              intend to ,do they?
            </h2>
            <img
            alt="a"
              height="200"
              width="210"
              className="buddy"
              src={"https://c.tenor.com/VFFJ8Ei3C2IAAAAd/rickroll-rick.gif"}
            />
            <h4>
              Just a tad bit longer and youre there. Click the real button
            </h4>
            <div
              onClick={() => setPage(3)}
              className="buddy santa"
              style={{
                height: "100px",
                width: "100px",
                background: "red",
                cursor: "pointer"
              }}
            >
              I'm real
            </div>
          </div>
        </div>
      )}
      {page === 3 && (
        <div className="santa">
          
          <h2 style={{ textAlign: "center" }}>
            Find <br />
           <span style={{fontSize:'2em'}}>{data.user} </span>
            <br /> and tell them the password <br />{" "}
            <br />
            <code
              style={{
                background: "purple",
                borderRadius: "20px",
                padding: "10px",
                fontSize:'1.2em'
              }}
            >
              {data.password}
            </code>{" "}
            <br />
            <br />
            to collect your gift.
            <br/>
          <img src="/fire.gif" 
            alt="ab"
            />

          </h2>
        </div>
      )}
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          cursor: "pointer"
        }}
      >
        <span onClick={() => setPage(1)}>Detour</span>
      </div>
      <img src="/grinch.png" style={{position:"absolute",left:0,bottom:0,height:'200px'}}
            alt="abc"
            />
    </div>
  );
}
