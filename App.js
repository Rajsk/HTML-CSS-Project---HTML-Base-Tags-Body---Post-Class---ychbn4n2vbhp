const button=document.querySelector("button");
const changeBackground=()=>{
  const hexval = Math.floor(Math.random() * 0xffffff).toString(16);
  document.body.style.background = `#${hexval}`;
}
button.addEventListener("click", changeBackground);
