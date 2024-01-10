import React from 'react';
import { Iconos, NavIten, Objectoss } from "../components/Framents";
import Nv from "../components/Nv";

export default function DoctorBoar() {
    const HadlerPerson = (name: string): void => {
        console.log(name);
      };
      return (
        <div>
          {/* <!-- =============== Navigation ================ --> */}
          <div className=".container">
            <Nv />
            <div className="navigation">
              <ul>
                <NavIten title="Home" numero={0} key={0} />
                <NavIten title="Historial" numero={1} key={1} />
                <NavIten title="Referimientos" numero={2} key={2} />
                <NavIten title="Chats" numero={3} key={3} />
                <NavIten title="Exit" numero={4} key={4} />
              </ul>
            </div>
    
            {/* <!-- =============== TODO: Boar ================ --> */}
            <div className="overflow-hidden text-center pt-5 ok">
              <div className="row gx-5 mr-5">
                <Objectoss numero={5} puntuacion={8664} title="Estrellas" key={5} />
                <Objectoss numero={6} puntuacion={375} title="User" key={6} />
                <Objectoss numero={7} puntuacion={465} title="En Espera" key={7} />
                <Objectoss numero={8} puntuacion={0} title="opcion" key={8} />
              </div>
            </div>
            {/* <!-- =============== TODO: Persons ================ --> */}
            <div className="sisi pb-5">
              <table className="table okk">
                <thead>
                  <tr className="text-center">
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">ID</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center">
                    <th scope="row">1</th>
                    <td>Mark justo sert lgofpd</td>
                    <td>dv4608464094fvsff5415f</td>
                    <td>
                      <div className="row grid text-center">
                        <div className="w-25 w25">
                          <Iconos
                            numer={9}
                            key={9}
                            funcion={() => HadlerPerson("Bell")}
                          />
                        </div>
                        <div className="w-25 w25">
                          <Iconos
                            numer={10}
                            key={10}
                            funcion={() => HadlerPerson("UserVoice")}
                          />
                        </div>
                        <div className="w-25 w25">
                          <Iconos
                            numer={11}
                            key={11}
                            funcion={() => HadlerPerson("Detail")}
                          />
                        </div>
                        <div className="w-25 w25">
                          <Iconos
                            numer={12}
                            key={12}
                            funcion={() => HadlerPerson("XCircle")}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="text-center">
                    <th scope="row">1</th>
                    <td>Mark justo sert lgofpd</td>
                    <td>dv4608464094fvsff5415f</td>
                    <td>
                      <div className="row grid text-center">
                        <div className="w-25 w25">
                          <Iconos
                            numer={9}
                            key={9}
                            funcion={() => HadlerPerson("Bell")}
                          />
                        </div>
                        <div className="w-25 w25">
                          <Iconos
                            numer={10}
                            key={10}
                            funcion={() => HadlerPerson("UserVoice")}
                          />
                        </div>
                        <div className="w-25 w25">
                          <Iconos
                            numer={11}
                            key={11}
                            funcion={() => HadlerPerson("Detail")}
                          />
                        </div>
                        <div className="w-25 w25">
                          <Iconos
                            numer={12}
                            key={12}
                            funcion={() => HadlerPerson("XCircle")}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="text-center">
                    <th scope="row">1</th>
                    <td>Mark justo sert lgofpd</td>
                    <td>dv4608464094fvsff5415f</td>
                    <td>
                      <div className="row grid text-center">
                        <div className="w-25 w25">
                          <Iconos
                            numer={9}
                            key={9}
                            funcion={() => HadlerPerson("Bell")}
                          />
                        </div>
                        <div className="w-25 w25">
                          <Iconos
                            numer={10}
                            key={10}
                            funcion={() => HadlerPerson("UserVoice")}
                          />
                        </div>
                        <div className="w-25 w25">
                          <Iconos
                            numer={11}
                            key={11}
                            funcion={() => HadlerPerson("Detail")}
                          />
                        </div>
                        <div className="w-25 w25">
                          <Iconos
                            numer={12}
                            key={12}
                            funcion={() => HadlerPerson("XCircle")}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="text-center">
                    <th scope="row">1</th>
                    <td>Mark justo sert lgofpd</td>
                    <td>dv4608464094fvsff5415f</td>
                    <td>
                      <div className="row grid text-center">
                        <div className="w-25 w25">
                          <Iconos
                            numer={9}
                            key={9}
                            funcion={() => HadlerPerson("Bell")}
                          />
                        </div>
                        <div className="w-25 w25">
                          <Iconos
                            numer={10}
                            key={10}
                            funcion={() => HadlerPerson("UserVoice")}
                          />
                        </div>
                        <div className="w-25 w25">
                          <Iconos
                            numer={11}
                            key={11}
                            funcion={() => HadlerPerson("Detail")}
                          />
                        </div>
                        <div className="w-25 w25">
                          <Iconos
                            numer={12}
                            key={12}
                            funcion={() => HadlerPerson("XCircle")}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="text-center">
                    <th scope="row">1</th>
                    <td>Mark justo sert lgofpd</td>
                    <td>dv4608464094fvsff5415f</td>
                    <td>
                      <div className="row grid text-center">
                        <div className="w-25 w25">
                          <Iconos
                            numer={9}
                            key={9}
                            funcion={() => HadlerPerson("Bell")}
                          />
                        </div>
                        <div className="w-25 w25">
                          <Iconos
                            numer={10}
                            key={10}
                            funcion={() => HadlerPerson("UserVoice")}
                          />
                        </div>
                        <div className="w-25 w25">
                          <Iconos
                            numer={11}
                            key={11}
                            funcion={() => HadlerPerson("Detail")}
                          />
                        </div>
                        <div className="w-25 w25">
                          <Iconos
                            numer={12}
                            key={12}
                            funcion={() => HadlerPerson("XCircle")}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
}
