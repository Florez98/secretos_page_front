import { useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { Author, Data, getAllAuthors, search } from '../servicios/autorService';
 
export function loader() {
    return getAllAuthors();
}
 
export default function author() {
    const data = useLoaderData() as Data;
    const [searchResults, setSearchResults] = useState<Author[]>([]);
    const [searchError, setSearchError] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
 
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
 
    const handleSearch = async () => {
        setSearchResults([]);
        setSearchError('');
        try {
            const response = await search(searchTerm);
            const authors = response.responseElements;
            if (authors.length === 0) {
                setSearchError('No se encontró el autor');
                setIsModalOpen(true);
            } else {
                setSearchResults(authors);
            }
        } catch (error) {
            console.error('Error fetching author:', error);
            setSearchError('No se encontró el autor');
            setIsModalOpen(true);
        }
    };
 
    const closeModal = () => {
        setIsModalOpen(false);
    };
 
    const handleMoreInfo = (id: number) => {
        navigate(`/autor/${id}`);
    };
 
    return (
     
 
        <div className="items-center justify-center min-h-screen bg-slate-100">
 
<header>
        <div className="navbar bg-base-100 MenuOff">
          <div className="flex-1">
            <div className="drawer">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                <label htmlFor="my-drawer" className="btn btn-primary drawer-button GeneralBoton"> Menu</label>
              </div>
              <div className="drawer-side text-drop">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay "></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 ">
                  <br />
                  <br />
                  <Link to="/">
                    <li><button className="btn btn-primary text-white btn btn-wide btn btn-xs sm:btn-sm md:btn-md lg:btn-lg  "> Principal </button></li>
                  </Link>
                  <br />
                  <Link to="/audioLibros">
                    <li><button className="btn btn-primary text-white btn btn-wide btn btn-xs sm:btn-sm md:btn-md lg:btn-lg "> Audiolibros </button></li>
                  </Link>
                  <br />
                  <Link to="/libros">
                    <li><button className="btn btn-primary text-white btn btn-wide btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"> Libros </button></li>
                  </Link>
                </ul>
 
              </div>
            </div>
          </div>
         
         
          <div className="flex-none gap-2">
            <div className="form-control">
            <div className='flex-none gap-2 mx-10'>
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder='Buscar un autor'
                                className='input input-accent w-full bg-slate-100 rounded-2xl '
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button className="absolute right-0 btn btn-ghost no-animation " onClick={handleSearch}>
                                <div className="indicator">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
            </div>
       
          <div className="logoregresar">
              <Link to="/">
                <img
                  alt=""
                  src="/images/LogoSPC.png" />
              </Link>
 
            </div>
       
          </div>
       
        </div>
       
      </header>
            <div>
 
                <div className='navbar border-solid rounded-2xl border-2 border-slate-300 mx-auto justify-between container'>
                    <div className='mx-20'>
                        <a href="/autores" className='btn btn-ghost text-xl'>Autores</a>
                    </div>
                   
                </div>
                <div className={`${isModalOpen ? 'blur-sm overflow-hidden' : ''}`}>
                <h1 className='infototal'>Se encontraron <strong className='text-slate-700'>{searchResults.length > 0 ? searchResults.length : data.totalElements}</strong> autores</h1>
                    <div className="containerBody">
                        <div className='container mx-11'>
                            <div className="grid grid-cols-4 gap-4 ">                        
                                {(searchResults.length > 0 ? searchResults : data.responseElements).map((item: Author) => (
                                    <AuthorCard
                                        key={item.id}
                                        id={item.id}
                                        name={item.name}
                                        lastName={item.lastName}
                                        country={item.country}
                                        birthDate={item.birthDate}
                                        description={item.description}
                                        onMoreInfo={handleMoreInfo}
                                    />    
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
{/*!-- footer of the page -->*/}
<br />
<footer className="footer footer-v1">
  <div className="content-block footer-main">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="footer-logo">
            <figure className="ImagenFooter">
              <img src="/public/images/FooterFoto.webp" alt="FotoFooter" />
            </figure>
          </div>
        </div>
       
        <br />
        <br />
        <div className="col-lg-12 text-center piecontenido">
          <p>Calle 11A #43B - 41 Barrio Manila <br />
             <b>Medellín, Colombia</b></p>
 
             <strong><a href="https://secretosparacontar.org/ "  target="_blank">Fundación Secretos para contar</a>  </strong>  |
           
             <strong><a className="FooteriperVinculo" href="https://secretosparacontar.org/nosotros/nuestra-historia/" target="_blank"> Nuestra Historia </a></strong> |  
             <strong><a href="https://secretosparacontar.org/programas/alianza-era/" target="_blank"> ¿Qué es Alianza Era? </a></strong>
         
     
          <ul className="social-network">
            <li><a href="https://www.facebook.com/secretosparacontar/" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="https://www.instagram.com/secretosparacontar/" target="_blank"><i className="fab fa-instagram"></i></a></li>
            <li><a href="https://www.linkedin.com/company/fundacionsecretosparacontar" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
            <li><a href="https://www.youtube.com/user/fundasecretos" target="_blank"><i className="fab fa-youtube"></i></a></li>
          </ul>
       
          <p><strong>  Todos los derechos reservados®</strong></p>
        </div>
      </div>
    </div>
  </div>
</footer>
            {isModalOpen && <NotFoundModal closeModal={closeModal} />}
        </div>
    );
}
 
function AuthorCard({ name, lastName, country, birthDate, id, onMoreInfo }: Author & { onMoreInfo: (id: number) => void }) {
    return (
        <div className="containerBody">
 
            <div className='card-body place-content-between'>
                <h4 className='card-title text-black font-bold'>{name} {lastName}</h4>
                    <p>{country}</p>
                    <p>{birthDate}</p>
                    <div className='my-4 text-stone-700'>
                    <button className="btn hover:bg-primary" onClick={() => onMoreInfo(id)}>Ver mas </button>
                </div>
            </div>
        </div>
    );
}
 
 
function NotFoundModal({ closeModal }: { closeModal: () => void }) {
    return (
        <div className="modal modal-open overflow-hidden">
            <div className="modal-box">
                <h3 className="font-bold text-lg">No se encontro el autor.</h3>
                <div className="modal-action">
                    <button onClick={closeModal} className="btn">Cerrar</button>
                </div>
            </div>
        </div>
 
 
       
 
    );
 
 
 
 
   
 
 
 
 
   
}