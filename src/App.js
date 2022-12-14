import React from "react";

import Landing from "./Landing";
import Certificate from "./pages/Certificate";
import Verify from "./pages/Verify";

function getRoute(){
  const host = window.location.host;
  const reqp = `${window.location.toString().split(host)[1]}`;

  if(reqp == "/#/cert" | reqp == "/#/cert/") return ['verify',<Certificate />]
  else if(reqp == /\/#\/certi\/[\s\S]*/.exec(reqp) ) return ['certify', <Verify loc={reqp} />]
  else return ['/', <Landing />]
}

export default function App() {

  // alert(document.referer)

  var [pathVar,comp] = getRoute()
  
  return (
    comp
  )
}
