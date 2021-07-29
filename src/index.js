import component, { NAME } from "./component";
import "./style.css";
import kitten from "./kitten.jpg";

document.body.appendChild(component());
document.body.append(NAME);

const image = new Image();
image.src = kitten;

document.body.append(image);
