import { Link } from 'react-router-dom';

export default function Sidebar() {
	return (
		<div className='sidebar'>
			<h2>เมนู</h2>
			<nav>
				<ul>
					{/* ลิงก์ไปยังหน้า คบ.1 - คบ.10 */}
					{Array.from({ length: 10 }, (_, i) => (
						<li key={`kb${i + 1}`}>
							<Link to={`/kb${i + 1}`}>คบ.{i + 1}</Link>
						</li>
					))}
					{/* ลิงก์ไปยังหน้า ค่า k 1-2 */}
					<li>
						<Link to='/k1'>ค่า k1</Link>
					</li>
					<li>
						<Link to='/k2'>ค่า k2</Link>
					</li>
					<li>
						<Link to='/171268'>171268</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}
