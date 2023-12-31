import { NavItens, Objectos } from "../interface/interface";
import {
  CiChat1,
  CiHome,
  CiLocationArrow1,
  CiLogin,
  CiStar,
  CiUndo,
  CiUser,
} from "react-icons/ci";
import {
  BiBell,
  BiDetail,
  BiGroup,
  BiSolidXCircle,
  BiUserVoice,
  BiWinkSmile,
} from "react-icons/bi";

export function NavIten({ title, numero }: NavItens) {
  return (
    <li>
      <div>
        {/* /<a> o link va a qui/ */}
        <span className="icon">
          <Iconos numer={numero} key={numero} />
        </span>
        <span className="title">{title}</span>
      </div>
    </li>
  );
}

interface Nber {
  numer: number;
  funcion?: () => void | undefined;
}

export function Iconos({ numer, funcion }: Nber) {
  if (numer === 0) {
    return <CiHome style={{ color: "black" }} size={20} onClick={funcion} />;
  } else if (numer === 1) {
    return <CiUndo size={20} onClick={funcion} />;
  } else if (numer === 2) {
    return <CiLocationArrow1 size={20} onClick={funcion} />;
  } else if (numer === 3) {
    return <CiChat1 size={20} onClick={funcion} />;
  } else if (numer === 4) {
    return <CiLogin size={20} onClick={funcion} />;
  } else if (numer === 5) {
    return <CiStar size={25} color="rgb(241, 225, 0)" onClick={funcion} />;
  } else if (numer === 6) {
    return <CiUser size={20} color="rgb(0, 132, 255)" onClick={funcion} />;
  } else if (numer === 7) {
    return <BiGroup size={20} color="rgb(21, 255, 0)" onClick={funcion} />;
  } else if (numer === 8) {
    return <BiWinkSmile size={20} onClick={funcion} />;
  } else if (numer === 9) {
    return <BiBell size={20} color="rgb(241, 225, 0)" onClick={funcion} />;
  } else if (numer === 10) {
    return <BiUserVoice size={20} color="rgb(21, 255, 0)" onClick={funcion} />;
  } else if (numer === 11) {
    return <BiDetail size={20} color="rgb(0, 132, 255)" onClick={funcion} />;
  } else {
    return (
      <BiSolidXCircle size={20} color="rgb(255, 0, 0)" onClick={funcion} />
    );
  }
}

export const Objectoss = ({ title, numero, puntuacion }: Objectos) => {
  return (
    <div className="col">
      <div className="p-3">
        <div className="grid text-center insinia">
          <div className="g-col-6 g-col-md-4">
            <p className="h1">{puntuacion}</p>
            <Iconos numer={numero} key={numero} />
            <span>{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
