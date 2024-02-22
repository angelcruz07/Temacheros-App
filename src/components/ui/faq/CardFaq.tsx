'use client'

import { IconPlus } from '@tabler/icons-react'
import { Faq } from '@/interfaces'
import { useState } from 'react'

export const CardFaq = ({ question, response }: Faq) => {
	//State implementation to handle responses to the question upon clicking
	const [showQuestion, setShowQuestion] = useState(false)

	const handleShowQuestion = () => {
		console.log('click')
		setShowQuestion(!showQuestion)
	}

	return (
		<div className='p-5 bg-gradient-to-r from-neutral-600 to-neutral-900 rounded-lg mb-3 max-w-[360px]'>
			<div className='flex justify-between items-center gap-x-3 '>
				<p className='text-base max-w-96 font-semibold'>{question}</p>
				<button onClick={handleShowQuestion} className='cursor-pointer'>
					<IconPlus size={24} />
				</button>
			</div>
			{/* If showQuestion is not equal to false, then display the question; otherwise, do not display it */}
			<div
				className={`text-base max-w-96 transition-all duration-300 ${
					showQuestion ? 'opacity-100' : 'opacity-0'
				}`}>
				{showQuestion && <p className=''>{response}</p>}
			</div>
		</div>
	)
}
