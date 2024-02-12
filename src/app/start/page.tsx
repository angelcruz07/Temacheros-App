import {
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandTiktok,
	IconBrandX
} from '@tabler/icons-react'

import Link from 'next/link'

export default function Start() {
	return (
		<section className='flex flex-col justify-between p-5'>
			<h1 className='text-3xl font-bold'>Guia de inicio</h1>
			<div className='flex justify-center items-center gap-x-10 flex-col md:flex-row'>
				<article className='flex justify-center items-center flex-col gap-y-5 mt-10'>
					<div className='flex gap-x-5'>
						<Link href='https://www.tiktok.com/@eltemach' target='_blank'>
							<IconBrandTiktok className='w-12 h-12' />
						</Link>
						<Link href='https://www.instagram.com/eltemach/' target='_blank'>
							<IconBrandFacebook className='w-12 h-12' />
						</Link>
						<Link href='instagram.com/eltemach/' target='_blank'>
							<IconBrandInstagram className='w-12 h-12' />
						</Link>
						<Link href='/' target='_blank'>
							<IconBrandX className='w-12 h-12' />
						</Link>
					</div>
					<picture>
						<img src='assets/images/temach-circle.webp ' alt='Temach' />
					</picture>
					<Link
						href='https://www.youtube.com/channel/UCG7pu4yj5lvVScl3HJZIYPw'
						target='_blank'
						className='bg-color-mayus p-5 color-white rounded-lg text-center cursor-pointer'>
						MARTES DE MODO GUERRA
					</Link>
				</article>
				{/* Section of information for the channel study guide */}
				<article>
					<h2 className='text-xl text-center text-color-mayus font-bold'>
						Esta es una guia de inicio en el camino del Temach
					</h2>
					{/* Recommended that this data comes from an API */}
					<div className='max-w-96'>
						<p>
							La comunidad del temach esta enfocada en ayudar a hombres de todo
							el mundo, colaborar y hacer comunidad asi que seras aceptado aqui
							y en donde el temach sea escuchado
						</p>
					</div>
				</article>
			</div>
		</section>
	)
}
