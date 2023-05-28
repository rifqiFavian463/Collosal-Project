import Facebook from '../assets/logo/facebook.png';
import Github from '../assets/logo/github.png';
import Google from '../assets/logo/google.png';
import Forbes from '../assets/logo/Forbes.png';
import Microsoft from '../assets/logo/Microsoft.png';

export default function Client() {
    return (
        <>
            <div className="our-brands mt-16 mb-16 border-y-2 py-9 border-[#fff1]">
                <div className="logo flex justify-evenly items-center">
                <img src={Github} alt="Logo Github" />
                <img src={Forbes} alt="Logo Forbes" />
                <img src={Google} alt="Logo Google" />
                <img src={Microsoft} alt="Logo Microsoft"  />
                <img src={Facebook} alt="Logo Facebook"  />
                </div>
            </div>
        </>
    )
}

