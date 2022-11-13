// import React, { useEffect, useState } from "react";

const impactValue = ["?", "Small", "Medium", "Large", "Xlarge"];
const confidenceValue = ["?", "Small", "Medium", "Large", "Xlarge"];
const effortValue = ["?", "Xlarge", "Large", "Medium", "Medium"];

const iceValue = {
    zero: 0,
    small: 1,
    medium: 2,
    large: 3,
    xlarge: 4
}

function iceScoreCalculation(impactVar, confidenceVar, effortVar) {
    const impact = impactValue.findIndex((i) => impactVar === i);
    const confidence = confidenceValue.findIndex(
      (i) => confidenceVar === i
    );
    const effort = effortValue.findIndex((i) => effortVar === i);

    return (
        impact * confidence * effort
    );

    }

    export default iceScoreCalculation;
         
