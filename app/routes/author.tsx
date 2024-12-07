import { authors } from "~/core/mockup"; // Asegúrate de tener el mockup de autores
import Footer from "./components/footer";

export default function Authors() {
  return (
    <div className="w-full">
      {/* Encabezado */}
      <nav className="h-24 flex justify-end bg-[#002847]">
        <div className="flex items-center space-x-10">
          <div>
            <img src="/imgs/image1.svg" alt="imagen login" width={240} />
          </div>
        </div>
      </nav>
      <div className="h-2 bg-[#FA4616]"></div>

      {/* Título */}
      <div className="p-8">
        <h1 className="text-4xl font-bold">Autores</h1>
      </div>

      {/* Contenedor de autores */}
      <div className="grid grid-cols-5 gap-8 px-8">
        {/* Autor */}
        {authors.map((data, index) => (
          <div key={index} className="text-center">
            <img src={data.imagen} alt={data.autor} className="h-52 w-full object-cover" />
            <h2 className="mt-2 text-lg font-bold">{data.autor}</h2>
            <p className="text-black-600">{data.pais}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
