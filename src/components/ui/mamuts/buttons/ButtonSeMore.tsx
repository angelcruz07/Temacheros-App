import Link from 'next/link'
import { ButtonSeMore } from '@/interfaces'

export const ButtonMore = ({ url }: ButtonSeMore) => {
	return (
		<Link
			className='py-2 px-10 bg-gradient-to-r from-stone-400 to-neutral-700 rounded text-center'
			href={url}>
			{' '}
			Ver mas...
		</Link>
	)
}
