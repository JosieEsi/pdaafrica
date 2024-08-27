const PopupForm = ({ label, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4">{label} Form</h2>
        <form>
          {/* Form fields go here */}
          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          />
          {/* Add more fields based on the label */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            Submit
          </button>
        </form>
        <button onClick={onClose} className="mt-4 text-red-500">
          Close
        </button>
      </div>
    </div>
  );
};

export default PopupForm;
