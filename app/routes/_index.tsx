import type { MetaFunction } from "@remix-run/node";
import Footer from "./components/footer";


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="w-full">
      <div className="w-full">
        <nav className=" h-24 flex justify-end bg-[#002847]">
          <div>
            <div>
              <img src="/imgs/image1.svg" alt="imagen login" width={240} />
            </div>
          </div>
        </nav>
        <div className="h-2 bg-[#FA4616]"></div>
        <div className="flex mt-6">
          <div className="w-3/6">
            <div className="flex justify-center">
              <div className="w-5/6">{/** titulo*/}
                <h1 className="be-vietnam-pro-semibold text-6xl font-black text-center">Secretos Para Contar</h1>
                <h2 className="text-center">Biblioteca Digital</h2>
              </div>
            </div>
            <div className="flex justify-center ">{/** imagen*/}
              <img src="/imgs/image2.svg" alt="imagen login" />
            </div>

          </div>

          <div className="flex justify-center py-10 w-3/6"> {/* login */}
            <div> {/* Contenedor formulario */}
              <div className="space-y-6"> {/* Espaciado entre los elementos */}
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-lg font-semibold mb-2">Correo</label>
                  <input
                    id="email"
                    type="text"
                    className="border p-2 rounded"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="password" className="text-lg font-semibold mb-2">Contraseña</label>
                  <input
                    id="password"
                    type="password"
                    className="border p-2 rounded"
                  />
                </div>
                <div>
                  <button className="w-full bg-[#FA4616] text-white py-2 rounded text-lg font-semibold">
                    Ingresar
                  </button>
                </div>
                <div className="text-center text-sm">
                  <a href="#" className="text-gray-600">¿Haz olvidado tu contraseña?</a>
                </div>
              </div>
              <div className="mt-6 text-center">
                <button className="w-full border py-2 rounded text-lg font-semibold">
                  Registrar
                </button>
              </div>
            </div>
          </div>


        </div>
      </div>
      <Footer></Footer>
    </div>

  );
};