import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

const Register = () => {
    const [formData, setFormData] = useState({
        typeDocument: '',
        documentNumber: '',
        names: '',
        lastNames: '',
        sexGender: '',
        telNumber: '',
        landline: '',
        email: '',
        municipality: '',
        adress: '',
        neighborhood: '',
        bornDate: '',
        ethnicity: '',
        disability: '',
        residentalStratum: '',
        lastEducationalLevel: '',
        accessDevices: false,
        typeDevices: '',
        internetConnectivity: false,
        affiliationRegime: '',
        username: '',
        password: '',
        rol: 'user' 
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await authService.register(formData);
            navigate('/login'); 
        } catch (error) {
            console.error('Error registering user', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Tipo de Documento:</label>
                <select name="typeDocument" value={formData.typeDocument} onChange={handleChange}>
                    <option value="">Seleccione...</option>
                    <option value="Cédula de ciudadanía">Cédula de Ciudadanía</option>
                    <option value="Tarjeta de identidad">Tarjeta de Identidad</option>
                    <option value="Cédula de extranjería">Cédula de Extranjería</option>
                </select>
            </div>
            <div>
                <label>Número de Documento:</label>
                <input type="text" name="documentNumber" value={formData.documentNumber} onChange={handleChange} />
            </div>
            <div>
                <label>Nombres:</label>
                <input type="text" name="names" value={formData.names} onChange={handleChange} />
            </div>
            <div>
                <label>Apellidos:</label>
                <input type="text" name="lastNames" value={formData.lastNames} onChange={handleChange} />
            </div>
            <div>
                <label>Sexo:</label>
                <select name="sexGender" value={formData.sexGender} onChange={handleChange}>
                    <option value="">Seleccione...</option>
                    <option value="Hombre">Hombre</option>
                    <option value="Mujer">Mujer</option>
                    <option value="Intersexual">Intersexual</option>
                    <option value="Indefinido">Indefinido</option>
                    <option value="Prefieren no decir">Prefieren no decir</option>
                </select>
            </div>
            <div>
                <label>Teléfono Celular:</label>
                <input type="text" name="telNumber" value={formData.telNumber} onChange={handleChange} />
            </div>
            <div>
                <label>Teléfono Fijo:</label>
                <input type="text" name="landline" value={formData.landline} onChange={handleChange} />
            </div>
            <div>
                <label>Correo Electrónico:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div>
                <label>Municipio:</label>
                <input type="text" name="municipality" value={formData.municipality} onChange={handleChange} />
            </div>
            <div>
                <label>Dirección:</label>
                <input type="text" name="adress" value={formData.adress} onChange={handleChange} />
            </div>
            <div>
                <label>Barrio/Vereda:</label>
                <input type="text" name="neighborhood" value={formData.neighborhood} onChange={handleChange} />
            </div>
            <div>
                <label>Fecha de Nacimiento:</label>
                <input type="date" name="bornDate" value={formData.bornDate} onChange={handleChange} />
            </div>
            <div>
                <label>Etnia:</label>
                <input type="text" name="ethnicity" value={formData.ethnicity} onChange={handleChange} />
            </div>
            <div>
                <label>Condición de Discapacidad:</label>
                <input type="text" name="disability" value={formData.disability} onChange={handleChange} />
            </div>
            <div>
                <label>Estrato de Residencia:</label>
                <input type="number" name="residentalStratum" value={formData.residentalStratum} onChange={handleChange} />
            </div>
            <div>
                <label>Último Nivel Educativo:</label>
                <select name="lastEducationalLevel" value={formData.lastEducationalLevel} onChange={handleChange}>
                    <option value="">Seleccione...</option>
                    <option value="Primaria">Primaria</option>
                    <option value="Secundaria">Secundaria</option>
                    <option value="Pregrado">Pregrado</option>
                    <option value="Posgrado">Posgrado</option>
                </select>
            </div>
            <div>
                <label>Acceso a Dispositivos:</label>
                <input type="checkbox" name="accessDevices" checked={formData.accessDevices} onChange={handleChange} />
            </div>
            {formData.accessDevices && (
                <div>
                    <label>Tipo de Dispositivo:</label>
                    <input type="text" name="typeDevices" value={formData.typeDevices} onChange={handleChange} />
                </div>
            )}
            <div>
                <label>Conectividad a Internet:</label>
                <input type="checkbox" name="internetConnectivity" checked={formData.internetConnectivity} onChange={handleChange} />
            </div>
            <div>
                <label>Régimen de Afiliación:</label>
                <select name="affiliationRegime" value={formData.affiliationRegime} onChange={handleChange}>
                    <option value="">Seleccione...</option>
                    <option value="Contributivo">Contributivo</option>
                    <option value="Subsidiado">Subsidiado</option>
                </select>
            </div>
            <div>
                <label>Nombre de Usuario:</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} />
            </div>
            <div>
                <label>Contraseña:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
            </div>
            <button type="submit">Registrar</button>
        </form>
    );
};

export default Register;
