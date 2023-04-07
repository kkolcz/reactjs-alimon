import React from 'react'

import { AppBar, Button, styled, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'

import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice'

import { useUserAuth } from '../../../context/UserAuthContext'
import { useNavigate } from 'react-router-dom'

const StyledToolbar = styled(Toolbar)({
	display: 'flex',
	justifyContent: 'space-between',
})

const Navbar = props => {
	const { logOut } = useUserAuth()
	const navigate = useNavigate()

	const logoutHandler = () => {
		logOut()
	}

	const navBarClickHabdler = () => {
		navigate('/')
	}

	return (
		<AppBar position='static'>
			<StyledToolbar>
				<Box onClick={navBarClickHabdler} sx={{ cursor: 'pointer' }} display='flex' alignItems='center' gap={2}>
					<LocalPostOfficeIcon />
					<Typography variant='h6'>AliMon - Monitoring Paczek</Typography>
				</Box>
				<Box>
					<Button variant='contained' color='secondary' onClick={logoutHandler}>
						Wyloguj
					</Button>
				</Box>
			</StyledToolbar>
		</AppBar>
	)
}

export default Navbar
