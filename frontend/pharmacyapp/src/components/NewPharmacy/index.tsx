import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RegistrationForm, RegistrationInput } from './styles';
import { cnpjFormatter, dddFormatter, phoneFormatter } from '../../lib/formatters';
import { api } from '../../services/api';
import { ErrorMessage } from '../ErrorMessage';

interface PharmacyPostResults {
    message: string;
    id: number;
};

export function NewPharmacy() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [hoursOpen, setHoursOpen] = useState('');
    const [ddd, setDdd] = useState('');
    const [phone, setPhone] = useState('');
    const [responsible, setResponsible] = useState('');
    const [others, setOthers] = useState('');
    const [error, setError] = useState({
        message: '',
        status: false,
    });

    function handleChangeName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    };

    function handleChangeAddress(event: React.ChangeEvent<HTMLInputElement>) {
        setAddress(event.target.value);
    };

    function handleChangeCnpj(event: React.ChangeEvent<HTMLInputElement>) {
        const _cnpj = event.target.value.replace(/\D/g, '');
        const formattedCnpj = cnpjFormatter(_cnpj);

        setCnpj(formattedCnpj);
    };

    function handleChangeHoursOpen(event: React.ChangeEvent<HTMLInputElement>) {
        let _hoursOpen = event.target.value.replace(/\D/g, '');

        if (Number(_hoursOpen) <= 0) _hoursOpen = '';
        if (Number(_hoursOpen) > 24) _hoursOpen = '24';

        setHoursOpen(_hoursOpen);
    };

    function handleChangeDdd(event: React.ChangeEvent<HTMLInputElement>) {
        const _ddd = event.target.value.replace(/\D/g, '');
        const formattedDdd = dddFormatter(_ddd)

        setDdd(formattedDdd);
    };

    function handleChangePhone(event: React.ChangeEvent<HTMLInputElement>) {
        const _phone = event.target.value.replace(/\D/g, '');

        setPhone(_phone);
    };

    function formatPhone(event: React.ChangeEvent<HTMLInputElement>) {
        let formattedPhone = phoneFormatter(event.target.value, false);

        setPhone(formattedPhone);
    };

    function handleChangeResponsible(event: React.ChangeEvent<HTMLInputElement>) {
        setResponsible(event.target.value);
    };

    function handleChangeOthers(event: React.ChangeEvent<HTMLInputElement>) {
        setOthers(event.target.value);
    };

    async function registerPharmacy(this: any, event: React.FormEvent) {
        event.preventDefault();

        const completedPhone = `${ddd}${phone}`.replace(/\D/g, '');
        const unformattedCnpj = cnpj.replace(/\D/g, '');

        try {
            const result = await api.post<PharmacyPostResults>('/pharmacy', {
                logo: 'drogaria-saopaulo.png',
                name,
                cnpj: unformattedCnpj,
                address,
                hours_open: Number(hoursOpen),
                responsible,
                phone: completedPhone,
                others,
            })

            if (result.data.id === 200) {
                navigate(`/pharmacy/${result.data.id}`);
            };
        } catch (err) {
            setError({
                message: String(err),
                status: true,
            });

            setTimeout(() => {
                setError({
                    message: '',
                    status: false,
                });
            }, 10000);
        };
    };

    return (
        <>
            {error.status
                ?
                <ErrorMessage message={error.message} />
                :
                null
            }
            <RegistrationForm>
                <header>
                    <h2>Cadastrar nova Fármacia</h2>
                </header>
                <section>
                    <div>
                        <p>Nome</p>
                        <RegistrationInput type="text" maxLength={50} value={name} onChange={handleChangeName} />
                    </div>
                    <div>
                        <p>Endereço</p>
                        <RegistrationInput type="text" maxLength={500} value={address} onChange={handleChangeAddress} />
                    </div>
                    <div className="short-div">
                        <p>CNPJ</p>
                        <RegistrationInput type="text" maxLength={18} value={cnpj} onChange={handleChangeCnpj} />
                        <p>Horas</p>
                        <RegistrationInput type="number" maxLength={2} min={1} max={24} value={hoursOpen} onChange={handleChangeHoursOpen} />
                    </div>
                    <div className="short-div-reverse">
                        <p>DDD</p>
                        <RegistrationInput type="text" maxLength={4} value={ddd} onChange={handleChangeDdd} />
                        <p>Tel/Cel</p>
                        <RegistrationInput type="text" maxLength={9} value={phone} onChange={handleChangePhone} onBlur={formatPhone} />
                    </div>
                    <div>
                        <p>Responsável</p>
                        <RegistrationInput type="text" maxLength={100} value={responsible} onChange={handleChangeResponsible} />
                    </div>
                    <div>
                        <p>Outros</p>
                        <RegistrationInput type="text" maxLength={500} value={others} onChange={handleChangeOthers} />
                    </div>
                    <Link to="/">
                        <button className="btn-cancel">Cancelar</button>
                    </Link>
                    <button className="btn-ok" onClick={registerPharmacy}>Salvar</button>
                </section>
            </RegistrationForm>
        </>
    );
};