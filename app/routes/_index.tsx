import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export default function Index() {
  return (
    <div className="w-full h-screen flex flex-col text-white">
      {/* Barra superior */}
      <nav className="h-24 flex justify-end bg-[#002847]">
        <div className="flex items-center space-x-10">
          <div>
            <img src="/imgs/image1.svg" alt="imagen login" width={240} />
          </div>
        </div>
      </nav>
      <div className="h-2 bg-[#FA4616]"></div>

      {/* Contenido principal */}
      <div
        className="relative flex-1 flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url('/imgs/imagen3.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay para opacidad */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Contenido sobre la imagen */}
        <div className="relative z-10 text-center px-4">
          {/* Título */}
          <h1 className="text-6xl font-black mb-6">
            Bienvenidos a la Biblioteca Digital de Secretos para Contar
          </h1>
          
          {/* Párrafos alineados con el título */}
          <p className="text-2xl max-w-2xl mx-auto">
            Leer es un mágico viaje lleno de aventuras y sueños.
          </p>
          <p className="text-2xl max-w-2xl mx-auto mt-4">
            ¡Aquí encontrarás historias que harán volar tu imaginación y te llenarán de alegría!
          </p>

          {/* Botón de redirección al Index */}
          <Link to="/biblioteca">
            <button className="mt-6 px-6 py-3 bg-[#FA4616] text-white text-lg font-bold rounded shadow-md hover:bg-[#d93d14]">
              Ingresar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
  
}

