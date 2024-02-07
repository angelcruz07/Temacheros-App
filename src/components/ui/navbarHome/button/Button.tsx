import Link from 'next/link'
import { ButtonInterface } from '@/interfaces/'

export const Button = ({ url, text }: ButtonInterface) => {
	return (
		<div className='bg-color-bg-component p-3 rounded-lg w-80 md:w-96 text-center'>
			<Link href={url}>{text}</Link>
		</div>
	)
}
