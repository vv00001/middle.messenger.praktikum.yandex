import Block from "./Block"

export default function renderDOM(block: Block) {
  // Можно завязаться на реализации вашего класса Block
  const root = document.querySelector("#app")
  console.log(block)
  if(root){
    root.innerHTML = ""
    root.appendChild(block.getContent())
  }
}
