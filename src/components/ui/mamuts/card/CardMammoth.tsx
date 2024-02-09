export const CardMammoth = () => {
	return (
		<div className='w-full max-w-sm bg-white border  rounded-lg shadow dark:bg-gray-800 border-gray-700'>
			<div className='flex  items-center p-10'>
				<img
					className='w-24 h-24 mb-3 rounded-full shadow-lg'
					src='/docs/images/people/profile-picture-3.jpg'
					alt='Bonnie image'
				/>
				<h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
					Bonnie Green
				</h5>
				<span className='text-sm text-white'>Visual Designer</span>
			</div>
		</div>
	)
}
