import React, { useRef } from 'react'

import { Button, Paper, TextField } from '@mui/material'

import { useUserAuth } from '../../context/UserAuthContext'
import { useNavigate } from 'react-router-dom'

const Login = props => {
	const inputEmailRef = useRef()
	const inputPasswordRef = useRef()

	const navigate = useNavigate()

	const { logIn, user } = useUserAuth()

	const buttonLoginHandler = async () => {
		const inputEmail = inputEmailRef.current.value
		const inputPassword = inputPasswordRef.current.value

		const res = await logIn(inputEmail, inputPassword)
		await console.log(res)
		if (user) {
			navigate('/home')
		}
		console.log(user)
	}

	return (
		<div>
			<div>
				<h1>Login</h1>
				<Paper
					sx={{
						display: 'flex',
						flexDirection: 'column',
						width: 600,
						padding: 10,
					}}>
					{/* <Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							width: 400,
							padding: 10,
							border: '1px dashed grey',
						}}> */}
					<TextField inputRef={inputEmailRef} id='email' label='Email' variant='outlined' sx={{ m: 2 }} />
					<TextField inputRef={inputPasswordRef} id='password' label='Password' variant='outlined' sx={{ m: 2 }} />
					<Button variant='contained' onClick={buttonLoginHandler} sx={{ m: 2 }}>
						Zaloguj
					</Button>
					{/* </Box> */}
				</Paper>
			</div>
		</div>
	)
}

export default Login