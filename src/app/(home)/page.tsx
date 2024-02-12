import { Button } from '@/components'
import { buttonsData } from '@/data'

export default function page() {
	return (
		<section className='flex flex-col p-5'>
			<h1 className='text-lg md:text-3xl font-bold text-center '>
				El Modo <span className='text-color-mayus'> Guerra</span>
			</h1>
			<article className='flex flex-col md:flex-row justify-center items-center md:gap-x-20 md:mt-14 mt-20'>
				<picture className='md:w-full md:h-full w-52 h-52'>
					<img
						src='/assets/images/Temach.webp'
						alt="Luis castilleja 'El Temach'"
					/>
					<h2 className='text-center p-5'>
						Luis Castilleja{' '}
						<span className='text-color-mayus font-bold'>"El Temach"</span>
					</h2>
				</picture>
				<div className='md:max-w-2/5 mt-20'>
					<p className='text-lg font-bold md:text-2xl text-center'>
						Sumergete en el contenido del
						<span className='text-color-mayus'> Temach©</span>, enfocado al
						estudio y superación personal.
					</p>
					<div className='flex justify-center flex-col gap-y-3 items-center mt-4'>
						{buttonsData.map((button) => (
							<Button key={button.text} url={button.url} text={button.text} />
						))}
					</div>
				</div>
			</article>
		</section>
	)
}
