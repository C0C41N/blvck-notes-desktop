import clsx from 'clsx'
import React from 'react'
import { useSelector } from 'react-redux'

import { IState } from '@/redux'

import List from './List'
import Note from './Note'

export default function Root() {
	const type = useSelector((state: IState) => state.type)

	return type === 'note' ? <Note /> : <List />
}
