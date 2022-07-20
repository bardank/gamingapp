import React from "react";

const Footer = ({ id, ...props }) => {
  return (
    <footer id={id} className="p-2 md:p-6">
      <div className="bg-secondary">
        <h3 className="text-white">About</h3>
        <p className="text-white">
          Lorem ipsum Just me, myself and |, exploring the universe of
          unknownment. | have a heart of love and an interest of lorem ipsum and
          mauris neque quam blog. | want to share my world with you. Praesent
          tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta
          lectus vitae, ultricies congue gravida diam non fringilla. Praesent
          tincidunt sed tellus ut rutrum. Sed vitae juste condimentum, porta
          lectus vitae, ultricies congue gravida diam non fringilla
        </p>
      </div>
    </footer>
  );
};

export default Footer;
