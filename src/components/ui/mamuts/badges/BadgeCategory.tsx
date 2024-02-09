import { BadgeCategory } from '@/interfaces'

export const BadgeMammothCategory = ({ category }: BadgeCategory) => {
	return <p className='p-2  bg-color-bg-component rounded-lg'>{category}</p>
}
