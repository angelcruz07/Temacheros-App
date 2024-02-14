import { CardFaq } from '@/components'
import { DataFaq } from '@/data'

export default function Faq() {
	return (
		<section className='h-screen'>
			<h1 className='text-3xl font-bold'>Preguntas frecuentes</h1>
			<article className='mt-5 flex gap-x-5 flex-col md:flex-row'>
				{DataFaq.map((questions) => (
					<CardFaq key={questions.id} {...questions} />
				))}
			</article>
		</section>
	)
}
