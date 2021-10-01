
export default function Menu() {
    return (
        <>
            <h2>Productos Disponibles</h2>
            <div class="table-responsive">
                <table class="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div ></div>
                            </td>
                            <td>Notebook</td>
                            <td><a class="btn btn-outline-success" href="verProducto.html" role="button">Ver</a>
                                <a role="button" class="btn btn-outline-info" href="editarProducto.html">Editar</a>
                                <button type="button" class="btn btn-outline-danger" data-toggle="modal" data-target="#myModal">Eliminar</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div></div>
                            </td>
                            <td>Led Tv</td>
                            <td><a class="btn btn-outline-success" href="verLed.html" role="button">Ver</a>
                                <a role="button" class="btn btn-outline-info" href="editarProducto.html">Editar</a>
                                <button type="button" class="btn btn-outline-danger" data-toggle="modal" data-target="#myModal">Eliminar</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div></div>
                            </td>
                            <td>Cinema HomeTheater</td>
                            <td><a class="btn btn-outline-success" href="verTheater.html" role="button">Ver</a>
                                <a role="button" class="btn btn-outline-info" href="editarProducto.html">Editar</a>
                                <button type="button" class="btn btn-outline-danger" data-toggle="modal" data-target="#myModal">Eliminar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>


            <footer class="py-3 bg-dark fixed-bottom">
                <div class="container">
                    <p class="m-0 text-center text-white">Ale Luna</p>
                </div>
            </footer>
        </>
    )
}
