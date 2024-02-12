import Link from 'next/link'

function NotFound() {
	return (
		<>
			<div>404 not found</div>
			<Link href='/'> Volver al inicio</Link>
		</>
	)
}
export default NotFound
