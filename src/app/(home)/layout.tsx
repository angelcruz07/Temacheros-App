import '../globals.css'

export default function Layout({
	children
}: Readonly<{ children: React.ReactNode }>) {
	return <div className='bg-bg-deg text-white p-10'>{children}</div>
}
