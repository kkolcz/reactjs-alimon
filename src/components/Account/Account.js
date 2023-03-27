import React, { useState } from 'react'

import { Button, Box, Card } from '@mui/material'

import Login from './Login/Login'
import Register from './Register/Register'

const Account = props => {
	const [isRegister, setIsRegister] = useState(false)

	const buttonLoginHandler = () => {}

	const buttonRegisterHandler = () => {
		setIsRegister(!isRegister)
	}
	return (
		<Box display='flex' flexDirection='column' alignItems='center' m='1rem' p='1rem'>
			<Box>
				<Card>
					{!isRegister && <Login onLogin={props.onLogin} />}
					{isRegister && <Register />}
				</Card>
				<Card
					style={{
						display: 'flex',
						justifyContent: 'center',
						marginTop: '1rem',
					}}>
					<Button variant='contained' onClick={buttonRegisterHandler} sx={{ m: 2 }}>
						{!isRegister ? 'Zarejestruj nowe konto' : 'Wróć do logowania'}
					</Button>
				</Card>
			</Box>
		</Box>
	)
}

export default Account
