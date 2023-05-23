import companyLogo from "../assets/companyLogo.png";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

function Navbar() {
  const mediumScreen = useMediaQuery({ query: "(min-width: 768px)" });

  const lists = ["Services", "How We Work", "Projects", "About"];
  const desktopList = (
    <ul className="flex gap-x-10 collosal-description text-[16px]">
      {lists.map((l, i) => {
        return (
          <motion.li whileHover={{ scale: 1.1 }} transition={{ type: "inherit" }} key={i}>
            {l}
          </motion.li>
        );
      })}
    </ul>
  );

  return (
    <div className="flex justify-between items-center">
      <div className="company-profile collosal-title flex gap-x-3 text-[24px]">
        <img src={companyLogo} alt="Logo" className="self-center" />
        <h2>Collosal.</h2>
      </div>
      {mediumScreen ? desktopList : null}
      <button className="button-transparent text-[14px]">Contact</button>
    </div>
  );
}

export default Navbar;
