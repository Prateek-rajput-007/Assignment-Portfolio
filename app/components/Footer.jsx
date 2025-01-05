import Link from 'next/link';
import { FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa';

const socialLinks = [
  {
    href: 'https://www.linkedin.com',
    icon: <FaLinkedin size={24} />,
    label: 'LinkedIn',
  },
  {
    href: 'https://www.facebook.com',
    icon: <FaFacebook size={24} />,
    label: 'Facebook',
  },
  {
    href: 'https://www.github.com',
    icon: <FaGithub size={24} />,
    label: 'GitHub',
  },
];

const renderSocialIcons = () =>
  socialLinks.map(({ href, icon, label }) => (
    <Link
      key={label}
      href={href}
      target="_blank"
      aria-label={label}
      className="text-white transition hover:text-[#A594FD]"
    >
      {icon}
    </Link>
  ));

function Footer() {
  return (
    <footer className="bg-[#0F1724] py-8 text-white">
      <div className="container px-4 mx-auto md:flex md:justify-between md:items-center">
        {/* Left Section */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-lg font-bold">Let’s Connect!</h2>
          <p className="mt-2 text-sm text-gray-400">
            Feel free to reach out to me via email or connect on my social platforms.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 md:justify-end">
          {renderSocialIcons()}
        </div>
      </div>

      <div className="mt-8 border-t border-gray-600">
        <div className="container px-4 py-4 mx-auto text-center md:flex md:justify-between md:items-center">
          {/* Contact Info */}
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">Email: <a href="mailto:abc123@gmail.com" className="hover:text-[#A594FD]">abc123@gmail.com</a></p>
          
          </div>

          {/* Footer Note */}
          <div>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Prateek. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
