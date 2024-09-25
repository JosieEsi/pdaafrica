import React from "react";

const ThankYouPage = () => {
  return (
    <section className="min-h-screen">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8 text-center mt-40">
        <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
        <p className="mb-4">
          Your donation has been successfully processed. We appreciate your
          support in making a difference!
        </p>
        <a href="/pdaafrica" className="text-blue-500">
          Go back to Home
        </a>
      </div>
    </section>
  );
};

export default ThankYouPage;
