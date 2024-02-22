import { HomeMenu } from '@/components'

export default function page() {
	return (
		<section className='flex flex-col p-5'>
			<h1 className='text-lg md:text-3xl font-bold text-center '>
				El Modo <span className='text-color-mayus'> Guerra</span>
			</h1>
			<article className='flex flex-col md:flex-row justify-between items-center md:gap-x-20 md:mt-14 mt-20'>
				<picture>
					<img
						src='https://res.cloudinary.com/dlklqucye/image/upload/v1708566644/eltemach.jpg'
						alt="Luis castilleja 'El Temach'"
						className='rounded-full md:w-96 md:h-full w-52 h-52'
					/>
					<h2 className='text-center p-5'>
						Luis Castilleja{' '}
						<span className='text-color-mayus font-bold'>"El Temach"</span>
					</h2>
				</picture>
				<div className='md:max-w-2/5 w-96 flex justify-center items-center flex-col'>
					<p className='text-lg font-bold md:text-2xl text-center'>
						Sumergete en el contenido del
						<span className='text-color-mayus'> Temach©</span>, enfocado al
						estudio y superación personal.
					</p>
					<HomeMenu />
				</div>
			</article>
		</section>
	)
}
