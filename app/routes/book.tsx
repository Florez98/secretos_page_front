import { useState } from "react";
import { books as mockBooks } from "~/core/mockup";
import Footer from "./components/footer";

export default function Book() {
  const [books, setBooks] = useState(mockBooks);

  const newData = {
    imagen: "imagen",
    titulo: "libro cualquiera",
    autor: "camilo",
  };

  const addBook = () => {

    setBooks([...books, newData]);
  };

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
        <h1 className="text-4xl font-bold">Libros</h1>
      </div>

      <button className="border bg-blue-200" onClick={addBook}>
        Agregar
      </button>


      <div className="grid grid-cols-5 gap-8 px-8">
        {/* Renderiza los libros */}
        {books.map((data, index) => (
          <div key={index} className="text-center">
            <img src={data.imagen} alt={data.titulo} className="h-52" />
            <h2 className="mt-2 text-lg font-bold">{data.titulo}</h2>
            <p className="text-black-600">{data.autor}</p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}