import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <ul className="flex max-md:flex-col m-6 md:space-x-4 mt-20">
      {footerLinks.map((link) => (
        <li key={link} className="hover:underline cursor-pointer">
          {link}
        </li>
      ))}
    </ul>
  );
};

export default Footer;
