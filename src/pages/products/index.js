import CategoryFilters from '@/components/layouts/CategoryFilters';
import ProductList from '@/components/views/ProductList';
import ProductQuickview from '@/components/views/ProductQuickview';
import { useState } from 'react';

export default function Products() {
	const [open, setOpen] = useState(false);
	return (
		<>
			<CategoryFilters>
				<ProductList />
			</CategoryFilters>
			<ProductQuickview open={open} setOpen={setOpen} />
			{/* <button onClick={() => setOpen(true)} className="w-80 mt-50 bg-red-600">
				Open
			</button> */}
		</>
	);
}
