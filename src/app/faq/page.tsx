import { CardFaq } from '@/components'
import { DataFaq } from '@/data'

export default function Faq() {
	return (
		<section className='h-screen'>
			<h1 className='text-3xl font-bold text-color-mayus font-rubik-dirt'>
				Preguntas frecuentes
			</h1>
			<p>Preguntas mas frecuentes de la comunidad.</p>
			<article className='mt-5 flex gap-x-5 flex-col flex-wrap md:flex-row'>
				{DataFaq.map((questions) => (
					<div key={questions.id}>
						<CardFaq key={questions.id} {...questions} />
					</div>
				))}
			</article>
		</section>
	)
}
