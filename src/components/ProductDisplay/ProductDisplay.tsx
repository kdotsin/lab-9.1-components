import type {ProductDisplayProps} from "../../types";

export default function ProductDisplay({ product, showDescription, showStockStatus, onAddToCart, children }: ProductDisplayProps) {
    return (
    <div className="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
            <img src={product.imageUrl} alt={product.name} className="h-48 w-full object-cover" />
            <div className="space-y-3 p-4 text-center">
                <h2 className="text-lg font-bold">{product.name}</h2>
                <h3 className="text-lg font-bold text-blue-500">{product.price}</h3>
                {showDescription && (
                    <span className="text-md text-gray-700">{product.description}</span>
                )}
                {showStockStatus && (
                    <span className="text-md text-green-400">{product.inStock}</span>
                )}
                <button
                    className="w-full rounded bg-[#1a5cff] py-2.5 text-center text-white hover:bg-[#1448cc]"
                    onClick={onAddToCart ? () => onAddToCart(product.id) : undefined}
                >
                    Add to Cart
                </button>
            </div>
            {children}
        </div>
    )
}