import React, { useState } from "react";
import styled from "styled-components";

function sayHello() {
    alert('You clicked me!');
}

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

export default function ButtonPage() {
    return(
        <div>
            <Button onClick={sayHello}>
                $25 to click...
            </Button>
        </div>
    );
}