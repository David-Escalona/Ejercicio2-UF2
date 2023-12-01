import { login } from "./login"
import { panel } from "./panel"

export const registro = {
    template: 
    `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <!-- Bootstrap CSS -->
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
            crossorigin="anonymous"
        />

        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootswatch@5.3.0/dist/yeti/bootstrap.min.css"
        />

        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
        <link rel="stylesheet" href="styles.css" />

        <link rel="stylesheet" href="styles.css" />
        <title>Login</title>
    </head>
    <body class="pt-5" style="overflow-x: hidden; padding-bottom: 100px">
        <header class="container mt-3">
        <h1 class="text-center">Gestió d'incidències FPLLEFIA</h1>
        <form class="text-center">
            <button id="registroRegistro" type="submit" class="btn btn-primary ms-2 me-2 mt-4 p-2 w-25 btn-dark rounded-5">Registro</button>
            <button id="panelRegistro" type="submit" class="btn btn-primary ms-2 me-2 mt-4 p-2 w-25 btn-dark rounded-5">Panel</button>
            <button id="loginRegistro" type="submit" class="btn btn-primary ms-2 me-2 mt-4 p-2 w-25 btn-dark rounded-5">Login</button>
        </form>
            </header>
            <main>
                <div class="container">
                    <h1 class="mt-5 text-center">Registro</h1>
                    <div class="m-5 mx-auto" style="max-width: 400px">
                        <form action="" class="form border shadow-sm p-3">
                            <label for="nombre" class="form-label">Nombre:</label>
                            <input id="nombre" type="text" class="form-control" />
                            <label for="apellidos" class="form-label">Apellidos:</label>
                            <input id="apellidos" type="text" class="form-control" />
                            <label for="email" class="form-label">Email:</label>
                            <input id="email" type="text" class="form-control" />
                            <label for="pass" class="form-label mt-3">Contraseña:</label>
                            <input id="pass" type="password" class="form-control" />
                            <button id="enlaceRegistro" class="btn btn-primary w-100 mt-3">Enviar</button>
                        </form>
                    </div>
                </div>
            </main>
            <footer class="">
                <nav class="navbar bg-secondary fixed-bottom small">
                    <div class="container">
                        <a class="navbar-brand" href="http://www.fpllefia.com">
                            <img
                                src="./images/logo.svg"
                                alt="fpllefia"
                                width="30"
                                height="24"
                                class="d-inline-block align-text-top"
                            />
                            FPLlefià
                        </a>
                        <span class="navbar-text">@Texto de header</span>
                        <a href="#" class="nav-link">Vínculo header</a>
                    </div>
                </nav>
            </footer>
    
            <!-- Option 1: Bootstrap Bundle with Popper -->
            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
                crossorigin="anonymous"
            ></script>
        </body>
    </html>
    `,

    script: ()=>{
        console.log('Hola')
        document.querySelector('#registroRegistro').addEventListener('click', () =>{
            document.querySelector('header').innerHTML = registro.template
        })
        document.querySelector('#panelregistro').addEventListener('click', () =>{
            document.querySelector('header').innerHTML = panel.template
        })
        document.querySelector('#loginRegistro').addEventListener('click', () =>{
            document.querySelector('header').innerHTML = login.template
        })
        document.querySelector('#enlaceRegistro').addEventListener('click', () =>{
            document.querySelector('header').innerHTML = panel.template
        })
    }
}