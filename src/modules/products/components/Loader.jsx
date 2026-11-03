const Loader = () => {
  return (
    <div className="flex min-h-[200px] w-full items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-indigo-100 border-t-indigo-600"></div>

        <p className="text-sm font-medium text-gray-500">
          Loading products...
        </p>
      </div>
    </div>
  );
};

export default Loader;