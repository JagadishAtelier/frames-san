export default function GalleryCard({ image, title }) {
  return (
    <div className="group w-48 overflow-hidden rounded-2xl bg-white shadow-lg">
      {/* Image */}
      <div className="h-50 overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={title}
          className="h-full w-full cursor-pointer object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105"
        />
      </div>

      {/* Footer */}
      <div className="relative flex items-center justify-between px-4 py-3 overflow-hidden">
        {/* Title flip */}
        <div className="relative h-5 perspective">
          <p
            className="
              text-sm font-medium text-gray-800
              transition-transform duration-500 ease-in-out
            "
          >
            {title}
          </p>
        </div>

        {/* Arrow container */}
        <div className="relative w-4 h-4 overflow-hidden">
          {/* Initial arrow (opacity 50) */}
          <img
            src="https://cdn.prod.website-files.com/683d7e98e0d3f4e5915a5def/684c00ea0337841bb7c86ef8_Layer%207.svg"
            className="
              absolute inset-0
              h-4 w-4
              opacity-50
              transition-all duration-300
              group-hover:opacity-0 group-hover:translate-x-2
            "
          />

          {/* Hover arrow (from left, opacity 100) */}
          <img
            src="https://cdn.prod.website-files.com/683d7e98e0d3f4e5915a5def/684c00ea0337841bb7c86ef8_Layer%207.svg"
            className="
              absolute inset-0
              h-4 w-4
              opacity-0 -translate-x-3
              transition-all duration-300
              group-hover:opacity-100 group-hover:translate-x-0
            "
          />
        </div>
      </div>
    </div>
  );
}
