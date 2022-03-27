import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";

import { Card, CardGroup, Button, ButtonGroup } from "react-bootstrap";

function about() {
  alert(
    "Hi Its me Cymon, I wanted to demostrate my javascript skills so I developed this website. Thanks for Visiting :)"
  );
}

// Dice javascript code//
function rolldice() {
  var a = Math.floor(Math.random() * 6) + 1;
  var b = Math.floor(Math.random() * 6) + 1;
  document.getElementById("user").innerHTML = a;
  document.getElementById("bot").innerHTML = b;

  if (a > b) {
    document.getElementById("result").innerHTML = "You Won ʘ‿ʘ";
  } else if (a < b) {
    document.getElementById("result").innerHTML = "You Lost ಠ~ಠ";
  } else {
    document.getElementById("result").innerHTML = "Draw ◉_◉";
  }
}

// Toss coin//

//head = 1 and tail = 2

var userin = null;
var tossres = null;

function head() {
  document.getElementById("us").innerHTML = "Head Selected";
  userin = 1;
}

function tail() {
  document.getElementById("us").innerHTML = "Tail Selected";
  userin = 2;
}

function toss() {
  tossres = Math.floor(Math.random() * 2) + 1;
  console.log(tossres);

  if (userin == tossres) {
    document.getElementById("res").innerHTML = "You Win the Toss  ʘ‿ʘ";
  } else {
    document.getElementById("res").innerHTML = "You Lost the Toss  ಠ~ಠ";
  }

  if (tossres == 1) {
    document.getElementById("tr").innerHTML = "Head";
  } else {
    document.getElementById("tr").innerHTML = "Tail";
  }
}

//Wheres he hiding game

var ms = null;
var he = null;

function one() {
  ms = 1;
  document.getElementById("think").innerHTML =
    "So you think he is behind door 1 ?";
}
function two() {
  ms = 2;
  document.getElementById("think").innerHTML =
    "So you think he is behind door 2 ?";
}
function three() {
  ms = 3;
  document.getElementById("think").innerHTML =
    "So you think he is behind door 3 ?";
}
function four() {
  ms = 4;
  document.getElementById("think").innerHTML =
    "So you think he is behind door 4 ?";
}

function submit() {
  he = Math.floor(Math.random() * 4) + 1;

  if (he == 1) {
    document.getElementById("1").innerHTML = "◉_◉";
  } else if (he == 2) {
    document.getElementById("2").innerHTML = "◉_◉";
  } else if (he == 3) {
    document.getElementById("3").innerHTML = "◉_◉";
  } else {
    document.getElementById("4").innerHTML = "◉_◉";
  }
  document.getElementById("1").style.backgroundColor = "#a4db3f";
  document.getElementById("2").style.backgroundColor = "#a4db3f";
  document.getElementById("3").style.backgroundColor = "#a4db3f";
  document.getElementById("4").style.backgroundColor = "#a4db3f";

  if (he == ms) {
    document.getElementById("thinkresult").innerHTML =
      "You Guessed it Right ʘ‿ʘ";
  } else {
    document.getElementById("thinkresult").innerHTML =
      "You Guessed it Wrong ಠ_ಠ";
  }
}

function reset() {
  document.getElementById("1").style.backgroundColor = "#1a1b18be";
  document.getElementById("2").style.backgroundColor = "#1a1b18be";
  document.getElementById("3").style.backgroundColor = "#1a1b18be";
  document.getElementById("4").style.backgroundColor = "#1a1b18be";
  document.getElementById("1").innerHTML = "";
  document.getElementById("2").innerHTML = "";
  document.getElementById("3").innerHTML = "";
  document.getElementById("4").innerHTML = "";
  document.getElementById("thinkresult").innerHTML = "";
  he = null;
  ms = null;
  document.getElementById("think").innerHTML = "";
}

//Memory game
var arr = [];
var arr2 = [];

function randomnumbers() {
  for (let i = 1; i <= 5; i++) {
    var num = Math.floor(Math.random() * 9) + 1;
    if (arr.length <= 4) {
      arr.push(num);
    } else {
      console.log("array full");
    }
    document.getElementById("numbers").innerHTML = arr;
  }
  console.log("numbers");
}

