export const panel = {
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
            <!-- Bootswatch CSS -->
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootswatch@5.3.0/dist/yeti/bootstrap.min.css"
            />
            <!-- Bootstrap icons -->
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
            />
            <!-- Mis estilos personales  -->
            <link rel="stylesheet" href="styles.css" />
    
            <title>Vanilla Games</title>
        </head>
        
        <body class="pt-5" style="overflow-x: hidden; padding-bottom: 100px">
            <header>
            <h1>Gestió d'incidències FPLLEFIA</h1>
            <form>
                <button id="registro" type="submit" class="btn btn-primary">Registro</button>
                <button id="panel" type="submit" class="btn btn-primary">Panel</button>
                <button id="login" type="submit" class="btn btn-primary">Login</button>
            </form>
            </header>
            <main>
                <div class="container">
                    <h1 class="mt-5 text-center fw-bold" style="font-size: 100px;">Vanilla Games</h1>
                    <div class="m-5 mx-auto" style="max-width: 400px">
                        <img
                                src=".images/logo.svg"
                                alt="fpllefia"
                                class="img-fluid"
                            />
                    </div>
                </div>
            </main>
            <footer class="">
                <nav class="navbar bg-secondary fixed-bottom small">
                    <div class="container">
                        <a class="navbar-brand fs-6" href="http://www.fpllefia.com">
                            <img
                                src=".images/logo.svg"
                                alt="fpllefia"
                                width="30"
                                height="24"
                                class="d-inline-block align-text-top"
                            />
                            FPLlefià
                        </a>
                        <span class="navbar-text">DAW - Asignatura de proyectos</span>
                        <a href="#" class="nav-link">carrebola GITHUB</a>
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
    }
}