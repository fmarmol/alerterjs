function createAlert(msg) {
  let div = document.createElement("div");
  document.body.appendChild(div);
  div.style.position = "absolute";
  div.style.bottom = "10";
  div.style.right = 100;
  div.style.opacity = 0;
  div.style.padding = "8px 8px";
  div.style.borderRadius = "0.5rem";
  div.style.backgroundColor = "#b0e0e6";
  div.style.outline = "ridge #40e0d0";
  div.style.transition = "opacity 0.5s ease-in-out, right 0.3s ease-in-out";
  div.innerHTML = msg;
  setTimeout(()=> {
    div.style.opacity = 1;
    div.style.right = 10;
  }, 1)


  setTimeout(()=>{
    document.body.removeChild(div);
  }, 2000);
}