function memorized() {
  document.getElementById("numbers").innerHTML = "";
  document.getElementById("10").disabled = false;
  document.getElementById("11").disabled = false;
  document.getElementById("12").disabled = false;
  document.getElementById("13").disabled = false;
  document.getElementById("14").disabled = false;
}

function check() {
  var in0 = document.getElementById("10").value;
  arr2.push(in0);
  var in1 = document.getElementById("11").value;
  arr2.push(in1);
  var in2 = document.getElementById("12").value;
  arr2.push(in2);
  var in3 = document.getElementById("13").value;
  arr2.push(in3);
  var in4 = document.getElementById("14").value;
  arr2.push(in4);
  const arr3 = arr2.map((num) => parseInt(num));
  console.log(arr);
  console.log(arr3);

  if (JSON.stringify(arr) == JSON.stringify(arr3)) {
    console.log("Match");
    document.getElementById("numbers").innerHTML = arr;
    document.getElementById("memres").innerHTML =
      "Matched ! You got a good Memory  ʘ‿ʘ";
  } else {
    console.log("not matched");
    document.getElementById("numbers").innerHTML = arr;
    document.getElementById("memres").innerHTML = "Damn youre Drunk ! ◉_◉";
  }
}
function App() {
  return (
    <div
      className="App"
      style={{
        fontFamily: "Bungee",
        textShadow: "4px 4px 20px #1a1b1841",
      }}
    >
      <Card
        className="card"
        style={{
          margin: "auto",
          width: "90%",
          backgroundColor: "#a4db3f",
          color: "#1a1b18be",
        }}
      >
        <Card.Body>
          <Card.Title style={{ textShadow: "0.2px 0.2px 10px #1a1b1841" }}>
            Games That Make No Sense{" "}
          </Card.Title>
          <Button
            size="sm"
            style={{ backgroundColor: "#1a1b18be", color: "#a4db3f" }}
            onClick={about}
          >
            About This Page
          </Button>
        </Card.Body>
      </Card>

      <Card
        className="card"
        style={{
          margin: "auto",
          width: "90%",
          backgroundColor: "#a4db3f",
          color: "#1a1b18be",
        }}
      >
        <Card.Body>
          <Card.Title>1) Roll A Dice ⚄ ⚄</Card.Title>
          <div className="dice">
            <div className="one">
              You<h1 id="user">-</h1>
            </div>

            <div className="two">
              Bot<h1 id="bot">-</h1>
            </div>
          </div>
          <h5>Result</h5>
          <h6 id="result">Roll</h6>
          <Button
            style={{ backgroundColor: "#1a1b18be", color: "#a4db3f" }}
            onClick={rolldice}
          >
            ROLL DICE
          </Button>
        </Card.Body>
      </Card>
      <Card
        style={{
          margin: "auto",
          width: "90%",
          backgroundColor: "#a4db3f",
          color: "#1a1b18be",
        }}
      >
        <Card.Body>
          <Card.Title>2) Toss A Coin ©</Card.Title>
          <div className="dice">
            <div className="one">
              Select option
              <div>
                <ButtonGroup>
                  <Button
                    style={{ backgroundColor: "#1a1b18be", color: "#a4db3f" }}
                    size="sm"
                    onClick={head}
                  >
                    Head
                  </Button>
                  <Button
                    style={{ backgroundColor: "#1a1b18be", color: "#a4db3f" }}
                    size="sm"
                    onClick={tail}
                  >
                    Tail
                  </Button>
                </ButtonGroup>
              </div>
            </div>
            <div className="one">
              Your Selection<h5 id="us"></h5>
            </div>
            <div className="one">
              Toss Result<h5 id="tr"></h5>
            </div>
          </div>
          <div>
            <div className="one">
              Result
              <h5 id="res"></h5>
            </div>
          </div>
          <Button
            style={{ backgroundColor: "#1a1b18be", color: "#a4db3f" }}
            onClick={toss}
          >
            Toss Coin
          </Button>
        </Card.Body>
      </Card>
      <Card
        style={{
          margin: "auto",
          width: "90%",
          backgroundColor: "#a4db3f",
          color: "#1a1b18be",
        }}
      >
        <Card.Body>
          <Card.Title style={{ textShadow: "0.2px 0.2px 10px #1a1b1841" }}>
            3) Where is he hiding ಠ_ಠ ?
          </Card.Title>

          <div className="third">
            <div className="three" id="1"></div>
            <div className="three" id="2"></div>
            <div className="three" id="3"></div>
            <div className="three" id="4"></div>
          </div>
          <div className="third">
            <div className="three2">door 1</div>
            <div className="three2">door 2</div>
            <div className="three2">door 3</div>
            <div className="three2">door 4</div>
          </div>
          <h6 id="think"></h6>
          <h6 id="thinkresult"></h6>
          <ButtonGroup className="me-2" aria-label="First group">
            <Button
              style={{
                backgroundColor: "#1a1b18be",
                color: "#a4db3f",
                border: "0px",
              }}
              onClick={one}
            >
              1
            </Button>
            <Button
              style={{
                backgroundColor: "#1a1b18be",
                color: "#a4db3f",
                border: "0px",
              }}
              onClick={two}
            >
              2
            </Button>
            <Button
              style={{
                backgroundColor: "#1a1b18be",
                color: "#a4db3f",
                border: "0px",
              }}
              onClick={three}
            >
              3
            </Button>
            <Button
              style={{
                backgroundColor: "#1a1b18be",
                color: "#a4db3f",
                border: "0px",
              }}
              onClick={four}
            >
              4
            </Button>
          </ButtonGroup>
          <Button
            style={{
              backgroundColor: "#1a1b18be",
              color: "#a4db3f",
              border: "0px",
            }}
            onClick={submit}
          >
            Open Doors
          </Button>
          <br />
          <Button
            style={{
              backgroundColor: "#1a1b18be",
              color: "#a4db3f",
              border: "0px",
              marginLeft: "10px",
              marginTop: "10px",
            }}
            onClick={reset}
          >
            Play Again
          </Button>
        </Card.Body>
      </Card>
      <Card
        style={{
          margin: "auto",
          width: "90%",
          backgroundColor: "#a4db3f",
          color: "#1a1b18be",
        }}
      >
        <Card.Body>
          <Card.Title>4) Memory Game </Card.Title>
          <Button
            style={{
              backgroundColor: "#1a1b18be",
              color: "#a4db3f",
              marginBottom: "5px",
            }}
            onClick={randomnumbers}
          >
            Generate 5 Random Numbers
          </Button>
          <div id="numbers"></div>
          <Button
            style={{
              backgroundColor: "#1a1b18be",
              color: "#a4db3f",
              marginBottom: "10px",
            }}
            onClick={memorized}
          >
            Done Memorizing
          </Button>
          <div className="numinput" style={{ marginBottom: "10px" }}>
            <div className="numinputi">
              <input
                disabled
                id="10"
                type="number"
                style={{
                  backgroundColor: "#1a1b18be",
                  width: "30px",
                  border: "0.1px",
                  color: "#a4db3f",
                }}
              />
            </div>
            <div>
              <input
                disabled
                id="11"
                type="number"
                style={{
                  backgroundColor: "#1a1b18be",
                  width: "30px",
                  border: "0.1px",
                  color: "#a4db3f",
                }}
              />
            </div>
            <div>
              <input
                disabled
                id="12"
                type="number"
                style={{
                  backgroundColor: "#1a1b18be",
                  width: "30px",
                  border: "0.1px",
                  color: "#a4db3f",
                }}
              />
            </div>
            <div>
              <input
                disabled
                id="13"
                type="number"
                style={{
                  backgroundColor: "#1a1b18be",
                  width: "30px",
                  border: "0.1px",
                  color: "#a4db3f",
                }}
              />
            </div>
            <div>
              <input
                disabled
                id="14"
                type="number"
                style={{
                  backgroundColor: "#1a1b18be",
                  width: "30px",
                  border: "0.1px",
                  color: "#a4db3f",
                }}
              />
            </div>
          </div>
          <Button
            style={{ backgroundColor: "#1a1b18be", color: "#a4db3f" }}
            onClick={check}
          >
            Check Memory
          </Button>
          <div>
            Result :<div id="memres"></div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
