import { header } from "./componentes/header";
import { login } from "./vista/login";
import { registro } from "./vista/registro";
import { panel } from "./vista/panel";

document.querySelector('header').innerHTML = header.template
header.script()

document.querySelector('header').innerHTML = login.template


document.querySelector('header').innerHTML = registro.template


document.querySelector('header').innerHTML = panel.template
panel.script()
