import React, { Fragment, useEffect, useState } from 'react'

import { Box, CircularProgress } from '@mui/material'

import { query, collection, getDocs, where, orderBy } from 'firebase/firestore'
import { db } from '../../firebase'

import { useDispatch } from 'react-redux'
import { set_shipments_list } from '../../store/shipmentSlice'

import ShipmentList from './ShipmentList/ShipmentList'
import ShipmentAdd from './ShopmentAdd/ShipmentAdd'

import { useUserAuth } from '../context/UserAuthContext'
import { Navigate, useNavigate } from 'react-router-dom'

const Home = () => {
	const [isLoaded, setIsLoaded] = useState(false)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { user, isLogin } = useUserAuth()
	let shipments = []

	useEffect(() => {
		const getShipments = async userid => {
			// const userid = await user.uid
			// const q = query(collection(db, 'shipments'))
			// const docs = getDocs(q)
			// console.log(docs)

			// const q = query(collection(db, 'shipments'), where('userUID', '==', user))
			const q = query(collection(db, 'shipments'), where('userUID', '==', userid))
			getDocs(q)
				.then(res => {
					res.forEach(doc => {
						// console.log(doc.data().name)
						shipments.push({
							id: doc.data().id,
							name: doc.data().name,
							number: doc.data().number,
							date: doc.data().date,
						})
					})
				})
				.then(() => {
					dispatch(set_shipments_list(shipments))
					setIsLoaded(true)
				})
		}

		if (user) {
			getShipments(user.uid)
		}
		if (user == null) {
			navigate('/account')
		}
		// console.log(shipments)
	}, [user])

	return (
		<Fragment>
			<Box display='flex' flexDirection='column' alignItems='center' m='1rem' p='1rem'>
				{isLoaded && <ShipmentList />}
				{isLoaded && <ShipmentAdd />}
				{!isLoaded && <CircularProgress />}
			</Box>
		</Fragment>
	)
}

export default Home