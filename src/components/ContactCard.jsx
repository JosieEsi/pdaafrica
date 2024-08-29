const ContactCard = ({ imgURL, label, links }) => {
  return (
    <div className="flex items-center p-6 border border-orange rounded-lg shadow-md bg-white">
      <div className="mr-6">
        <img src={imgURL} alt={label} className="w-12 h-12" />
      </div>
      <div>
        <h3 className="font-bold text-lg text-black">{label}</h3>
        {links.map((link, index) => (
          <p key={index} className="text-gray-600 mt-2">
            {link.name.includes("Website") || link.name.includes("Email") ? (
              <a href={link.link} className="text-blue-600 underline">
                {link.link.replace(/^https?:\/\//, "")}
              </a>
            ) : (
              <a href={link.link} className="text-blue-600 underline">
                {link.name}
              </a>
            )}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ContactCard;
