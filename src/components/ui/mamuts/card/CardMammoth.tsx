import { MammothCard } from '@/interfaces'
import { BadgeDate, ButtonMore } from '@/components'

export const CardMammoth = ({
	name,
	country,
	age,
	description,
	image,
	url
}: MammothCard) => {
	return (
		<div className='w-96 h-64 border bg-black/10 p-8 rounded-lg shadowborder-gray-700'>
			<div className='flex gap-x-5 items-center'>
				<picture>
					<img
						className='w-24 h-24 mb-3 rounded-full shadow-lg'
						src={`/assets/images/${image}`}
						alt='Bonnie image'
					/>
				</picture>
				<div className='flex flex-col gap-y-0'>
					<h5 className='text-xl font-medium text-white'>{name}</h5>
					<p className='text-sm '>
						🇲🇽{country} - {age} años
					</p>
				</div>
			</div>
			<div className='flex'>
				<p className='text-sm text-white'>
					<strong>Testimonio: </strong>
					{description}
				</p>
			</div>
			<div className='flex items-center justify-between '>
				<BadgeDate />
				<ButtonMore url={url} />
			</div>
		</div>
	)
}
