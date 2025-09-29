import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="row-start-3 flex gap-4 flex-wrap items-center justify-center">
      <a
        className="image-link"
        href="https://github.com/kizuyoko/boilerplate-react-nextjs-typescript-tailwind/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Repository"
      >
        <Image
          aria-hidden
          src="/github.svg"
          alt="GitHub"
          width={30}
          height={30}
        /> 
        
      </a> 
      <a
        className="image-link"
        href="https://www.linkedin.com/in/kizuyoko/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
      >
        <Image
          aria-hidden
          src="/linkedin.svg"
          alt="LinkedIn"
          width={30}
          height={30}
        /> 
      </a>
    </footer>
  );
}