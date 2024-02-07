import { Footer, Button } from '@/components'

export default function page() {
	return (
		<>
			<section className='flex justify-center items-center gap-x-20 h-screen'>
				<h1> Temach communit </h1>
				<picture>
					<img
						src='/assets/images/Temach.webp'
						alt="Luis castilleja 'El Temach'"
					/>
				</picture>
				<Button />

				<article>
					<p className='font-bold'>
						Este es un sitio para la comunidad del{' '}
						<span className='text-color-red'>Temach©</span> enfocado al estudio
						y superación personal.
					</p>
				</article>
			</section>
			<Footer />
		</>
	)
}
