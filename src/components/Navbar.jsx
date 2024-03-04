import React, {useState} from 'react'

function Navbar() {

    const [menuOpent, setMenuOpen] = useState(false);
    // const checkboxesRef = useRef([]);

    const toggleMenu = () => {
      setMenuOpen(!menuOpent)
    };
 
    // const uncheckAll = () => {
    //     checkboxesRef.current.forEach((checkbox) => {
    //       checkbox.checked = false;
    //     toggleMenu();
    //     });
    // };

  return (
    <div>
      <nav className="bg-white p-4 shadow-xl fixed w-full rounded-b-2xl">
        <div className="flex justify-between mx-auto md:container md:mx-auto md:px-24">
          <div data-aos="zoom-in" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="800" className="">
            <a className="flex flex-row" href="#Home">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/7316/7316704.png"
                width="35"
                height="25"
                alt=""
              />
              <p className="ps-2 pt-1 text-2xl text-blue-950 font-sans font-bold">
                PCL.Dev
              </p>
            </a>
          </div>
          <div data-aos="zoom-in" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="800" className="pt-1">
            <div className="md:hidden">
              {/* humberger btn  */}
              <input
                // ref={(element) => { checkboxesRef.current.push(element);}}
                onClick={toggleMenu}
                id="menu-toggle"
                type="checkbox"
                role="button"
                className="menu-hamberger mt-1"
              ></input>
            </div>
            <ul className="hidden pt-1 md:flex">
              <li className="">
                <a
                  href="#Home"
                  data-to-scrollspy-id="Home"
                  className="active px-4 py-2 rounded-md hover:font-semibold hover:bg-blue-50 hover:text-blue-950 hover:shadow-md hover:shadow-blue-950/4 md:bg-transparent"
                >
                  Home
                </a>
              </li>
              <li className="">
                <a
                  href="#Education"
                  data-to-scrollspy-id="Education"
                  className="px-4 py-2 rounded-md hover:font-semibold hover:bg-blue-50 hover:text-blue-950 hover:shadow-md hover:shadow-blue-950/4 md:bg-transparent"
                >
                  Education
                </a>
              </li>
              <li className="">
                <a
                  href="#Experience"
                  data-to-scrollspy-id="Experience"
                  className="px-4 py-2 rounded-md hover:font-semibold hover:bg-blue-50 hover:text-blue-950 hover:shadow-md hover:shadow-blue-950/4 md:bg-transparent"
                >
                  Experience
                </a>
              </li>
              <li className="">
                <a
                  href="#Skills"
                  data-to-scrollspy-id="Skills"
                  className="px-4 py-2 rounded-md hover:font-semibold hover:bg-blue-50 hover:text-blue-950 hover:shadow-md hover:shadow-blue-950/4 md:bg-transparent"
                >
                  Skills
                </a>
              </li>
              <li className="">
                <a
                  href="#Contact"
                  data-to-scrollspy-id="Contact"
                  className="px-4 py-2 rounded-md hover:font-semibold hover:bg-blue-50 hover:text-blue-950 hover:shadow-md hover:shadow-blue-950/4 md:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* menu for mobile */}
        {menuOpent ? (
          <form>
          <ul className="md:hidden pt-4">
            <li>
              <a 
                href="#Home"
                className="block py-2 px-3 rounded-md hover:font-semibold hover:bg-blue-50 hover:text-blue-950 hover:shadow-md hover:shadow-blue-950/4 md:bg-transparent md:text-blue-700 md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#Education"
                className="block py-2 px-3 rounded-md hover:font-semibold hover:bg-blue-50 hover:text-blue-950 hover:shadow-md hover:shadow-blue-950/4 md:bg-transparent md:text-blue-700 md:p-0"
                aria-current="page"
              >
                Education
              </a>
            </li>
            <li>
              <a 
                href="#Experience"
                className="block py-2 px-3 rounded-md hover:font-semibold hover:bg-blue-50 hover:text-blue-950 hover:shadow-md hover:shadow-blue-950/4 md:bg-transparent md:text-blue-700 md:p-0"
                aria-current="page"
              >
                Experience
              </a>
            </li>
            <li>
              <a 
                href="#Skills"
                className="block py-2 px-3 rounded-md hover:font-semibold hover:bg-blue-50 hover:text-blue-950 hover:shadow-md hover:shadow-blue-950/4 md:bg-transparent md:text-blue-700 md:p-0"
                aria-current="page"
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#Contact"
                className="block py-2 px-3 rounded-md hover:font-semibold hover:bg-blue-50 hover:text-blue-950 hover:shadow-md hover:shadow-blue-950/4 md:bg-transparent md:text-blue-700 md:p-0"
                aria-current="page"
              >
                Contact
              </a>
            </li>
          </ul>
        </form>

        ) : null}
      </nav>
    </div>
  );
}

export default Navbar
