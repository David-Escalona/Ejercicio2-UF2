import { registro } from "../vista/registro"
import { login } from "../vista/login"
import { panel } from "../vista/panel"

export const header = {
    template:
    `
    <h1>Gestió d'incidències FPLLEFIA</h1>
    <form>
        <button id="registro" type="submit" class="btn btn-primary">Registro</button>
        <button id="panel" type="submit" class="btn btn-primary">Panel</button>
        <button id="login" type="submit" class="btn btn-primary">Login</button>
    </form>
    `,

    script: ()=>{
        console.log('Hola')
        document.querySelector('#registro').addEventListener('click', () =>{
            document.querySelector('header').innerHTML = registro.template
        })
        document.querySelector('#panel').addEventListener('click', () =>{
            document.querySelector('header').innerHTML = panel.template
        })
        document.querySelector('#login').addEventListener('click', () =>{
            document.querySelector('header').innerHTML = login.template
        })
    }
}