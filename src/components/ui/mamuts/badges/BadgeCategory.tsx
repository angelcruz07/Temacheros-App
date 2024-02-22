import { BadgeCategory } from '@/interfaces'

export const BadgeMammothCategory = ({ category }: BadgeCategory) => {
	return (
		<p className='p-2 text-sm bg-gradient-to-r from-stone-400 to-neutral-700 rounded-lg cursor-pointer'>
			{category}
		</p>
	)
}
