import React, { useState } from "react";
import Room from "./Room";
import styled from "styled-components";
import Title from "../globals/Title";
import Section from "../globals/Section";
import rooms from "./rooms-data";
import { setColor, media, setRem } from "../../Styles";
const Rooms = () => {
  return (
    <Section color={setColor.lightGrey}>
      <Title title='our rooms' center />
      <RoomsCenter>
        {rooms.map((room) => {
          return <Room key={room.id} room={room} />;
        })}
      </RoomsCenter>
    </Section>
  );
};
const RoomsCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  ${media.tablet`
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-column-gap:${setRem(32)}
  `};
  ${media.desktop`
  width:100vw;
  max-width:1170px;
  display:grid;
  `};
  ${media.large`
  width:100vw;
  grid-template-columns:1fr 1fr 1fr;
  grid-column-gap:${setRem(32)}
  `};
`;

export default Rooms;
