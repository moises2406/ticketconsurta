import { BsCheck, BsCheckAll } from "react-icons/bs";

interface Nb {
    numero: number;
}

export default function SendMenssage({numero}: Nb) {

  if (numero === 1) {
    return <BsCheck size={25} />;
    
  } else if (numero === 2) {
    return <BsCheckAll size={25} />;
    
  } else if (numero === 3) {
    return <BsCheckAll color="rgba(0, 255, 110, 0.612)" size={25} />;
    
  } else {
    return (
        <div>...</div>
      );
  }

}
