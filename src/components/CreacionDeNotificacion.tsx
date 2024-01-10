import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import { CiEdit, CiLocationArrow1 } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { socket } from '../socket';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

interface IData {
    newDate: string;
    _id: string;
}


const CreacionDeNotificacion: React.FC = () => {
    const [isnewDate, setnewDate] = useState<string>('');

    const [isData, setData] = useState<IData[]>();

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
        const res = await axios.get(`http://localhost:4000/NewDate/`);
        const resRever: IData[] = res.data.reverse();
        setData(resRever);
    }, []);
    useEffect(() => {
        respose();
    }, [respose]);


    // postdatasave
    const [value, onChange] = useState<Value>(new Date());

    const handlerSumit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    // postdata
    const postdata = async () => {
        const date = value?.toLocaleString().split(',')[0];
        await axios.post(`http://localhost:4000/NewDate/`, { date });
        respose();
    };

    // handlerEdit

    const [isEnable, setDisable] = useState<boolean>(false);

    const handlerEdit = async (_id: string) => {
        if (_id === 'save') {
            const data = value?.toLocaleString().split(',')[0];
            await axios.put(`http://localhost:4000/NewDate/${isnewDate}`, { data });
            setDisable(false);
            setnewDate('');
            respose();
        } else {
            setDisable(true);
            setnewDate(_id);
        }

    };

    // hanledSendMesage
    const hanledSendMesage = async(id: string) => {
        const res = await axios.get(`http://localhost:4000/SendMessage/${id}`);
        const Send: string = res.data;
        if (Send === 'Send') {
            navigate(`/user/${id}`)
        }
    };


    return (
        <div className="conten">
            <div className="container text-center">
                <div className="row">
                    <div className="col-6">
                        <div className="d-flex CreacionDeNotificacion">
                            <form className="border p-3 mr-3" onSubmit={(e) => handlerSumit(e)}>
                                <DatePicker onChange={onChange} value={value} className='p-3' locale='es' />
                                <br />
                                <div className="">
                                    {
                                        isEnable ?
                                            <div className="colum">
                                                <h2>Editando</h2>
                                                <button
                                                    className="btn btn-success"
                                                    onClick={() => handlerEdit('save')}
                                                >Guardar</button>
                                            </div> :
                                            <button
                                                onClick={() => postdata()}
                                                className="btn btn-primary"
                                            >Crear</button>
                                    }
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="border p-3">
                            <ul className="list-group">
                                {
                                    isData?.map((item) => (
                                        <li className="list-group-item mb-2 rounded" key={item._id}>
                                            <div className="row">
                                                <div className="col-6 col-md-2 d-grid gap-2 col-6 mx-auto">
                                                    <button onClick={() => hanledSendMesage(item._id)} className="btn btn-success"> <CiLocationArrow1 /> </button>
                                                </div>
                                                <div
                                                    className="col-6 col-md-8 liDelist"
                                                    onClick={() => navigate(`/user/${item._id}`)}
                                                >
                                                    {item.newDate}
                                                </div>
                                                <div className="col-6 col-md-2 d-grid gap-2 col-6 mx-auto">
                                                    <button
                                                        className="btn btn-primary"
                                                        onClick={() => handlerEdit(item._id)}
                                                    >
                                                        <CiEdit />
                                                    </button>
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CreacionDeNotificacion;
