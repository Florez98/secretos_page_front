

export default function book() {
  return (
    <div className="w-full">
      {/* Encabezado */}
      <nav className=" h-24 flex justify-end bg-[#002847]">
          <div className="flex items-center space-x-10">
            <div>
              <img src="/imgs/image1.svg" alt="imagen login" width={240} />
            </div>
          </div>
      </nav>
      <div className="h-2 bg-[#FA4616]"></div>

      {/* Título */}
      <div className="p-8">
        <h1 className="text-4xl font-bold">Libros</h1>
      </div>

      {/* Contenedor de libros */}
      <div className="grid grid-cols-5 gap-8 px-8">
        {/* Libro */}
        {Array(10).fill(0).map((_, index) => (
          <div key={index} className="text-center">
            <img src="/imgs/ciensoledad.svg" alt="Cien Años de Soledad" width={100}/>
            <h2 className="mt-2 text-lg font-bold">Cien Años de Soledad</h2>
            <p className="text-black-600">Gabriel García Márquez</p>
          </div>
        ))}
      </div>
    </div>


  );
};