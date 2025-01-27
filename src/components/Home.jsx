const Home = () => {
  return (
    <div className="flex">
      <aside className="w-64 bg-white border-r border-gray-200 h-full">
        {/* <div className="flex items-center justify-center h-16 border-b border-gray-200">
                <img src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png" alt="Logo" className="h-8"/>
            </div> */}
        <nav className="mt-6">
          <div className="px-4 space-y-2">
            <a
              href="#"
              className="flex items-center px-4 py-2.5 text-sm font-medium text-custom bg-indigo-50 rounded-lg"
            >
              <i className="fas fa-chart-line w-5 h-5 mr-3"></i>
              Dashboard
            </a>{" "}
            <a
              href="#"
              className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              <i className="fas fa-calendar-alt w-5 h-5 mr-3"></i>
              Appointments
            </a>{" "}
            <a
              href="#"
              className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              <i className="fas fa-user-group w-5 h-5 mr-3"></i>
              Patients
            </a>{" "}
            <a
              href="#"
              className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              <i className="fas fa-file-invoice-dollar w-5 h-5 mr-3"></i>
              Billing
            </a>{" "}
            <a
              href="#"
              className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              <i className="fas fa-chart-bar w-5 h-5 mr-3"></i>
              Analytics
            </a>{" "}
            <a
              href="#"
              className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              <i className="fas fa-cog w-5 h-5 mr-3"></i>
              Settings
            </a>
          </div>
        </nav>
      </aside>

        <main className="p-8 ">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">
              Dashboard Overview
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              Welcome back, Dr. Smith
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Card Example */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">
                    Today&apos;s Appointments
                  </p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">24</p>
                </div>
                <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center">
                  <i className="fas fa-calendar text-custom text-xl"></i>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-green-500 text-sm font-medium">
                  +12.5%
                </span>
                <span className="text-gray-600 text-sm ml-1">
                  from yesterday
                </span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Operations</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">24</p>
                </div>
                <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center">
                  <i className="fas fa-calendar text-custom text-xl"></i>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-green-500 text-sm font-medium">
                  +12.5%
                </span>
                <span className="text-gray-600 text-sm ml-1">
                  from yesterday
                </span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">New Patients</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">24</p>
                </div>
                <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center">
                  <i className="fas fa-calendar text-custom text-xl"></i>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-green-500 text-sm font-medium">
                  +12.5%
                </span>
                <span className="text-gray-600 text-sm ml-1">
                  from yesterday
                </span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Earnings</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">24</p>
                </div>
                <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center">
                  <i className="fas fa-calendar text-custom text-xl"></i>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-green-500 text-sm font-medium">
                  +12.5%
                </span>
                <span className="text-gray-600 text-sm ml-1">
                  from yesterday
                </span>
              </div>
            </div>

            {/* Repeat similar card structure for other widgets */}
          </div>
          
        </main>
      </div>
  );
};

export default Home;
