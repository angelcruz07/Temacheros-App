import { BadgeMammothCategory, CardMammoth } from '@/components'

// Data for mapping categories in mammoth heads
const CategoryData = [
	{
		id: 1,
		category: 'Negocios'
	},
	{
		id: 2,
		category: 'Desarrollo Personal'
	},
	{
		id: 3,
		category: 'No Fap'
	}
]

// Data for mapping mammoth card
const MammothHeadData = [
	{
		id: 1,
		name: 'Angel Cruz',
		age: '25',
		country: 'Mexico',
		description: 'A la edad de 16 años comence a...',
		image: 'perfil.webp',
		url: 'https://example.com'
	},
	{
		id: 2,
		name: 'Mammoth 2',
		age: '30',
		country: 'Country 2',
		description: 'Description 2',
		image: 'perfil.webp',
		url: 'https://example.com'
	},
	{
		id: 3,
		name: 'Mammoth 3',
		age: '28',
		country: 'Country 3',
		description: 'Description 3',
		image: 'perfil.webp',
		url: 'https://example.com'
	}
]

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
