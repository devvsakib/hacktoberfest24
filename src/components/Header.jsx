import { Link } from "react-router-dom";
import { images } from "../config/images.js";

const Header = () => {
    const style = {
        position: "fixed",
        width: '100%',
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexShrink: 0,
        borderRadius: '30px',
        backdropFilter: 'blur(24px)',
        border: '1px solid',
        borderColor: "blue",
        backgroundColor: '#ffffff40',
        boxShadow: "1px solid orange",
        zIndex: 9999999999999,
    };
    const menu = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Featured Book",
            link: "#featuredBoook"
        },
        {
            name: "About Us",
            link: "/aboutus"
        },
        {
            name: "Contact us",
            link: "/contact"
        },
    ]
    return (
        <header style={style}
            className="max-w-[1280px] left-0 right-0 top-5 py-2 px-2 pr-10"
        >
            <div className="rounded-full overflow-hidden w-10 flex flex-start">
                <img src={images.logo} className="mr-auto"/>
            </div>
            <nav>
                <ul className="flex gap-2 items-center">
                    {
                        menu.map((item, idx) =>
                            <Link to={item.link}>{item.name}</Link>
                        )
                    }
                </ul>
            </nav>
        </header>
    );
};

export default Header;
