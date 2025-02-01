// eslint-disable-next-line react/prop-types
const Card = ({ icon, title, value, change, changeColor, bgStyle }) => (
  <div className="bg-white shadow rounded-lg overflow-hidden">
  <div className="p-6">
    <div className="flex items-center space-x-4">
      {/* Icon Container */}
      <div className={`${bgStyle}`}>
        <i className={`fas ${icon} text-custom`}></i>
      </div>

      {/* Content */}
      <div className="w-0 flex-1">
        <dl className="space-y-1">
          <dt className="text-sm font-medium text-gray-500 truncate">
            {title}
          </dt>
          <dd className="flex items-baseline">
            <div className="text-2xl font-semibold text-gray-900">
              {value}
            </div>
            <div className={`ml-2 flex items-center text-sm font-semibold ${changeColor}`}>
              {change}
            </div>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</div>

  );

  export default Card