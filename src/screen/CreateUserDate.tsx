import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import { CiEdit, CiLocationArrow1, CiTrash } from 'react-icons/ci';
import { useNavigate, useParams } from 'react-router-dom';
import SendMenssage from '../components/SendMenssage';
import { socket } from '../socket';

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


interface MSGS {
    msg?: string;
    bolean: boolean;
}

export default function CreateUserDate() {

    const [isAlert, setAlert] = useState<MSGS>({ bolean: false });
    const [isData, setData] = useState<UserNotificacion[]>();
    // useparams
    const { id } = useParams();
    console.log(id);

    // navigate
    const navigate = useNavigate();

    // socket
    useEffect(() => {
        socket.on('disconnectWs', (msg: string) => {
                navigate('/QRcode')
        });
        socket.on('qr', (msg: string) => {
                navigate('/QRcode')
        });
    }, [navigate]);

    // getdata
    const respose = useCallback(async () => {
        const res = await axios.get(`http://localhost:4000/userNotificacion/${id}`);

        if (res.status === 400) {
            setData([]);
            setAlert({ msg: 'no hay usuarios crea uno', bolean: true });
        } else {
            const resRever: UserNotificacion[] = res.data.reverse();
            setData(resRever);
        }

    }, [id]);
    useEffect(() => {
        respose();
    }, [respose]);

    // postdata
    const postdata = async ({ Nombre, Cedula, Diagnostico, Telefono, Cardiologo, CordinadorAsistencial, Diabetologo, Endocrinologo, Hora, MedicoFamiliar, MedicoIntertista, Nefrologo, Nutricionista, Odontologo, Oftalmologo, Otro, Psiologo }: UserNotificacion) => {
        await axios.post(`http://localhost:4000/userNotificacion/${id}`, { Nombre, Cedula, Diagnostico, Telefono, Cardiologo, CordinadorAsistencial, Diabetologo, Endocrinologo, Hora, MedicoFamiliar, MedicoIntertista, Nefrologo, Nutricionista, Odontologo, Oftalmologo, Otro, Psiologo });
        respose();
    };

    // deletedata
    const deleteData = async (_id: string) => {
        await axios.delete(`http://localhost:4000/userNotificacion/${_id}`);
        respose();
    };

    const { register, handleSubmit } = useForm();
    console.log(isData);

    // sendmesage
    const hanledSendMesage = (datos: UserNotificacion) => {
        socket.emit('sendMesageUno', datos);
    };

    return (
        <div className="conten">
            {isAlert.bolean ? <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>{isAlert.msg}</strong>
                <button onClick={() => setAlert({ bolean: false })} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div> : null}
            <div className="container text-center">
                <div className="">
                    <div className="col-12 ojo">
                        <form className="d-flex mb-5 CreacionDeNotificacion" onSubmit={handleSubmit((data: any) => postdata(data))}>
                            <div className="col border p-3 mr-3">
                                <input type="text" className="form-control mb-2" placeholder='Nombre'{...register('Nombre')} />
                                <input type="text" className="form-control mb-2" placeholder='Cedula'{...register('Cedula')} />
                                <input type="text" className="form-control mb-2" placeholder='Diagnostico'{...register('Diagnostico')} />
                                <input type="text" className="form-control mb-2" placeholder='Telefono'{...register('Telefono')} />
                                <input aria-label="Time" type="time" className="form-control mb-2" placeholder='Hora'{...register('Hora')} />
                                <br />
                                <button className="btn btn-primary btn-block">Crear</button>
                            </div>
                            <div className="col">
                                <input className="form-check-input m-2" type="checkbox" {...register('Cardiologo')} />
                                <label className="form-check-label m-1" htmlFor="flexCheckDefault">
                                    Cardiologo
                                </label>
                                <br />
                                <input className="form-check-input m-2" type="checkbox" {...register('Diabetologo')} />
                                <label className="form-check-label m-1" htmlFor="flexCheckDefault">
                                    Diabetologo
                                </label>
                                <br />
                                <input className="form-check-input m-2" type="checkbox" {...register('Endocrinologo')} />
                                <label className="form-check-label m-1" htmlFor="flexCheckDefault">
                                    Endocrinologo
                                </label>
                                <br />
                                <input className="form-check-input m-2" type="checkbox" {...register('Nefrologo')} />
                                <label className="form-check-label m-1" htmlFor="flexCheckDefault">
                                    Nefrologo
                                </label>
                                <br />
                                <input className="form-check-input m-2" type="checkbox" {...register('Nutricionista')} />
                                <label className="form-check-label m-1" htmlFor="flexCheckDefault">
                                    Nutricionista
                                </label>
                                <br />
                                <input className="form-check-input m-2" type="checkbox" {...register('Odontologo')} />
                                <label className="form-check-label m-1" htmlFor="flexCheckDefault">
                                    Odontologo
                                </label>


                            </div>
                            <div className="col">
                                <input className="form-check-input m-2" type="checkbox" {...register('Oftalmologo')} />
                                <label className="form-check-label m-1" htmlFor="flexCheckDefault">
                                    Oftalmologo
                                </label>
                                <br />
                                <input className="form-check-input m-2" type="checkbox" {...register('Psiologo')} />
                                <label className="form-check-label m-1" htmlFor="flexCheckDefault">
                                    Psiologo
                                </label>
                                <br />
                                <input className="form-check-input m-2" type="checkbox" {...register('MedicoFamiliar')} />
                                <label className="form-check-label m-1" htmlFor="flexCheckDefault">
                                    Medico Familiar
                                </label>
                                <br />
                                <input className="form-check-input m-2" type="checkbox" {...register('MedicoIntertista')} />
                                <label className="form-check-label m-1" htmlFor="flexCheckDefault">
                                    Medico Intertista
                                </label>
                                <br />
                                <input className="form-check-input m-2" type="checkbox" {...register('CordinadorAsistencial')} />
                                <label className="form-check-label m-1" htmlFor="flexCheckDefault">
                                    Cordinador Asistencial
                                </label>
                                <br />
                                <input className="form-check-input m-2" type="checkbox" {...register('Otro')} />
                                <label className="form-check-label m-1" htmlFor="flexCheckDefault">
                                    Otro
                                </label>
                            </div>
                        </form>
                    </div>

                    <div className="row">
                        {isData?.map((index) => (
                            <div className="col-6" key={index._id}>
                                <div className="border p-3">
                                    <div className="card">
                                        <div className="card-header">
                                            {/* head */}
                                            <li className="list-group-item mb-2 rounded" >
                                                <div className="row">
                                                    <div className="col-6 col-md-2 d-grid gap-2 col-6 mx-auto">
                                                        <button onClick={() => deleteData(index._id)} className="btn btn-danger"> <CiTrash /> </button>
                                                    </div>
                                                    <div
                                                        className="col-6 col-md-8 liDelist"
                                                    >
                                                        {index.Nombre}
                                                    </div>
                                                    <div className="col-6 col-md-2 d-grid gap-2 col-6 mx-auto">
                                                        <button
                                                            className="btn btn-primary"
                                                            onClick={() => navigate(`/userEdit/${index._id}`)}
                                                        >
                                                            <CiEdit />
                                                        </button>
                                                    </div>
                                                </div>
                                            </li>

                                        </div>
                                        {/* body */}
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">{index.Cedula}</li>
                                            <li className="list-group-item">{index.Diagnostico}</li>
                                            <li className="list-group-item">{index.Telefono}</li>
                                        </ul>
                                        <div className="card-footer">
                                            <div className="row">
                                                <div className="col-6 col-md-2 d-grid gap-2 col-6 mx-auto">
                                                    <button onClick={() => hanledSendMesage(index)} className="btn btn-success"> <CiLocationArrow1 /> </button>
                                                </div>
                                                <div
                                                    className="col-6 col-md-8 liDelist"
                                                >
                                                    {index.Hora}
                                                </div>
                                                <div className="col-6 col-md-2 d-grid gap-2 col-6 mx-auto">
                                                    <SendMenssage numero={0} key={index._id} />


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>
            </div>
        </div>

    );
};

