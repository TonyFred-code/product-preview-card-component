export default function App() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4 py-10">
      <div className="bg-white flex flex-col md:flex-row rounded-xl max-w-xl">
        <div className="rounded-t-xl md:rounded-tr-none md:rounded-bl-xl">
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet="/images/image-product-desktop.jpg"
              sizes=""
            />
            <img
              className="w-full rounded-t-xl h-full md:rounded-tr-none md:rounded-bl-xl"
              src="/images/image-product-mobile.jpg"
              alt="Perfume product"
            />
          </picture>
        </div>
        <div className="p-5 space-y-5">
          <p className="uppercase tracking-[.3em] text-xs md:text-sm">
            Perfume
          </p>
          <h1 className="font-fraunces font-bold text-black text-3xl md:text-4xl">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <p className="flex gap-3">
            <span className="font-fraunces text-green-500 font-bold text-3xl">
              $149.99
            </span>
            <span className="line-through text-xs self-center"> $169.99</span>
          </p>
          <button
            type="button"
            className="text-white bg-green-500 hover:bg-green-700 font-medium rounded-lg flex items-center justify-center gap-2 py-3 w-full cursor-pointer"
          >
            <img src="/images/icon-cart.svg" alt="" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
