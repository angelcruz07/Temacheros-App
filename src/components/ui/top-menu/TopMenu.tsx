'use client'
//React imports
import { useState } from 'react'

// Next imports
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Icons imports
import { IconMenu2, IconX } from '@tabler/icons-react'

export const TopMenu = () => {
	// We used a 'useState' hook to check when the user clicks on the menu so that we can expand the mobile navbar.
	const [isOpenMenu, setIsOpenMenu] = useState(false)

	// The 'usePathname' was used to display the links, but since the links were already present as buttons on the '/' (home) page, we needed to remove them from there. So, a condition was used.
	const path = usePathname()

	return (
		<div>
			<div className='flex justify-between pt-6 '>
				<div>
					<Link href='/'>
						<Image
							src={'/assets/images/logo.webp'}
							alt='Logo Temach'
							width={45}
							height={45}
						/>
					</Link>
				</div>
				{/* A condition was implemented to show links in the navbar only if we are on a page other than '/' (home) */}
				{path === '/' ? null : (
					<nav className='hidden md:flex gap-8 font-light items-center'>
						<Link href={'/'}>
							<span>Inicio</span>
						</Link>
						<Link href={'/directory'}>
							<span>Comunidad</span>
						</Link>
						<Link href={'/sources'}>
							<span>Recursos</span>
						</Link>
						<Link href={'/faq'}>
							<span>Preguntas frecuentes</span>
						</Link>
						<Link href={'/mammoth'}>
							<span>Cabezas de mamut</span>
						</Link>
					</nav>
				)}

				<div className='flex gap-2 '>
					<Image
						src={'/assets/images/mammoth.webp'}
						alt='Cabeza de mamut'
						width={50}
						height={50}
					/>
					{/* Every time the user presses the button, the state changes. */}
					<button onClick={() => setIsOpenMenu(true)} className='md:hidden'>
						<IconMenu2 size={40} />
					</button>
				</div>
			</div>

			{/* Mobile navbar */}

			<nav
				// Here the concept of 'conditional classes' is used, where depending on whether a state is true or false, we apply one condition or another.
				className={
					isOpenMenu
						? 'fixed md:hidden flex flex-col gap-3 right-0 top-0 bg-black min-h-screen w-1/2 py-4 px-4 transition-all ease-in duration-300'
						: 'fixed -right-[1000px]'
				}>
				{/* Every time the user presses the button, the state changes. */}
				<button onClick={() => setIsOpenMenu(false)}>
					<IconX size={40} className='' />
				</button>
				<Link href={'/'}>
					<span>Inicio</span>
				</Link>
				<Link href={'/community'}>
					<span>Comunidad</span>
				</Link>
				<Link href={'/sources'}>
					<span>Recursos</span>
				</Link>
				<Link href={'/faq'}>
					<span>Preguntas frecuentes</span>
				</Link>
				<Link href={'/mammoth'}>
					<span>Cabezas de mamut</span>
				</Link>
			</nav>
		</div>
	)
}
