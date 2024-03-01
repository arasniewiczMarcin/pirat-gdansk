import fb_Logo from '../assets/fb.svg';
import ig_Logo from '../assets/ig.svg';
import tiktok_Logo from '../assets/tiktok.svg';

const fb_link = "https://www.facebook.com/profile.php?id=61550608303232&locale=pl_PL";
const ig_link = "https://instagram.com/pirat.gdansk";
const tiktok_link = 'https://www.tiktok.com/@piratgdansk';

const Footer = () => {
    return (
        <footer className="bg-[#FFB923] text-black text-center py-4 fixed bottom-0 w-full ">
            <div className="w-6/10 flex justify-center font-medium">
                <div className="w-1/2">
                    <p>Kontakt:</p>
                    <br />
                    <p>piratgda@gmail.com</p>
                </div>
                <div className="w-1/2 flex flex-col items-center">
                    <p>Social Media:</p>
                    <br />
                    <div className="flex">
                        <a href={fb_link}>
                            <img src={fb_Logo} alt="Facebook logo" className="mr-10" />
                        </a>
                        <a href={ig_link}>
                            <img src={ig_Logo} alt="Instagram logo" className="mr-10"/>
                        </a>
                        <a href={tiktok_link}>
                            <img src={tiktok_Logo} alt="Tiktok logo" />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
export default Footer;