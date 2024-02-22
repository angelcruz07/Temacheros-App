// Icons Library
import {
	IconFolderOpen,
	IconHelpHexagon,
	IconHome,
	IconNorthStar,
	IconUsers
} from '@tabler/icons-react'
import Link from 'next/link'

export const HomeMenu = () => {
	return (
		<div className='flex justify-center flex-col gap-y-3 items-center mt-4'>
			{/* ? links to navbar */}
			<Link
				href='/start'
				className='bg-color-bg-component p-3 rounded-lg w-80 md:w-96 text-center cursor-pointer flex items-center justify-center'>
				<IconHome />
				Comenzar
			</Link>
			<Link
				href='/resources'
				className='bg-color-bg-component p-3 rounded-lg w-80 md:w-96 text-center cursor-pointer flex items-center justify-center'>
				<IconFolderOpen />
				Recursos
			</Link>
			<Link
				href='/community'
				className='bg-color-bg-component p-3 rounded-lg w-80 md:w-96 text-center cursor-pointer flex items-center justify-center'>
				<IconUsers />
				Comunidad
			</Link>
			<Link
				href='/mammoth'
				className='bg-color-bg-component p-3 rounded-lg w-80 md:w-96 text-center cursor-pointer flex items-center justify-center'>
				<IconNorthStar />
				Cabezas de mammut
			</Link>
			<Link
				href='/faq'
				className='bg-color-bg-component p-3 rounded-lg w-80 md:w-96 text-center cursor-pointer flex items-center justify-center'>
				<IconHelpHexagon />
				Preguntas frecuentes
			</Link>
		</div>
	)
}
export default HomeMenu
