"use babel";
// @flow

import React from "react";
import Radium from "radium";
import { LogoFont } from "../nucleons/texts";
import { PRIMARY_DARK } from '../nucleons/colors';

export default Radium(({}) => (
  <span
    style={{
      fontFamily: LogoFont,
      fontSize: "40px",
      color: PRIMARY_DARK,
      alignItems: "center",
      display: "flex",
      marginTop: '10px',
    }}
  >
    Molecule
  </span>
));
