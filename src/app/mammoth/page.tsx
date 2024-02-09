import { BadgeMammothCategory, CardMammoth } from '@/components'
import { CategoryData, MammothHeadData } from '@/data'

export default function Mammmoth() {
	return (
		<section className='my-5 md:h-screen'>
			<h1 className='text-3xl font-bold'>Cabezas de Mamut</h1>
			<article className='flex gap-x-5 mt-5'>
				{CategoryData.map((category) => (
					<BadgeMammothCategory key={category.id} {...category} />
				))}
			</article>
			<article className='flex flex-wrap gap-10 mt-10 justify-center items-center'>
				{MammothHeadData.map((mammoth) => (
					<CardMammoth key={mammoth.id} {...mammoth} />
				))}
			</article>
		</section>
	)
}
