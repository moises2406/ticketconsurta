import axios from 'axios';
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


interface UserNotificacion {
    Nombre: string;
    Cedula: string;
    Diagnostico: string;
    Telefono: string;
    _id: string;
    Hora: string;
    Cardiologo: boolean;
    Diabetologo: boolean;
    Endocrinologo: boolean;
    Nefrologo: boolean;
    Nutricionista: boolean;
    Odontologo: boolean;
    Oftalmologo: boolean;
    Psiologo: boolean;
    MedicoFamiliar: boolean;
    MedicoIntertista: boolean;
    CordinadorAsistencial: boolean;
    Otro: boolean;
}

export default function EditUserDate() {

    const [isData, setData] = useState<UserNotificacion>({
        Nombre: '',
        Cedula: '',
        Diagnostico: '',
        Telefono: '',
        _id: '',
        Hora: '',
        Cardiologo: false,
        Diabetologo: false,
        Endocrinologo: false,
        Nefrologo: false,
        Nutricionista: false,
        Odontologo: false,
        Oftalmologo: false,
        Psiologo: false,
        MedicoFamiliar: false,
        MedicoIntertista: false,
        CordinadorAsistencial: false,
        Otro: false,
    });
    // useparams
    const { id } = useParams();
    console.log(id);

        // navigate
        const navigate = useNavigate();

       // RidedData
       const RideData = async ({target:{name,value,checked}}:ChangeEvent<HTMLInputElement>) => {
        if (name === 'Nombre' || name === 'Cedula' || name === 'Diagnostico' || name === 'Telefono' || name === 'Hora') {
            setData({...isData,[name]:value});
        } else {
            checked ? setData({...isData,[name]:true}) : setData({...isData,[name]:false})
        }
        
    };

        // getdata
        const respose = useCallback(async () => {
            const res = await axios.get(`http://localhost:4000/getEditUserNotificacion/${id}`);
    
            if (res.status === 400) {
            } else {
                const resData: UserNotificacion = res.data;
                setData(resData);
            }
    
        }, [id]);
        useEffect(() => {
            respose();
        }, [respose]);

        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const res = await axios.put(`http://localhost:4000/userNotificacion/${id}`, isData);
            if (res.status === 200) {
                navigate('/Notification')
            } else {
                alert('Error');
            }
            
        };
    
  return (
    <div className="conten">
            <div className="container text-center">
                <div className="">
                    <div className="col-12 ojo">
                        <form className="d-flex mb-5 CreacionDeNotificacion" onSubmit={handleSubmit} >
                           <div className="col border p-3 mr-3">
                           {isData ? <input type="text" value={isData.Nombre} name='Nombre' className="form-control mb-2" placeholder='Nombre' onChange={RideData} /> : <div>...</div>}
                            {isData ? <input type="text" value={isData.Cedula} name='Cedula' className="form-control mb-2" placeholder='Cedula' onChange={RideData} /> : <div>...</div>}
                            {isData ? <input type="text" value={isData.Diagnostico} name='Diagnostico' className="form-control mb-2" placeholder='Diagnostico' onChange={RideData} /> : <div>...</div>}
                            {isData ? <input type="text" value={isData.Telefono} name='Telefono' className="form-control mb-2" placeholder='Telefono' onChange={RideData} /> : <div>...</div>}
                            {isData ? <input aria-label="Time" type="time" value={isData.Hora} name='Hora' className="form-control mb-2" placeholder='Hora' onChange={RideData} /> : <div>...</div>}
                            <br />
                            <button className="btn btn-primary btn-block">Editar</button>
                            </div>
                            <div className="col">
                            {isData ? <input className="form-check-input m-2" type="checkbox" name='Cardiologo' checked={isData.Cardiologo} onChange={RideData} /> : <div>...</div>}
                            <label className="form-check-label m-1" htmlFor="flexCheckDefault">
                                Cardiologo
                            </label>
                            <br />
                            {isData ? <input className="form-check-input m-2" type="checkbox" name='Diabetologo' checked={isData.Diabetologo} onChange={RideData} /> : <div>...</div>}
                            <label className="form-check-label m-1" htmlFor="flexCheckDefault">
                                Diabetologo
                            </label>
                            <br />
                            {isData ? <input className="form-check-input m-2" type="checkbox" name='Endocrinologo' checked={isData.Endocrinologo} onChange={RideData} /> : <div>...</div>}
                            <label className="form-check-label m-1" htmlFor="flexCheckDefault">
                                Endocrinologo
                            </label>
                            <br />
                            {isData ? <input className="form-check-input m-2" type="checkbox" name='Nefrologo' checked={isData.Nefrologo} onChange={RideData} /> : <div>...</div>}
                            <label className="form-check-label m-1" htmlFor="flexCheckDefault">
                                Nefrologo
                            </label>
                            <br />
                            {isData ? <input className="form-check-input m-2" type="checkbox" name='Nutricionista' checked={isData.Nutricionista} onChange={RideData} /> : <div>...</div>}
                            <label className="form-check-label m-1" htmlFor="flexCheckDefault">
                                Nutricionista
                            </label>
                            <br />
                            {isData ? <input className="form-check-input m-2" type="checkbox" name='Odontologo' checked={isData.Odontologo} onChange={RideData} /> : <div>...</div>}
                            <label className="form-check-label m-1" htmlFor="flexCheckDefault">
                                Odontologo
                            </label>
                            </div>
                            <div className="col">
                            {isData ? <input className="form-check-input m-2" type="checkbox" name='Oftalmologo' checked={isData.Oftalmologo} onChange={RideData} /> : <div>...</div>}
                            <label className="form-check-label m-1" htmlFor="flexCheckDefault">
                                Oftalmologo
                            </label>
                            <br />
                            {isData ? <input className="form-check-input m-2" type="checkbox" name='Psiologo' checked={isData.Psiologo} onChange={RideData} /> : <div>...</div>}
                            <label className="form-check-label m-1" htmlFor="flexCheckDefault">
                                Psiologo
                            </label>
                            <br />
                            {isData ? <input className="form-check-input m-2" type="checkbox" name='MedicoFamiliar' checked={isData.MedicoFamiliar} onChange={RideData} /> : <div>...</div>}
                            <label className="form-check-label m-1" htmlFor="flexCheckDefault">
                                Medico Familiar
                            </label>
                            <br />
                            {isData ? <input className="form-check-input m-2" type="checkbox" name='MedicoIntertista' checked={isData.MedicoIntertista} onChange={RideData} /> : <div>...</div>}
                            <label className="form-check-label m-1" htmlFor="flexCheckDefault">
                                Medico Intertista
                            </label>
                            <br />
                            {isData ? <input className="form-check-input m-2" type="checkbox" name='CordinadorAsistencial' checked={isData.CordinadorAsistencial} onChange={RideData} /> : <div>...</div>}
                            <label className="form-check-label m-1" htmlFor="flexCheckDefault">
                                Cordinador Asistencial
                            </label>
                            <br />
                            {isData ? <input className="form-check-input m-2" type="checkbox" name='Otro' checked={isData.Otro} onChange={RideData} /> : <div>...</div>}
                            <label className="form-check-label m-1" htmlFor="flexCheckDefault">
                                Otro
                            </label>

                            </div>
                        </form>
                    </div>
                    </div>
                    </div>
                    </div>
  )
}

