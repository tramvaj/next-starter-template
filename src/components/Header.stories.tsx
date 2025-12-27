import React from 'react'
import Header from './Header'

export default { title: 'Header', component: Header }

export const Default = () => <Header />

export const Custom = () => <Header items={[{ label: 'X', href: '/x' }, { label: 'Y', href: '/y' }]} />
