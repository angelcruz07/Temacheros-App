import {
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandTiktok,
	IconBrandX
} from '@tabler/icons-react'

import Link from 'next/link'

/**
 * Renders the Start component.
 * This component displays a guide for getting started.
 */
export default function Start() {
	return (
		<section className='flex flex-col p-5'>
			<h1 className='text-3xl font-bold text-color-mayus'>
				El camino del modo guerra
			</h1>
			<p>¿Que es el modo guerra? descubrelo en esta seccion</p>
			<div className='flex gap-x-5 flex-col md:flex-row justify-center  mt-16'>
				<article className='flex justify-center items-center flex-col gap-y-5 w-96'>
					<h2 className='font-semibold  text-xl'>Cuentas oficiales</h2>
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
				<article className='2xl:ml-32 max-w-[600px]'>
					<h2 className='text-3xl text-center text-color-mayus font-semibold'>
						Esta es una guia para comenzar tu proceso
					</h2>
					{/* Recommended that this data comes from an API */}
					<p className='font-light '>
						La comunidad del temach esta enfocada en ayudar a hombres de todo el
						mundo, colaborar y hacer comunidad asi que seras aceptado aqui y en
						donde el temach sea escuchado
					</p>
					<h3 className='text-2xl '>Los compas de hierro</h3>
					<p className='font-light'>
						Un poco de historia, los compas de hierro es un grupo que se formo a
						partir de la reunion de hombres con proposito de ayudar a otros
						hombres y asi mismo formar una comunidad de hombres con valores y
						principios, a dia de hoy los compas de hierro son una muestra de
						diciplina, respeto y amor.
					</p>
					<h3 className='text-2xl'>Ideologia</h3>
					<p className='font-light'>
						Necesitamos gente de nuestra edad para convivir, necesitamos
						convivir con gente de nuestra edad para motivarnos, para impulsarnos
						para exigirnos. Necesitamos ayudar a la comunidad, necesitamos
						recibir, y necesitamos darle. Gente más joven necesita que le
						enseñe, que necesita que la guíe con lo que yo sé hacer, y si no la
						puedo ayudar entonces la canalizo, si yo no puedo resolver el
						problema lo canalizo porque sé con quién dentro de la comunidad,
						para eso son los compas de hierro. Mi sueño es poder generar una
						comunidad que se sostenga a sí misma -{' '}
						<span className='text-color-mayus'>El Temach</span>
					</p>
				</article>
			</div>
		</section>
	)
}
