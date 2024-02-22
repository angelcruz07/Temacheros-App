'use client'
import { useState } from 'react'
import { CardMammoth } from '@/components'
import { MammothData } from '@/data'

/**
 * Renders the Mammoth component.
 * This component displays a list of mammoth cards with a category filter.
 */
export default function Mammmoth() {
	/**
	 * State variable for the category filter.
	 */
	const [categoryFilter, setCategoryFilter] = useState('')

	/**
	 * Filters the MammothData array based on the category filter.
	 * If the category filter is empty, all mammoths are returned.
	 *
	 * @param {string} categoryFilter - The category filter to apply.
	 * @returns {Array<Mammoth>} - The filtered MammothData array.
	 */
	const filteredMammoth = MammothData.filter(
		(mammoth) => mammoth.category === categoryFilter || categoryFilter === ''
	)

	/**
	 * Filters the mammoth data based on the category filter.
	 * If no category filter is selected, all mammoths are displayed.
	 * @param category - The category to filter by.
	 */
	const handleCategoryFilter = (category: string) => {
		setCategoryFilter(category)
	}

	return (
		<section className='my-5 md:h-screen'>
			<h1 className='text-3xl font-bold text-color-mayus'>Cabezas de Mamut</h1>
			<p>
				Estas son las cabezas de mamut de la comunidad, exploralas y filtra por
				categoria
			</p>
			<article className='flex gap-x-5 mt-5'>
				{MammothData.map((category) => {
					const isActive = categoryFilter === category.category
					return (
						<button
							key={category.category}
							onClick={() => handleCategoryFilter(category.category)}
							className={`p-2 text-sm bg-gradient-to-r from-stone-400 to-neutral-700 rounded-lg cursor-pointer ${
								isActive
									? 'bg-gradient-to-r from-gray-50 to-slate-50 text-black'
									: ''
							}`}>
							{category.category}
						</button>
					)
				})}
			</article>
			<article className='flex flex-wrap gap-10 mt-10 justify-center items-center'>
				{filteredMammoth.map((mammoth) => (
					<CardMammoth key={mammoth.id} {...mammoth} />
				))}
			</article>
		</section>
	)
}
