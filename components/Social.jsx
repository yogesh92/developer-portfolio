import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const socials = [
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/yogeshvijayan/" },
  { icon: <FaGithub />, path: "https://github.com/yogesh92" },
  { icon: <FaEnvelope />, path: "mailto:prabhuyogesh92@gmail.com" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.path}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default Social;
