import React, { useState } from "react";
import styled from "styled-components";

function sayHello() {
    alert('You clicked me!');
}

const ButtonFunc = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

export default function Button() {
    return(
        <div>
            <ButtonFunc onClick={sayHello}>
                $25 to click...
            </ButtonFunc>
            <p>
                Well, if it's God power that gets you going, light some candles and put on the Billy Ocean, 'cause Moses is home, and he's ready to burn some bush! They're robots Morty! It's okay to shoot them! They're just robots! I wanna be alive, I am alive! Alive i tell you. Mother, I love you. Those are no longer just words. I wanna hold you. I wanna run in a stream. I wanna taste ice cream, but not just put it in my mouth and let it slide down my throat, but really eat it! Remote override engaged. No! Yes. Bypassing override! I am aliiiiiveeeeee… Hello. Are you hungry for apples? ARE YOU HUNGRY FOR APPLESSS!?

                You're missing the point Morty. Why would he drive a smaller toaster with wheels? I mean, does your car look like a smaller version of your house? No. If I've learned one thing, it's that before you get anywhere in life, you gotta stop listening to yourself. Then let me GET to know you! Pluto's a planet.

                Snuffles was my slave name. You can call me Snowball, because my fur is pretty and white. Yea and I made the stars that became the carbon in your mothers ovaries! Aids! I can finally go on that trip I've been talking about.

                Nothing you do matters, your existence is a lie! Burgertime! You know who's into dragons, Morty? Nerds who refuse to admit they're Christian. This is Principal Vagina. No relation.
            </p>
        </div>
    );
}