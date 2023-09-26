import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function FormSignUp() {
    return <form>
        <TextField
            id="name"
            label="Nombre"
            variant="outlined"
            fullWidth
            margin='normal'
        />
        <TextField
            id="lastName"
            label="Apellidos"
            variant="outlined"
            fullWidth
            margin='normal'
        />
        <TextField
            id="email"
            label="Email"
            variant="outlined"
            fullWidth
            margin='normal'
        />

        {/* /Se ocupa FormGrup para que se pueda conectar el switch con el label */}
        <FormGroup>
            <FormControlLabel
                control={<Switch
                    defaultChecked
                />} label="Promociones" />
            <FormControlLabel
                control={<Switch
                    defaultChecked
                />} label="novedades" />
        </FormGroup>
        <Button variant="contained" color="success">Registrarse</Button>
    </form>
}

export default FormSignUp